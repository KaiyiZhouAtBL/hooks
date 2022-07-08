import React, {useMemo, useState} from "react";

function App() {
  const [count,setCount] = useState(0)
  const [count2,setCount2] = useState(0)
  const result = useMemo(() => {
    return count + count2
  },[count,count2])
  return <div>
    <span onClick={() => {setCount(count => count+1)}}>{count}</span>
    +
    <span onClick={() => {setCount2(count2 => count2+1)}}>{count2}</span>
    =
    {result}
  </div>
}
export default App
