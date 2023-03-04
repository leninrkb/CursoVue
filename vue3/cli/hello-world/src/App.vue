<template>
  <div>
    <h1>Hola mundo</h1>
    <button class="btn blue" @click='saludar()'>
      boton
      <span class="material-icons">save</span>
    </button>
  </div>
</template>

<script>
import M from 'materialize-css'
export default {
  name: 'App',
  mounted(){
    this.axios.get('https://leninrkb.com').then(() => {

    });
  },
  data(){
    return{
      saludo:'hola mundo desde vue'
    }
  },
  methods:{
    saludar(){
      M.toast({
        html:this.saludo
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
