// React Hook Form
import { UseFormRegister } from "react-hook-form";

// Custom components
import { FormElement } from "./FormElement";

/**
 * Component to represent a custom `<textarea... />` element with styling and input validation.
 * Styled with gray + bold label text, an asterisk if the field is required, and a rounded textarea box.
 * 
 * @param props Dictionary of component props
 * @param props.id Value of the `id` attribute on the textarea
 * @param props.name Value of the `name` attribute on the textarea
 * @param props.placeholder Optional placeholder text for the text input
 * @param props.labelText Text to display for the text input's label
 * @param props.rows Number of rows in the textarea box
 * @param props.cols Number of columns in the textarea box
 * @param props.required Boolean flag of whether or not the textarea is required in the form
 * @param props.register Registration function from React Hook Form's `useForm` hook
 * 
 * @returns Formatted `<textarea... />` text input using the given props
 */
export const FormTextArea = (props: {
  id: string,
	name: string,
	placeholder?: string,
	labelText: string,
	rows: number,
	cols: number,
	required?: boolean,
	register: UseFormRegister<any>
}) => {
	const validations = {
		required: props.required ? "This field is required!" : false
	};

	return (
		<FormElement>
			<span className="text-gray-700 font-bold">
				{props.labelText}{props.required ? "*" : ""}
			</span>
			<textarea rows={props.rows} cols={props.cols} id={props.id}
				{...props.register(props.name, validations)}
				className="mt-1 block w-full rounded-lg" placeholder={props.placeholder ?? ""} />
		</FormElement>
	);
};