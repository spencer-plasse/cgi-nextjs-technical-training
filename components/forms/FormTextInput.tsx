// React Hook Form
import { UseFormRegister } from "react-hook-form";

// Custom components
import { FormElement } from "./FormElement";

export const FormTextInput = (props: {
	id: string,
	name: string,
	type?: "text" | "email",
	placeholder: string,
	labelText: string,
	required?: boolean,
	register: UseFormRegister<any>
}) => {
	const validations = {
		required: props.required ? "This field is required!" : false,
		pattern: props.type === "email" ? {
			value: /.+\@.+\..+/,
			message: "Invalid email format!"
		} : undefined
	};

	return (
		<FormElement>
			<span className="text-gray-700 font-bold">
				{props.labelText}{props.required ? "*" : ""}
			</span>
			<input type={props.type ?? "text"} id={props.id} className="mt-1 block w-full rounded-lg"
				{...props.register(props.name, validations)} placeholder={props.placeholder} />
		</FormElement>
	);
};