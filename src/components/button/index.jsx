import PropTypes from "prop-types"
import styled from "styled-components"

import Link from "./../link/index.jsx"

// Define the styles for the Button component using styled-components
const StyledButton = styled.button`
  display: inline-block;
  text-decoration: none;
  text-align: center;
`

// Create a styled Link component that applies the same styles as StyledButton
const StyledLink = styled(Link).attrs(props => ({
  role: "button",   // Setting the role attribute for accessibility
}))`
  ${StyledButton} 
`

const Button = ({ to, type = "button", className, onClick, isDisabled, openAsTab, children, ...others }) => {
  return to ? (
    <StyledLink 
      href={to} 
      {... { className, openAsTab }}
      {...others}
    >
      {children}
    </StyledLink>
  ) : (
    <StyledButton 
      {...{ type, onClick }} 
      className={className ? className : undefined} 
      disabled={isDisabled ? isDisabled : undefined} 
      {...others}
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  to: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]).isRequired,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  openAsTab: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Button