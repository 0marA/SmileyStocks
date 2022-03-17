<script setup>
import Login from "./components/Login.vue"
</script>

<template>
    <div class = "welcome">
      <h1 style="position: relative; right: -70px">Welcome to Smiley Stocks!</h1>
      <h2>Please enter your credentials or make a new account :)</h2>
    </div>

    <div class = "login">
      <Login/>
    </div>
</template>

<style scoped>
.welcome {
  position: relative;
  right: -50px;
  top: 300px;
  color: rgb(19, 83, 19);
}

.login {
  position: relative;
  right: -1200px;
  top: 150px;
}
</style>