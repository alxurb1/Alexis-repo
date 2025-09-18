import { useEffect, useState } from "react";

export default function EffectComponent() {
	const [data, setData] = useState(null);

	useEffect(() => {
		console.log("El componente se montó");

		const timer = setInterval(() => {
			console.log("Timer corriendo");
		}, 1000);

		return () => {
			console.log("El componente se desmontó");
			clearInterval(timer);
		};
	}, []);

	const handleClick = async () => {
		const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
		const result = await response.json();
		setData(result);
	};

	return (
		<div>
			<button
				onClick={handleClick}
				className=' bg-red-500 text-white rounded-lg hover:bg-red-600 transition active:bg-red-700 active:scale-95 '
			>
				Traer datos
			</button>
			{data && <pre>{JSON.stringify(data, null, 2)}</pre>}
		</div>
	);
}
