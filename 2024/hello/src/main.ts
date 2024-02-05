import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.directive('font-size', {
    beforeMount: (el) => {
        el.style.fontSize = '1.5em'
    }
})
app.directive('custom-size',{
    beforeMount: (el, binding) => {
        el.style.fontSize = binding.value + 'em'
    }
})
app.mount('#app')
