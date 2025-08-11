import dotenv from "dotenv";

let env = '.env.dev';
if (process.env.NODE_ENV === 'production') {
    env = '.env.build';
}
dotenv.config({ path: env });

export default {
    server: {
        host: process.env.APP_HOST || 'localhost',
        // host: '0.0.0.0',
        port: process.env.APP_PORT || 3000,
    },

    publicRuntimeConfig: {
        ...process.env
    },

    ssr:false,
    /*
     ** Headers of the page
     */
    head: {
        title: 'GALA TRAVEL',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'stylesheet', href: 'https://cdn.materialdesignicons.com/3.2.89/css/materialdesignicons.min.css' },
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Signika&display=swap' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Questrial&display=swap' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Calligraffitti&display=swap' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet' },


            // { rel: 'stylesheet', href: 'href="https://unpkg.com/buefy/dist/buefy.min.css' },
            { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css' },
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#1c4c93',
        height: '5px',
        continuous: true
      },
    /*
     ** Global CSS
     */
    css: [
        "@/assets/app.scss",
        "@fonts/material-icon/css/material-design-iconic-font.min.css"
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '@/plugins/axios.js',
        '@/plugins/plugin.js'
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://bootstrap-vue.js.org
        'bootstrap-vue/nuxt',
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        // Doc: https://github.com/nuxt-community/dotenv-module
        // '@nuxtjs/dotenv',
        '@nuxtjs/auth-next',
        'nuxt-validate',
        // 'nuxt-buefy'
    ],
    auth: {
        // See https://github.com/nuxt-community/auth-module#options

        resetOnError: true,
        watchLoggedIn: false,
        strategies: {
            api: {
                scheme: '~/schemes/api',
                user: {
                    property: 'data',
                    autoFetch: false
                },
                endpoints: {
                    login: {
                        url: '/user/login',
                    },
                    logout: {
                        url: '/user/logout',
                    },
                    user: {
                        url: '/user/authenticate',
                    }
                },
            },
            facebook: {
                endpoints: {
                    userInfo: 'https://graph.facebook.com/v2.12/me?fields=about,email,first_name,last_name,name,picture{url}'
                },
                clientId: '',
                scope: ['public_profile', 'email']
            },
            google: {
                clientId: '',
        codeChallengeMethod: "",
        responseType: "id_token token",
            },
        },
    },
    /*
     ** Router configuration
     */
    router: {
        middleware: ["getData","DataFromLocalStorage"]
    },
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {
        progress: false
    },
    target: 'static',
    // router: {
    //     mode: 'hash',
    //     base: '/creativetravels/t6/'
    // },
    /*
     ** Build configuration
     */
    build: {
        babel:{
            plugins: [
              ['@babel/plugin-proposal-private-methods', { loose: true }]
            ]
        },
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}
