export function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product)
    localStorage.setItem("cart", JSON.stringify(cart))
}

export function removeFromCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let newCart = cart.filter((p) => product.id !== p.id)
    localStorage.setItem('cart', JSON.stringify(newCart));
}