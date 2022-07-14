export function Api() {
  return fetch("https://sessionize.com/api/v2/msqv8bxy/view/All").then((data) =>
    data.json()
  );
}
