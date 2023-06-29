import { FormElement } from "./FormElement";

/**
 * Dictionary mapping button type (ex. `submit` or `reset`) to preset styles (ex.
 * border, background, and text colors).
 */
const ButtonStyles = {
	/**
	 * Style for `submit` buttons - green border and text with green background
	 * on hover and white text.
	 */
	submit: {
		borderColor: "border-green-500",
		textColor: "text-green-500",
		hover: {
			hoverBackgroundColor: "hover:bg-green-500",
			hoverTextColor: "hover:text-white"
		}
	},
	/**
	 * Style for `reset` buttons - red border and text with red background
	 * on hover and white text.
	 */
	reset: {
		borderColor: "border-red-500",
		textColor: "text-red-500",
		hover: {
			hoverBackgroundColor: "hover:bg-red-500",
			hoverTextColor: "hover:text-white"
		}
	}
}

export const FormButton = (props: {
	type: "submit" | "reset",
	buttonText: string,
	position?: "block" | "inline"
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