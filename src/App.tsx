import { useState } from 'react'
import './App.css'
import ExampleComponent from './components/example'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ExampleComponent></ExampleComponent>
      <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </>
  )
}

export default App
