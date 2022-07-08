import React, {useRef, useState} from "react";

function App() {
    const inputEl = useRef();
    const [val,setVal] = useState("")
    return <div>
        <input type="text" ref={inputEl} value={val} onChange={() =>setVal(inputEl.current.value)}/>
        <button onClick={() => {window.alert(val)}}>ref</button>
    </div>
}

export default App
