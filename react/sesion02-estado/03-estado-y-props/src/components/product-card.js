import React from "react";

class ProductCard extends React.Component {
	render() {
		const styles = {
			backgroundColor: "black",
		};

		if (this.props.discount > 0) {
			styles.backgroundColor = "red";
		}

		return (
			<figure className="snip1171">
				<img src={this.props.picture} />
				<div className="price">${this.props.price}</div>
				<figcaption>
					<h3>{this.props.name}</h3>
					<p>{this.props.description}</p>
					<a style={styles}>Agregar al carrito</a>
				</figcaption>
			</figure>
		);
	}
}

export default ProductCard;
