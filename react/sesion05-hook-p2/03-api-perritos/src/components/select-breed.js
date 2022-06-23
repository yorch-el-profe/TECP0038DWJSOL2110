import { useState, useEffect, useRef } from "react";

function SelectBreed({ onBreedChange }) {
	const [breeds, setBreeds] = useState([]);
	// Guardando la referencia de <select>
	const selectRef = useRef(null);

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
		onBreedChange(selectRef.current.value);
	}

	return (
		<form onSubmit={onSubmit}>
			<div className="mb-3">
				<label className="form-label">Lista de razas disponibles</label>
				<select className="form-select text-capitalize" ref={selectRef}>
					{breeds.map((breed) => (
						<option value={breed}>{breed}</option>
					))}
				</select>
			</div>
			<button type="submit" className="btn btn-primary">
				Obtener imagen
			</button>
		</form>
	);
}

export default SelectBreed;
