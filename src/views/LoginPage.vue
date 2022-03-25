<script setup>
import LoginBoxes from "/src/components/LoginBoxes.vue";
import WelcomeMessage from "/src/components/WelcomeMessage.vue";
</script>

<template>
  <div class="WelcomeMessage">
    <WelcomeMessage msg="Welcome to Smiley Stocks!" />
    <WelcomeMessage
      msg2="Please enter your credentials or make a new account :)"
    />
  </div>
  <div class="LoginBoxes">
    <LoginBoxes />
  </div>
</template>

<style scoped>
.WelcomeMessage {
  position: relative;
  top: 80px;
}

.LoginBoxes {
  position: relative;
  top: -40px;
}
</style>
