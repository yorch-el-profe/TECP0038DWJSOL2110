const MONGO_URI =
  "mongodb+srv://root:root@miprimermongo.iejwi.mongodb.net/baseMongoPrueba?retryWrites=true&w=majority";

const mongoose = require("mongoose");

mongoose
  .connect(MONGO_URI)
  .then(function () {
    console.log("Conectado a MongoDB");
  })
  .catch(function () {
    console.log("Error al conectarme a MongoDB");
  });

const UserSchema = new mongoose.Schema({
  username: { type: String, maxlength: 30, required: true, unique: true },
  age: { type: Number, min: 18 },
});

const UserModel = mongoose.model("users", UserSchema);

// Búsqueda de todos los objetos de la colección
// SELECT * FROM users

// CALLBACK: Una función que se ejecuta después de determinada acción
// Por lo general tienen dos parámetros, el primero siendo un error
// y el segundo lo solicitado
UserModel.find(function (err, documents) {
  console.log("Todos los documentos de la colección:");
  console.log(documents);
});

// SELECT * FROM users WHERE username = 'jaime9000'
UserModel.find({ username: "jaime9000" }, function (err, documents) {
  console.log("Los documentos cuyo username sea jaime9000");
  console.log(documents);
});
