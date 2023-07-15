import { useState } from 'react';
import Pokemon from '../api/pokemon';
import logoP from '../assets/images/logoP.png'
import pokepolabola from '../assets/images/pokebolabola.jpg'

const CardWelcome = ({setPokemon}) => {

    let name = ''
    const [noData, setNoData] = useState(true)

    const searchPokemon = async (name) => {
        const res = await Pokemon.getPokemon(name)
        setPokemon(res.data)
    }

    const data = (event) => {
        name = event.target.value
    
        if( name !== '' ){
            setNoData(false)
        } else {
            setNoData(true)
        }
    }

    return (
        <>
            <div className="card welcomeCard">
                <div className='container-log-pok'>
                <img src={logoP} alt="" className='img-logo'/>
                <img src={pokepolabola} alt="" className='img-pok'/>
                </div>
                <div className="card-body">
                    <h5 className='text-title'>Bienvenido entrenador</h5>
                    <label className="form-label">Elije a tu Pokemon para tu siguiente duelo:</label>
                    <input type='text'  className="form-control inputPokemon" onChange={data}/><br/>
                    <button className="btn btn-primary buton" onClick={() => searchPokemon(name)} disabled={noData}>Buscar</button>
                </div>
            </div>
        </>
    )
}

export default CardWelcome;