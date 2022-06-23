import { useState, useEffect } from "react";

function ImgBreed({ breed }) {
	const [picture, setPicture] = useState(null);

	useEffect(
		function () {
			fetch(`https://bedu-dogs-api.herokuapp.com/breeds/${breed}/images`)
				.then(function (response) {
					return response.json();
				})
				.then(function ({ data }) {
					setPicture(data);
				});
		},
		[breed]
	);

	return (
		<div className="d-flex justify-content-center align-items-center">
			<img className="img-fluid" src={picture} />
		</div>
	);
}

export default ImgBreed;
