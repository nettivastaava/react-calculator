import { useState } from "react"
import ButtonGrid from "./components/ButtonGrid"
import ResultDisplay from "./components/ResultDisplay"

const App = () => {
  const [displayValue, setDisplayValue] = useState('0')
  const [storedValue, setStoredValue] = useState(null)
  const [operator, setOperator] = useState(null)
  const [waitingForNewValue, setWaitingForNewValue] = useState(false)

  const handleButtonClick = (action) => {
    const operators = {
      '+': handleOperator,
      '-': handleOperator,
      '×': handleOperator,
      '÷': handleOperator,
      '=': handleEqual,
      'C': handleClear
    }

    if (operators[action]) {
      operators[action](action)
    } else {
      handleNumber(action)
    }
  }

  const handleOperator = (action) => {
    if (storedValue === null) {
      setStoredValue(parseFloat(displayValue))
    } else if (operator) {
      const currentValue = parseFloat(displayValue)
      const newValue = calculate[operator](storedValue, currentValue)
      setStoredValue(newValue)
      setDisplayValue(String(newValue))
    }
    setOperator(action)
    setWaitingForNewValue(true)
  }

  const handleEqual = () => {
    if (operator && storedValue !== null) {
      const currentValue = parseFloat(displayValue)
      const newValue = calculate[operator](storedValue, currentValue)
      setDisplayValue(String(newValue))
      setStoredValue(null)
      setOperator(null)
      setWaitingForNewValue(true)
    }
  }

  const handleClear = () => {
    setDisplayValue('0')
    setStoredValue(null)
    setOperator(null)
    setWaitingForNewValue(false)
  }

  const handleNumber = number => {
    if (waitingForNewValue) {
      setDisplayValue(number)
      setWaitingForNewValue(false)
    } else {
      setDisplayValue(displayValue === '0' ? number : displayValue + number)
    }
  }

  const calculate = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '×': (a, b) => a * b,
    '÷': (a, b) => a / b
  }

  return (
    <div class="main-view">
      <h1>Calculator</h1>
      <ResultDisplay value={storedValue} result={displayValue} />
      <ButtonGrid onButtonClick={handleButtonClick}/>
    </div>
  )
}

export default App
