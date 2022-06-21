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
				<h3>{name}</h3>
				<p>{description}</p>
				<a style={styles}>Agregar al carrito</a>
			</figcaption>
		</figure>
	);
}

export default ProductCard;
