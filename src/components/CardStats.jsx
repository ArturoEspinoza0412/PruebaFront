const CardStats = ({ pokemon }) => {

    const stats = pokemon?.stats || []

    return (
        <>
            <div className="card cardHeight cardStats">
                <div className="card-body">
                    <h4 className="titleHabily">Estadisticas:</h4><br/>
                    {
                        stats.map((res, key) => 
                        <h5 >{res?.stat?.name}: {res?.base_stat}</h5>)

                    }
                </div>
            </div>
        </>
    )
}

export default CardStats