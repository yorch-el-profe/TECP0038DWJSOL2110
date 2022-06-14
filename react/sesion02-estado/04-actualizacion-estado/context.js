const persona = {
	name: "Paquito",
	greet: function () {
		console.log("Hola soy " + this.name);
	},
};

persona.greet(); // Hola soy Paquito

const greet = persona.greet;

greet(); // Hola soy undefined

const persona2 = {
	name: "Chuchito",
	greet: greet,
};

persona2.greet();
