export default function HelloWord({ name }) {
	return (
		<div>
			<h1>Hello,{name ? name : "Focus Bear"}! </h1>
		</div>
	);
}
