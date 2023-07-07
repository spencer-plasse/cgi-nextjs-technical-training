// Types
import { FormButtonType, FormElementPositionType } from "../../utils/forms/types";

// Custom components
import { FormElement } from "./FormElement";

/**
 * Component to represent a custom `<button type="submit" | "reset" | "button"... />` element with custom styling.
 * Border/text/background color on hover are determined by the `type` prop: green for `submit`, red for `reset`,
 * and blue for `button`.
 * 
 * @param props Dictionary of component props
 * @param props.type `FormButtonType` of either `"submit"`, `"reset"`, or `"button"` - determines formatting
 * @param props.buttonText String of text to display on the button
 * @param props.position Optional `FormElementPositionType` of either `"block"` or `"inline"` to determine
 * 												positioning in the form - default is `"inline"`
 * @param props.disabled Optional boolean flag for whether or not the button should be disabled
 * @param props.classNames Optional string containing additional Tailwind/CSS classes to apply to button styling
 * @param props.handleClick Callback function to be triggered when the button is clicked
 * 
 * @returns Formatted `<button type="submit" | "reset" | "button"... />` element with custom styling and an
 * 	optional onClick handler
 */
export const FormButton = (props: {
	type: FormButtonType,
	buttonText: string,
	position?: FormElementPositionType
	disabled?: boolean,
	classNames?: string,
	handleClick?: () => void
}) => {
	const position = props.position ?? "inline";

	/* Leftover code from an attempt at dynamically applying styling based on button type. It
	*  worked at first, then stopped working suddenly (except for the red text color on reset buttons)
	*  and I could never figure out why, so I switched to the below switch statement.
	*/

	//const {borderColor, textColor} = {...ButtonStyles[props.type]};
	//const {hoverBackgroundColor, hoverTextColor} = {...ButtonStyles[props.type].hover};

	let styling: string = "";

	// Only format buttons properly when not disabled
	if (!props.disabled) {
		switch (props.type) {
			case "submit":
				styling = "border-green-600 text-emerald-600 hover:bg-emerald-600 hover:text-white";
				break;
	
			case "reset":
				styling = "border-red-500 text-red-600 hover:bg-red-600 hover:text-white";
				break;
	
			case "button":
				styling = "border-blue-500 text-cyan-500 hover:bg-cyan-500 hover:text-white";
				break;
		}
	}

	// Special formatting for disabled buttons
	else {
		styling = "text-gray-400";
	}

	const buttonElement = (
		<button type={props.type} onClick={props.handleClick ?? (() => {})} disabled={props.disabled ?? false}
			className={`font-forms border-2 bg-white text-base h-auto w-auto rounded-md 
								${styling} ${!props.disabled ? "hover:cursor-pointer" : ""} ${props.classNames ?? ''}`}>
			{props.buttonText}
		</button>
	);

	return (
		<FormElement position={position}>
			{buttonElement}
		</FormElement>
	);
};