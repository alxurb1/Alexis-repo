import React, { useState } from "react";

export default function Counter() {
	const [counter, setCount] = useState(0);
	return (
		<div className='flex flex-col items-center'>
			<h1 className='text-3xl font-bold mb-9'>Counter Using useState Hooks</h1>
			<h1 className='text-3xl font-bold text-blue-600 my-4'>{counter}</h1>
			<div className='flex gap-4'>
				<button
					onClick={() => setCount(counter + 1)}
					className='px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition active:bg-green-700 active:scale-95 '
				>
					Increment
				</button>

				<button
					onClick={() => setCount(counter - 1)}
					className='px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition active:bg-gray-700 active:scale-95 '
				>
					Decrement
				</button>

				<button
					onClick={() => setCount(0)}
					className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition active:bg-red-700 active:scale-95 '
				>
					Reset
				</button>
			</div>
		</div>
	);
}
