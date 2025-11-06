import { handleSubmit, displayItems } from './ui/ui.js';
import { displayPokemonList } from "./ui/displayPokemonList.js"

const main = () => {   
    displayItems()
    handleSubmit()
    displayPokemonList()
}

main()