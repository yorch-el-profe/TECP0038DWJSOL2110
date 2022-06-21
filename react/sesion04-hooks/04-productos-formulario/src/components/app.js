import { useState } from "react";
import ProductCard from "./product-card";

function App() {
	const [products, setProducts] = useState([
		{
			name: "Nintendo Switch v1.1",
			price: 6500,
			description: "Consola de Nintendo portable.",
			picture:
				"https://m.media-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg",
		},
		{
			name: "Xbox Series X",
			price: 18000,
			description: "Consola de última generación de Microsoft.",
			picture:
				"https://compass-ssl.xbox.com/assets/b9/0a/b90ad58f-9950-44a7-87fa-1ee8f0b6a90e.jpg?n=XSX_Page-Hero-0_768x792.jpg",
			discount: 0.1,
		},
		{
			name: "Playstation 5",
			price: 20000,
			description: "Consola de última generación de Sony.",
			picture:
				"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ps5-playstaton-5-2-1600255876.jpg",
		},
		{
			name: "Paleta Payaso",
			price: "14",
			description: "Una rica paleta de chocolate y bombon",
			picture:
				"https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2018/05/pastel-de-paleta-payaso.jpg",
		},
	]);

	return (
		<div className="center-container">
			<div class="container">
				<form className="row">
					<div class="mb-3 col-6">
						<label class="form-label">Nombre del producto</label>
						<input type="text" class="form-control" />
					</div>
					<div class="mb-3 col-6">
						<label class="form-label">Precio</label>
						<input type="text" class="form-control" />
					</div>
					<div class="mb-3 col-6">
						<label class="form-label">Descripción</label>
						<textarea className="form-control"></textarea>
					</div>
					<div class="mb-3 col-6">
						<label class="form-label">Foto (url)</label>
						<input type="text" class="form-control" />
					</div>
					<button type="submit" className="btn btn-primary">
						Agregar
					</button>
				</form>
			</div>
			<div className="d-flex justify-content-center align-items-center flex-wrap">
				{products.map((product) => (
					<ProductCard
						name={product.name}
						price={product.price}
						description={product.description}
						picture={product.picture}
						discount={product.discount}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
