<template>
    <Header />
    <h1>
        hello user welcome on Update  restaurant page
    </h1>
    <form class="update" action="">
        <input type="text" name="name" placeholder="Enter Name" v-model="Restaurant.name">
        <input type="text" name="location" placeholder="Enter location" v-model="Restaurant.location">
        <input type="description" name="description" placeholder="Enter a description" v-model="Restaurant.description">
        <button type="button" v-on:click="AddRestaurant">Update</button>

    </form>
</template>

<script>
import axios from 'axios';
import Header from './header.vue';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Update',
    data(){
        return{
            Restaurant:{
                name: '',
                location: '',
                description: ''
            }
        }
    },
    components: {
        Header
    },
    methods:{
        async AddRestaurant(){
            let result = await axios.put(`http://localhost:3000/restaurant/${this.$route.params.id}`, this.Restaurant);
            console.warn(result);
            if(result.status == 200){
                this.$router.push({name: 'Home'});
            }
        }
    },

    async mounted(){
        let user = localStorage.getItem('user-info');
        if(!user){
            this.$router.push({name: 'SignUp'});
        }

        const result  = await axios.get(`http://localhost:3000/restaurant/${this.$route.params.id}`);
        console.warn(result);
        this.Restaurant = result.data;
    }
}

</script>