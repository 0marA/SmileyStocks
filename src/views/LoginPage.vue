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
  <LoginBoxes />
</template>

<style scoped>
.WelcomeMessage {
  position: relative;
  right: 1200px;
  top: -130px;
}
</style>
