import React from "react";
import "./App.css";
import First from "./components/first";
import Second from "./components/second";
import Third from "./components/third";


function App() {
	let myname = "Tomek";
	let tri = 'Triathlon'
	let dish = 'Pierogi'

	return (
		<div>
			<First imie={myname} />
			<Second imie={myname} sports={tri} />
			<Third imie={myname} meal={dish} />	
		</div>
	);
}

export default App;
