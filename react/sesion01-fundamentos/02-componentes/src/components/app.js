// const React  = require('react');
import React from "react";
import Rectangle from "./rectangle";
import Square from "./square";

class App extends React.Component {
	render() {
		/*
      class -> className
      for -> htmlFor
      tab-index -> tabIndex
    */
		return (
			<div className="container">
				<Rectangle />
				<div className="subcontainer">
					<Square />
					<Square />
				</div>
				<Rectangle />
			</div>
		);
	}
}

// module.exports = App;
export default App;
