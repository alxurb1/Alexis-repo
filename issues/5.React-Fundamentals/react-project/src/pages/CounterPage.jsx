import Counter from "../components/Counter";

export default function CounterPage() {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen'>
			<h1 className='text-2xl font-bold '>Counter Using useState Hooks</h1>
			<Counter />
		</div>
	);
}
