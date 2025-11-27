export const fetchProducts = async(setState) => {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json()
    setState(products);
}

export const fetchOnePokemon = async (url, setState) => {
  const res = await fetch(url);
  const data = await res.json();
  setState(data);
};