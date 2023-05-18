<template>
    <header>
        <div class="link">
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/add">Add Restaurant</router-link></li>
                <li><a v-on:click="logout" href="Login">Logout</a></li>

            </ul>
        </div>
    </header>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Header',
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name: 'Login'});
        }
    }

}   
</script>
<style>

    .link ul{
        display: flex;
        justify-content: center;
        list-style: none;
        border: 1px solid transparent;
        padding: 20px;
        background: rgb(238,174,202);
        background: radial-gradient(circle, rgba(238,174,202,1) 12%, rgba(68,93,121,1) 88%);
        border-radius: 5px;
        width: 800px;
        margin-left: auto;
        margin-right: auto;
    }

    li a{
        text-decoration: none;
        padding: 5px;
        margin: 20px;
        border: 0.2px solid white;
        border-radius: 5px;
        color: white;
    }

    li a :last-child{
        align-self: flex-end;
    }



</style>