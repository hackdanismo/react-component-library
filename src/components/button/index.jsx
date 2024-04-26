const Button = ({ to, type = "button", className, onClick, isDisabled, openAsTab, children, ...others }) => {
  return to ? (
    <a 
      role="button" 
      href={to} 
      className={className ? className : undefined} 
      target={openAsTab ? "blank" : undefined} 
      {...others}
    >
      {children}
    </a>
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

export default Button