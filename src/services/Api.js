export function ApiSpeaker() {
  return fetch("https://sessionize.com/api/v2/yh2xd00c/view/Speakers")
    .then((data) => data.json())
    .catch((err) => {
      console.log(err);
    });
}
export function ApiSession() {
  return fetch("https://sessionize.com/api/v2/yh2xd00c/view/Sessions")
    .then((data) => data.json())
    .catch((err) => {
      console.log(err);
    });
}

export function webScrap() {
  return fetch("https://sessionize.com/global-azure-blr-2022/", {
    // mode: "cors",
    // headers: {
    //   "Access-Control-Allow-Origin": "*",
    //   "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    // },
  })
    .then((res) => {
      // console.log(res);
      res.text();
    })
    .then((data) => {
      let parser = new DOMParser();
      let doc = parser.parseFromString(data, "text/html");

      let endDate = doc.querySelectorAll("strong")[2].dataset.date;
      // console.log(endDate, "Ldate");
      return new Date(endDate);
    })
    .catch((err) => {
      console.log(err);
    });
}
