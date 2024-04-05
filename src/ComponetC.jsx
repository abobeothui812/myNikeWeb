import ComponentD from "./ComponetD";
import React,{useContext} from "react"
import { UserContext } from "./ComponetA";
function ComponentC(props){
    const user = useContext(UserContext);

    return(<div className="box">
        <h1>ComponentC</h1>
        <h2>{`Hello ${user}`}</h2>
        <ComponentD></ComponentD>
    </div>)
}

export default ComponentC