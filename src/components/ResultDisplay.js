import React from "react"

const ResultDisplay = ({ 
  previousValue, 
  currentInput, 
  result, 
  operator, 
  isResultDisplayed
}) => {
  return(
    <div className="display">
      {isResultDisplayed ? (
        <div className="result">{result}</div>
      ) : (
        <div className="operation">
          <span className="display-value">{previousValue !== null ? previousValue : ''}</span>
          <span className="operator">{operator}</span>
          <span className="display-value">{currentInput}</span>
        </div>
      )}
    </div>
  )
}

export default ResultDisplay