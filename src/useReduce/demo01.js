import React, {useReducer} from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'increment' :
            return state + 1
    }
}

export default function App() {

    const [count,dispatch] = useReducer(reducer,0)
    return <div>
        <div onClick={() => {
            dispatch({type:'increment'})
        }}>计数： <span><i>{count}</i></span></div>
    </div>
}
