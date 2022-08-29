import React, { useState, useEffect } from "react";

function Fourth(props) {
	const [item, setItem] = useState("Fantę");
	const [data] = useState(new Date());
	const [city, setCity] = useState("");

	useEffect(() => {
		console.log("Początek komponentu");
		setCity(props.city);

		return () => {
			console.log("Koniec komponentu");
		};
	}, []);

	const clickItem = (evt) => {
		setItem("Cola Zero");
	};

	return (
		<div>
			<div>W ciepłe dni uwielbiam pić zimną {item}</div>
			<div onClick={clickItem}>Zmiana napoju, Kliknij tutaj</div>
			<h3>Dzisiejsza data {data.toString().split("T")}</h3>
			<div> Miasto: {city} </div>
		</div>
	);
}

export default Fourth;
