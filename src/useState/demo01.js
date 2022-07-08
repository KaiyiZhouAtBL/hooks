import React, {useState} from 'react';
import ReactDOM from 'react-dom';



function App() {
  const [count,setCount] = useState(0);
  return <div>
    <button onClick={() => setCount(count - 1)}>-1</button>
    <span>{count}</span>
    <button onClick={() =>setCount(count + 1)}>+1</button>
    <button onClick={() =>{
      setCount(count + 1)
      setCount(count + 1)
      setCount(count + 1)
    }
    }>+3</button>
    <button onClick={() =>{
      setCount(prevState => prevState + 1)
      setCount(prevState => prevState + 1)
      setCount(prevState => prevState + 1)
    }
    }>+3</button>
  </div>;
}

export default App;
