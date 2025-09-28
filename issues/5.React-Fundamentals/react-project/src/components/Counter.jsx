import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "./CounterSlice";

export default function Counter() {
	const counter = useSelector(state => state.counter.value);
	const dispatch = useDispatch();

	return (
		<div className='flex flex-col items-center'>
			<h1 className='text-3xl font-bold mb-9'>Counter Using Redux Toolkit</h1>
			<h1 className='text-3xl font-bold text-blue-600 my-4'>{counter}</h1>
			<div className='flex gap-4'>
				<button
					onClick={() => dispatch(increment())}
					className='px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition active:bg-green-700 active:scale-95 '
				>
					Increment
				</button>

				<button
					onClick={() => dispatch(decrement())}
					className='px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition active:bg-gray-700 active:scale-95 '
				>
					Decrement
				</button>

				<button
					onClick={() => dispatch(reset())}
					className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition active:bg-red-700 active:scale-95 '
				>
					Reset
				</button>
			</div>
		</div>
	);
}
