<template>
    <div class="flex justify-center ">
    <div class=" w-5/12 bg-green-100 mt-20 border shadow-lg">
        <div class="flex justify-center mb-2 bg-green-200">
        <p class="text-lg font-semibold">Login</p>
        </div>
        <div class="flex justify-center ">
        <form v-on:submit.prevent>
            <div>
                <input type="text" v-model="email" placeholder="Enter Email" class="border mb-2 px-12 py-1"/><br/>
                <input type="password" v-model="password" placeholder="Enter Password" class="border px-12 py-1" /> <br/>
            </div>
            <div class="flex mt-5 justify-between mx-8 ">
                <button class="border-none bg-green-400 text-center p-1 w-16" @click="login">Login</button>
               <a href="signup" class="bg-green-400 p-1 rounded-md">signup</a>
            </div>
            <div class="">
               <div id="googleSignInBtn" class="g_id_signin" style="margin-top: 1rem; margin-left: .3rem; padding: 1rem;"></div> 
            </div>
           
        </form>    
        </div>
    </div>
</div>
</template>
<style>
    .google_g{
        display: inline-flex !important;
    }
</style>

<script>
import axios from 'axios'
import { decodeCredential } from 'vue3-google-login';

export default {
    name: 'login',
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
      async  login(){
        
      const data = {
                    "username": this.email,
                    "password": this.password
                    
                  };
          console.log('data');
          console.log(data);
          let result = axios.post(import.meta.env.VITE_VUE_APP_BASE_URL + '/auth/login', data).then(res => {
            localStorage.setItem("user",res.data.payload)
            localStorage.setItem("access_token", res.data.access_token)
            this.$store.commit('UPDATE_USER', res.data.user)
            window.location.href = window.location.origin;

          });
        },
        async handleCredentialResponse(response){
            let data ={
                    google_token:response.credential
            }
            // const toast = useToast();
            //  console.log(data.google_token)
            //different module
            // console.log(decodeCredential(data.google_token))

            let user = decodeCredential(data.google_token)
            // console.log(user)
            let data_user ={
                        firstname: user.family_name,
                        lastname: user.given_name,
                        username: user.email,
                        email: user.email,
                        name: user.name,
                        picture: user.picture,
                        verified: user.email_verified,
            }
            console.log(data_user)
            // console.log(user.email)
            const res = await axios.post('http://localhost:3000/users/google/signUp',data_user).then(response =>{
            console.log(response)
            localStorage.setItem('access_token',response.data.access_token);
            localStorage.setItem('user', response.data.user)
            this.$store.dispatch('SET_USER',response.data.user)
            const users_data = this.$store.state.user;
            console.log(users_data)
            //  localStorage.setItem('name',user.name)
            //  console.log(this.$store.state.user)
            // console.log(users_data)
            //  console.log(this.$store.commit('UPDATE_USER',response.data.user))
              this.$router.push('/');
              }); 

        },
    },  
    mounted(){
        window.addEventListener("resize", this.widthResizeHandler);
        google.accounts.id.initialize({
                client_id: import.meta.env.VITE_GOOGLE_CLIENTID,
                callback:this.handleCredentialResponse,
            })
        let user =localStorage.getItem('access_token');
        if(user){
            this.$router.push({path:'/'})
        }
    }
}
</script>