<template>
  <div>
    <h1>Registro del personal</h1>
    <div class="container">
      <div class="col m12 card-panel grey lighten-5">
        <div class="col m4 input-field">
          <label>nombre</label>
          <input type="text" v-model="nombre" required>
        </div>
        <div class="col m4 input-field">
          <label>apellido</label>
          <input type="text" v-model="apellido" required>
        </div>
        <div class="col m4 input-field">
          <label>email</label>
          <input type="email" v-model="email" required>
        </div>
        <div class="row">
          <div class="col m4">
            <label>edad</label>
            <input type="number" v-model="edad" max="99" min="10">
          </div>
          <div class="col m4">
            <label>estado civil</label>
            <select v-model="estado_civil">
              <option v-for="(estado, index) in estados_civiles" :key="index" v-bind:value="estado">{{ estado }}
              </option>
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
            <button class="btn" @click="limpiarPasatiempo()"><i class="material-icons right">clear</i> </button>
            <button class="btn" @click="agregarPasatiempo()"><i class="material-icons right">add</i>
            </button>
          </div>
          <div class="col m4">
            <label>Mis pasatiempos</label>
            <ul class="collection">
              <li class="collection-item grey lighten-4" v-for="(pasatiempo, index) in pasatiempos" :key="index">{{
                pasatiempo }} <a href="#!"><i class="material-icons right" @click="quitarPasatiempo(index)">clear</i></a>
              </li>
            </ul>
          </div>
        </div>
        <hr>
        <div class="row">
          <button v-if="creando" @click="guardarRegistro()" type="submit" class="btn">Guardar registro <i
              class="material-icons right">save</i></button>
          <button v-else @click="guardarRegistro()" class="btn">Guardar cambios <i
              class="material-icons right">edit</i></button>
          <button @click="cancelar()" class="btn">cancelar <i
              class="material-icons right">cancel</i></button>
        </div>
      </div>
    </div>
    <div class="container">
      <h4>Resumen</h4>
      <div class="col m12 card-panel grey lighten-5">
        <table class="responsive-table striped highlight" v-if="registroVacio()">
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
              <td>{{ reg.nombre }}</td>
              <td>{{ reg.apellido }}</td>
              <td>{{ reg.edad }}</td>
              <td>{{ reg.email }}</td>
              <td>{{ reg.estado_civil }}</td>
              <td v-if="reg.suscribirse"><i class="material-icons">check</i></td>
              <td v-else><i class="material-icons">close</i></td>
              <td><span class="new badge" data-badge-caption="#">{{ reg.pasatiempos.length }}</span></td>
              <td>
                <a href="#!"><i class="material-icons" @click="eliminarRegistro(index)">delete</i></a>
              </td>
              <td>
                <a href="#!"><i class="material-icons" @click="editarRegistro(index)">edit</i></a>
              </td>
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
    var elems = document.querySelectorAll('select');
    this.instances = M.FormSelect.init(elems, null);
    this.datosInicio();
  },
  data() {
    return {
      //datos persona
      nombre: '',
      apellido: '',
      edad: 0,
      estado_civil: '',
      email: '',
      suscribirse: false,
      pasatiempos: [],
      //
      estados_civiles: [
        'casado/a',
        'soltero/a',
        'divorciado/a',
        'viudo/a',
      ],
      saludo: 'hola mundo desde vue',
      pasatiempo: '',
      instances: [],
      registro: [],//lista de todos las personas registradas
      creando: true,
      index_editando: -1
    }
  },
  methods: {
    datosInicio() {
      const datos = {};
      datos.nombre = 'lenin';
      datos.apellido = 'acosta';
      datos.email = 'lenin@gmail.com';
      datos.edad = '23';
      datos.estado_civil = this.estados_civiles[0];
      datos.suscribirse = true;
      datos.pasatiempos = [];
      this.registro.push(datos);
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
    capturarDatos() {
      const datos = {};
      datos.nombre = this.nombre;
      datos.apellido = this.apellido;
      datos.email = this.email;
      datos.edad = this.edad;
      datos.estado_civil = this.estado_civil;
      datos.suscribirse = this.suscribirse;
      datos.pasatiempos = this.pasatiempos;
      return datos;
    },
    agregarDatosARegistro() {
      this.registro.push(this.capturarDatos());
    },
    limpiarTodosLosCampos() {
      this.nombre = '';
      this.apellido = '';
      this.estado_civil = '';
      this.edad = '';
      this.email = '';
      this.suscribirse = false;
      this.pasatiempos = []
    },
    comprobarNombre() {
      this.nombre = this.nombre.trim();
      if (this.nombre == '') {
        M.toast({
          html: 'nombre no puede estar en blanco'
        })
        return false;
      }
      return true;
    },
    comprobarApellido() {
      this.apellido = this.apellido.trim();
      if (this.apellido == '') {
        M.toast({
          html: 'apellido no puede estar en blanco'
        })
        return false;
      }
      return true;
    },
    comprobarEdad() {
      if (!(this.edad >= 10 && this.edad <= 99)) {
        M.toast({
          html: 'edad no valida'
        })
        return false;
      }
      return true;
    },
    comprobarEstadoCivil() {
      if (this.estado_civil == '') {
        M.toast({
          html: 'seleccione un estado civil'
        })
        return false;
      }
      return true;
    },
    comprobarCampos() {
      if (!this.comprobarNombre() || !this.comprobarApellido() || !this.comprobarEstadoCivil() || !this.comprobarEdad()) {
        return false;
      }
      return true;
    },
    guardarRegistro() {
      if (this.creando) {
        if (!this.comprobarCampos()) {
          return;
        }
        this.agregarDatosARegistro();
        M.toast({
          html: 'registro agregado!'
        })
      } else {
        this.registro[this.index_editando] = this.capturarDatos();
        M.toast({
          html: 'registro actualizado!'
        })
        this.index_editando = -1;
        this.creando = true;
      }
      this.limpiarTodosLosCampos();

    },
    cancelar() {
      this.limpiarTodosLosCampos();
      this.creando = true;
    },
    eliminarRegistro(index) {
      this.registro.splice(index, 1);
      M.toast({
        html: 'registro #' + index + ' eliminado!'
      })
    },
    editarRegistro(index) {
      this.creando = false;
      this.index_editando = index;
      const datos = this.registro[index];
      this.nombre = datos.nombre;
      this.apellido = datos.apellido;
      this.edad = datos.edad;
      this.email = datos.email;
      this.estado_civil = datos.estado_civil;
      this.pasatiempos = datos.pasatiempos;
      this.suscribirse = datos.suscribirse;
      console.log(datos);
      var s = index;
      s.length;
    },
    registroVacio() {
      if (this.registro.length == 0) {
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
}</style>
