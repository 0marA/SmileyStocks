<script>
import axios from "axios";

export default {
    methods: {
        async login() {
            let username = document.getElementById("username").value;
            let doc = await axios.get("https://google.com", {});
            console.log(doc);
        },
    },
};
</script>
<template>
    <input
        class="textbox"
        type="text"
        id="username"
        name="username"
        placeholder="Username"
        @click="login()"
        style="position: absolute; top: -70px; left: 865px"
    />

    <div class="Buttons">
        <button
            id="REDIRECT_BUTTON"
            class="buttons"
            ref="btnToggle"
            @click="$router.push('/newaccount')"
        >
            New Account
        </button>
        <input
            class="buttons"
            type="submit"
            value="Submit"
            style="position: absolute; left: 220px"
        />
    </div>
</template>

<style scoped>
.Buttons {
    position: absolute;
    top: 0px;
    left: 865px;
    max-width: 400px;
}
.textbox {
    resize: none;
    width: 10%;
    padding: 10px;
}

.buttons {
    position: relative;
    padding: 5px;
}
</style>
