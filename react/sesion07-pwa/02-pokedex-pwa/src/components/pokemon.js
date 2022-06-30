function Pokemon({ number, name, artwork, types }) {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src={artwork} className="card-img-top" alt={name} />
			<div className="card-body text-center">
				<h5 className="card-title text-capitalize">
					#{number}. {name}
				</h5>
				<p className="card-text text-capitalize">{types.join(", ")}</p>
			</div>
		</div>
	);
}

export default Pokemon;
