import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement, reset } from "./CounterSlice";

const CounterControls = () => {
	const dispatch = useDispatch();

	return (
		<div className='flex gap-4 my-6'>
			<button
				onClick={() => dispatch(increment())}
				className='px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition active:bg-green-700 active:scale-95'
			>
				Increment
			</button>
			<button
				onClick={() => dispatch(decrement())}
				className='px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition active:bg-green-700 active:scale-95'
			>
				Decrement
			</button>
			<button
				onClick={() => dispatch(reset())}
				className='px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition active:bg-green-700 active:scale-95'
			>
				Reset
			</button>
		</div>
	);
};

export default CounterControls;
