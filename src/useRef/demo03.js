import React, {useEffect, useRef, useState} from "react";
//useRef在组件重新进行渲染时数据不会丢失
function App() {
    let timer = useRef();
    useEffect(() => {
        timer.current = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
        return () => {
            clearInterval(timer.current)
        }
    }, [])

    const stopCount = () => {
        clearInterval(timer.current)
    }
    const [count, setCount] = useState(0)
    return <div>
        <div>{count}</div>
        <button onClick={stopCount}>停止</button>
    </div>
}

export default App
