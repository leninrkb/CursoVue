<template>
  <div id="margen-nav" class="blue-grey darken-3">
    <nav class="cyan darken-1">
      <div class="row">
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
      </div>
    </nav>
  </div>

  <div id="id_container" class="container">
    <div class="row">
      <div id="sobremi">
        <PersonalView></PersonalView>
      </div>
      <div id="experiencia">
        <ExperienciaView></ExperienciaView>
      </div>
      <div id="proyectos">
        <RegistroDelPersonal></RegistroDelPersonal>
      </div>
    </div>
  </div>
</template>

<script>
import M from 'materialize-css';
import PersonalView from './views/PersonalView.vue';
import ExperienciaView from './views/ExperienciaView.vue';
import RegistroDelPersonal from './components/RegistroDelPersonal.vue';

export default {
  name: 'App',
  components: {
    PersonalView,
    ExperienciaView,
    RegistroDelPersonal
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
}

body {
  /*blue-grey darken-3*/
  background-color: #37474f;
}

nav {
  border-radius: 10px;
}

#margen-nav {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  padding: 15px;
  margin-bottom: 155px;
}

#id_container{
  margin-top: 150px;
}

.redondeado{
  border-radius: 40px;
}
</style>
