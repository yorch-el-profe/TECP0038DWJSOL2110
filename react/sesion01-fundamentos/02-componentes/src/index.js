import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

/*
<App />: Cuando el componente no tiene nada dentro

<App>
</App>: Cuando le doy más HTML al componente, por ejemplo:

<App>
  <h1> Hello World </h1>
</App>
*/
