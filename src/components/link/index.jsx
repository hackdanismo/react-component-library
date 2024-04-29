const Link = ({ to, role, className, openAsTab, children, ...others }) => {
  const isExternalLink = to && to.startsWith("http") && to.startsWith("mailto:")

  return (
    <a 
      {...{ role }} 
      href={to} 
      className={className ? className : undefined} 
      target={openAsTab ? "blank" : undefined} 
      rel={isExternalLink ? "noopener noreferrer" : undefined}
      {...others}
    >
      {children}
    </a>
  )
}

export default Link