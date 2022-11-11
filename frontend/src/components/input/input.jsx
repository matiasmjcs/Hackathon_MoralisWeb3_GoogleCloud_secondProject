import React from 'react'
import './input.css'

const Input = ({type, name, placeholder}) => {
  return (
      <input type={type} className="input" name={name} placeholder={placeholder}></input>
  )
}

export default Input