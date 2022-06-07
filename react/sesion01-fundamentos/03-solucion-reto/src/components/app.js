import React from "react";
import Rectangle from "./rectangle";

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Rectangle />
				<Rectangle />
				<Rectangle />
			</div>
		);
	}
}

export default App;
