export function ApiSpeaker() {
  return fetch("https://sessionize.com/api/v2/yh2xd00c/view/Speakers").then(
    (data) => data.json()
  );
}
