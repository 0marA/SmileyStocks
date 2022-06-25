<script setup>
import LoginBoxes from "/src/components/LoginBoxes.vue";
import InfoBoxes from "/src/components/InfoBoxes.vue";
import WelcomeMessage from "/src/components/WelcomeMessage.vue";
</script>

<template>
    <WelcomeMessage msg="Welcome to Smiley Stocks!" />
    <WelcomeMessage
        msg2="Please enter your credentials or make a new account :)"
    />
    <div class="LoginBoxes">
        <InfoBoxes redirect="New Account" />
    </div>
</template>

<style scoped>
.LoginBoxes {
    position: relative;
    top: -40px;
}
</style>
