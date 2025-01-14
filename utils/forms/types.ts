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
 * - `"button"` - Default ("normal") button type, used for typical buttons
 */
export type FormButtonType = "submit" | "reset" | "button";

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

/**
 * DTO type representing the user input from the API page's form:
 * 
 * - `artist` - String user input from a dropdown list containing an artist's name
 */
export type SpotifyAPIDemoFormInputsType = {
  artist: string;
};

/**
 * DTO type representing an `<option>` of a `FormDropDownList`.
 * 
 * - `displayText` - Text displayed to the user in the dropdown list
 * - `value` - Underlying value of the dropdown list option
 */
export type FormDropDownListDataType = {
  displayText: string,
  value: string
}