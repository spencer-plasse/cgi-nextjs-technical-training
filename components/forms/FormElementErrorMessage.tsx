/**
 * Component to represent an error message for a general form element.
 * Formatted as a `<span>` with red text.
 * 
 * @param props Dictionary of component props
 * @param props.errorMessage String representation of specific error message
 * 
 * @returns Formatted error message `<span>` using the given `errorMessage` prop
 */
export const FormElementErrorMessage = (props: {
  errorMessage: string
}) => {
  return (
    <span className="text-red-500">{props.errorMessage}</span>
  )
};