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
  <div class="NewAccountBoxes">
    <NewAccountBoxes />
  </div>
</template>

<style scoped>
.WelcomeMessage {
  position: relative;
  top: 80px;
}

.NewAccountBoxes {
  position: relative;
  top: -40px;
}
</style>
