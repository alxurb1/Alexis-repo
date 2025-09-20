import { useMemo, useState } from "react";

export default function MemoOptimizing() {
	const [number, setNumber] = useState(0);
	const [text, setText] = useState("");

	const double = useMemo(() => {
		console.log("Calculando...");
		return number * 2;
	}, [number]);

	return (
		<div>
			<input
				type='number'
				value={number}
				onChange={e => setNumber(Number(e.target.value))}
				class='border border-gray-300 rounded-lg p-2'
			/>
			<input
				type='text'
				value={text}
				onChange={e => setText(e.target.value)}
				class='border border-gray-300 rounded-lg p-2'
			/>
			<p className='mt-5'>Doble: {double}</p>
		</div>
	);
}
