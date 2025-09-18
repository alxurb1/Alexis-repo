import { useState } from "react";

export default function UserInputPage() {
	const [text, setText] = useState("");
	const [textArray, setTextArray] = useState([]);

	const handleAddText = () => {
		if (text.trim()) {
			setTextArray([...textArray, text]);
			setText("");
		}
	};

	return (
		<div className='flex flex-col items-center'>
			<input
				type='text'
				placeholder='Escribe'
				value={text}
				onChange={e => setText(e.target.value)}
				class='border border-gray-300 rounded-lg p-2'
			/>
			<button
				onClick={handleAddText}
				className='px-4 py-2 mt-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition active:bg-green-700 active:scale-95'
			>
				Agregar
			</button>
			<ul className='border border-gray-900 p-2 mt-4 rounded-lg size-96'>
				{textArray.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
}
