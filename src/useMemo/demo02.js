import React, {useState,memo} from "react";

function App() {
    const [count, setCount] = useState(0);
    return <div>
        <span onClick={() => setCount(count + 1)}>{count}</span>
        <Foo/>
    </div>
}
const Foo = memo(function Foo() {   //被momo方法包裹的组件，如果本组件中的数据没有发生变化，会阻止组件的更新
    console.log("子组件重新渲染了") //父组件的状态发生更新会导致子组件的重新渲染
    return <div>
        子组件
    </div>
})

export default App
