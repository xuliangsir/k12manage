export default {
    install(Vue, options) {
        // Vue.prototype.$getApi = process.env.NODE_ENV === 'build' ? 'http://q.socap1.com:60405' : 'http://10.16.40.94:60405'
        // Vue.prototype.$getApi = 'http://q.socap1.com:60405'
        Vue.prototype.$getApi = 'http://10.16.26.37:8080'
    }
}