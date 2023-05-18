<template>
    <div class="logo">
        <img alt="Vue logo" src="../assets/logo2.png">
    </div>
    <h1>Login</h1>
    <div class="login">
        <input type="text" v-model="email" placeholder="Enter email">
        <input type="password" v-model="password" placeholder="Enter Password">
        <button v-on:click="login">Login</button>
    </div>
    <p>
        <router-link to="/signUp" >Sign Up </router-link>
    </p>
</template>

<script>
import axios from 'axios';
export default{
    // eslint-disable-next-line vue/multi-word-component-names
    name : 'Login',
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods: {
        async login(){
            
            let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);
            
            if(result.status == 200 && result.data.length > 0){
                localStorage.setItem('user-info', JSON.stringify(result.data[0]));
                this.$router.push({name: 'Home'});
            }
        }
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name: 'Home'});
        }
    }
}

</script>
