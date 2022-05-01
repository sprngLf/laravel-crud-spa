import React from 'react'

const Input = ({className, ...props}) => {
  return (
    <input className={`p-2 rounded-md border-gray-200 outline-sky-500 ${className && className}`} {...props} />
  )
}

export default Input