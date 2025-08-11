export default async function ({ store, route }) {

    if (route.name === 'index') {
        localStorage.removeItem('offerParams');
        localStorage.removeItem('hotelSearchParams');
        localStorage.removeItem('carSearchParams');
    }
    else {
        // Fetching Search Params from Local Storage
        let data = JSON.parse(localStorage.getItem("offerParams"));
        if (data) {
            if (data.type !== 'multi') {
                data["departureDate"] = new Date(data["departureDate"]);
                if (data.type === "round") {
                    data["returnDate"] = new Date(data["returnDate"]);
                }
            } else {
                for (var destination of data.destinations) {
                    destination.departureDate = new Date(destination.departureDate);
                }
            }
            store.commit("forAll/setSearchParams", data);
        }

        let hotelSearchData = JSON.parse(localStorage.getItem("hotelSearchParams"));
        if (hotelSearchData) {
            hotelSearchData["start_date"] = new Date(hotelSearchData["start_date"]);
            hotelSearchData["end_date"] = new Date(hotelSearchData["end_date"]);
            store.commit("forAll/setHotelSearchParams", hotelSearchData);
        }

        let carSearch = JSON.parse(localStorage.getItem("carSearchParams"));
        if (carSearch) {
            carSearch["departureDate"] = new Date(carSearch["departureDate"]);
            carSearch["returnDate"] = new Date(carSearch["returnDate"]);
            store.commit("forAll/setCarSearchParams", carSearch);
        }
    }
}


