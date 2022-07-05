import Navbar from "./navbar";
import Container from "@mui/material/Container";
import Snackbar from "@mui/material/Snackbar";

function Layout({ children }) {
	return (
		<>
			<Navbar />
			<Container sx={{ mt: 10 }}>{children}</Container>
			<Snackbar open={false} message="Esto es una prueba" />
		</>
	);
}

export default Layout;
