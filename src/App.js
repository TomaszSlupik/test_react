import React from "react";
import "./App.css";
import First from "./components/first";
import Second from "./components/second";



function App() {
	let myname = "Tomek";
	let tri = 'Triathlon'

	return (
		<div>
			<First imie={myname} />
			<Second imie={myname} sports={tri} />
			
		</div>
	);
}

export default App;
