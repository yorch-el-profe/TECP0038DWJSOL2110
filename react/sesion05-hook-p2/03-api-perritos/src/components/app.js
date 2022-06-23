import { useState } from "react";
import SelectBreed from "./select-breed";
import ImgBreed from "./img-breed";

function App() {
	const [breed, setBreed] = useState(null);

	return (
		<div className="container mt-4">
			<SelectBreed onBreedChange={(breed) => setBreed(breed)} />
			<ImgBreed breed={breed} />
		</div>
	);
}

export default App;
