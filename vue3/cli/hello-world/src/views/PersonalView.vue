<template>
    <div class="row">
        <div id="presentacion" class="col m10 white-text">
            <SaludoComponent></SaludoComponent>
        </div>
        <div class="margenes">
            <div class="col m8">
                <PresentacionComponent></PresentacionComponent>
            </div>
            <div class="col m4">
                <img width="65%" class="circle responsive-img" src="../assets/foto.jpg">
            </div>
        </div>
    </div>
    <div class="row">
        
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

<style scoped>
.margenes {
    padding: 5%;
}

#presentacion {
    margin-top: 1em;
    margin-left: 3em;
    margin-bottom: 4em;
}
</style>