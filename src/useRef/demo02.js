import React, {useEffect, useRef, useState} from "react";
//组件每隔一秒会更新状态，从而导致组件被重新渲染timer= null清除定时器时每次拿到的timerid都是null
function App() {
    let timer = null
    useEffect(() => {
        timer = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])

    const stopCount = () => {
        console.log(timer)  //null
        clearInterval(timer)
    }
    const [count, setCount] = useState(0)
    return <div>
        <div>{count}</div>
        <button onClick={stopCount}>停止</button>
    </div>
}

export default App
