// Types
import { ButtonType, FormElementPositionType } from "../../utils/forms/types";

// Styles
import { ButtonStyles } from "../../utils/forms/styles";

// Custom components
import { FormElement } from "./FormElement";

/**
 * Component to represent a custom `<button type="submit" | "reset"... />` element with custom styling.
 * Border/text/background color on hover are determined by the `type` prop: green for `submit` and red for `reset`.
 * 
 * @param props Dictionary of component props
 * @param props.type `ButtonType` of either `"submit"` or `"reset"` - determines formatting
 * @param props.buttonText String of text to display on the button
 * @param props.position Optional `FormElementPositionType` of either `"block"` or `"inline"` to determine
 * 												positioning in the form - default is `"inline"`
 * @param props.classNames Optional string containing additional Tailwind/CSS classes to apply to button styling
 * @param props.handleClick Callback function to be triggered when the button is clicked
 * 
 * @returns Formatted `<button type="submit" | "reset"... />` element with custom styling and an optional onClick handler
 */
export const FormButton = (props: {
	type: ButtonType,
	buttonText: string,
	position?: FormElementPositionType
	classNames?: string,
	handleClick?: () => void
}) => {
	const position = props.position ?? "inline";
	const {borderColor, textColor} = {...ButtonStyles[props.type]};
	const {hoverBackgroundColor, hoverTextColor} = {...ButtonStyles[props.type].hover};

	const buttonElement = (
		<button type={props.type} onClick={props.handleClick ?? (() => {})}
			className={`font-forms border-2 bg-white text-base h-10 w-20 rounded-md 
								${borderColor} ${textColor} ${hoverBackgroundColor} ${hoverTextColor} hover:cursor-pointer
								${props.classNames ?? ''}`}>
			{props.buttonText}
		</button>
	);

	return (
		<FormElement position={position}>
			{buttonElement}
		</FormElement>
	);
};