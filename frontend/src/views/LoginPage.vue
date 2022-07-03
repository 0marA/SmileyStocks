<script setup>
import LoginBox from "/src/components/LoginBox.vue";
import WelcomeMessage from "/src/components/WelcomeMessage.vue";
</script>

<template>
    <WelcomeMessage msg="Welcome to Smiley Stocks!" />
    <WelcomeMessage
        msg2="Please enter your credentials or make a new account :)"
    />
    <div class="LoginBox">
        <LoginBox />
    </div>
</template>

<style scoped>
.LoginBox {
    position: relative;
    top: -40px;
}
</style>
