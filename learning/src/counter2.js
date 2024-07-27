import { useState } from "react";

function counter2() {

    var [counter, setCounter] =useState(0);

    function decrement(){

        counter--;
        setCounter(counter);
    }

    return(
        <div>
            <h1>Counter</h1>
            <p>{counter}</p>
            <button onClick={decrement}>decrement</button>
        </div>

    )
        


}

export default counter2;