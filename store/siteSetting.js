export default {
    namespaced: true,
    state: () => {
        return {
            siteSetting: null,
            siteLogos: null,
            facebookDetails: null,
            feedback: null,
            faqs: null,
            seoSetting: null
        }
    },

    mutations: {
        setSetting(state, value) {
            state.siteSetting = value.data
        },
        setfacebookDetails(state, value){
            state.facebookDetails = value;
        },
        setLogos(state, value) {
            state.siteLogos = value.data
        },
        setFeedback(state, value) {
            state.feedback = value
        },
        setFAQS(state, value) {
            state.faqs = value
        }, 
        setSEO(state, value) {
            state.seoSetting = value
        }
    },

    getters: {

        getSetting: (state) => {
            if (state.siteSetting) {
                return state.siteSetting;
            }
        },
        getfacebookDetails: (state) => {
            if (state.facebookDetails) {
                return state.facebookDetails;
            }
        },
        getLogos: (state) => {
            if (state.siteLogos) {
                return state.siteLogos;
            }
        },
        getFeedback: (state) => {
            if (state.feedback) {
                return state.feedback;
            }
        },
        getFAQS: (state) => {
            if (state.faqs) {
                return state.faqs;
            }
        },
        getSEO:(state)=>{
            if(state.seoSetting){
                return state.seoSetting
            }
        }
    }
}

