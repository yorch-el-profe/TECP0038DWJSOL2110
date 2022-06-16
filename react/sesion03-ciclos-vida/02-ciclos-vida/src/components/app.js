import React from "react";
import Death from "./death";

class App extends React.Component {
	state = {
		counter: 0,
	};

	// 1er etapa del ciclo de vida
	// Creación del componente en memoria
	constructor(props) {
		super(props);
		console.log("1. constructor");
	}

	// 2da etapa de ciclo de vida
	// Antes de la PRIMER renderización del componente
	componentWillMount() {
		console.log("2. componentWillMount");
	}

	// 3er etapa del ciclo de vida
	// Renderizar la UI (se repite cada vez que se actualiza el estado o los props)
	render() {
		console.log("*. Renderizando...");
		return (
			<>
				<h1>Hello World</h1>
				<button onClick={() => this.handleClick()}>
					Click {this.state.counter}
				</button>
				{this.state.counter % 2 === 0 ? <Death /> : null}
			</>
		);
	}

	// 4ta etapa del ciclo de vida
	// Después de la PRIMER renderización del componente
	componentDidMount() {
		console.log("4. componentDidMount");
	}

	// 5to etapa del ciclo de vida
	// Después del renderizado cuando se actualiza el estado
	componentDidUpdate() {
		console.log("5. componentDidUpdate");
	}

	// Esto no tiene nada que ver
	// con el ciclo de vida
	handleClick() {
		this.setState({ counter: this.state.counter + 1 });
	}
}

export default App;
