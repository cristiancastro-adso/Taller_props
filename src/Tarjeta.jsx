function Tarjeta(props){

    return(
        <div>
            <h2>4.Tarjeta de perfil</h2>
                <p>{props.name}</p>
                <img src={props.foto} />
                <p>{props.descripcion}</p>
        </div>
    )
}

export default Tarjeta