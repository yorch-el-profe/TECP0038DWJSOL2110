import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages";
import About from "./pages/about";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
