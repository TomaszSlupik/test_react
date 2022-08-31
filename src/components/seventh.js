import React from "react";
import { CtxConsumer } from "../index";

function Sevetnth(props) {
	return <CtxConsumer>{
        (context) => {
        <h1>Pobieramy dane: {context.dataSet}</h1>
        }
        
        }</CtxConsumer>;
}

export default Sevetnth;
