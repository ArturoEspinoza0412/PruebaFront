import '../styles/cards.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'

const CardInfo = ({pokemon}) => {

    const imageFront = pokemon?.sprites?.front_default
    const imageBack = pokemon?.sprites?.back_default
    const imageBackShiny = pokemon?.sprites?.front_shiny

    let type;
    if( pokemon.types ){
        type = pokemon?.types[0].type?.name
    }


    return (
        <>
            <div className="card infoCard cardHeight">
                {
                    pokemon ?
                    <div>
                        <h4 className='titleInfo'>{pokemon?.name}</h4>
                        <p>Tipo: {type}</p>
                        <CCarousel controls indicators>
                            <CCarouselItem>
                                <CImage className="d-block w-100" src={imageFront} alt="slide 1" />
                            </CCarouselItem>
                            <CCarouselItem>
                                <CImage className="d-block w-100" src={imageBack} alt="slide 2" />
                            </CCarouselItem>
                            <CCarouselItem>
                                <CImage className="d-block w-100" src={imageBackShiny} alt="slide 3" />
                            </CCarouselItem>
                        </CCarousel>
                    </div>
                    :
                    <h4 className='titleInfo'>Pokemon no encontrado</h4>
                }
            </div>
        </>
    )
}

export default CardInfo;