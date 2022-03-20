<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
  msg2: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="welcome">
    <h1 style="position: relative; right: -70px">{{ msg }}</h1>
    <h2>{{ msg2 }}</h2>
  </div>
</template>

<style scoped>
.welcome {
  position: relative;
  right: -50px;
  top: 300px;
  color: rgb(19, 83, 19);
}
</style>
