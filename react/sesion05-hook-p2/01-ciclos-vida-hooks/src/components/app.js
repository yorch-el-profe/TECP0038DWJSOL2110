import { useEffect, useState } from "react";

/*
  useEffect se ocupa para realizar cambios "side-effect":
  1. Actualizar el estado
  2. Modificar el DOM
  3. Integrar algún plugin o herramienta

  componentWillMount ❌
  componentDidMount ?
  componentDidUpdate ❌
  componentWillUnmount ?
*/
function App() {
	// ... <- componentWillMount
	// ... <- componentDidUpdate
	const [counter, setCounter] = useState(0);

	useEffect(function () {
		// Esta función se va actualizar después de cada renderización

		console.log("Después del renderizado");
	}, []);

	const esMayor = counter > 10;

	useEffect(
		function () {
			console.log(counter);
		},
		[esMayor] // [false] -> [true]
	);

	// El segundo parámetro es un arreglo de "dependencias"
	// Cuando una de las dependecias es modificada, entonces se ejecuta la función

	console.log("Renderizando...");

	return (
		<>
			<h1>Clicks: {counter}</h1>
			<button type="button" onClick={() => setCounter(counter + 1)}>
				+
			</button>
			<button type="button" onClick={() => setCounter(counter - 1)}>
				-
			</button>
		</>
	); // <- render
}

export default App;
