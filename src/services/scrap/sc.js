const axios = require("axios");
const cheerio = require("cheerio");
axios.get("https://sessionize.com/global-azure-blr-2022/").then(({ data }) => {
  const $ = cheerio.load(data);

  let dt = $("strong")[2].attribs["data-date"];
  dt = dt.split("G");
  dt = dt[0];
  const endDate = new Date(dt);
  console.log(typeof endDate);
  // console.log($(el).data("date"));
});
