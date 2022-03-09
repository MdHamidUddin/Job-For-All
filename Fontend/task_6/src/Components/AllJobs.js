import { Link } from "react-router-dom";

import React,{useState,useEffect} from "react";
import axios from 'axios';
import Post from './Post';
const FreelanceJobs=()=>{
    const [posts,setPosts]=useState([]);

    useState(()=>{
        axios.get("http://127.0.0.1:8000/api/Freelance/PostedJobs/All/").then(resp=>{
            console.log(resp.data);
            setPosts(resp.data);

        }).catch(err=>{
            console.log(err);
        });
    },[])
    return (
        <div>
             <p  style={{textAlign:"center"}}>All Jobs   </p> 
                {
                   posts.map(p=>(
                       <fieldset style={{width:"400px", margin:"auto"}}>
                    <li key={p.Post_id}> Title: <Link to={"/all/posts/details/"+p.Post_Id}>{p.Post_Title} </Link><br/>Salary: {p.Salary}
                    <br/>Posted By: {p.Posted_By}<br/>Post Status: {p.Post_Status}<br/><br/>
                    {/* <a class="button-update" href={"/posts/update/"+p.Post_id}>Update</a>
                    {" "}<a class="button-delete" href="#about">Delete</a> */}
                    <hr/>
                 
                    </li>
                    </fieldset>
                ))
                }
                
        </div>
    )
}
export default FreelanceJobs;