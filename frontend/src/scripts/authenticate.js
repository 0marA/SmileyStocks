import router from "../router";
import { setUserPath } from "../router";

export default {
    methods: {
        authenticate() {
            let username = document.getElementById("USERNAME").value;
            let password = document.getElementById("PASSWORD").value;
            if (password == accounts[username].password) {
                setUserPath(username.toLowerCase());
                router.push("/" + username.toLowerCase() + "dashboard");
            } else alert("Invalid Credentials");
        },
    },
};
