import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDlw4EUrEx45Jf6z7LJf8w_tgDITWB0XxM",
    authDomain: "login-with-vue.firebaseapp.com",
    projectId: "login-with-vue",
    storageBucket: "login-with-vue.appspot.com",
    messagingSenderId: "700677542684",
    appId: "1:700677542684:web:e173d5f5120fd7f916e0d9"
};

initializeApp(firebaseConfig);
createApp(App).use(router).mount('#app')
