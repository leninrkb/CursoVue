<template>
  <div class="container">
    <div class="row">
        <nav class="cyan" >
        <div class="col s12 m4">
          <h5>Mi portafolio</h5>
        </div>
        <div class="col s12 m8">
          <ul class="tabs tabs-transparent" ref="tabs">
            <li class="tab"><a href="#sobremi">Sobre Mi</a></li>
            <li class="tab"><a href="#experiencia">Experiencia</a></li>
            <li class="tab"><a href="#proyectos">Proyectos</a></li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="row">
      <div id="sobremi" class="col s12">
        <PersonalView></PersonalView>
      </div>
      <div id="experiencia" class="col s12">Test 2</div>
      <div id="proyectos" class="col s12">Test 2</div>
    </div>
  </div>
</template>

<script>
import M from 'materialize-css';
import PersonalView from './views/PersonalView.vue';

export default {
  name: 'App',
  components: {
    PersonalView
  },
  mounted() {
    // Obtener la referencia al elemento ul.tabs
    const tabs = this.$refs.tabs;
    // Inicializar las tabs
    M.Tabs.init(tabs, {});
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background-color: #2c3e50;
}

nav{
  border-radius: 10px;
}
</style>
