const API = "https://api.github.com/users/"

const app = Vue.createApp({
	data(){
		return{
			title: "search github users"
			,search: null
			,result: null 
			,error: null
		}
	},
	methods:{
		async get_user() {
			this.error = null
			this.result = null
			try{
				let resp = await fetch(API + this.search)
				if(!resp.ok) throw new Error("User not found")
				let data = await resp.json()
				this.result = data 

				console.log(data);
			}catch(error){
				this.error = error
			}finally{
				this.search = null 
			}
			
		}
	}
})
const mountedApp = app.mount("#app")