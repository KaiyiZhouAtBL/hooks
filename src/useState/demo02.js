import React, {useCallback, useMemo, useState} from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [x,setX] = useState(0);
  const isOdd = useMemo(() => x % 2 ==1,[x])
  const increaseX = useCallback(() =>setX(x+1),[x])
  return <div>
    <span>x={x}</span>
    <div>{isOdd?'奇数':'偶数'}</div>
    <button onClick={increaseX}>+</button>
  </div>;
}

export default App;
