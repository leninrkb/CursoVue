import { createApp } from 'vue'
import App from './App.vue'
import 'material-icons/iconfont/material-icons.css'
import 'materialize-css/dist/css/materialize.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './styles.css'

createApp(App).use(VueAxios,axios).mount('#app')
