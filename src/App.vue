<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="RouterView">
    <RouterView />
  </div>
  <nav>
    <RouterLink to="/login" style="position:relative right: -200"
      >Login</RouterLink
    >
    <RouterLink to="/">Dashboard</RouterLink>
  </nav>
</template>

<style scoped>
.RouterView {
  position: relative;
  left: 1200px;
  top: 130px;
}
</style>
