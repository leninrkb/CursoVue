import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    state: () => {
        return {
            count: 0
        }
    },
    getters: {
        times2: (state) => state.count * 2,
    },
    actions: { // arrow functions are not allowed here
        increment(value) {
            this.count += value
        },
    },
})
