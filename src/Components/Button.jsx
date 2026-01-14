import React from 'react'
import PropTypes from "prop-types"

export default function Button({ className="", content, onClick, disabled= false, type= "button"}) {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${className} flex flex-row items-center justify-center rounded-md`}>
        {content}
    </button>
  )
}


Button.propTypes = {
  className: PropTypes.string,
  content: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

Button.defaultProps = {
  className: "",
  onClick: undefined,
  disabled: false,
  type: "button",
};