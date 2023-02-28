const axios = require("axios");
const cheerio = require("cheerio");

const configHandler = require("./configHandler");
const config = configHandler.getConfig();

console.log("StackOverflow-Login started...");

function login(){
    axios.get("https://stackoverflow.com/users/login")
        .then(response => {
            const $ = cheerio.load(response.data);

            const fkey = $("input[name='fkey']").attr("value");
            const s = $("input[name='s']").attr("value");
            console.log("Trying to login...");
            return axios.post("https://stackoverflow.com/users/login",
                `email=${config.email}&password=${config.password}&fkey=${fkey}&ssrc=${s}`,
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    withCredentials: true,
                },
            );
        })
        .then(response => {
            console.log(`Your login attempt gave the following result: ${response.status}`);
        })
        .catch(error => {
            console.log(`Your login attempt gave the following result: ${error}`);
        });
}

login();
setInterval(() => login(), 24 * 60 * 60 * 1000);
