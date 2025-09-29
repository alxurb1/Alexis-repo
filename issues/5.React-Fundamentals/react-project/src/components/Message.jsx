import React, { useState } from "react";

export default function Message() {
	const [message, setMessage] = useState("Hi! Please Click the button");
	const [clickCount, setClickCount] = useState(0);

	const handleClick = () => {
		setClickCount(clickCount + 1);
		setMessage(`Button clicked ${clickCount + 1} time(s)`);
	};

	return (
		<div className='flex flex-col gap-4 p-6'>
			<h1 className='text-blue-950 text-xl mb-6'>Simple Message</h1>
			<p data-testid='message-text'>{message}</p>
			<button
				onClick={handleClick}
				className='bg-blue-800 text-blue-300 rounded-lg hover:bg-blue-600 transition active:bg-blue-800 active:scale-95 px-4  py-2'
			>
				Click Me
			</button>
		</div>
	);
}
