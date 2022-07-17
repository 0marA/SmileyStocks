<template>
    <form method="post" action="http://localhost:4000/newaccount/adding">
        <input
            class="textbox"
            type="text"
            id="USERNAME"
            name="username"
            placeholder="Username"
            style="position: absolute; top: -70px; left: 865px"
        />

        <div class="Buttons">
            <button
                id="REDIRECT_BUTTON"
                class="buttons"
                ref="btnToggle"
                @click="$router.push('/login')"
            >
                Login Page
            </button>
            <input
                class="buttons"
                type="submit"
                value="Submit"
                style="position: absolute; left: 220px"
            />
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
