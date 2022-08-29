import React from "react";
import "./App.css";
import First from "./components/first";
import Second from "./components/second";
import Third from "./components/third";
import Fourth from "./components/fourth";

function Zaloguj() {
	return <h1>Zaloguj się</h1>;
}

function Wyloguj() {
	return <h1>Wyloguj się</h1>;
}

function LoginApp(props) {
	if (props.zalogowany) {
		return <Wyloguj />;
	} else {
		return <Zaloguj />;
	}
}

function App() {
	let myname = "Tomek";
	let tri = "Triathlon";
	let dish = "Pierogi";
	let drink = "Fantę";
	let mycity = "Warszawa";
	let numbers = [0, 1, 2, 3, 4, 5, 6, 7];

	let sports = [
		{id:1, namesport: "⚽️"}, 
		{id:2, namesport: "🤼‍♀️"}, 
		{id:3, namesport: "🏇"}, 
		{id:4, namesport: "⛷"}, 
		]

	let listsports = sports.map (sport => {
		return <h3 key={sport.id}>{sport.namesport}</h3>
	});


	return (
		<div>
			<First imie={myname} />
			<Second imie={myname} sports={tri} />
			<Third imie={myname} meal={dish} />
			<Fourth item={drink} city={mycity} />
			<h2>Instrukcja warunkowa</h2>
			{tri === "Triathlon" ? "Tak to prawa" : "Nie"}

			{dish === "Pierogi" ? (
				<h1>To jest moje ulubione danie </h1>
			) : (
				<h1>Nie</h1>
			)}

			<div>
				<LoginApp zalogowany={false}></LoginApp>
			</div>

			<div>
				{numbers.map((number) => {
					return <h3>{number}</h3>;
				})}

			</div>
			<div>{listsports}</div>
		</div>
	);
}

export default App;
