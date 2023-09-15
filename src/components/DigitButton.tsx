import CalculatorAction from "../CalculatorAction";

export default function DigitButton({ dispatch, digit }) {
	return (
		<button
			onClick={() =>
				dispatch({
					type: ACTIONS.ADD_DIGIT,
					payload: digit,
				})
			}>
			{digit}
		</button>
	);
}