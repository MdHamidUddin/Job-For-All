import React, { useEffect, useState } from "react";
const EffctHookCheck=()=>{

    const [count,setCount]=useState(0);
    const [effect,setEffect]=useState(1);
    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=>count+1);
        },0);
    },[effect]);

    const change=()=>
    {
         setEffect(effect+1);
    }
    return (
        <div>
        <h1>I Have rendered {count} times!!</h1>
        {/* <h1>I Have rendered {effect} times!!</h1> */}
        <button  onClick={change}>Change</button>
        </div>

    )
    
}

export default EffctHookCheck;