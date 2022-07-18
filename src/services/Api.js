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

// export function webScrap() {
//   return fetch("https://sessionize.com/global-azure-blr-2022/")
//     .then((data) => data.text())
//     .then((data) => {
//       console.log(data);
//     });
// }

export async function webScrap() {
  const response = await fetch("https://sessionize.com/global-azure-blr-2022/");
  const text = await response.text();
  console.log(text.match(/(?<=\<h1>).*(?=\<\/h1>)/));
}
