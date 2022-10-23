<script setup>
import ManageSymbols from "/src/components/ManageSymbols.vue";
import Smiles from "../components/Smiles.vue";
import WelcomeMessage from "/src/components/WelcomeMessage.vue";
</script>
<script>
import { getUsername } from "../../../backend/scripts/smileCalc.js";
export default {
    data() {
        return {
            username: undefined,
        };
    },
    async mounted() {
        this.username = await this.fetchUsername();
    },
    methods: {
        async fetchUsername() {
            try {
                getUsername();
            } catch (error) {
                window.location.href = "/";
            }
            return await getUsername();
        },
    },
};
</script>

<template>
    <ManageSymbols />
    <Smiles />
</template>

<style scoped>
.WelcomeMesssage {
    position: absolute;
    top: 0px;
}
</style>
