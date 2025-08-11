export default {
    namespaced: true,
    state: () => {
        return {
            PakagesCountry: null,
            PakageCountry: null,
            Pakages: null,
            PakageDetails: null,
        }
    },

    mutations: {
        setPakagesCountry(state, value) {
            state.PakagesCountry = value.data
        },
        setPakageCountry(state, value) {
            state.PakageCountry = value
        },
        setPakages(state, value) {
            state.Pakages = value.data
        },
        setPakageDetail(state, value) {
            state.PakageDetails = value
        },
    },

    getters: {

        getPakagesCountry: (state) => {
            if (state.PakagesCountry) {
                return state.PakagesCountry;
            }
        },
        getPakageDetail: (state) => {
            if (state.PakageDetails) {
                return state.PakageDetails;
            }
        },
        getPakageCountry(state) {
            if (state.PakageCountry) {
                return state.PakageCountry;
            }
        },
        getPakages(state) {
            if (state.Pakages) {
                return state.Pakages;
            }
        },
       
    }
}

