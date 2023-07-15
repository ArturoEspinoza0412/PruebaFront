import '../styles/general.css';
import { useState } from 'react';

import CardStats from '../components/CardStats';
import CardHabilities from '../components/cardHabilities';
import CardInfo from '../components/CardIonfo';
import CardWelcome from '../components/cardWelcome';

const Home = () => {

    const [pokemon, setPokemon] = useState({})
    console.log(pokemon)

    return (
        <>
            <div className='container'>
                <div>
                    <CardWelcome setPokemon={setPokemon}/>
                    <br />
                    <div className='row '>
                        <div className='col-4'>
                            {
                                pokemon.name &&
                                <CardInfo pokemon={pokemon} />
                            }
                        </div>
                    
                        <div className='col-4'>
                            {
                                pokemon.name &&
                                <CardHabilities pokemon={pokemon} />
                            }
                        </div>
                        <div className='col-4'>
                            {
                                pokemon.name &&
                                <CardStats pokemon={pokemon} />
                            }
                        </div>
                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;