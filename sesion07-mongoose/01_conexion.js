const MONGO_URI =
  "mongodb+srv://root:root@miprimermongo.iejwi.mongodb.net/baseMongoPrueba?retryWrites=true&w=majority";

const mongoose = require("mongoose");

// 1. Establecer conexion con la BD

mongoose
  .connect(MONGO_URI)
  .then(function () {
    console.log("Conectado a MongoDB");
  })
  .catch(function () {
    console.log("Error al conectarme a MongoDB");
  });

// 2. Insertar un registro

// Crear un schema

/*
  SQL:
  CREATE TABLE users (
    id INT PRIMARY KEY,
    username VARCHAR(30) NOT NULL UNIQUE,
    age INT CHECK(age >= 18)
  );
*/
const UserSchema = new mongoose.Schema({
  username: { type: String, maxlength: 30, required: true, unique: true },
  age: { type: Number, min: 18 },
});

// Crear un modelo a partir del Schema

const UserModel = mongoose.model("users", UserSchema);

// Insertar un nuevo documento

new UserModel({
  username: "jaime9000",
}).save();
