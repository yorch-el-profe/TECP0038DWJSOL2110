import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages";
import Detail from "./pages/detail";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/pokedex/:id" element={<Detail />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
