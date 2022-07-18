export function ApiSpeaker() {
  return fetch("https://sessionize.com/api/v2/yh2xd00c/view/Speakers").then(
    (data) => data.json()
  );
}
export function ApiSession() {
  return fetch("https://sessionize.com/api/v2/yh2xd00c/view/Sessions").then(
    (data) => data.json()
  );
}

export function webScrap() {
  return fetch(
    "https://thingproxy.freeboard.io/fetch/https://sessionize.com/global-azure-blr-2022/"
  )
    .then((res) => res.text())
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
