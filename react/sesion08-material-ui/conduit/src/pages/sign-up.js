import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useState } from "react";
import $fetch from "../utils/fetch";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";

function SignUp() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState([]);
	const [snackOpen, setSnackOpen] = useState(false);
	const [snackMessage, setSnackMessage] = useState("");
	const navigate = useNavigate();

	function onSubmit(e) {
		e.preventDefault();

		$fetch
			.post("https://api.realworld.io/api/users", {
				user: { username, email, password },
			})
			.then(function (data) {
				setSnackOpen(true);
				setSnackMessage("Usuario registrado con éxito");
				//navigate("/sign-in", { replace: true });
			})
			.catch(function ({ errors }) {
				setErrors(
					Object.keys(errors).map(function (key) {
						switch (key) {
							case "email":
								return "Correo Electrónico";

							case "username":
								return "Nombre de Usuario";

							case "password":
								return "Contraseña";
						}
					})
				);
			});
	}

	return (
		<Box sx={{ textAlign: "center" }}>
			{errors.length > 0 ? (
				<Alert severity="error">
					Los siguientes campos tienen un error:{" "}
					<strong>{errors.join(", ")}</strong>
				</Alert>
			) : null}
			<Snackbar
				open={snackOpen}
				autoHideDuration={5000}
				onClose={() => setSnackOpen(false)}
			>
				<Alert severity="success">{snackMessage}</Alert>
			</Snackbar>
			<h1>Registro</h1>
			<form onSubmit={onSubmit}>
				<Stack spacing={3}>
					<TextField
						label="Nombre de Usuario"
						variant="outlined"
						onChange={(e) => setUsername(e.target.value)}
					/>
					<TextField
						label="Correo Electrónico"
						variant="outlined"
						type="email"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<TextField
						label="Contraseña"
						variant="outlined"
						type="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button type="submit" variant="contained" color="success">
						Registrar
					</Button>
				</Stack>
			</form>
		</Box>
	);
}

export default SignUp;
