import PropTypes from "prop-types"

const Input = ({ ...others }) => {
  return (
    <input type="text" {...others} />
  )
}

Input.propTypes = {
  to: PropTypes.string,
  role: PropTypes.string,
  className: PropTypes.string,
  openAsTab: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Input