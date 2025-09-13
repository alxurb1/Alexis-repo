export default function HelloWorld({ name }) {
	return (
		<div className='my-4'>
			<h1>Hello,{name ? name : "Focus Bear"}! </h1>
		</div>
	);
}
