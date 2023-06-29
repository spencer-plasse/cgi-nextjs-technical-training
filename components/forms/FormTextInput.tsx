// React
import { ChangeEvent } from "react";

// Custom components
import { FormElement } from "./FormElement";

export const FormTextInput = (props: {
	id: string,
	name: string,
	type?: "text" | "email",
	placeholder: string,
	labelText: string,
	required?: boolean,
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
}) => {
	return (
		<FormElement>
			<span className="text-gray-700 font-bold">
				{props.labelText}{props.required ? "*" : ""}
			</span>
			<input type={props.type ?? "text"} id={props.id} name={props.name} className="mt-1 block w-full rounded-lg"
				placeholder={props.placeholder} onChange={props.onChange} />
		</FormElement>
	);
};