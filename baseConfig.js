var date = new Date();
var vccd =date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2) + ("0" + date.getDate()).slice(-2) + ("0" + date.getHours() ).slice(-2) + ("0" + date.getMinutes()).slice(-2) + ("0" + date.getSeconds()).slice(-2);
const testConfig=
    {
        "dev": "https://colorlib.com/etc/regform/colorlib-regform-36/",
        "username": "dganesh@ceiamerica.com ",
        "password": "Ganesh@12345",
        "baseURL":"https://www.ceiamerica.com/",
        "visualComparisonDate":"20220902135418",
        linksToSkip:["https://www.facebook.com","https://twitter.com","https://www.linkedin.com","https://www.ceiamerica.com/wp","https://share.hsforms.com/","https://js.hs-scripts.com/","https://fonts.googleapis.com/","https://www.googletagmanager.com/"],
        "Env":"dev",
        "Language":"fr",
        "elementFinderURL":"https://colorlib.com/etc/regform/colorlib-regform-36/"
    }
    module.exports={testConfig}