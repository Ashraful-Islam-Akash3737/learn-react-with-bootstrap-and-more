import { useState } from 'react'
import './App.css'
import Card2 from './Components/Card2'
import Card3 from './Components/Card3'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      <Card2 name="Akash"></Card2>
      <Card3></Card3>
      
    </>
  )
}

export default App
