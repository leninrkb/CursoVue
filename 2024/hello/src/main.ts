import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.directive('custom-font',{
    beforeMount: (el, binding) => {
        let size = 12
        if (binding.modifiers.sm){
            size = 14
        }else if(binding.modifiers.md){
            size = 10
        }
        el.style.fontSize = size
    }
})

app.directive('font-size', {
    beforeMount: (el) => {
        el.style.fontSize = '1.5em'
    }
})
// app.directive('custom-size',{
//     beforeMount: (el, binding) => {
//         el.style.fontSize = binding.value + 'em'
//     }
// })
app.directive('custom-size',{
    beforeMount: (el, binding) => {
        let size = 1
        switch (binding.arg) {
            case 'sm':
                size = 1.1
                break;
            case 'md':
                size = 1.3
                break
            default:
                break;
        }
        el.style.fontSize = size + 'em'
    }
})

        


app.mount('#app')
