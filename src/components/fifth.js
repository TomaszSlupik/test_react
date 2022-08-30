import React, { useState } from "react";

function Fifth() {
	const [first_name, setItem] = useState("");

	const sendMsg = (evt) => {
        evt.preventDefault()
		console.log("Twoje imie to: ", first_name);
	};

	const changeName = (evt) => {
		setItem(evt.target.value);
	};

	return (
		<div>
			<form onSubmit={sendMsg}>
				<label>
					Imię:
					<input type="text" value={first_name} onChange={changeName}></input>
				</label>
                <input type="submit" value="Wyśłij"></input>
			</form>
		</div>
	);
}

export default Fifth;
