import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom"


const Login = () => {
    // let[token, setToken]= useState("");
    let[title, setTitle] =useState("");
    let[description, setDescription] =useState("");
    let[requirement, setRequirement] =useState("");
    let[responsibility, setResponsibility] =useState("");
    let[salary, setSalary] =useState("");
    let[vacancy, setVacancy] =useState("");
    let[workplace, setWorkplace] =useState("");
    let[compensation, setCompensation] =useState("");
    let[date, setDate] =useState("");
    let[Status, setStatus] =useState("");
    let[location, setLocation] =useState("");
    
    let history = useHistory();



    const {id}=useParams();
    const [posts,setPosts]=useState([]);



    useState(()=>{
      axios.get("http://127.0.0.1:8000/api/Freelancer/Pre/Update/"+id).then(resp=>{
          console.log(resp.data);
          setPosts(resp.data);
          //console.log(posts);

      }).catch(err=>{
          console.log(err);
      });
  },[])


    const Update= ()=>{
        if(title=="")
        {
            title=posts.Post_Title;
        }
        if(""==description)
        {
            description=posts.Post_Description;
        }
        
        if(""==requirement)
        {
            requirement=posts.Job_Requirement;
        }
        if(""==responsibility)
        {
            responsibility=posts.Responsibilities;
        }
        if(""==salary)
        {
            salary=posts.Salary;
        }
        if(""==vacancy)
        {
            vacancy=posts.Vacancy;
        }
        if(""==workplace)
        {
            workplace=posts.Workplace;
        }
        if(""==location)
        {
           location=posts.Job_Location; 
        }
        if(""==compensation)
        {
            compensation=posts.Compensation;
        }
        if(""==date)
        {
            date=posts.Deadline;
        }
         var User=JSON.parse( localStorage.getItem('user'));
         console.log(User.Username);
        var obj = {Title: title, Desc: description, Req: requirement,Res:responsibility,Salary:salary,Vacancy:vacancy, Workplace:workplace,Comp:compensation,Date:date,Location:location,PostedBy:User.Username};
       
         console.log(obj);
       if( axios.post("http://127.0.0.1:8000/api/Freelancer/Job/Update",obj)
        .catch(err=>{
            console.log(err);
        }))
        {
            alert("Job updated Successfull!!");
           history.push("/Freelance/MyPostedJob");
        }
        
    }


    return (
        <div >
            <section id="contact" class="contact">
                <div class="container">
                    <br />
                    <div class="section-title">
                        <h2 align="center">Updating Post Job</h2>
                    </div>

                    <div class="row">
                        <center>
                            <div class="col-lg-5">
                                <form class="php-email-form">
                                    
                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="title" id="title" placeholder="title"
                                         style={{borderRadius: "15px" ,width: "350px", height: "20px", borderColor:"rgb(255,232,57)" , marginBottom: "10px", fontFamily:"Consolas"}}
                                         required  defaultValue={posts.Post_Title} onChange={(e)=>setTitle(e.target.value)}/>
                                    </div>
                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="description" id="description" placeholder="description" 
                                         style={{borderRadius: "15px" ,width: "350px", height: "20px", borderColor:"rgb(255,232,57)" , marginBottom: "10px", fontFamily:"Consolas"}}
                                         required  defaultValue={posts.Post_Description} onChange={(e)=>setDescription(e.target.value)}/>
                                    </div>
                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="requirement" id="requirement" placeholder="requirement" 
                                         style={{borderRadius: "15px" ,width: "350px", height: "20px", borderColor:"rgb(255,232,57)" , marginBottom: "10px", fontFamily:"Consolas"}}
                                         required  defaultValue={posts.Job_Requirement} onChange={(e)=>setRequirement(e.target.value)}/>
                                    </div>
                                    
                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="responsibility" id="responsibility" placeholder="responsibility" 
                                         style={{borderRadius: "15px" ,width: "350px", height: "20px", borderColor:"rgb(255,232,57)" , marginBottom: "10px", fontFamily:"Consolas"}}
                                         required  defaultValue={posts.Responsibilities} onChange={(e)=>setResponsibility(e.target.value)}/>
                                    </div>
                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="salary" id="salary" placeholder="salary" 
                                         style={{borderRadius: "15px" ,width: "350px", height: "20px", borderColor:"rgb(255,232,57)" , marginBottom: "10px", fontFamily:"Consolas"}}
                                         required  defaultValue={posts.Salary} onChange={(e)=>setSalary(e.target.value)}/>
                                    </div>
                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="vacancy" id="vacancy" placeholder="vacancy" 
                                         style={{borderRadius: "15px" ,width: "350px", height: "20px", borderColor:"rgb(255,232,57)" , marginBottom: "10px", fontFamily:"Consolas"}}
                                         required  defaultValue={posts.Vacancy} onChange={(e)=>setVacancy(e.target.value)}/>
                                    </div>







                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="workplace" id="workplace" placeholder="workplace" 
                                         style={{borderRadius: "15px" ,width: "350px", height: "20px", borderColor:"rgb(255,232,57)" , marginBottom: "10px", fontFamily:"Consolas"}}
                                         required  defaultValue={posts.Workplace} onChange={(e)=>setWorkplace(e.target.value)}/>
                                    </div>

                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="location" id="location" placeholder="location" 
                                         style={{borderRadius: "15px" ,width: "350px", height: "20px", borderColor:"rgb(255,232,57)" , marginBottom: "10px", fontFamily:"Consolas"}}
                                         required  defaultValue={posts.Job_Location} onChange={(e)=>setLocation(e.target.value)}/>
                                    </div>

                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="compensation" id="compensation" placeholder="compensation" 
                                         style={{borderRadius: "15px" ,width: "350px", height: "20px", borderColor:"rgb(255,232,57)" , marginBottom: "10px", fontFamily:"Consolas"}}
                                         required  defaultValue={posts.Compensation} onChange={(e)=>setCompensation(e.target.value)}/>
                                    </div>

                                    <div class="form-group mt-3">
                                        <input type="date" class="form-control" name="date" id="date" placeholder="date" 
                                         style={{borderRadius: "15px" ,width: "350px", height: "20px", borderColor:"rgb(255,232,57)" , marginBottom: "10px", fontFamily:"Consolas"}}
                                         required  defaultValue={posts.Deadline} onChange={(e)=>setDate(e.target.value)}/>
                                    </div>

                                    <br/>
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
                                
                                >Post Job</button></div>
                            </div>
                        </center>
                    </div>

                </div>
            </section>
        </div>
    )
}
export default Login;