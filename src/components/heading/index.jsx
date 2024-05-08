import PropTypes from "prop-types"

const Heading = ({ level = "1", className, style, children, ...others }) => {
  const Tag = `h${level}`

  return (
    <Tag 
      className={className ? className : undefined}
      style={style ? style : undefined}
      {...others}
    >
      {children}
    </Tag>
  )
}

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  className: PropTypes.string,
  style: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Heading