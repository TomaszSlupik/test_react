import React from "react";


function First(props) {
	return (
		<div>
			<h1>To jest mój pierwszy element</h1>
			<div>Moje imię to: {props.imie}</div>
		</div>
	);
}

export default First