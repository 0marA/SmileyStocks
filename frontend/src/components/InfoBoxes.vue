<script setup>
defineProps({
    redirect: {
        type: String,
        required: true,
    },
});

//const btn = document.getElementById("REDIRECT_BUTTON").value;
//btn.innerText = "hi";
</script>
<template>
    <input
        class="textbox"
        type="text"
        id="USERNAME"
        placeholder="Username"
        style="position: absolute; top: -50px; left: 865px"
    />
    <input
        type="password"
        class="textbox"
        input="hidden"
        id="PASSWORD"
        placeholder="Password"
        style="position: absolute; top: 0px; left: 865px"
    />

    <div class="Buttons">
        <button
            id="REDIRECT_BUTTON"
            class="buttons"
            ref="btnToggle"
            style="position: absolute; left: 0"
            @click="$router.push('/' + redirect.replace(/\s+/g, ''))"
        >
            {{ redirect }}
        </button>
        <button
            class="buttons"
            style="position: absolute; left: 110px"
            @click=""
            id="SUBMIT"
        >
            Submit
        </button>
    </div>
</template>

<style scoped>
.Buttons {
    position: absolute;
    top: 50px;
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
