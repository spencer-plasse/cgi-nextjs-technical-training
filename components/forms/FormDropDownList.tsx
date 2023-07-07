// Custom components
import { FormElement } from "./FormElement";

// Types
import { FormDropDownListDataType } from "../../utils/forms/types";

/**
 * Component to represent a custom `<select>...</select>` element with styling and input validation.
 * Styled with gray + bold label text, asterisks if the field is required, and a rounded dropdown list.
 * 
 * @param props Dictionary of component props
 * @param props.id Value of the `id` attribute on the dropdown list
 * @param props.options List of dropdown list options (represented as the `FormDropDownListDataType` DTO) that
 * 											each have `displayText` and an underlying `value`
 * @param props.labelText Text to display for the dropdown list's label
 * @param props.required Boolean flag of whether or not the dropdown list is required in the form
 * 
 * @returns Formatted `<select>...</select>` dropdown list using the given props
 */
export const FormDropDownList = (props: {
	id: string,
	options: Array<FormDropDownListDataType>,
	onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
	labelText: string,
	required?: boolean
}) => {
	return (
		<FormElement>
			<span className="text-gray-700 font-bold">
				{props.labelText}{props.required ? "*" : ""}
			</span>

			<select id={props.id} className="mt-2 block w-full rounded-lg" onChange={props.onChange}>
				{props.options.map(option =>
					<option value={option.value} key={option.value} selected={option === props.options[0]}>
						{option.displayText}
					</option>
				)}
			</select>
		</FormElement>
	);
};