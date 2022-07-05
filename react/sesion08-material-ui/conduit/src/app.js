import Layout from "./components/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Index />} />
					<Route path="/sign-in" element={<SignIn />} />
					<Route path="/sign-up" element={<SignUp />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
