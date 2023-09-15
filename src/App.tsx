// import CalculatorAction from "./CalculatorAction";
import { useReducer } from "react";

type resultState = {
	result: number;
	currOperand: number;
	prevOperand: number;
	operation: number;
};

type CalculatorAction =
	| "add-digit"
	| "choose-operation"
	| "clear"
	| "delete-digit"
	| "evaluate";

const reducer = (
	state: resultState,
	{
		type,
		payload,
	}: { type: CalculatorAction; payload: { digit: number; operaion: string } }
) => {
	switch (type) {
		case "add-digit":
			return {
				...state,
				currOperand: payload.digit,
			};
		default:
			return state;
	}
};

const initialState: resultState = {
	result: 0,
	prevOperand: 0,
	currOperand: 0,
	operation: 0,
};

function App() {
	const [{ currOperand, prevOperand, operation }, dispatch] = useReducer(
		reducer,
		initialState
	);
	return (
		<>
			<div className='calculator-grid'>
				<div className='output'>
					<div className='prevOperand'></div>
					<div className='currOperand'></div>
				</div>
			</div>
		</>
	);
}

export default App;
