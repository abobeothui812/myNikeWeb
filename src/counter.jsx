import React, {useState} from "react";

function Counter(){
    const [counter,changeCounter] = useState(0);

    const increaseCounter = () => {
        changeCounter(c => c+1);
        changeCounter(c => c+2);
        changeCounter(c => c+1);
    }
    const decreaseCounter = () => {
        changeCounter(counter => counter-1);
        changeCounter(counter => counter-1);
    }

    const reset = () =>
    {
        changeCounter(0)
    }
    return(
        <>
        <div className="counter-container">
        <p className="count-display">Counter: {counter}</p>
        <button onClick={decreaseCounter}>Decrease</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increaseCounter}>Increase</button>
        </div>
        </>
    )
}

export default Counter