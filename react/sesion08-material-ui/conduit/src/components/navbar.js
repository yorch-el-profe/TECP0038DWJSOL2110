import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
	return (
		<AppBar color="success">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					Conduit
				</Typography>
				<Button component={Link} to="/" color="inherit">
					Inicio
				</Button>
				<Button component={Link} to="/sign-in" color="inherit">
					Iniciar sesión
				</Button>
				<Button component={Link} to="/sign-up" color="inherit">
					Registrarse
				</Button>
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;
