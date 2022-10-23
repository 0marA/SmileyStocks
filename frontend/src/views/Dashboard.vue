<script setup>
import ManageSymbols from "/src/components/ManageSymbols.vue";
import Smiles from "../components/Smiles.vue";
import axios from "axios";
import WelcomeMessage from "/src/components/WelcomeMessage.vue";
</script>
<script>
export default {
    data() {
        return {
            username: undefined,
        };
    },
    async mounted() {
        this.username = await this.getUsername();
    },
    methods: {
        async getUsername() {
            try {
                const apiResponse = await axios.get("/api/");
                this.username = apiResponse.data;
                console.log("username is" + username);
            } catch (error) {
                window.location.href = "/";
            }
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
