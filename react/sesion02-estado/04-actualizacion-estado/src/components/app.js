import React from "react";

class App extends React.Component {
	state = {
		counter: 0,
	};

	handleClick() {
		this.setState({ counter: this.state.counter + 1 });
	}

	render() {
		console.log("Renderizando...");
		return (
			<div className="d-flex vw-100 vh-100 justify-content-center align-items-center">
				<div className="col-6 text-center">
					<h1 className="fs-1 text-danger fw-bold">{this.state.counter}</h1>
					<div className="d-grid gap-2 col-4 mx-auto mt-5">
						<button
							className="btn btn-primary"
							type="button"
							onClick={() => this.handleClick()}
						>
							Click
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
