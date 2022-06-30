import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Index() {
	const [pokemon, setPokemon] = useState([]);

	useEffect(function () {
		fetch("https://bedu-pokemon-api.herokuapp.com/pokemon")
			.then((response) => response.json())
			.then(({ data }) => setPokemon(data));
	}, []);

	return (
		<div className="container mt-4">
			<h1 className="text-center fw-bold">Pokedex</h1>
			<div className="list-group mb-4">
				{pokemon.map(({ number, name }) => (
					<Link
						to={"/pokedex/" + number}
						className="list-group-item list-group-item-action"
					>
						#{number} - <span className="text-capitalize">{name}</span>
					</Link>
				))}
			</div>
		</div>
	);
}

export default Index;
