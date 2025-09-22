import { useCallback, useState, memo } from "react";

const Hijo = memo(function Hijo({ onClick }) {
	console.log("Renderizando hijo ");
	return (
		<button
			onClick={onClick}
			className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition active:bg-blue-700 active:scale-95 '
		>
			Botón del hijo
		</button>
	);
});

export default function CallbackPage() {
	const [count, setCount] = useState(0);

	const handleClick = useCallback(() => {
		console.log("Has dado click en el hijo");
	}, []);

	return (
		<div className='flex flex-col items-center gap-3'>
			<Hijo onClick={handleClick} />
			<p className='px-4 py-2'>Contador: {count}</p>
			<button
				onClick={() => setCount(count + 1)}
				className='px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition active:bg-green-700 active:scale-95 '
			>
				Incrementar
			</button>
		</div>
	);
}
