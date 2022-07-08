import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
function App() {

    const [count,setCount] = useState(0);
    useEffect(() => {
        const timerId = setInterval(() => {
            setCount((count) =>count +1)

            return () => {
                clearInterval(timerId)
            }
        },1000)
    },[])
    useEffect(() => {
        document.title = count
    },[count])
    return <div>
        <div>{count}</div>
    </div>
}

export default App
