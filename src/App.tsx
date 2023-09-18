import "./index.css";

import CalculatorAction from "./CalculatorAction";
import DigitButton from "./components/DigitButton";
import OperationButton from "./components/OperationButton";
import { useReducer } from "react";

type resultState = {
	result: string;
	currOperand: string;
	prevOperand: string;
	operation: string;
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
		case "choose-operation":
			if (state.currOperand === "" && state.prevOperand === "") return state;
			if (state.currOperand === "")
				return {
					...state,
					operation: payload.operation,
				};
			return state;
		default:
			return state;
	}
};

const initialState: resultState = {
	result: "",
	prevOperand: "",
	currOperand: "",
	operation: "",
};

function App() {
	const [{ currOperand, prevOperand, operation }, dispatch] = useReducer(
		reducer,
		initialState
	);
	return (
		<>
			<div className='calculator-grid bg-blue-600 '>
				<div className='output'>
					<div className='prevOperand'>
						{prevOperand}
						{operation}
					</div>
					<div className='currOperand'>{currOperand}</div>
				</div>

				<button className=''></button>

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
			<h1 className='text-3xl font-bold underline'>Hello world!</h1>
		</>
	);
}

export default App;
