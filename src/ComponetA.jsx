import React, { useState, createContext } from "react";
import ComponentB from "./ComponetB";
export const UserContext = createContext();

function ComponentA(){

    const [user,Setuser] = useState("@dapt")

    return(<div className="box">
        <h1>ComponetA</h1>
        <h2>{`Hello ${user}`}</h2>
        <UserContext.Provider value={user}>
        <ComponentB user={user}/>
        </UserContext.Provider>
    </div>)
}

export default ComponentA