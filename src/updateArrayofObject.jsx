import React,{useState} from "react";

function MyComponent3(){

    const [cars, setCars] = useState([]);
    const [carYear, setCaryear] =useState(new Date().getFullYear());
    const [carMake, setCarmake] =useState("");
    const [carModel, setCarmodel] =useState("");

    function handleAddcar(){
        const newCar = {year: carYear,make: carMake,model:carModel};

        setCars(c => [...c,newCar]);

        setCaryear(new Date().getFullYear());
        setCarmodel("");
        setCarmake("");
    }

    function handleRemoveCar(index){
        setCars(c => c.filter((_,i) => i !== index ))
    }

    function handleYearchange(event){
        setCaryear(event.target.value);
    }

    function handleModelchange(event){
        setCarmodel(event.target.value);   
    }

    function handleMakechange(event){
        setCarmake(event.target.value);
    }

    return(<>
        <div>
            <h2>List of car Objects</h2>
            <ul>
                {cars.map((car,index) => <li key={index} onClick={() => handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>)}
            </ul>
            <input type="number"value={carYear} onChange={handleYearchange} /><br />
            <input type="text" value={carMake} placeholder="Enter car make" onChange={handleMakechange}/><br />
            <input type="text" value={carModel} placeholder="Enter car model" onChange={handleModelchange}/><br />
            <button onClick={handleAddcar}>Addcar</button>
        </div>
    
    </>);
}

export default MyComponent3