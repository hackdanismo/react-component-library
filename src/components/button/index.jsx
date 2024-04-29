import PropTypes from "prop-types"

import Link from "./../link/index.jsx"

const Button = ({ to, type = "button", className, onClick, isDisabled, openAsTab, children, ...others }) => {
  return to ? (
    <Link 
      role="button" 
      href={to} 
      {... { className, openAsTab }}
      {...others}
    >
      {children}
    </Link>
  ) : (
    <button 
      {...{ type, onClick }} 
      className={className ? className : undefined} 
      disabled={isDisabled ? isDisabled : undefined} 
      {...others}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  to: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  openAsTab: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Button