<template>
    <div class="row">
        <div class="col s12 m12 white-text margen-abajo">
            <SaludoComponent></SaludoComponent>
        </div>
        <div class="col s8 m4 center push-s2">
            <img class="circle responsive-img" src="../assets/foto.jpg">
        </div>
        <div class="col s12 m8">
            <PresentacionComponent></PresentacionComponent>
        </div>
    </div>
</template>
<script>
import SaludoComponent from '../components/SaludoComponent.vue'
import PresentacionComponent from '../components/PresentacionComponent.vue'
export default {
    name: 'PersonalView',
    components: {
        SaludoComponent,
        PresentacionComponent
    },
}
</script>

<style scoped></style>