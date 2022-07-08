import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import axios from 'axios'
function App() {
    const getData = async function() {
        return await axios.get('/db.json')
    }
        // useEffect( async () => {
        //     let res = await getData()
        //     console.log(res)
        // })
    // useEffect( async () => {
    //     let res = async () => getData();
    //     let res2 = await res
    // })


    useEffect(() => {
        (async () => {
            let res = await getData()
            console.log(res)
        })()
    })

    return <div>
    </div>
}

export default App
