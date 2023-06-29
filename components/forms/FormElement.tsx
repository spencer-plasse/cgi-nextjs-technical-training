import { ReactNode } from "react";

export const FormElement = (props: {
	children: ReactNode,
	position?: "block" | "inline"
}) => {
	const classNames = (props.position ?? "block") === "inline"
												? "inline mr-4"
												: "block mb-4";

	return (
		<div className={classNames}>
			{props.children}
		</div>
	);
};