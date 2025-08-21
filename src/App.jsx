import Saludo from "./Saludo"
import Mensaje from "./Mensaje"
import Lista from "./Lista"
import Tarjeta from "./Tarjeta"
import Boton from "./Boton"
import Galeria from "./Galeria";
import Producto from "./Producto";
import Estadousuario from "./EstadoUsuario"
import Contador from "./Contador"
import Usuario from "./Usuario"

function App() {
    const mostrarAlerta = () => {
    alert("evento con props en react");}

    const listaImagenes = [
    { id: 1, url: "/Gatojum.jpg", titulo: "Gatito Juuuum" },
    { id: 2, url: "/Gatoloader.jpeg", titulo: "Gatito Loader" },
    { id: 3, url: "/Theitolindo.jpg", titulo: "Mihijito" },
  ];

    const usuarios = [
    { id: 1, nombre: "pipe", edad: 20, foto: "/pipe.jpeg" },
    { id: 2, nombre: "yisel", edad: 18, foto: "/yisel.jpeg" },
    { id: 3, nombre: "kenji primero archiduque de francia heredero de la dinastia ruiz fajardo", edad: 4, foto: "/kenji.jpg" },
  ];
    
  return (
    <div>
    <Saludo Nombre="Pipe"/> <hr />
    <Mensaje nombre="Juan" edad={25}/><hr />
    <Lista habilidades={["La música", "Patinar", "Amar los gatos"]}/> <hr />
    <Tarjeta name="kenjisito" foto="/Kenjisito.jpg" descripcion="un gatete gordete"/>
    <Boton onClick={mostrarAlerta} />
    <Galeria imagenes={listaImagenes} />
    <h2>7.Producto con precio</h2>
    <Producto nombre="Laptop" precio={2500000} />
    <Producto nombre="Celular" precio={120000} />
    <Producto nombre="Audífonos" precio={350000} />
    <Estadousuario logueado={true}></Estadousuario>
    <Contador inicial={100} />
    <h2>10. Componente padre con varios hijos</h2>
    {usuarios.map((user) => (
        <Usuario key={user.id} nombre={user.nombre} foto={user.foto} edad={user.edad} />
      ))}
    </div>
  )
}

export default App
