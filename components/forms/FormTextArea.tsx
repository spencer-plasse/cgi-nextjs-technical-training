import { FormElement } from "./FormElement";

export const FormTextArea = (props: {
  id: string,
	name: string,
	placeholder: string,
	labelText: string,
	rows: number,
	cols: number,
	required?: boolean
}) => {
	return (
		<FormElement>
			<span className="text-gray-700 font-bold">
				{props.labelText}{props.required ? "*" : ""}
			</span>
			<textarea rows={props.rows} cols={props.cols} id={props.id} name={props.name}
				className="mt-1 block w-full rounded-lg" placeholder={props.placeholder} />
		</FormElement>
	);
};