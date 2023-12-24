const API = "https://api.github.com/users/"

const app = Vue.createApp({
	data(){
		return{
			title: "search github users"
			,search: null
			,result: null 
			,error: null
			,favorites: new Map()
		}
	},
	methods:{
		async getUser() {
			this.error = null
			this.result = null
			try{
				let resp = await fetch(API + this.search)
				if(!resp.ok) throw new Error("User not found")
				let data = await resp.json()
				this.result = data 
			}catch(error){
				this.error = error
			}finally{
				this.search = null 
			}	
		},
		setFavorite(){
			this.favorites.set(this.result.id, this.result)
		}
	}
})
const mountedApp = app.mount("#app")