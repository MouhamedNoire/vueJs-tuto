<template>
  <router-view/>
</template>

<script>

import SignUp from './components/signUp.vue';
export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    SignUp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.sign input , .login input , .add input , .update input {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    height: 25px;
    margin-top: 10px;
    padding: 10px;
    border: 1px solid slateblue;
    border-radius: 10px;
}

.sign button , .login button , .add button , .update button {
    margin-top: 15px;
    background: rgb(65, 65, 245);
    color: white;
    border: 1px solid rgb(65, 65, 245);
    border-radius: 10px;
    cursor: pointer;
}
</style>
