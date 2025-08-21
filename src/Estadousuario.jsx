function Estadousuario({logueado}){
    return(
        <div>
            <h2>8. Renderizado condicional con props</h2>
            <p>{logueado ? "Bienvenido" : "Inicia Sesion"}</p>
        </div>
    )
}

export default Estadousuario