import { useState, useEffect } from "react";

function App() {
	const [currentTime, setCurrentTime] = useState(
		new Date().toLocaleTimeString()
	);

	/*
    useEffect tiene un segundo parametro tal que:

    1. Si es un arreglo vacío, entonces la función se ejecuta 1 única vez (componentDidMount).

    2. Si no se pasa el parámetro entonces la función se ejecuta cada vez que se actualiza el estado (componentDidUpdate).

    3. La función se ejecutará de acuerdo al cambio en las dependencias dentro del arreglo.
  */
	useEffect(function () {
		console.log("useEffect");
		setInterval(function () {
			setCurrentTime(new Date().toLocaleTimeString());
		}, 1000);
	}, []);

	return (
		<>
			<h1>Hora Actual</h1>
			<h2>{currentTime}</h2>
		</>
	);
}

export default App;
