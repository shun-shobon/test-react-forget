import type { ReactNode } from "react";
import { useState } from "react";

export function App(): ReactNode {
	const [count, setCount] = useState(0);

	return (
		<div>
			<p>Count: {count}</p>
			<Increment
				onClick={() => {
					setCount((prev) => prev + 1);
				}}
			/>
		</div>
	);
}

interface IncrementProps {
	onClick: () => void;
}
function Increment({ onClick }: IncrementProps) {
	return <button onClick={onClick}>Increment</button>;
}
