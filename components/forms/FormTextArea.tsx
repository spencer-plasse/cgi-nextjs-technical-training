// React Hook Form
import { UseFormRegister } from "react-hook-form";

// Custom components
import { FormElement } from "./FormElement";

export const FormTextArea = (props: {
  id: string,
	name: string,
	placeholder: string,
	labelText: string,
	rows: number,
	cols: number,
	required?: boolean,
	register: UseFormRegister<any>
}) => {
	return (
		<FormElement>
			<span className="text-gray-700 font-bold">
				{props.labelText}{props.required ? "*" : ""}
			</span>
			<textarea rows={props.rows} cols={props.cols} id={props.id}
				{...props.register(props.name, { required: props.required})}
				className="mt-1 block w-full rounded-lg" placeholder={props.placeholder} />
		</FormElement>
	);
};