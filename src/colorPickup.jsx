import React,{useState} from "react";

function ColorPickup(){
    const [color,setColor] = useState("#FFFFFF");

    function handleColorchange(event){
        setColor(event.target.value);
    }

    return(
        <>
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
        <label htmlFor="">Select a color:</label>
        <input type="color" value={color} onChange={handleColorchange}/>
        </div>
        
        </>
    );
}

export default ColorPickup