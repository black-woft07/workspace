import { useState } from "react";
import "./App.css";

function App() {

  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState(null);

  // =====================================
  // FUNCIONES
  // =====================================

  function sumar(a, b) {
    return a + b;
  }

  function restar(a, b) {
    return a - b;
  }

  function multiplicar(a, b) {
    return a * b;
  }

  function dividir(a, b) {
    return a / b;
  }

  // =====================================
  // EVENTOS
  // =====================================

  function handleSuma() {
    setResultado(sumar(Number(numero1), Number(numero2)));
  }

  function handleResta() {
    setResultado(restar(Number(numero1), Number(numero2)));
  }

  function handleMultiplicacion() {
    setResultado(multiplicar(Number(numero1), Number(numero2)));
  }

  function handleDivision() {
    setResultado(dividir(Number(numero1), Number(numero2)));
  }

  function handleLimpiar() {
    setNumero1("");
    setNumero2("");
    setResultado(null);
  }

  return (
    <div className="app-container">
      <div className="calculator-card">
        <h1>Calculadora React</h1>

        <div className="input-group">
          <label htmlFor="numero1">Número 1</label>
          <input
            id="numero1"
            type="number"
            placeholder="Ingresa un número"
            value={numero1}
            onChange={(e) => setNumero1(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="numero2">Número 2</label>
          <input
            id="numero2"
            type="number"
            placeholder="Ingresa otro número"
            value={numero2}
            onChange={(e) => setNumero2(e.target.value)}
          />
        </div>

        <div className="button-row">
          <button className="action-button" onClick={handleSuma}>
            Sumar
          </button>
          <button className="action-button" onClick={handleResta}>
            Restar
          </button>
          <button className="action-button" onClick={handleMultiplicacion}>
            Multiplicar
          </button>
          <button className="action-button" onClick={handleDivision}>
            Dividir
          </button>
        </div>

        <div className="button-row">
          <button className="secondary-button" onClick={handleLimpiar}>
            Limpiar
          </button>
        </div>

        {resultado !== null && (
          <div className="result-card">
            <h2>Resultado: {resultado}</h2>
          </div>
        )}
      </div>
    </div>
  );
}
export default App; 