import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Mi página
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link" aria-current="page" to="/">
								Principal
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/about">
								Acerca de
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/contact">
								Contacto
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
