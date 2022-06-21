import { useState } from "react";

function App() {
	/* Versión larga pero entendible
  const state = useState(0);

	// Estado actual del componente
	const currentState = state[0];

	// Función para actualizar el estado
	const setState = state[1];

	function handleClick() {
		setState(currentState + 1);
	}
  */

	// Versión real (utilizando el destructuring)
	const [counter, setCounter] = useState(0);

	console.log("Renderizando...");

	return (
		<div className="d-flex vw-100 vh-100 justify-content-center align-items-center">
			<div className="col-6 text-center">
				<h1 className="fs-1 text-danger fw-bold">{counter}</h1>
				<div className="d-grid gap-2 col-4 mx-auto mt-5">
					<button
						className="btn btn-primary"
						type="button"
						onClick={() => setCounter(counter + 1)}
					>
						Click
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
