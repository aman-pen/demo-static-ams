const request = require("request");
const cheerio = require("cheerio");

request(
  "https://sessionize.com/global-azure-blr-2022/",
  function (error, response, html) {
    if (!error && response.statusCode == 200) {
      console.log(html);
    }
  }
);
