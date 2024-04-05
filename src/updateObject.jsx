import React, {useState} from 'react';
function MyComponent2(){
    const [car, setCar] = useState({year: 2024,
                                    make: "Ford",
                                    model: "Mustang"});


    function handleYearchange(event){
        setCar(c => ({...c, year: event.target.value}));
    }

    function handleMakechange(event){
        setCar(c => ({...c, make: event.target.value}));
        
    }

    function handleModelchange(event){
        setCar(c => ({...c, model: event.target.value}));
        
    }

    return(<div>
        <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

        <input type="number" value={car.year} onChange={handleYearchange} /> <br />
        <input type="text"   value={car.make} onChange={handleMakechange}/> <br />
        <input type="text"   value={car.model} onChange={handleModelchange}/>  <br />
    </div>);

    }
export default MyComponent2