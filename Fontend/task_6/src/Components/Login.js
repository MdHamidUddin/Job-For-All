import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"
const Login = () => {
    // let[token, setToken]= useState("");
    let[username, setName] = useState("");
    let[password, setPassword] =useState("");
    let history = useHistory();

    const loginSubmit= ()=>{
        var obj = {username: username, password: password};
        console.log(obj);
        axios.post("http://127.0.0.1:8000/api/FreelanceLogin",obj)
        .then(resp=>{
            var token = resp.data;
            console.log(token);
            var user = {userId: token.userid, access_token:token.token,tokenid:token.id,Username:username};
            localStorage.setItem('user',JSON.stringify(user));
            console.log(localStorage.getItem('user'));
            if(!token.userid==""){
                history.push("/dashboard");
                window.setTimeout(function(){window.location.reload()},100);
              }
        }).catch(err=>{
            console.log(err);
        });
        
    }


    return (
        <div >
            <section id="contact" class="contact">
                <div class="container">
                    <br />
                    <div class="section-title">
                        <h2 align="center">Login</h2>
                    </div>

                    <div class="row">
                        <center>
                            <div class="col-lg-5">
                                <form class="php-email-form">
                                    
                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="username" id="username" placeholder="Username"
                                         style={{borderRadius: "15px" ,width: "350px", height: "20px", borderColor:"rgb(255,232,57)" , marginBottom: "10px", fontFamily:"Consolas"}}
                                         required  value={username} onChange={(e)=>setName(e.target.value)}/>
                                    </div>
                                    <div class="form-group mt-3">
                                        <input type="password" class="form-control" name="password" id="password" placeholder="Password" 
                                         style={{borderRadius: "15px" ,width: "350px", height: "20px", borderColor:"rgb(255,232,57)" , marginBottom: "10px", fontFamily:"Consolas"}}
                                         required  value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                    </div><br/>
                                </form>
                                <div class="php-email-form"><button type="submit" onClick={loginSubmit} 
                                 style={{  background: "#ffc107",
                                 border: "0",
                                 padding: "7px 30px",
                                 color: "black",
                                 transition: "0.4s",
                                 borderRadius: "50px",
                                 marginLeft:"30px",
                                 hover:"#ffce3a",
                                 textColor:"black"
                             }}
                                
                                >Login</button></div>
                            </div>
                        </center>
                    </div>

                </div>
            </section>
        </div>
    )
}
export default Login;