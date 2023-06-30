// React Hook Form
import { UseFormRegister } from "react-hook-form";

// Types
import { FormTextInputType } from "../../utils/forms/types";

// Custom components
import { FormElement } from "./FormElement";

/**
 * Component to represent a custom `<input type="text"... />` element with styling and input validation.
 * Styled with gray + bold label text, asterisks if the field is required, and rounded text input boxes.
 * 
 * @param props Dictionary of component props
 * @param props.id Value of the `id` attribute on the text input
 * @param props.name Value of the `name` attribute on the text input
 * @param props.type `FormTextInputType` of either `"text"` or `"email"` - determines React Hook Form validation
 * @param props.placeholder Optional placeholder text for the text input
 * @param props.labelText Text to display for the text input's label
 * @param props.required Boolean flag of whether or not the text input is required in the form
 * @param props.register Registration function from React Hook Form's `useForm` hook
 * 
 * @returns Formatted `<input type="text"... />` text input using the given props
 */
export const FormTextInput = (props: {
	id: string,
	name: string,
	type?: FormTextInputType,
	placeholder?: string,
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
				{...props.register(props.name, validations)} placeholder={props.placeholder ?? ""} />
		</FormElement>
	);
};