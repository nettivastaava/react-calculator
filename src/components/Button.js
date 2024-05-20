import React from 'react'


const Button = ({ value, onClick }) => (
  <button className="button" onClick={() => onClick(value)}>
    {value}
  </button>
)

export default Button