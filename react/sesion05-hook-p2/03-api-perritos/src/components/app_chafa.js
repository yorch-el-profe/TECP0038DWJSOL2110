import { useEffect, useState } from "react";

function App() {
	const [breeds, setBreeds] = useState([]);
	const [breed, setBreed] = useState(null);
	const [picture, setPicture] = useState(null);

	useEffect(function () {
		fetch("https://bedu-dogs-api.herokuapp.com/breeds")
			.then(function (response) {
				return response.json();
			})
			.then(function ({ data }) {
				setBreeds(data);
			});
	}, []);

	function onSubmit(e) {
		e.preventDefault();

		fetch(`https://bedu-dogs-api.herokuapp.com/breeds/${breed}/images`)
			.then(function (response) {
				return response.json();
			})
			.then(function ({ data }) {
				setPicture(data);
			});
	}

	return (
		<div className="container mt-4">
			<form onSubmit={onSubmit}>
				<div className="mb-3">
					<label className="form-label">Lista de razas disponibles</label>
					<select
						className="form-select text-capitalize"
						onChange={(e) => setBreed(e.target.value)}
					>
						{breeds.map((breed) => (
							<option value={breed}>{breed}</option>
						))}
					</select>
				</div>
				<button type="submit" className="btn btn-primary">
					Obtener imagen
				</button>
			</form>

			<div className="d-flex justify-content-center align-items-center">
				<img className="img-fluid" src={picture} />
			</div>
		</div>
	);
}

export default App;
