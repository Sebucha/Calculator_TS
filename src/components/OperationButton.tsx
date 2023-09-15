import CalculatorAction from "../CalculatorAction";
import { Dispatch } from "react";

export default function OperationButton({
	dispatch,
	operation,
}: {
	dispatch: Dispatch<{ type: CalculatorAction; payload: string }>;
	operation: string;
}) {
	return (
		<button
			onClick={() =>
				dispatch({ payload: operation, type: "choose-operation" })
			}>
			{operation}
		</button>
	);
}
