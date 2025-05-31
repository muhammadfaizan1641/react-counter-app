import { useState } from "react"
import "./styles/App.css"
import "./styles/Counter.css"

function App() {
  return (
    <div>
      <Counter></Counter>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0);

  function increaseCount(){
    setCount(prevCount=>(prevCount+1));
  }

  function decreaseCount(){
    setCount(prevCount=>(prevCount>0? prevCount-1:0));
    
  }

  function resetCount(){
    setCount(0);
  }


  return <div className="counter-container">
    <h1 className="counter-title">React Counter App</h1>
    <div className="counter-value">{count}</div>
    <div className="button-group">
      <button className="button increment-btn" onClick={increaseCount}>➕ Increment</button>
      <button className="button decrement-btn" onClick={decreaseCount}>➖ Decrement</button>
      <button className="button reset-btn" onClick={resetCount}>🔄 Reset</button>
    </div>
  </div>
}

export default App
