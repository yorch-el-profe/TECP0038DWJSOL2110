import ReactDOM from "react-dom/client";
import "./index.css";
import Index from "./pages/index";
import About from "./pages/about";
import Test from "./pages/test";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/**
 * BrowserRouter, define el estilo de navegación (en este caso es un estilo tradicional)
 *
 * Routes, permite agrupar rutas
 *
 * Route, es la definición de una ruta (o url)
 *
 *
 * path: Define la ruta de acceso para la página
 * element: El componente a utilizarse como página.
 */

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Index />} />
			<Route path="/about" element={<About />} />
			<Route path="*" element={<Test />} />
		</Routes>
	</BrowserRouter>
);
