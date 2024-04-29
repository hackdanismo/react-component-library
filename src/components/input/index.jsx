import PropTypes from "prop-types"

const Input = ({ 
    type = "text", 
    className, 
    id, 
    name, 
    placeholder,
    minlength, 
    maxlength, 
    size, 
    isRequired, 
    setAutocapitalize,
    setAutocomplete,
    isChecked,
    ...others 
  }) => {
  return (
    <input 
      {...{ type, id, name, placeholder }} 
      className={className ? className : undefined} 
      required={isRequired ? isRequired : undefined} 
      autocapitalize={setAutocapitalize ? setAutocapitalize : undefined}
      autocomplete={setAutocomplete ? setAutocomplete : undefined}
      isChecked={isChecked ? isChecked : undefined}
      {...others} 
    />
  )
}

Input.propTypes = {
  type: PropTypes.oneOf(
    [
      "button", 
      "checkbox", 
      "color", 
      "date",
      "datetime-local",
      "email",
      "file",
      "hidden",
      "image",
      "month",
      "number",
      "password",
      "radio",
      "range",
      "reset",
      "search",
      "submit",
      "tel",
      "text",
      "time",
      "url",
      "week",
    ]
  ).isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  minlength: PropTypes.number,
  maxlength: PropTypes.number,
  size: PropTypes.number,
  isRequired: PropTypes.bool,
  setAutocapitalize: PropTypes.bool,
  setAutocomplete: PropTypes.bool,
}

export default Input