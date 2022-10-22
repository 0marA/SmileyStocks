<script>
import { seeMySymbols } from "../../../backend/scripts/smileCalc.js";

export default {
    data() {
        return {
            symbols: undefined,
        };
    },
    async mounted() {
        this.symbols = await this.fetchMySymbols();
    },
    methods: {
        async fetchMySymbols() {
            let userSymbolsID = document.getElementById("userSymbols");
            if (userSymbolsID.style.display === "none") {
                userSymbolsID.style.display = "block";
            } else {
                userSymbolsID.style.display = "none";
            }
            return await seeMySymbols();
        },
    },
};
</script>
<template>
    <form method="post" action="https://smileystocks.onrender.com/api/dashboard/addstock">
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
            class="textbox"
            type="text"
            id="btprice"
            name="btprice"
            placeholder="Bought price?"
            style="position: absolute; top: 60px; left: 865px"
        />
        <input
            class="buttons"
            type="submit"
            value="Submit"
            style="position: relative; top: 30px; left: 1000px"
        />
    </form>
    <input
        class="buttons"
        type="submit"
        value="See My Symbols"
        @click="fetchMySymbols()"
        style="position: relative; top: 8px; left: 865px"
    />
    <h1 id="userSymbols">{{ symbols }}</h1>
</template>
