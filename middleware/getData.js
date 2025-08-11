import data from '@/assets/Data.json'
export default async function ({ store }) {

    // Getting complete Data (Flights, Airports, Hotels)

            let allData = data;
            store.commit('data/setcompleteData', allData);

            allData['countriesBy2Code'] = _.keyBy(allData.countries, o => o.alpha_2_code);
            allData['countriesBy3Code'] = _.keyBy(allData.countries, o => o.alpha_3_code);
            store.commit('forAll/setGlobalData', allData);

            store.commit('forAll/setMeals', allData.meals);
            store.commit('forAll/setAirlines', allData.airlines);
            store.commit('forAll/setAirportsByKey', _.keyBy(allData.airports, o => o.iata));
            store.commit('forAll/setAirlinesByKey', _.keyBy(allData.airlines, o => o.iata));
}


