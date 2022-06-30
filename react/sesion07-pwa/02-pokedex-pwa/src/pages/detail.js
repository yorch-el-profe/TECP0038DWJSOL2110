import Pokemon from "../components/pokemon";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
	const params = useParams();
	const [pokemon, setPokemon] = useState(null);

	useEffect(
		function () {
			fetch("https://bedu-pokemon-api.herokuapp.com/pokemon/" + params.id)
				.then((response) => response.json())
				.then(({ data }) => setPokemon(data));
		},
		[params.id]
	);

	return (
		<div className="vw-100 vh-100 d-flex justify-content-center align-items-center">
			{pokemon ? (
				<Pokemon
					number={pokemon.number}
					name={pokemon.name}
					artwork={pokemon.artwork}
					types={pokemon.types}
				/>
			) : null}
		</div>
	);
}

export default Detail;
