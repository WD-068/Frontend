import {useState, useEffect } from "react"
import { fetchProducts } from "../network/fetchProducts"

function DisplayProducts() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetchProducts(setProducts);
    }, [])
    // console.log(products)
  return (
    <div>
    <ul>
        {products.map((p) => <li key={p.id}>{p.title}</li>)}
    </ul>
        
    </div>
  )
}

export default DisplayProducts