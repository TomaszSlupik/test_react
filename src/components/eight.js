import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Eight() {

    const [mycolor, setColor] = useState([])

	useEffect(() => {
        fetch('https://reqres.in/api/unknown')
        .then( data => data.json())
        .then(data => setColor(data.data))
        .catch (err => console.error(err))
    }, []);

const MyParagraf = styled.p`
color: gold;
font-size: 40px;
`;


	return (
		<div>
			<h1>Fetch:</h1>
            {
            mycolor.map( color => {
            return (
            <div>
            <h3>{color.name}</h3>
            <h3 style={{"color": color.color}}>{color.color}</h3>
            <h3>{color.year}</h3>
            
            </div>)
            })
            }
            <div className="test">Testowanie styli</div>
            <MyParagraf>Testowy paragraf</MyParagraf>
		</div>
	);
}

export default Eight;
