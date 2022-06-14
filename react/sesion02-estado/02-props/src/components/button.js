import React from "react";

class Button extends React.Component {
	/*
  constructor(props) {
    super(props); // Invocando el constructor de la clase padre (React.Component)
  }
  */

	render() {
		const estilos = {
			backgroundColor: this.props.color || "white",
		};
		return <button style={estilos}>{this.props.text || "Un botón"}</button>;
	}
}

export default Button;
