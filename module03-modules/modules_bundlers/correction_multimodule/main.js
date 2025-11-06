import { fetchProducts } from "./modules/network.js";
import { createProductCard } from "./modules/ui.js";

// Fetch from the products and displaying the cards
window.addEventListener("load", async() => {
    try {
        const productContainer = document.getElementById('product-container');
        const products = await fetchProducts();
        
        products.forEach((product) => {
            const productCard = createProductCard(product)
            productContainer.appendChild(productCard)
        })
    } catch(error) {
        console.error(error)
    }
})