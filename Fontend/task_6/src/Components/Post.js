import React from "react";
const Post=(props)=>{
    
    return( 
        <div>
            
            <p>
            ID: {props.ID}<br/>
            Name : {props.Name}<br/>
            Email: {props.Email}<br/>
            Phone: {props.Phone}<br/>
            NID: {props.NID}<br/>
            Package: {props.Package}
            </p>
            
        </div>
 
    )
    
}
export default Post;