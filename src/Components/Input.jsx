import React from 'react'
import PropTypes from "prop-types"

export default function Input({type, id, className, placeholder, value, name,onChange}) {
  return (
    <input type={type} id={id} className={`${className} py-3 px-3 border border-[#D4D1D1] rounded-md`} placeholder={placeholder} value={value} name={name} onChange={onChange} />
  )
}

Input.PropTypes = {
    type: PropTypes.node.isRequired,
    id: PropTypes.node.isRequired,
    className: PropTypes.node.isRequired,
    placeholder: PropTypes.node.isRequired,
    value: PropTypes.node.isRequired,
    name: PropTypes.node.isRequired,
    onChange: PropTypes.node.isRequired,
}
