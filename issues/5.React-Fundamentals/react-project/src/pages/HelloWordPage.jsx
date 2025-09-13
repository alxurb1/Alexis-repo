import HelloWorld from "../components/HelloWorld";

export default function HelloWorldPage() {
	return (
		<div className='ml-10'>
			<HelloWorld name={"Oscar"}></HelloWorld>
			<HelloWorld name={"Alexis"}></HelloWorld>
			<HelloWorld />
		</div>
	);
}
