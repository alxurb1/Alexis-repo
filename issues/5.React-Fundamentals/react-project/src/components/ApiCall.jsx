import React, { useState } from "react";
import instance from "../services/api";

export default function ApiCall() {
	const [result, setResult] = useState("");
	const [loading, setLoading] = useState(false);

	const testGet = async () => {
		setLoading(true);
		try {
			const response = await instance.get("/posts/1");
			setResult(JSON.stringify(response.data, null, 2));
		} catch (error) {
			setResult(`Error:  ${error.message}`);
		}
		setLoading(false);
	};

	const testPost = async () => {
		setLoading(true);
		try {
			const postData = {
				title: "Mi post de prueba",
				body: "Este es mi primer post, me cuesta trabajo entender cada paso pero vale la pena el proceso",
				userId: 1,
			};

			const response = await instance.post("/posts", postData);
			setResult(JSON.stringify(response.data, null, 2));

			if (response.status === 201) {
				console.log("Post creado exitosamente");
			}
		} catch (error) {
			setResult(`Error: ${error.message}`);
		}
		setLoading(false);
	};

	return (
		<div className='p-5 flex flex-col items-center'>
			<div className='flex gap-4 mb-4'>
				<div className='text-center'>
					<h2 className='text-2xl font-bold mb-4'>Test API</h2>
					<button
						onClick={testGet}
						disabled={loading}
						className='bg-blue-500 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded transition-colors'
					>
						{loading ? "Cargando..." : "Test GET Request"}
					</button>
				</div>

				<div className='text-center'>
					<h2 className='text-2xl font-bold mb-4'>Test POST</h2>
					<button
						onClick={testPost}
						disabled={loading}
						className='bg-green-500 hover:bg-green-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded transition-colors'
					>
						{loading ? "Cargando..." : "Test POST Request"}
					</button>
				</div>
			</div>
			<pre className='bg-gray-100 p-4 mt-4 rounded overflow-x-auto text-sm w-full'>
				{result}
			</pre>
		</div>
	);
}
