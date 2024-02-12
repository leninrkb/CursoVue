import { ref } from "vue";

class Post {
    constructor() {
        this.data = ref(null)
    }

    get_data(){
        return this.data
    }

    async get_posts() {
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/posts')
            response = await response.json()
            this.data.value = response;
        } catch (error) {
            console.log(error);
        }
    }

    async get_post(id){
        try {
            let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            response = await response.json()
            this.data.value = response
        } catch (error) {
            console.log(error);
        }
    }
}

export default Post