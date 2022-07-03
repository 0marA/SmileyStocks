<script setup>
import NewAccountBox from "/src/components/NewAccountBox.vue";
import WelcomeMessage from "/src/components/WelcomeMessage.vue";
</script>
<template>
    <WelcomeMessage
        msg="Make a new account here!"
        msg2="Enter a username and password you'll remember :)"
        style="position: absolute; top: 200"
    />
    <div class="NewAccountBox">
        <NewAccountBox />
    </div>
</template>

<style scoped>
.NewAccountBox {
    position: relative;
    top: -40px;
}
</style>
