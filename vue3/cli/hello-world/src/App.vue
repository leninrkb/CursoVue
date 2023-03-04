<template>
  <div>
    <h1>Hola mundo</h1>
    <button class="btn blue" @click='saludar()'>
      saludar
      <span class="material-icons">save</span>
    </button>
    <div class="container">
      <div class="col m12 card-panel grey lighten-5">
        <div class="col m4">
          <label>nombre</label>
          <input type="text" v-model="nombre">
        </div>
        <div class="col m4">
          <label>apellido</label>
          <input type="text" v-model="apellido">
        </div>
        <div class="col m4">
          <label>email</label>
          <input type="email" v-model="email">
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
              <option v-for="(estado, index) in estados_civiles" :key="index" value="estado">{{ estado }}</option>
            </select>
          </div>
          <div class="col m4">
            <label>
              <input type="checkbox" class="filled-in" v-model="suscribirse" />
              <span>Suscribirse</span>
            </label>
          </div>
        </div>
        <div class="row">
          <div class="col m4">
            <label>Pasatiempo</label>
            <input type="text" v-model="pasatiempo">
            <button class="btn" @click="limpiarPasatiempo()">Limpiar <span class="material-icons">clear</span> </button>
            <button class="btn" @click="agregarPasatiempo()">Agregar <span class="material-icons">create</span> </button>
          </div>
          <div class="col m4">
            <label>Mis pasatiempos</label>
            <li v-for="(pasatiempo, index) in pasatiempos" :key="index">{{pasatiempo}} <i class="material-icons" @click="quitarPasatiempo(index)">clear</i> </li>
          </div>
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
      email:'',
      edad: 10,
      estado_civil: 'asd',
      suscribirse: false,
      saludo: 'hola mundo desde vue',
      estados_civiles: [
        'casado/a',
        'soltero/a',
        'divorciado/a',
        'viudo/a',
      ],
      pasatiempos:[],
      pasatiempo:'',
      instances: []
    }
  },
  methods: {
    saludar() {
      M.toast({
        html: this.saludo + ' ' + this.nombre
      })
      console.log('saludo desde app.vue');
    },
    agregarPasatiempo(){
      this.pasatiempo = this.pasatiempo.trim();
      if(this.pasatiempo == ''){
        M.toast({
          html:'no se admite espacios en blanco'
        })
        return;
      }
      if(this.pasatiempo.length > 20){
        M.toast({
          html:'no se admite cadenas > 20'
        })
        return;
      }
      this.pasatiempos.push(this.pasatiempo)
      this.pasatiempo=''
    },
    quitarPasatiempo(index){
      this.pasatiempos.splice(index,1);
    },
    limpiarPasatiempo(){
      this.pasatiempo=''
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
