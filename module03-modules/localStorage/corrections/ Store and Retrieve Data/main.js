const form = document.getElementById('form');
const list = document.getElementById('list');
const reloadBtn = document.getElementById('reload');
let myQuotes = JSON.parse(localStorage.getItem("quotes")) || [];

const addNewItem = (item) => {
    const li = document.createElement("li");
    li.textContent = item
    return li;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userInput = document.getElementById('userInput').value.trim();
  if(!userInput) return alert("Please, enter something before submitting");
  myQuotes.unshift(userInput);
  localStorage.setItem("quotes", JSON.stringify(myQuotes))
  const newLi = addNewItem(userInput)
  list.insertBefore(newLi, list.firstElementChild);
  form.reset()
});

reloadBtn.addEventListener("click", () => window.location.reload())

window.addEventListener("load", () => {
    myQuotes = JSON.parse(localStorage.getItem('quotes')) || [];
    myQuotes.forEach((quote) => {
        const newLi = addNewItem(quote);
        list.appendChild(newLi)
    })
})
