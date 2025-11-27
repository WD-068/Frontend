const form = document.getElementById("form");
const list = document.getElementById("list");
const listItems = JSON.parse(localStorage.getItem("list")) || [];

console.log(listItems)

const addNewElement = (item) => {
      const li = document.createElement('li');
      li.id = item.id;
      li.innerText = item.content;
      list.append(li);
}
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const newItem = {
      id: new Date(),
      content: e.target.children[0].value,
    };
    listItems.push(newItem);
    localStorage.setItem('list', JSON.stringify(listItems));
    addNewElement(newItem);
})

document.addEventListener("DOMContentLoaded", (e) => {
    listItems.map((item) => {
       addNewElement(item) 
    })
})

localStorage.setItem("username", "Alice")
localStorage.setItem("age", 22)
localStorage.setItem("city", "Berlin")
localStorage.setItem("isStudent", true)
// setting with json.strigify
localStorage.setItem("person", JSON.stringify({username: "Carla", age: 25, city: "Hamburg", isStudent: false}))
localStorage.setItem(
  'students',
  JSON.stringify([
    { name: 'Alice', age: 22 },
    { name: 'Carla', age: 25 },
  ])
);

// Retrieving data
let username = localStorage.getItem('username');
console.log(username)

let age = localStorage.getItem("age")
console.log(age);

// parsing the data retrieved
let person = JSON.parse(localStorage.getItem("person"))
console.log(person)

let students = JSON.parse(localStorage.getItem("students"))
console.log(students)

// Deleteing items from local storage
localStorage.removeItem("username")
localStorage.removeItem("age")
localStorage.removeItem("city")
localStorage.removeItem("isStudent")
// localStorage.removeItem("students")

const newStudents = students.filter((student) => student.name !== "Alice")
console.log(newStudents)
localStorage.setItem("students", JSON.stringify(newStudents))

// localStorage.clear()