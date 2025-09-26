import ApiCall from "../components/ApiCall";

export default function Home() {
	return (
		<div className='flex flex-col items-center'>
			<div className='my-4 text-2xl font-bold mb-20'>
				<h1>Home Page</h1>
			</div>
			<ApiCall></ApiCall>
		</div>
	);
}
