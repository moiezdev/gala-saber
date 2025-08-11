export default {
    namespaced: true,
    state: () => {
        return {
            module: 'news',
            siteNews: null,
        }
    },

    mutations: {
        setNews(state, value) {
            state.siteNews = value.data
        },
    },

    getters: {
        getNews: (state) => {
            if (state.siteNews) {
                return state.siteNews;
            }
            // else {
            //     return state.module;
            // }
        },
    }
}

