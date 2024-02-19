<template>
    <h3>Vuex counter</h3>
    <div>
        <h5>{{ counter }} * 2: {{ times2 }} </h5>
        <IconButton @click="increment">increment</IconButton>
    </div>
</template>

<!-- <script>
import { defineComponent } from 'vue'
import IconButton from '@/components/IconButton.vue';
import store from '@/store';

export default defineComponent({
    name: 'store-view',
    components: {
        IconButton
    },
    computed: {
        counter() {
            // todo: read counter from store
            return store.state.counter
        },
        times2() {
            // todo: read times2 from store
            return store.getters.times2
        }
    },
    methods: {
        increment() {
            // todo: increment store's counter
            store.commit('setCounter', this.counter + 1)
        }
    }

})
</script> -->

<!-- <script>
import IconButton from '@/components/IconButton.vue';
import { defineComponent } from 'vue';
import { mapMutations, mapState, mapGetters } from 'vuex';

export default defineComponent({
    name: 'store-view',
    components: {
        IconButton
    },
    computed: {
        ...mapState(['counter']),
        ...mapGetters(['times2'])
    },
    methods: {
        ...mapMutations(['setCounter']),
        increment() {
            this.setCounter(this.counter + 1)
        }
    },
})
</script> -->

<!-- <script>
import IconButton from '@/components/IconButton.vue'
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
    name: 'store-view',
    components: { IconButton },
    setup() {
        const store = useStore()
        const counter = computed(() => {
            return store.state.counter
        })
        const times2 = computed(() => store.getters.times2)
        const increment = () => {
            store.commit('setCounter', counter.value + 1)
        }
        return { increment, counter, times2 }
    }
})
</script> -->

<script setup>
import IconButton from '@/components/IconButton.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const counter = computed(() => store.state.counter)
const times2 = computed(() => store.getters.times2)
const increment = () => {
    store.commit('setCounter', counter.value + 1)
}
</script>

<style scoped></style>