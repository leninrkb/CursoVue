import { createApp } from 'vue'
import App from './App.vue'
import 'material-icons/iconfont/material-icons.css'
import 'materialize-css/dist/css/materialize.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './styles.css'

axios.defaults.baseURL = 'http://127.0.0.1:5000'

createApp(App).use(VueAxios,axios).mount('#app')
