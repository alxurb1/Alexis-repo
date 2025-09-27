import { useState } from "react";

export default function BuggyCode1() {
	const [state, setState] = useState({ count: 0 });
	return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6'>
			<div className='bg-white shadow-md rounded-lg p-6 w-full max-w-sm text-center'>
				<p className='text-lg font-semibold mb-4'>Count: {state.count}</p>
				<button
					onClick={() => {
						setState(c => {
							return { count: c.count + 1 };
						});
					}}
					className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition'
				>
					Increment
				</button>
				<Child state={state} />
			</div>
		</div>
	);
}

function Child({ state }) {
	state.count = state.count + 5;
	return (
		<div className='mt-4 p-3 border rounded bg-gray-50'>
			<p className='text-gray-700'>Count + 5 = {state.count}</p>
		</div>
	);
}
