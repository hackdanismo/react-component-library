import PropTypes from "prop-types"
import styled from "styled-components"

import Link from "./../link/index.jsx"

// Define the styles for the Image component using styled-components
const StyledImage = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  border: 0;
`

const Image = ({ to, openAsTab, src, width, height, alt, className, ...others }) => {
  // Object containing the image element that will be rendered along with the props
  const ImageElement = (
    <StyledImage 
      {...{ src, width, height, alt }} 
      className={className ? className : undefined}  
      {...others} 
    />
  )

  return to ? (
    // Render the image element wrapped within the Link component if a URL is passed into the prop
    <Link {...{ to, openAsTab }}>
      {ImageElement}
    </Link>
  ) : (
    // Render the image element by default
    ImageElement
  )
}

Image.propTypes = {
  to: PropTypes.string,
  openAsTab: PropTypes.bool,
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Image