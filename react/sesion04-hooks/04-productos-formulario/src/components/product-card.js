function ProductCard({ discount, picture, price, name, description }) {
	const styles = {
		backgroundColor: "black",
	};

	if (discount > 0) {
		styles.backgroundColor = "red";
	}

	return (
		<figure className="snip1171">
			<img src={picture} />
			<div className="price">${price}</div>
			<figcaption>
				<h3 className="fs-5">{name}</h3>
				<p className="fs-6">{description}</p>
				<a style={styles} className="text-white">
					Agregar al carrito
				</a>
			</figcaption>
		</figure>
	);
}

export default ProductCard;
