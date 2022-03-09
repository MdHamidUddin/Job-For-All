import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
const Login = () => {
    // let[token, setToken]= useState("");
    let[name, setName] = useState("");
    let[email, setEmail] =useState("");
    let[phone, setPhone] =useState("");
    let[nid, setNID] =useState("");
    let[address, setAddress] =useState("");
    let[jobtype, setJobType] =useState("");
    let history = useHistory();
    const {id}=useParams();
    const [posts,setPosts]=useState([]);



    useState(()=>{
       
      axios.get("http://127.0.0.1:8000/api/Freelance/update/"+id).then(resp=>{
          //console.log(resp.data);
          setPosts(resp.data);

      }).catch(err=>{
          console.log(err);
      });
  },[])



    const Update= ()=>{
        
     
        if(email=="")
        {
          email=posts.Email;
        }

        if(name=="")
        {
          name=posts.Name;
        }
        if(phone=="")
        {
          phone=posts.Phone;
        }
        if(address=="")
        {
          address=posts.Address;
        }
        if(jobtype=="")
        {
          jobtype=posts.JobType;
        }
        if(nid=="")
        {
          nid=posts.NID;
        }

        var obj = {id:posts.Freelance_Id,Email : email,Name : name,NID : nid,Phone : phone,Address : address, JobType:jobtype};
        //console.log(posts.Freelance_Id);
          console.log(obj);

        if(axios.post("http://127.0.0.1:8000/api/FreelanceDashboardUpdate",obj)
        .then(resp=>{
            var token = resp.data;
            // console.log(token);
            // var user = {userId: token.userid, access_token:token.token,tokenid:token.id};
            //localStorage.setItem('user',JSON.stringify(user));
            // console.log(localStorage.getItem('user'));
            // if(!token.userid==""){
            //     //history.push("/dashboard");
               // window.setTimeout(function(){window.location.reload()},100);
            //   }
        }).catch(err=>{
            console.log(err);
        }))
        {
          alert("Update Success");
          history.push("/dashboard");
        }
        
    }


    return (
        <div >
            <section id="contact" class="contact">
                <div class="container">
                    <br />
                    <div class="section-title">
                        <h2 align="center">Profile</h2>
                    </div>

                    <div class="row">
                        <center>
                            <div class="col-lg-5">
                                <form class="php-email-form">
                                    
                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="username" id="username" placeholder="Username"
                                         style={{borderRadius: "15px" ,width: "350px", height: "20px", borderColor:"rgb(255,232,57)" , marginBottom: "10px", fontFamily:"Consolas"}}
                                         required  defaultValue={posts.Username} onChange={(e)=>setName(e.target.value)}/>
                                    </div>
                                    <div class="form-group mt-3">
                                        <input type="test" class="form-control" name="name" id="name" placeholder="name" 
                                         style={{borderRadius: "15px" ,width: "350px", height: "20px", borderColor:"rgb(255,232,57)" , marginBottom: "10px", fontFamily:"Consolas"}}
                                         required  defaultValue={posts.Name} onChange={(e)=>setName(e.target.value)}/>
                                    </div>
                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="email" id="email" placeholder="Email" 
                                         style={{borderRadius: "15px" ,width: "350px", height: "20px", borderColor:"rgb(255,232,57)" , marginBottom: "10px", fontFamily:"Consolas"}}
                                         required  defaultValue={posts.Email} onChange={(e)=>setEmail(e.target.value)}/>
                                    </div>

                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="phone" id="phone" placeholder="Phone" 
                                         style={{borderRadius: "15px" ,width: "350px", height: "20px", borderColor:"rgb(255,232,57)" , marginBottom: "10px", fontFamily:"Consolas"}}
                                         required  defaultValue={posts.Phone} onChange={(e)=>setPhone(e.target.value)}/>
                                    </div>

                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="nid" id="nid" placeholder="NID" 
                                         style={{borderRadius: "15px" ,width: "350px", height: "20px", borderColor:"rgb(255,232,57)" , marginBottom: "10px", fontFamily:"Consolas"}}
                                         required  defaultValue={posts.NID} onChange={(e)=>setNID(e.target.value)}/>
                                    </div>

                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="address" id="address" placeholder="address" 
                                         style={{borderRadius: "15px" ,width: "350px", height: "20px", borderColor:"rgb(255,232,57)" , marginBottom: "10px", fontFamily:"Consolas"}}
                                         required  defaultValue={posts.Address} onChange={(e)=>setAddress(e.target.value)}/>
                                    </div>

                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="jobtype" id="jobtype" placeholder="jobtype" 
                                         style={{borderRadius: "15px" ,width: "350px", height: "20px", borderColor:"rgb(255,232,57)" , marginBottom: "10px", fontFamily:"Consolas"}}
                                         required  defaultValue={posts.JobType} onChange={(e)=>setJobType(e.target.value)}/>
                                    </div>






                                        {/* phn, nuid, address,jobtype */}
                                </form>
                                <div class="php-email-form"><button type="submit" onClick={Update} 
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
                                
                                >Update</button></div>
                            </div>
                        </center>
                    </div>

                </div>
            </section>
        </div>
    )
}
export default Login;