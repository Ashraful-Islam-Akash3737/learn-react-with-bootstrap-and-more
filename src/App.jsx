import { useState } from 'react'
import './App.css'
import Card2 from './Components/Card2'
// bootstrap css-----------------------
import 'bootstrap/dist/css/bootstrap.min.css';
// ------------------------------------------
import ReactBootstrap from './Components/react-bootstrap';
import Counter from './Components/Counter';
import State from './Components/State';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <State></State>
      <Counter></Counter>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      <Card2 name="Akash"></Card2>
      <ReactBootstrap></ReactBootstrap>
      
    </>
  )
}

export default App
