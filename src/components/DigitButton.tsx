import CalculatorAction from "../CalculatorAction";
import { Dispatch } from "react";

export default function DigitButton({
	dispatch,
	digit,
}: {
	dispatch: Dispatch<{
		type: CalculatorAction;
		payload: { digit: number };
	}>;
	digit: number;
}) {
	return (
		<button onClick={() => dispatch({ payload: { digit }, type: "add-digit" })}>
			{digit}
		</button>
	);
}
