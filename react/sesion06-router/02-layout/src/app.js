import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Index from "./pages";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Index />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
