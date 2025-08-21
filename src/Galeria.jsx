function Galeria({ imagenes }) {
  return (
    <div>
      <h2>6.Galería de Imágenes</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {imagenes.map((img) => (
          <div key={img.id}>
            <img src={img.url} alt={img.titulo} width="150" />
            <p>{img.titulo}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Galeria;