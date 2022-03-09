import React, { useState } from "react";

const ColorState=()=>{
    var [color, setColor]= useState("Red");

    return(
        <div>
            <h1 style={{color: color}}>
               My favourite Color is {color}!  
            </h1>
            <button type="button" onClick={()=>setColor("Blue")}> Blue </button>
        </div>
    )
}
export default ColorState;