console.log("1. Cargando lista de mascotas...");

fetch("https://bedu-dogs-api.herokuapp.com/breeds")
	.then(function (response) {
		console.log("3. Recibí una respuesta del backend...");
		console.log(response);
		return response.ok ? response.json() : Promise.reject(); // Convertimos la respuesta en un JSON (asíncronamente)
	})
	.then(function (data) {
		console.log(data);
	})
	.catch(function () {
		console.log("Ocurrió un error");
	});

console.log("2. Petición realizada al backend...");
