import React, {useCallback, useMemo, useState} from "react";
//https://dmitripavlutin.com/dont-overuse-react-usecallback/

// the functions equality check.
//Functions in JavaScript are first-class citizens, meaning that a function is a regular object.
function App() {
    //The function object can be returned by other functions, be compared, etc.: anything you can do with an object.
   function factory() {
       return (a,b) => a+ b
   }

    const fun1 = factory()
    const fun2 = factory()

    window.alert(fun1 === fun2) //That's just how JavaScript objects works. An object (including a function object) equals only to itself.

    return <div>
    </div>
}
export default App
