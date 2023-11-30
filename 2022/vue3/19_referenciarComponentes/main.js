const app = {
    data() {
        return{
            usuario: 'leninrkb',
            correo: 'ekb.lenin@gmail.com',
            clave: 'admin',
        }
    },
    methods:{
        llamarSaludoDesdeHijo()
        {
            this.$refs.menuComponent.saludarDesdeHijo(this.usuario);
        }
    }
}

const _app = Vue.createApp(app);