const fs = require("fs");
const path = require("path");

const configPath = path.resolve("config.json");

const validJson = (obj) => {
    try {
        JSON.parse(obj);
    }
    catch (e){
        return false;
    }
    return true;
};

const getConfig = () => {
    if (!fs.existsSync(configPath)){
        console.error("Konfigurationsdatei existiert nicht! Gehe sicher, dass du 'config.template.json' kopierst und als 'config.json' einfügst.");
        process.exit(1);
    }
    let jsondata = "";
    try {
        jsondata = String(fs.readFileSync(configPath));
    }
    catch (e){
        console.error(`Kann Konfigurationsdatei nicht lesen: ${e}`);
        process.exit(1);
    }

    if (validJson(jsondata)) return JSON.parse(jsondata);

    console.error("Konfigurationsdatei ist in keinem validen JSON Format. Stoppe...");
    process.exit(1);
};

module.exports = {
    getConfig,
};
