<template>
  <div>
    <h1>Registro del personal</h1>
    <div class="container">
      <div class="col m12 card-panel grey lighten-5">
        <div class="col m4 input-field">
          <label>nombre</label>
          <input type="text" v-model="nombre">
        </div>
        <div class="col m4 input-field">
          <label>apellido</label>
          <input type="text" v-model="apellido">
        </div>
        <div class="col m4 input-field">
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
            <select v-model="estado_civil">
              <option v-for="(estado, index) in estados_civiles" :key="index" v-bind:value="estado">{{ estado }}</option>
            </select>
          </div>
          <div class="col m4">
            <label>
              <input type="checkbox" class="filled-in" v-model="suscribirse" />
              <span>Suscribirse al plan mensual de la empresa AOT company para recibir las mejores promociones</span>
            </label>
          </div>
        </div>
        <div class="row">
          <div class="col m4 input-field">
            <label>Pasatiempo</label>
            <input type="text" v-model="pasatiempo">
            <button class="btn" @click="limpiarPasatiempo()">Limpiar <span class="material-icons">clear</span> </button>
            <button class="btn" @click="agregarPasatiempo()">Agregar <span class="material-icons">create</span> </button>
          </div>
          <div class="col m4">
            <label>Mis pasatiempos</label>
            <li v-for="(pasatiempo, index) in pasatiempos" :key="index">{{ pasatiempo }} <i class="material-icons"
                @click="quitarPasatiempo(index)">clear</i> </li>
          </div>
        </div>
        <hr>
        <div class="row">
          <button class="btn" @click="guardarRegistro()">Guardar regsitro</button>
        </div>
      </div>
    </div>
    <div class="container">
      <h4>Resumen</h4>
      <div class="col m12 card-panel grey lighten-5">
        <table class="responsive-table" v-if="registroVacio()">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Edad</th>
              <th>Email</th>
              <th>Estado Civil</th>
              <th>Suscrito</th>
              <th>Pasatiempos</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(reg, index) in registro" :key="index">
              <td>{{reg.nombre}}</td>
              <td>{{reg.apellido}}</td>
              <td>{{reg.edad}}</td>
              <td>{{reg.email}}</td>
              <td>{{reg.estado_civil}}</td>
              <td v-if="reg.suscribirse"><i class="material-icons">check</i></td>
              <td v-else><i class="material-icons">close</i></td>
              <td v-for="(pasatiempo,index) in reg.pasatiempos" :key="index">{{pasatiempo}},</td>
              <button class="btn-small red accent-2" @click="eliminarRegistro(index)">eliminar</button>
            </tr>
          </tbody>
        </table>
        <p v-else>No existen registros por mostrar</p>
      </div>
    </div>
  </div>
</template>

<script>
import M from 'materialize-css'
export default {
  name: 'App',
  mounted() {
    // this.axios.get('https://leninrkb.com').then(() => {

    // });
    var elems = document.querySelectorAll('select');
    this.instances = M.FormSelect.init(elems, null);
  },
  data() {
    return {
      nombre: '',
      apellido: '',
      edad: 0,
      estado_civil: '',
      email: '',
      suscribirse: false,
      pasatiempos: [],
      saludo: 'hola mundo desde vue',
      estados_civiles: [
        'casado/a',
        'soltero/a',
        'divorciado/a',
        'viudo/a',
      ],
      pasatiempo: '',
      instances: [],
      registro:[]
    }
  },
  methods: {
    hacerlog(datos){
      console.log(datos);
    },
    saludar() {
      M.toast({
        html: this.saludo + ' ' + this.nombre
      })
      console.log('saludo desde app.vue');
    },
    agregarPasatiempo() {
      this.pasatiempo = this.pasatiempo.trim();
      if (this.pasatiempo == '') {
        M.toast({
          html: 'no se admite espacios en blanco'
        })
        return;
      }
      if (this.pasatiempo.length > 20) {
        M.toast({
          html: 'no se admite cadenas > 20'
        })
        return;
      }
      this.pasatiempos.push(this.pasatiempo)
      this.pasatiempo = ''
    },
    quitarPasatiempo(index) {
      this.pasatiempos.splice(index, 1);
    },
    limpiarPasatiempo() {
      this.pasatiempo = ''
    },
    agregarDatosARegistro(){
      const datos = {};
      datos.nombre = this.nombre;
      datos.apellido = this.apellido;
      datos.email = this.email;
      datos.edad = this.edad;
      datos.estado_civil = this.estado_civil;
      datos.suscribirse = this.suscribirse;
      datos.pasatiempos = this.pasatiempos;
      this.registro.push(datos);
    },
    limpiarTodosLosCampos(){
      this.nombre = '';
      this.apellido = '';
      this.estado_civil = '';
      this.edad = '';
      this.email = '';
      this.suscribirse = false;
      this.pasatiempos = []
    },
    comprobarNombre(){
      this.nombre = this.nombre.trim();
      if(this.nombre == ''){
        M.toast({
          html:'nombre no puede estar en blanco'
        })
        return false;
      }
      return true;
    },
    comprobarApellido(){
      this.apellido = this.apellido.trim();
      if(this.apellido == ''){
        M.toast({
          html:'apellido no puede estar en blanco'
        })
        return false;
      }
      return true;
    },
    comprobarEdad(){
      if(!(this.edad>=10 && this.edad<=99)){
        M.toast({
          html:'edad no valida'
        })
        return false;
      }
      return true;
    },
    comprobarEstadoCivil(){
      if(this.estado_civil == ''){
        M.toast({
          html:'seleccione un estado civil'
        })
        return false;
      }
      return true;
    },
    comprobarCampos(){
      if(!this.comprobarNombre() || !this.comprobarApellido() || !this.comprobarEstadoCivil() || !this.comprobarEdad()){
        return false;
      }
      return true;
    },
    guardarRegistro(){
      if (!this.comprobarCampos()) {
        return;
      }
      this.agregarDatosARegistro();
      this.limpiarTodosLosCampos();
      console.log(this.registro);
    },
    eliminarRegistro(index){
      this.registro.splice(index,1);
    },
    registroVacio(){
      if(this.registro.length == 0){
        return false
      }
      return true;
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
