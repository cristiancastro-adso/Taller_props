import { useState } from "react";

function Contador({ inicial }) {
  const [contador, setContador] = useState(inicial);

  const incrementar = () => setContador(contador + 1);

  return (
    <div>
    <h2>9. Contador inicial</h2>
      <h3>Contador: {contador}</h3>
      <button onClick={incrementar}>+1</button>
    </div>
  );
}

export default Contador;
