<template>
    <div class="logo">
        <img alt="Vue logo" src="../assets/logo2.png">
    </div>
    <h1>Sign Up</h1>
    <div class="sign">
        <input type="text" v-model="name" placeholder="Enter Name">
        <input type="text" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="password" placeholder="Enter Password">
        <button v-on:click="signUp">Sign Up</button>
        <p>
            <router-link to="/login" >Login </router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios';
export default {

    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        //la methode permet de se connecter a l application mais comme ca prend un
        //peu de temps pour se connecter on utilise async et await
        async signUp() {
            let result = await axios.post('http://localhost:3000/users', {
                name: this.name,
                email: this.email,
                password: this.password
            });

            console.warn(result);
            if (result.status == 201) {
                localStorage.setItem('user-info', JSON.stringify(result.data));

                this.$router.push({name: 'Home'});
            }
            else {
                alert('Error');
            }
        }
    },
    //la fonction permet de bloquer un utilisateur connecte de retourner a la page SignUp
    mounted(){
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name: 'Home'});
        }
    }
}
</script>

