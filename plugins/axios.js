export default function ({ $axios, $config: { API_BASE_URL } }, inject) {
    console.log('API_BASE_URL',API_BASE_URL)
    const api = $axios.create();
    api.setBaseURL(API_BASE_URL);
    inject('api', api);
    // $axios.setBaseURL(API_BASE_URL);
    // $axios.interceptors.request.use(config => {
    //     return config;
    // }, error => Promise.reject(error));

    // // axios response
    // $axios.interceptors.response.use(response => {
    //     return response
    // }, err => {
    //     return Promise.reject(err);
    // });

}