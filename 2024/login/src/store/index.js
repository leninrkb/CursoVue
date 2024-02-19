import { createStore } from 'vuex'

export default createStore({
    state: {
        counter: 1
    },
    getters: {
        // permite acceder al estado, parecido a un valor computado
        times2(state) {
            return state.counter * 2
        }
    },
    mutations: {
        // o puede  modificar el estado de forma asincrona
        setCounter(state, value) {
            state.counter = value
        }
    },
    actions: {
        // modificar el estado de forma asincrona

    },
    modules: {
        // me permite subdividir el store

    }
})
