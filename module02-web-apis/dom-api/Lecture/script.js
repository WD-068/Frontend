/*==========================================================================
 * SECTION 1: ACCESSING THE DOCUMENT OBJECT
 *==========================================================================*/

// The document object gives access to the entire HTML document structure

console.log(document);
console.log(document.body);
console.log(document.firstChild);

/*==========================================================================
 * SECTION 2: SELECTING ELEMENTS
 *==========================================================================*/

// 2.1 Using querySelector (returns the first matching element)
console.log(document.querySelector("body"));
console.log(document.querySelector("#outer-container"));
console.log(document.querySelector(".bodyClass"));

// 2.2 Using getElementsByClassName (returns HTMLCollection of all matching elements)
console.log(document.getElementsByClassName("bodyClass"));

// HTMLCollection:

// - A live collection of HTML elements
// - Automatically updates when the DOM changes
// - Only contains HTML elements
// - Accessed via methods like getElementsByClassName() or getElementsByTagName()
// - Has a length property
// - Can only be accessed by index or name
// - Cannot use forEach() directly

// 2.3 Using getElementById (preferred for ID selection - faster and more specific)
console.log(document.getElementById("click-button"));

// 2.4 Using querySelectorAll (returns NodeList of all matching elements)
const allDivs = document.querySelectorAll("div");
console.log(allDivs);

// NodeList:

// - Static NodeLists (from querySelectorAll()) do not automatically update when DOM changes
// - Contains all types of nodes (elements, text nodes, comments)
// - Created by methods like querySelectorAll()
// - Has a length property
// - Can use forEach() method

/*==========================================================================
 * SECTION 3: STORING ELEMENTS IN VARIABLES
 *==========================================================================*/

// Best practice: Store elements you'll use multiple times in variables

const clickButton = document.getElementById("click-button");
const outerContainer = document.getElementById("outer-container");
const innerContainer = document.getElementById("inner-container");

// console.log(clickButton);
// console.log(outerContainer);

/*==========================================================================
 * SECTION 4: ACCESSING ELEMENT CONTENT
 *==========================================================================*/

const h1 = document.getElementById("main-heading");
console.log(h1);
console.log(h1.innerText); // Only visible text content (respects CSS styling)
console.log(h1.textContent); // All text content regardless of visibility
console.log(h1.innerHTML); // HTML content including tags (security risk with user input!)

/*==========================================================================
 * SECTION 5: MODIFYING ELEMENTS
 *==========================================================================*/

// 5.1 Changing text content
h1.innerText = "DOM Manipulation is Fun!";

// 5.2 Modifying Tailwind classes
h1.className = "text-4xl font-bold text-blue-600 mb-4 text-center";

// 5.3 Alternative way to modify classes using classList
h1.classList.remove("text-blue-600");
h1.classList.add("text-green-500");
h1.classList.add("underline");

// 5.4 Changing Styles with Vanilla CSS
// Directly modifying inline styles using .style property
h1.style.color = "white";
h1.style.backgroundColor = "green";
h1.style.fontSize = "20px";

// 5.5 Simple button click example
clickButton.addEventListener("click", () => {
  clickButton.innerText = "Clicked!";

  clickButton.classList.add("bg-green-500");

  h1.innerText = "Button was clicked!";

  alert("Hello!");
});

/*==========================================================================
 * SECTION 6: CREATING AND APPENDING ELEMENTS
 *==========================================================================*/

// Create a new paragraph element
const newParagraph = document.createElement("p");

// Add content and attributes
newParagraph.textContent = "This paragraph was created dynamically!";
newParagraph.className = "text-purple-500 mt-4 text-center";
newParagraph.id = "dynamic-paragraph";

// Append to the DOM
outerContainer.appendChild(newParagraph);

// Alternative positioning
// outerContainer.insertBefore(newParagraph, innerContainer);
// outerContainer.prepend(newParagraph);

/*==========================================================================
 * SECTION 7: EVENT HANDLING
 *==========================================================================*/
// Multiple ways to add event listeners:

// Method 1: addEventListener (preferred - allows multiple listeners)
clickButton.addEventListener("mouseover", () => {
  clickButton.classList.add("scale-110");
});

clickButton.addEventListener("mouseout", () => {
  clickButton.classList.remove("scale-110");
});

// Method 2: onclick property (only allows one listener)
// clickButton.onclick = () => alert("Button clickesd!");
