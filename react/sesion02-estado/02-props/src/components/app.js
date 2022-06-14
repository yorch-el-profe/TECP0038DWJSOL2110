import React from "react";
import Button from "./button";

class App extends React.Component {
	render() {
		return (
			<>
				<h1>Hello World</h1>
				<Button color="red" text="Primer boton" />
				<Button color="blue" text="Segundo boton" />
				<Button color="cyan" text="Tercer boton" />
				<Button color="yellow" text="Anita lava la tina" />
				<Button />
			</>
		);
	}
}

export default App;
