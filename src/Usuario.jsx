function Usuario({ nombre, edad, foto }) {
  return (
    <div>
        <hr />
      <h3>{nombre}</h3>
      <img 
        src={foto} 
        alt={nombre} 
        style={{ width: "200px"}} 
      />
      <p>Edad: {edad}</p>
      <hr />
    </div>
  );
}

export default Usuario;
