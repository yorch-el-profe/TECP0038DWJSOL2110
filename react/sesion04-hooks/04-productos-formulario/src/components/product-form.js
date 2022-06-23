import { useState } from "react";

function ProductForm({ onProductSubmit }) {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState(0);
	const [picture, setPicture] = useState("");

	function onSubmit(e) {
		e.preventDefault();

		const product = {
			name,
			picture,
			price,
			description, //"description": description
		};

		onProductSubmit(product);
	}

	return (
		<form className="row" onSubmit={onSubmit}>
			<div className="mb-3 col-6">
				<label className="form-label">Nombre del producto</label>
				<input
					type="text"
					className="form-control"
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div className="mb-3 col-6">
				<label className="form-label">Precio</label>
				<input
					type="text"
					className="form-control"
					onChange={(e) => setPrice(e.target.value)}
				/>
			</div>
			<div className="mb-3 col-6">
				<label className="form-label">Descripción</label>
				<textarea
					className="form-control"
					onChange={(e) => setDescription(e.target.value)}
				></textarea>
			</div>
			<div className="mb-3 col-6">
				<label className="form-label">Foto (url)</label>
				<input
					type="text"
					className="form-control"
					onChange={(e) => setPicture(e.target.value)}
				/>
			</div>
			<button type="submit" className="btn btn-primary">
				Agregar
			</button>
		</form>
	);
}

export default ProductForm;
