import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
function App() {

    const [count,setCount] = useState(0);
    useEffect(() => {
        const timerId = setInterval(() => {
            setCount((count) => {
                document.title = count +1
                return count+1})
        },1000)
        return () => {
            console.log("卸载")
            clearInterval(timerId)
        }
    },[])
    return <div>
        <div>{count}</div>
        <button onClick={() => {ReactDOM.unmountComponentAtNode(document.querySelector("#root"))}}>卸载组件</button>
    </div>
}

export default App
