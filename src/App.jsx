import Saludo from "./Saludo"
import Mensaje from "./Mensaje"
import Lista from "./Lista"
import Tarjeta from "./Tarjeta"

function App() {

  return (
    <div>
    <Saludo Nombre="Pipe"/> <hr />
    <Mensaje nombre="Juan" edad={25}/><hr />
    <Lista habilidades={["La música", "Patinar", "Amar los gatos"]}/> <hr />
    <Tarjeta name="kenjisito" foto="/Kenjisito.jpg" descripcion="un gatete gordete"/>
    </div>
  )
}

export default App
