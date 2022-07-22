<template>
    <h1 style="position: relative top: 100px;">This is the dashboard</h1>
    <form method="post" action="http://localhost:4000/login/validate">
        <input
            class="textbox"
            type="text"
            id="symbol"
            name="symbol"
            placeholder="Add a symbol here"
            style="position: absolute; top: -70px; left: 865px"
        />
        <input
            class="textbox"
            type="text"
            id="quantity"
            name="quantity"
            placeholder="How many?"
            style="position: absolute; top: -70px; left: 865px"
        />
        <input
            class="buttons"
            type="submit"
            value="Submit"
            style="position: absolute; left: 220px"
        />
    </form>
</template>
