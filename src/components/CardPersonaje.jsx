export const CardPersonaje = (props) => {

    console.log("props", props)

    const {nombre, edad, aldea, rango, afiliación, jutsu_destacado, estado, imagen} = props
    
    return (
        <div className="card-personaje">
            <img src={`/img/${imagen}`} alt="Personajes" />
            <div>
                <h2>{nombre}</h2>
                <p>Edad: {edad}</p>
                <p>Aldea: {aldea}</p>
                <p>Rango: {rango}</p>
                <p>Afiliación: {afiliación}</p>
                <p>Justu destacado:{jutsu_destacado}</p>
                <p className={`${estado == "Vivo" ? "live" : "dead"}`}>Estado: {estado}</p>
            </div>
        </div>
    )
}