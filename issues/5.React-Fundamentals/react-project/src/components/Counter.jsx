import React, { useState } from "react";

export default function Counter() {
	const [counter, setCount] = useState(0);
	return (
		<div className='flex flex-col items-center'>
			<h1 className='text-3xl font-bold text-blue-600 my-4'>{counter}</h1>
			<button
				onClick={() => setCount(counter + 1)}
				className='px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition'
			>
				Increment
			</button>
		</div>
	);
}
