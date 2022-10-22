<script setup>
import ManageSymbols from "/src/components/ManageSymbols.vue";
import Smiles from "../components/Smiles.vue";
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
                const username = await Vue.axios.get("/api/");
                return username.data;
            } catch (error) {
                window.location.href = "/";
            }
         
        },
    },
};
</script>

<template>
    <h1 style="position: absolute; top: 0px; color: rgb(19, 83, 19)">
        Hey {{ username }}, welcome to your dashboard!
    </h1>

    <ManageSymbols />
    <Smiles />
</template>
