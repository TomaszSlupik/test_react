import React, { useState } from "react";

function Fourth(props) {
	const [item, setItem] = useState("Fantę");
    const [data] = useState(new Date())



	const clickItem = () => {
		setItem("Cola Zero");
	};

	return (
		<div>
			<div>W ciepłe dni uwielbiam pić zimną {item}</div>
            <div onClick={clickItem}>Zmiana napoju, Kliknij tutaj</div>
            <h3>Dzisiejsza data {data.toString().split("T")}</h3>
		</div>
	);
}

export default Fourth;
