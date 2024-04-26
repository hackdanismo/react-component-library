const Button = ({ type = "button", className, onClick, isDisabled, children, ...others }) => {
  return (
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

export default Button