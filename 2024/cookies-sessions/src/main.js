import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueCookies } from 'vue-cookies'

createApp(App).use(router).use(VueCookies, {
    expires: '1d'
}).mount('#app')

// $cookies.set('auth',1000)
// $cookies.get('auth')
// $cookies.isKey('auth')
// $cookies.keys()
