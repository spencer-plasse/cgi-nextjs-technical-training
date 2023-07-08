// React
import { ReactNode } from "react";

// Types
import { FormElementPositionType } from "../../utils/forms/types";

/**
 * Higher-level, generalized component to represent a `FormElement`. Applies minimal formatting to positioning
 * in the parent form but leaves other formatting up to the child element. Used in the `forms` folder components
 * to wrap more specific form components.
 * 
 * @param props Dictionary of component props
 * @param props.children Child components contained under this `FormElement` component
 * @param props.position Optional `FormElementPositionType` of either `"block"` or `"inline"` to determine position in form
 * 
 * @returns `FormElement` component with position styling wrapping the `children` from props
 */
export const FormElement = (props: {
	children: ReactNode,
	position?: FormElementPositionType
}) => {
	// Base position and margin styles on the form element's position prop
	const classNames = (props.position ?? "block") === "inline"
												? "inline mr-4"
												: "block mb-4";

	return (
		<div className={classNames}>
			{props.children}
		</div>
	);
};