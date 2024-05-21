import React from 'react'

const Button = ({ value, onClick }) => (
  <button id={'button-' + value} className="button" onClick={() => onClick(value)}>
    {value}
  </button>
)

export default Button