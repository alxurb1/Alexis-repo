import React from "react";
import CounterDisplay from "../components/CounterDisplay";
import CounterControls from "../components/CounterControls";
import CounterMessage from "../components/CounterMessageComponent";

export default function ReduxCounterPage() {
	return (
		<div className='flex flex-col items-center'>
			<h1 className='text-3xl font-bold mb-9'>
				Multiple Components Redux Counter
			</h1>
			<CounterDisplay />
			<CounterControls />
			<CounterMessage />
		</div>
	);
}
