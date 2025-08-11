export const state = () => ({

    loggedIn: false,
    globalData: {
        hotelamenities: {},
        hotelcategories: {},
        roomamenities: {},
        hotelmeals: {},
        countries: [],
        countriesBy2Code: {},
        countriesBy3Code: {},
    },
    meals: [],
    searchParams: null,
    hotelSearchParams: null,
    carSearchParams: null,
    airports: [],
    airlinesByKey: {},
    airlines: [],
    airlinesByKey: {},
    booking: null,
    cache: false,
})

export const mutations = {
    setLoggedIn(state, value) { state.loggedIn = value; },
    setGlobalData: (state, value) => state.globalData = value,
    setSearchParams: (state, value) => state.searchParams = value,
    setHotelSearchParams: (state, value) => state.hotelSearchParams = value,
    setCarSearchParams: (state, value) => state.carSearchParams = value,
    setAirports: (state, value) => state.airports = value,
    setAirportsByKey: (state, value) => state.airportsByKey = value,
    setAirlines: (state, value) => state.airlines = value,
    setAirlinesByKey: (state, value) => state.airlinesByKey = value,
    setBooking: (state, value) => state.booking = value,
    setMeals: (state, value) => state.meals = value
}

export const getters = {
    getSearchParams: state => state.searchParams,
    getHotelSearchParams: state => state.hotelSearchParams,
    getCarSearchParams: state => state.carSearchParams,
}
