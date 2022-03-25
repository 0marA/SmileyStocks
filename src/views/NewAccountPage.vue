<script setup>
import NewAccountBoxes from "/src/components/NewAccountBoxes.vue";
import WelcomeMessage from "/src/components/WelcomeMessage.vue";
</script>
<template>
  <div class="WelcomeMessage">
    <WelcomeMessage msg="Make a new account here!" />
    <WelcomeMessage
      msg2="Enter a username and password you'll remember :)"
      style="position: relative; left: 70px"
    />
  </div>
  <NewAccountBoxes style="position: relative; left: 500px" />
</template>

<style scoped>
.WelcomeMessage {
  position: relative;
  right: 1200px;
  top: -130px;
}
html {
  overflow-x: hidden;
}
</style>
