import Navbar from "./navbar";

function Layout({ children }) {
	return (
		<>
			<Navbar />
			<div className="container mt-4">{children}</div>
		</>
	);
}

export default Layout;
