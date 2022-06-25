<script setup>
import InfoBoxes from "/src/components/InfoBoxes.vue";
import WelcomeMessage from "/src/components/WelcomeMessage.vue";
</script>
<template>
    <WelcomeMessage
        msg="Make a new account here!"
        msg2="Enter a username and password you'll remember :)"
        style="position: absolute; top: 200"
    />
    <div class="InfoBoxes">
        <InfoBoxes redirect="Login" />
    </div>
</template>

<style scoped>
.InfoBoxes {
    position: relative;
    top: -40px;
}
</style>
