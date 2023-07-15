


const CardHabilities = ({ pokemon }) => {

    const abilities = pokemon?.abilities || []
    const moves = pokemon?.moves || []
    const selectMoves = moves.slice(0, 3)

    return (
        <>
            <div className="card cardHeight cardHability">
                <div className="card-body">
                    <h4 className="titleHabily">Habilidades:</h4>
                    {
                        abilities.map((res) => 
                            <h5>{res?.ability?.name}</h5>
                        )
                    }
                    <br />
                    <h4>Movimientos:</h4>
                    {
                        selectMoves.map((res, key) => 
                            <h5>{res?.move?.name}</h5>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default CardHabilities;