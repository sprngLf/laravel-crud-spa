import React from 'react'

const Button = ({ text, type = 'button', className, buttonType = 'btn-primary', ...props }) => {
  return (
    <button type={type} className={`btn ${buttonType} ${className && className}`} {...props} >{text}</button>
  )
}

export default Button