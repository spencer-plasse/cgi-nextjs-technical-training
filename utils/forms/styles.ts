/**
 * Dictionary mapping button type (ex. `submit` or `reset`) to preset styles (ex.
 * border, background, and text colors).
 */
export const ButtonStyles = {
  /**
   * Style for `submit` buttons - green border and text with green background
   * on hover and white text.
   */
  submit: {
    borderColor: "border-green-500",
    textColor: "text-green-500",
    hover: {
      hoverBackgroundColor: "hover:bg-green-500",
      hoverTextColor: "hover:text-white",
    },
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
      hoverTextColor: "hover:text-white",
    },
  },
};