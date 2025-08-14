function Lista(props){

    return(
        <div>
            <h2>3.Lista de habilidades</h2>
            <h4>Me llamo PiPe y mis habilidades son</h4>
            <ul>
                {props.habilidades.map(
                    (dato,posicion) => (
                        <li key={posicion}>{dato} </li>
                    )
                )}
            </ul>
        </div>

    )
}

export default Lista