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
    methods: {
        async getUsername() {
            try {
                const username = await axios.get("/api/");
                this.username = username.data;
                console.log(username);
            } catch (error) {
                window.location.href = "/";
            }
        },
    },
    created() {
        this.getUsername();
    },
};
</script>

<template>
    <div class="WelcomeMesssage">
        <WelcomeMessage :msg="username" />
    </div>

    <ManageSymbols />
    <Smiles />
</template>

<style scoped>
.WelcomeMesssage {
    position: absolute;
    top: 0px;
}
</style>

