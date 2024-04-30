import PropTypes from "prop-types"

const Input = ({ 
    type = "text", 
    className, 
    id, 
    name, 
    placeholder,
    minlength,
    maxlength, 
    max, 
    size, 
    value,
    isRequired, 
    setAutocapitalize,
    setAutocomplete,
    ...others 
  }) => {
  return (
    <input 
      {...{ type, id, name, placeholder, minlength, maxlength, max, size, value }} 
      className={className ? className : undefined} 
      required={isRequired ? isRequired : undefined} 
      autocapitalize={setAutocapitalize ? setAutocapitalize : undefined}
      autocomplete={setAutocomplete ? setAutocomplete : undefined}
      {...others} 
    />
  )
}

Input.propTypes = {
  type: PropTypes.oneOf(
    [
      "date",
      "datetime-local",
      "email",
      "hidden",
      "month",
      "number",
      "password",
      "search",
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
  max: PropTypes.number,
  size: PropTypes.number,
  value: PropTypes.string,
  isRequired: PropTypes.bool,
  setAutocapitalize: PropTypes.bool,
  setAutocomplete: PropTypes.bool,
}

export default Input