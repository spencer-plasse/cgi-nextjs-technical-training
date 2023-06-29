export const FormElementErrorMessage = (props: {
  fieldName: string
}) => {
  return (
    <span className="text-red-500">{props.fieldName} is a required field!</span>
  )
};