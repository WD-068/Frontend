import { addToCart } from "./storage.js";

// Create a product card
export function createProductCard(product) {
    const card = document.createElement("div");
    card.className = 'bg-white shadow-md rounded-lg overflow-hidden';

    const image = document.createElement("img")
    image.src = product.image
    image.alt = product.title
    image.className = 'w-full h-48 object-cover';

    const cardBody = document.createElement("div")
    cardBody.className = "p-4"

    const title = document.createElement("h2");
    title.textContent = product.title
    title.className = 'text-lg font-semibold truncate';

    const price = document.createElement("p")
    price.textContent = `$${product.price}`
    price.className = "text-sm text-gray-600"

    const addButton = document.createElement("button")
    addButton.textContent = "Add To Cart"
    addButton.onclick = () => addToCart(product)
    addButton.className = 'bg-blue-500 text-white px-4 py-2 mt-2 rounded';

    // adding elements to the cardbody
    cardBody.appendChild(title);
    cardBody.appendChild(price);
    cardBody.appendChild(addButton)

    // add the cardbody and the image to the card
    card.appendChild(image);
    card.appendChild(cardBody);

    return card
}