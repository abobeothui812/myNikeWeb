import React,{useState, useEffect,useRef} from "react";

function MyComponent(){

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() =>{
        console.log("Component Rendered");
    })

    function handleNumberchange1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";   
    }

    function handleNumberchange2(){
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "yellow";   
    }

    function handleNumberchange3(){
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "yellow";   
    }

    return(
    <div>
    <button onClick={handleNumberchange1}>Click Me 1!!</button>
    <input type="text" ref={inputRef1} />
    
    <button onClick={handleNumberchange2}>Click Me 2!!</button>
    <input type="text" ref={inputRef2} />
    
    <button onClick={handleNumberchange3}>Click Me 3!!</button>
    <input type="text" ref={inputRef3} />
    </div>
)

    
}

export default MyComponent;