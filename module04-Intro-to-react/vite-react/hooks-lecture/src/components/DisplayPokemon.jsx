import {useState, useEffect} from "react"
import { fetchOnePokemon } from "../network/fetchProducts"


function DisplayPokemon() {
    const [pokemon, setPokemon] = useState(null);
    const [search, setSearch] = useState("ditto")

    useEffect(() => {
        fetchOnePokemon(`https://pokeapi.co/api/v2/pokemon/${search}`, setPokemon);
    }, [search])
    
    console.log(pokemon)
  return (
    <div>
      <button onClick={() => setSearch('charmander')}>search</button>
    </div>
  );
}

export default DisplayPokemon