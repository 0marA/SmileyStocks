<script>
import { getCurrentPrice } from "../../../backend/scripts/smileCalc.js";

export default {
    methods: {
        getCurrentPrice,
    },
};
</script>

<template>
    <h1>TSLA Open: {{ getCurrentPrice("TSLA") }}</h1>
</template>
