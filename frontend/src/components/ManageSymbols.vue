<script>
import { seeMySymbols } from "../../../backend/scripts/smileCalc.js";
import axios from "axios";

export default {
    data() {
        return {
            symbols: undefined,
            delete: undefined,
        };
    },
    async mounted() {
        this.symbols = await this.fetchMySymbols();
        this.delete = await this.asyncDeleteSymbols();
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

        async asyncDeleteSymbols() {
            let symbol = document.getElementById("symbols").value;
            let quantity = document.getElementById("quantity").value;
            await axios.delete("/api/dashboard/deleteStock", {
                // symbol: { symbol },
                // quantity: { quantity },
                data: {
                    symbol: "TSLA",
                    quantity: 2,
                },
            });
        },
    },
};
</script>
<template>
    <form method="post" action="api/dashboard/addstock">
        <input
            class="textbox"
            type="text"
            id="symbols"
            name="symbols"
            placeholder="Add a symbol here"
            style="position: absolute; top: 80px; left: 20px"
        />
        <input
            class="textbox"
            type="text"
            id="quantity"
            name="quantity"
            placeholder="How many?"
            style="position: absolute; top: 80px; left: 255px"
        />
        <input
            class="textbox"
            type="text"
            id="btprice"
            name="btprice"
            placeholder="Bought price?"
            style="position: absolute; top: 80px; left: 490px"
        />
        <input
            class="buttons"
            type="submit"
            value="Add"
            style="position: absolute; top: 105px; left: 750px"
        />
    </form>
    <input
        class="buttons"
        type="submit"
        value="See My Symbols"
        @click="fetchMySymbols()"
        style="position: absolute; top: 80px; left: 905px"
    />
    <input
        class="buttons"
        type="submit"
        value="Delete"
        @click="deleteSymbols()"
        style="position: absolute; top: 80px; left: 750px"
    />
    <h1 id="userSymbols" style="position: absolute; top: 130px">
        {{ symbols }}
    </h1>
</template>

<style scoped>
.textbox {
    width: 200px;
    height: 15px;
    border-radius: 5px;
    border: 1px solid rgb(19, 83, 19);
    padding: 15px;
    font-size: 16px;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    color: #555;
    outline: 0px solid rgb(19, 83, 19);
    transition: border-color 0.2s;
}

.buttons {
    width: 150px;
    height: 23px;
    border-radius: 5px;
    border: 1px solid rgb(19, 83, 19);
    padding: 2px;
    font-size: 12px;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    color: #555;
    outline: 0;
    transition: border-color 0.2s;
}
</style>
