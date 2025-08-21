function Producto({ nombre, precio }) {
  return (
    <div>
        <h4>{nombre}</h4>
        <p>Precio: ${precio} pesotes</p>
    </div>
  );
}

export default Producto;
