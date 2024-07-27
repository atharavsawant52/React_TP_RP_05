import { useState } from "react";

function Counter() {
    // var counter = 0;

    var [counter, setCounter] = useState(10);
    function increment() {
        
        counter++
        setCounter(counter);
    }

    return (
        <div>
            <h1>Counter</h1>
            <p>{counter}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default Counter;
