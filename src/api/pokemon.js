import axios from 'axios';

const pokemonService = {
    async getPokemon( name ) {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            return response
        } catch( err ){
            console.log(err)
            return err
        }
    
    }

}

export default pokemonService;