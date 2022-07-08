const formEl = document.querySelector(".search-form");
const inputBarEl = document.querySelector(".search-bar");
const listEl = document.querySelector(".search-list");

const SITE_URL = "https://openlibrary.org";
const BASE_API_URL = "https://openlibrary.org/search.json?q=";

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = inputBarEl.value;
  const searchFormatted = inputValue.replaceAll(" ", "+");
  const apiURL = `${BASE_API_URL}/${searchFormatted}`;

  fetch(apiURL)
    .then((res) => {
       const json= res.json()
      return json;
    })
    .then((json) => {
      listEl.innerHTML = json.docs
        .map((el) => {
          return `<li>${el.title}</li>`;
        })
        .join("");
    })
    .catch((err) => {
      console.log(err);
      listEl.innerHTML = `<li>stai sbagliando fra</li>`;
    return []
    })
    .finally(()=>console.log(listEl.innerHTML));
});
