<template>
    <Header />
    <h1>
        hello {{ name }} welcome to the home page
    </h1>
    <table>
        <tr>
            <th>Name</th>
            <th>Location</th>
            <th>description</th>
            <th>Action</th>
        </tr>
        <tr v-for="item in restaurant" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.location }}</td>
            <td>{{ item.description }}</td>
            <td>
                <router-link :to="'/update/' + item.id">Update</router-link>
                <button type="button" v-on:click="deleteRestaurant(item.id)">Delete</button>
            </td>
        </tr>
    </table>
</template>

<script>
import axios from 'axios';
import Header from './header.vue';
export default {
    /* eslint-disable */
    name: 'Home',
    data() {
        return {
            name: '',
            restaurant: [],
        }
    },
    components: {
        Header
    },
    methods: {
        async deleteRestaurant(id) {
            if (confirm('Are you sure?')) {
                let result = await axios.delete(`http://localhost:3000/restaurant/${id}`);
                console.warn(result);
                if (result.status == 200) {
                    this.loadData();
                }
            }
        },

        async loadData() {
            let user = localStorage.getItem('user-info');
            this.name = JSON.parse(user).name;
            if (!user) {
                this.$router.push({ name: 'SignUp' });
            }
            let result = await axios.get('http://localhost:3000/restaurant');
            console.warn(result);
            this.restaurant = result.data;
        }
    },
    async mounted() {
        this.loadData();
    }
}

</script>

<style>
table {
    border: 1px;
    border-collapse: collapse;
    margin-left: auto;
    margin-right: auto;
    width: 500px;
    height: 400px;
}

th,
td {
    border: 1px solid black;
    padding: 5px;
}

td:first-child {
    font-weight: bold;
}
</style>