import React from "react";
import { useSelector } from "react-redux";
import { selectCounter } from "./CounterSlice";

const CounterDisplay = () => {
	const counter = useSelector(selectCounter);
	return (
		<div>
			<h2>Valor del Counter:</h2>
			<p>Valor del counter {counter}</p>
		</div>
	);
};

export default CounterDisplay;
