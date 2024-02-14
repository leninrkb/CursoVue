import { ref } from "vue";

class AuthService{
    constructor(){
        this.jwt = ref(null)
        this.error = ref(null)
    }

    getJwt(){
        return this.jwt
    }

    getError(){
        return this.error
    }

    async login(email, password){
        try {
            let response = await fetch('url',{
                method: 'POST',
                headers:{
                    'Accep':'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            response = await response.json()
            if ('errors' in response) {
                this.error = response
                return false
            }else{
                this.jwt = response.data
                return true
            }
        } catch (error) {
            console.log(error);
        }
    }
}