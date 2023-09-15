import CalculatorAction from "./CalculatorAction";
import DigitButton from "./components/DigitButton";
import OperationButton from "./components/OperationButton";
import { useReducer } from "react";

type resultState = {
	result: number;
	currOperand: number;
	prevOperand: number;
	operation: number;
};

const reducer = (
	state: resultState,
	{
		type,
		payload,
	}: { type: CalculatorAction; payload: { digit: string; operation: string } }
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

				<DigitButton digit='1' dispatch={dispatch} />
				<DigitButton digit='2' dispatch={dispatch} />
				<DigitButton digit='3' dispatch={dispatch} />
				<OperationButton operation='/' dispatch={dispatch} />
				<DigitButton digit='4' dispatch={dispatch} />
				<DigitButton digit='5' dispatch={dispatch} />
				<DigitButton digit='6' dispatch={dispatch} />
				<OperationButton operation='*' dispatch={dispatch} />
				<DigitButton digit='7' dispatch={dispatch} />
				<DigitButton digit='8' dispatch={dispatch} />
				<DigitButton digit='9' dispatch={dispatch} />
				<OperationButton operation='-' dispatch={dispatch} />
				<DigitButton digit='.' dispatch={dispatch} />
				<DigitButton digit='0' dispatch={dispatch} />
			</div>
		</>
	);
}

export default App;
