
import { Link } from "react-router-dom";
import React,{useState,useEffect} from "react";
import axios from 'axios';
import Post from './Post';
const FreelanceJobs=()=>{
    const [posts,setPosts]=useState([]);
    var User=JSON.parse( localStorage.getItem('user'));
        console.log(User.Username);
    useState(()=>{
        

        axios.get("http://127.0.0.1:8000/api/Freelance/Posted/Jobs/"+User.Username).then(resp=>{
            console.log(resp.data);
            setPosts(resp.data);

        }).catch(err=>{
            console.log(err);
        });
    },[])


    return (
        <div>
            <p style={{textAlign:"center"}}>My Posted Jobs</p> 
                {
                   
                    posts.map(p=>(
                        <fieldset style={{width:"400px", margin:"auto"}}>
                        <li key={p.Post_id}> Title: <Link to={"/freelance/posts/details/"+p.Post_Id}>{p.Post_Title} </Link><br/>Salary: {p.Salary}
                        <br/>Posted By: {p.Posted_By}<br/>Post Status: {p.Post_Status}<br/><br/>
                       

                        <Link to={"/Freelance/Delete/"+p.Post_Id} style={{paddingRight:"7px"}}> Delete</Link>
                        <Link to={"/Freelance/Update/"+p.Post_Id}> Update</Link>
   
                        <hr/></li>
                        </fieldset>
                    ))
                }
                
        </div>
    )
}
export default FreelanceJobs;