<script>
import { getSmiles } from "../../../backend/scripts/smileCalc.js";

export default {
    data() {
        return {
            smiles: undefined,
        };
    },
    async mounted() {
        this.smiles = await this.fetchSmiles();
    },
    methods: {
        async fetchSmiles() {
            return await getSmiles();
        },
    },
};
</script>

<template>
    <h1>{{ smiles }}</h1>
</template>
