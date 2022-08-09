<script>
import { getSmiles } from "../../../backend/scripts/smileCalc.js";

export default {
    data() {
        return {
            user: undefined,
        };
    },
    async mounted() {
        this.user = await this.fetchUser();
    },
    methods: {
        async fetchUser() {
            return await getSmiles();
        },
    },
};
</script>

<template>
    <h1>{{ user }}</h1>
</template>
