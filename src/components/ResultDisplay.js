import React from "react"

const ResultDisplay = ({ value, result, operator }) => (
  <div className="display">
    <div className="result">{result !== null ? result : ''}</div>
    <div className="operation">
      <span className="current-value">{value}</span>
      <span className="operator">{operator}</span>
    </div>
  </div>
)

export default ResultDisplay