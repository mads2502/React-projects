import React from 'react'

const Button = (props) => {
  const {value}=props
  return (
    <button type="button" className="btn btn-outline-primary">{value}</button>
  )
}

export default Button;