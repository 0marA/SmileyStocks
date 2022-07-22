<template>
    <h1 style="position: relative top: 100px;">This is the dashboard</h1>
    <form method="put" action="http://localhost:4000/dashboard/addstock">
        <input
            class="textbox"
            type="text"
            id="symbol"
            name="symbol"
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
            style="position: absolute; right: 367px"
        />
    </form>
</template>
