import React from "react";
import { useSelector } from "react-redux";
import { selectCounter } from "./CounterSlice";

const CounterMessage = () => {
	const counter = useSelector(selectCounter);

	const getMessage = value => {
		if (value === 0) return " Estás en cero!";
		if (value < 0) return " Número negativo!";
		if (value > 0 && value <= 5) return "Número pequeño positivo!";
		if (value > 5 && value <= 10) return "Número medio!";
		if (value > 10) return "Número alto!";
	};

	return (
		<div className='text-center p-4 bg-blue-100 rounded-lg'>
			<p className='text-lg font-semibold text-blue-800'>
				{getMessage(counter)}
			</p>
		</div>
	);
};

export default CounterMessage;
