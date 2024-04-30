import PropTypes from "prop-types"

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

Link.propTypes = {
  to: PropTypes.string,
  role: PropTypes.string,
  className: PropTypes.string,
  openAsTab: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Link