<template>
  <div>
    <h1>Hola mundo</h1>
    <button class="btn blue" @click='saludar()'>
      boton
      <span class="material-icons">save</span>
    </button>
    <div class="col m12 card-panel">
      <div class="col m4">
        <label>nombre</label>
        <input type="text" v-model="nombre">
      </div>
      <div class="col m4">
        <label>apellido</label>
        <input type="text" v-model="apellido">
      </div>
      <div class="row">
        <div class="col m4">
          <label>edad</label>
          <input type="number" v-model="edad" max="99" min="10">
        </div>
        <div class="col m4">
          <label>estado civil</label>
          <select>
            <option disabled selected>Selecciona tu estado</option>
            <option v-for="(estado, index) in estados_civiles" :key="index" value="estado">{{estado}}</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import M from 'materialize-css'
export default {
  name: 'App',
  mounted() {
    this.estado_civil = this.estados_civiles[0];
    // this.axios.get('https://leninrkb.com').then(() => {

    // });
    var elems = document.querySelectorAll('select');
    this.instances = M.FormSelect.init(elems, null);
  },
  data() {
    return {
      nombre: '',
      apellido: '',
      edad: 10,
      estado_civil: 'asd',
      saludo: 'hola mundo desde vue',
      estados_civiles: [
        'casado/a',
        'soltero/a',
        'divorciado/a',
        'viudo/a',
      ],
      instances: []
    }
  },
  methods: {
    saludar() {
      M.toast({
        html: this.saludo + ' ' + this.nombre
      })
      console.log('saludo desde app.vue');
    }
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
</style>
