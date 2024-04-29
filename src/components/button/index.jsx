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

export default Button