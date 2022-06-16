import React from "react";

class Death extends React.Component {
	render() {
		return <h2>Me muero cuando el click es impar</h2>;
	}

	// 6ta etapa del ciclo de vida
	// La destrucción del componente
	componentWillUnmount() {
		console.log("6. componentWillUnmount (Death Component)");
	}
}

export default Death;
