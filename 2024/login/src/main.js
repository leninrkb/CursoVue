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




const dochange = (nums, c) => {
    let tempnum = nums[c]
    nums[c] = nums[c + 1]
    nums[c + 1] = tempnum
}

const sortnums = (nums) => {
        let c = 0
        let add = 1
        let last_c = 0
        while (c < nums.length - 1) {
            if (nums[c] > nums[c + 1]) {
                dochange(nums, c)
                add = -1
                last_c = c < last_c ? last_c : c
            } else {
                c = c < last_c ? last_c : c
                add = 1
            }
            c += add
            c = c < 0 ? 0 : c
        }
    }