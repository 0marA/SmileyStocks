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
            let apiResponse = "failed";
            try {
                apiResponse = await axios.get("/api/");
                this.username = apiResponse.data;
                console.log("username is" + apiResponse.data);
            } catch (error) {
                window.location.href = "/";
            }
            console.log(apiResponse.data);
            return apiResponse.data;
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
