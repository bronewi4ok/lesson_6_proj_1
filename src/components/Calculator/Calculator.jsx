import { useMemo, useState } from 'react'
import Input from '../Input/Input'
import ResultDisplay from '../ResultDisplay/ResultDisplay'

function Calculator() {
  const [numbers, setNumbers] = useState([0, 0])
  const [counter, setCounter] = useState(0)

  const newNumber = (num, position) => {
    setNumbers((prev) =>
      prev.map((value, index) => (index === position ? num : value)),
    )
  }

  const result = useMemo(() => {
    console.log('new render')
    return numbers.reduce((num, acc) => +acc + num, 0)
  }, [numbers])

  return (
    <div>
      <h1>Calculatro</h1>
      <div>
        <Input
          key={1}
          value={numbers}
          onChange={newNumber}
          position={0}
        />
        <Input
          key={2}
          onChange={newNumber}
          value={numbers}
          position={1}
        />
        <hr />
        <button onClick={() => setCounter((prev) => prev + 1)}>
          counter {counter}
        </button>
        <hr />
        <ResultDisplay result={result} />
      </div>
    </div>
  )
}

export default Calculator
