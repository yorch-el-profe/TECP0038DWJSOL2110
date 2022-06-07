import React from "react";

class Rectangle extends React.Component {
	render() {
		return (
			<div className="rectangle">
				<div className="subrectangle"></div>
				<div className="circle"></div>
				<div className="subrectangle"></div>
			</div>
		);
	}
}

export default Rectangle;
