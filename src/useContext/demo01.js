import React, {createContext, useContext} from 'react';

const countContext = createContext();
function App() {
    return <countContext.Provider value = {100}>
        <Foo1/>
        <Foo2/>
    </countContext.Provider>
}

//方式1： countContenxt.Consumer去消费提供的属性
function Foo1() {
    return <countContext.Consumer>
        {
            value => {
                return <div>{value}</div>
            }
        }
    </countContext.Consumer>
}

// 方式2： useContext简化
function Foo2() {
    const count = useContext(countContext);
    return <div>{count}</div>
}

export default App
