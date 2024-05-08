import PropTypes from "prop-types"

const Input = ({ 
    type = "text", 
    className, 
    style,
    id, 
    name, 
    label,
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
    /* Render the "for" attribute on the label only if the label and name props have values */
    <label htmlFor={label && name ? name : undefined}>
      {label}
      <input 
        {...{ type, id, name, placeholder, minlength, maxlength, max, size, value }} 
        className={className ? className : undefined} 
        style={style ? style : undefined} 
        required={isRequired ? isRequired : undefined} 
        autocapitalize={setAutocapitalize ? setAutocapitalize : undefined}
        autocomplete={setAutocomplete ? setAutocomplete : undefined}
        {...others} 
      />
    </label>
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
  style: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
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