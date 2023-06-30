export const FormElementErrorMessage = (props: {
  errorMessage: string
}) => {
  return (
    <span className="text-red-500">{props.errorMessage}</span>
  )
};