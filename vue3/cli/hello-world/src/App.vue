<template>
  <div id="all" class="grey darken-4">

    <nav class="nav-extended cyan darken-3">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo right">Mi perfil_</a>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <ul id="nav-mobile" class="lefy hide-on-med-and-down">
          <li><a href="#">Github</a></li>
          <li><a href="#">Linkedin</a></li>
          <li><a href="#">Facebook</a></li>
        </ul>
      </div>
      <div class="nav-content">
        <ul class="tabs tabs-transparent" ref="tabs">
          <li class="tab"><a href="#personal">Personal</a></li>
          <li class="tab"><a href="#proyectos">Mis proyectos</a></li>
          <li class="tab"><a href="#contacto">Contacto</a></li>
        </ul>
      </div>
    </nav>

    <div id="personal">
      <PersonalView></PersonalView>
    </div>
    <div id="proyectos" >Test 2</div>
    <div id="contacto" >Test 3</div>
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

#all {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
