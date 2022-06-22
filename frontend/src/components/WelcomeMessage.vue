<script setup>
defineProps({
    msg: {
        type: String,
        required: false,
    },
    msg2: {
        type: String,
        required: false,
    },
});
</script>
<template>
    <h1 style="color: rgb(19, 83, 19)">{{ msg }}</h1>
    <h2 style="color: rgb(19, 83, 19)">{{ msg2 }}</h2>
</template>
