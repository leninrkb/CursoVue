const API = "https://api.github.com/users/"



const app = Vue.createApp({
	data() {
		return {
			title: "search github users"
			, search: null
			, result: null
			, error: null
			, favorites: new Map()
		}
	},
	created() {
		this.loadFavorites()
	},
	computed: {
		isFavorite() {
			return this.favorites.has(this.result.id)
		},
		favoritesList() {
			return Array.from(this.favorites.values())
		}
	},
	methods: {
		closeHandler(){
			alert("lalalala")
		},
		async getUser() {
			this.error = null
			this.result = null
			try {
				if (!this.getSearchLocal()) {
					await this.findUser()
					this.saveSearchLocal()
				}
			} catch (error) {
				this.error = error
			} finally {
				this.search = null
			}
		},
		async findUser() {
			console.log("calling api");
			let resp = await fetch(API + this.search)
			if (!resp.ok) throw new Error("User not found")
			let data = await resp.json()
			this.result = data
			console.log(this.result);
		},
		setFavorite() {
			this.favorites.set(this.result.id, this.result)
			this.updateStorage()
		},
		removeFavorite() {
			this.favorites.delete(this.result.id)
			this.updateStorage()
		},
		updateStorage() {
			window.localStorage.setItem("favorites", JSON.stringify(this.favoritesList))
		},
		loadFavorites() {
			let items = window.localStorage.getItem("favorites")
			if (items != null) {
				items = JSON.parse(items)
				if(items.length > 0){
					this.favorites = new Map(items.map(f => {
						return [f.id, f]
					}))
				}
			}
		},
		saveSearchLocal() {
			let item = JSON.stringify(this.result)
			window.sessionStorage.setItem(this.search, item)
		},
		getSearchLocal() {
			let item = window.sessionStorage.getItem(this.search)
			if (item != null) {
				item = JSON.parse(item)
				this.result = item
				return true
			}
			return false
		},

	},
})
const mountedApp = app.mount("#app")