import React from "react";

class App extends React.Component {
	state = {
		horaActual: new Date().toLocaleTimeString(),
	};

	componentWillMount() {
		setInterval(() => {
			console.log("Actualizando el reloj");
			this.setState({ horaActual: new Date().toLocaleTimeString() });
		}, 1000);
	}

	render() {
		return (
			<>
				<h1>Hora Actual</h1>
				<h2>{this.state.horaActual}</h2>
			</>
		);
	}
}

export default App;
