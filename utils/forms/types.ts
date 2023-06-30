/**
 * Type union containing the possible options for a form element's positioning:
 *
 * - `"block"` - Display an element on its own line
 * - `"inline"` - Display the element on the same line as the last element
 */
export type FormElementPositionType = "block" | "inline";

/**
 * Type union containing the possible options for the `type` attribute on a button:
 * 
 * - `"submit"` - Submit the form that the button resides in
 * - `"reset"` - Reset data in the form that the button resides in
 */
export type ButtonType = "submit" | "reset";

/**
 * Type union containing the possible options for the `type` attribute on a text input:
 * 
 * - `"text"` - Standard text input field
 * - `"email"` - Email text input field with special email pattern validation
 */
export type FormTextInputType = "text" | "email";

/**
 * DTO type representing the user input from the home/About Me page's contact form:
 * 
 * - `name` - String user input for a first + last name
 * - `emailAddress` - String user input for an email address
 * - `message` - String user input for a `<textarea>` message
 */
export type ContactFormInputsType = {
  name: string;
  emailAddress: string;
  message: string;
};