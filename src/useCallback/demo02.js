import React, {useState, memo, useCallback, useEffect} from "react";
// 用于记录 getData 调用次数
let count = 0;
//Infinity render
function App() {
    const [val, setVal] = useState("");

    function getData() {
        setTimeout(() => {
            setVal("new data " + count);
            count++;
        }, 500);
    }
    // const getData = useCallback(() => {
    //     setTimeout(() => {
    //         setVal("new data " + count);
    //         count++;
    //     }, 500);
    // }, []);
    return <Child val={val} getData={getData} />;
}

function Child({val, getData}) {
    console.log('re-render')
    useEffect(() => {   //当修改了父组件的状态会导致,子组件的重新渲染
        getData();
    }, [getData]);

    // useEffect(() => {   //如果明确值需要获取一次可以将getData从依赖数组中去除
    //     getData();
    // }, []);


    return <div>{val}</div>;
}

export default App
