import { useState } from "react"
import ButtonGrid from "./components/ButtonGrid"
import ResultDisplay from "./components/ResultDisplay"

const App = () => {
  const [result, setResult] = useState('')
  const [currentInput, setCurrentInput] = useState('')
  const [previousValue, setPreviousValue] = useState('')
  const [operator, setOperator] = useState('')
  const [waitingForNewValue, setWaitingForNewValue] = useState(false)
  const [isResultDisplayed, setIsResultDisplayed] = useState(false)

  const handleButtonClick = action => {
    const operators = {
      '+': handleOperator,
      '-': handleOperator,
      '×': handleOperator,
      '÷': handleOperator,
      '=': handleEqual
    }

    if (operators[action]) {
      operators[action](action)
    } else {
      handleNumber(action)
      setIsResultDisplayed(false)
    }
  }

  const handleOperator = (action) => {
    if (previousValue === '') {
      setPreviousValue(parseFloat(currentInput))
    } else if (operator) {
      const currentValue = parseFloat(currentInput)
      const newValue = calculate[operator](previousValue, currentValue)
      setPreviousValue(newValue)
    }
    setCurrentInput('')
    setOperator(action)
    setWaitingForNewValue(true)
    setIsResultDisplayed(false)
  }

  const handleEqual = () => {
    if (operator && previousValue !== '') {
      const currentValue = parseFloat(currentInput)
      const newValue = calculate[operator](previousValue, currentValue)
      setCurrentInput(String(newValue))
      setResult(newValue)
      setPreviousValue('')
      setOperator('')
      setWaitingForNewValue(true)
      setIsResultDisplayed(true)
    }
  }

  const handleNumber = number => {
    if (waitingForNewValue) {
      setCurrentInput(number)
      setWaitingForNewValue(false)
    } else {
      setCurrentInput(currentInput === '' ? number : currentInput + number)
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
      <ResultDisplay 
        previousValue={previousValue} 
        currentInput={currentInput} 
        result={result} 
        operator={operator} 
        isResultDisplayed={isResultDisplayed}
      />
      <ButtonGrid onButtonClick={handleButtonClick}/>
    </div>
  )
}

export default App
