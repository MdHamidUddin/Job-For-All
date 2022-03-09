

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";


const Header = () => {
    var user;
    let history = useHistory();
    var isLoggedOut = true;
    const logout = () => {
      if (localStorage.getItem('user')) {
        user = JSON.parse(localStorage.getItem('user'));
        var obj = { id: user.tokenid };
        if (axios.post("http://127.0.0.1:8000/api/FreelanceLogout", obj)) {
        localStorage.removeItem('user');
          history.push("/"); //To redirect to Homepage
           window.setTimeout(function(){window.location.reload()},200);
          isLoggedOut = true;
        }
      }
      else {
        history.push("/");
      }
      
    }
    
    if (localStorage.getItem('user')) {
      isLoggedOut = false;
    }
  
    return (
        <div style={{backgroundColor:"black" ,width:"100%",position:"fixed"}}>
             
            <Link to="/" style={{ fontFamily: 'Ubuntu', textDecoration: 'none', padding: "15px 75px",float:'left',color:"white"}}>Job For All</Link>
            {/* <Link to="/Contact" style={{ textDecoration: 'none', padding: "0px 3px",float:'right',color:"white"}}>Contact</Link> 
            {/* <Button style={{color:"#00005c", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)"}} outline ><Link to="/Student">Student</Link> </Button> */}
            {/* <Link to="/color" style={{ textDecoration: 'none', padding: "0px 3px",float:'right',color:"white"}}>Color</Link> */} */
            {/* <Link to="EffectHook/"  style={{ textDecoration: 'none', padding: "0px 3px",float:'right',color:"white"}}>Effect Hook</Link>
            <Link to="/post"  style={{ textDecoration: 'none', padding: "0px 3px",float:'right',color:"white"}}>User Info</Link>  */}
            {isLoggedOut && ( <Link to="/freelanceRegistration"  style={{ fontFamily: 'Ubuntu', textDecoration: 'none', padding: "15px 5px",float:'right',color:"white"}}>Registration</Link> )}
            {isLoggedOut && (<Link to="/freelanceLogin"  style={{ fontFamily: 'Ubuntu', textDecoration: 'none', padding: "15px 5px",float:'right',color:"white"}}>Login</Link> )}
            {!isLoggedOut && (  <Link to="/dashboard"  style={{ fontFamily: 'Ubuntu', textDecoration: 'none', padding: "15px 5px",float:'right',color:"white"}}>Dashboard</Link> )}
            {!isLoggedOut && (<Link to="#logout"  style={{ fontFamily: 'Ubuntu', textDecoration: 'none', padding: "15px 5px",float:'right',color:"white"}}  onClick={logout}>Logout</Link> )}
            <Link to="/freelance/jobs"  style={{ fontFamily: 'Ubuntu', textDecoration: 'none', padding: "15px 5px",float:'right',color:"white"}}>Freelancer</Link> 
            <Link to="/CorporateJobs/jobs"  style={{ fontFamily: 'Ubuntu', textDecoration: 'none', padding: "15px 5px",float:'right',color:"white"}}>Corporate</Link> 
            <Link to="/All/jobs"  style={{ fontFamily: 'Ubuntu', textDecoration: 'none', padding: "15px 5px",float:'right',color:"white"}}>Jobs</Link> 
            {!isLoggedOut && (<Link to="/Freelance/PostJob"  style={{ fontFamily: 'Ubuntu', textDecoration: 'none', padding: "15px 5px",float:'right',color:"white"}}>Post Job</Link>)}
            {!isLoggedOut && (<Link to="/Freelance/MyPostedJob"  style={{ fontFamily: 'Ubuntu', textDecoration: 'none', padding: "15px 5px",float:'right',color:"white"}}>Posted Job</Link> )} 

     
            
        </div>
    )
}

export default Header;
