<template>
    <div class="vue-tempalte">
        <form @submit.prevent="handleSubmit">
            <h3>Sign Up</h3>
            <div class="form-group">
                <label>Full Name</label>
                <input type="text" class="form-control form-control-lg" v-model="name" required />
            </div>
            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" v-model="email" required />
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" v-model="password" required />
            </div>
            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>
            <p class="forgot-password text-right">
                Already registered 
                <router-link :to="{name: 'login'}">Log in?</router-link>
            </p>
        </form>
    </div>
</template>

<script>
import { log } from 'console'

export default{
    name:'RegistrationComponent',
    data(){
        return{
            name : '',
            email : '',
            password:''
        }
    },
    // methods: {
    //     handleSubmit() {
    //         // const data = {
    //         //     name : this.name,
    //         //     email: this.email,
    //         //     password : this.password,
    //         // } 

    //         console.log('hello');
    //     }
   // },
}
</script>

