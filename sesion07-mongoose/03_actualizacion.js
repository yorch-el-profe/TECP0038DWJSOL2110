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

UserModel.updateOne(
  { username: "jaime9000" },
  { $set: { age: 39 } },
  {},
  function (err, result) {
    console.log(err);
    console.log(result);
  }
);
