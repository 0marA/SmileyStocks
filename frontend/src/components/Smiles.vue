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
    <h1 style = "position: absolute; top: 200px;">{{ smiles }}</h1>
</template>
