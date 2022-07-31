<script>
import { returnPrice } from "../../../backend/scripts/smileCalc.js";

export default {
    methods: {
        returnPrice,
    },
    
};
</script>

<template>
    <h1>TSLA Open: {{ returnPrice() }}</h1>
</template>
