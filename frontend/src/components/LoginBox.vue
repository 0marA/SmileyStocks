<template>
    <form
        method="post"
        action="https://smileystocks.onrender.com/api/login/validate"
    >
        <input type="submit" style="display: none" />
        <input
            class="textbox"
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            style="position: absolute; top: -70px; left: 865px"
        />

        <div class="Buttons">
            <button
                class="buttons"
                type="submit"
                value="Submit"
                style="position: absolute; left: 220px"
            >
                Submit
            </button>
            <button
                id="REDIRECT_BUTTON"
                class="buttons"
                ref="btnToggle"
                @click="$router.push('/newaccount')"
            >
                New Account
            </button>
        </div>
    </form>
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
