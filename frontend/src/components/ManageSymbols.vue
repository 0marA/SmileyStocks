<template>
    <form method="post" action="http://localhost:4000/api/dashboard/addstock">
        <input
            class="textbox"
            type="text"
            id="symbols"
            name="symbols"
            placeholder="Add a symbol here"
            style="position: absolute; top: 0px; left: 865px"
        />
        <input
            class="textbox"
            type="text"
            id="quantity"
            name="quantity"
            placeholder="How many?"
            style="position: absolute; top: 30px; left: 865px"
        />
        <input
            class="buttons"
            type="submit"
            value="Submit"
            style="position: fixed; left: 1009px"
        />
    </form>
    <input
        class="buttons"
        type="submit"
        value="See My Symbols"
        formaction="http://localhost:4000/dashboard/getstocks"
        style="position: fixed; left: 873px"
    />
</template>
