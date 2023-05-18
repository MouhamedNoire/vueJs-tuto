<template>
    <Header />
    <h1>
        hello user welcome Add page
    </h1>

    <form class="add" action="">
        <input type="text" name="name" placeholder="Enter Name" v-model="Restaurant.name">
        <input type="text" name="location" placeholder="Enter location" v-model="Restaurant.location">
        <input type="description" name="description" placeholder="Enter a description" v-model="Restaurant.description">
        <button type="button" v-on:click="addRestaurant">Add new Restaurant</button>

    </form>
</template>

<script>
import axios from 'axios';
import Header from './header.vue';
export default {
    /* eslint-disable */
    name: 'Add',
    components: {
        Header
    },
    data(){
        return{
            Restaurant:{
                name: '',
                location: '',
                description: ''
            }
        }
    },
    methods: {
        async addRestaurant(){
          let  result = await  axios.post("http://localhost:3000/restaurant", this.Restaurant);
            console.warn(result);
            if(result.status == 201){
                this.$router.push({name: 'Home'});
            }
            else{
                alert('Error');
            }
        }
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        if(!user){
            this.$router.push({name: 'SignUp'});
        }
    }
}

</script>