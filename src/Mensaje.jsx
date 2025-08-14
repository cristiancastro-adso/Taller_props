function Mensaje(props){

    return(
        <div>
            <h2>2.Mensaje personalizado</h2>
            <p>
                Hola soy {props.nombre} y tengo {props.edad} años.
            </p>
        </div>
    )
}

export default Mensaje