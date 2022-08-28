import React from "react";
import "./App.css";
import First from "./components/first";
import Second from "./components/second";
import Third from "./components/third";
import Fourth from "./components/fourth";


function App() {
	let myname = "Tomek";
	let tri = 'Triathlon'
	let dish = 'Pierogi'
	let drink = 'Fantę'

	return (
		<div>
			<First imie={myname} />
			<Second imie={myname} sports={tri} />
			<Third imie={myname} meal={dish} />	
			<Fourth item={drink}/>
		</div>
	);
}

export default App;
