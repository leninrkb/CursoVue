const API = "https://api.github.com/users/";



const app = Vue.createApp({
	data(){
		return{
			title: "search github users"
			,username: null
		}
	},
	methods:{
		async get_user() {
			let resp = await fetch(API + this.username);
			let data = await resp.json();
			this.username = "";
			console.log(data);
		}
	}
})
const mountedApp = app.mount("#app")