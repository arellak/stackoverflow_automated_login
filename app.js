const axios = require("axios");
const cheerio = require("cheerio");

const configHandler = require("./configHandler");
const config = configHandler.getConfig();

console.log("StackOverflow-Login started...");
let daysVisited = config.daysVisitedStart;

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
            if(response.status === 200){
                daysVisited++;
                console.log(`Your login attempt succeedded! You've visited ${daysVisited} days in a row!`);
            }
            else{
                console.log(`Your login attempt gave the following result: ${res.status}!`);
            }
        })
        .catch(error => {
            console.log(`Your login attempt gave the following result: ${error}`);
        });
}

login();
setInterval(() => login(), 24 * 60 * 60 * 1000);
