import React from 'react';
import Button from './Button';


const ButtonGrid = ({ onButtonClick }) => {
  const buttons = [
    '7', '8', '9', '÷',
    '4', '5', '6', '×',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ]

  return (
    <div className="button-panel">
      {buttons.map((button, index) => (
        <Button key={'button-' + index} value={button} onClick={onButtonClick} />
      ))}
    </div>
  )
}

export default ButtonGrid