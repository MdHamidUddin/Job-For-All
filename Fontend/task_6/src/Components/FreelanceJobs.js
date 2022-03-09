
import { Link } from "react-router-dom";
import React,{useState,useEffect} from "react";
import axios from 'axios';
import Post from './Post';
const FreelanceJobs=()=>{
    const [posts,setPosts]=useState([]);

    useState(()=>{
        axios.get("http://127.0.0.1:8000/api/Freelance/PostedJobs/Freelance/").then(resp=>{
            console.log(resp.data);
            setPosts(resp.data);

        }).catch(err=>{
            console.log(err);
        });
    },[])
    return (
        <div>
            <p style={{textAlign:"center"}}>Freelance Jobs   </p> 
                {
                    // posts.map(post=>(
                    //     // <Post ID={post.ID} Email={post.Email} 
                    //     // Name={post.Name} Phone={post.Phone} NID={post.NID} Package={post.Package} ></Post>
                    //     <div>
                    //         <p>Post Title : {post.Post_Title}</p>
                    //         <p>Post Description : {post.Post_Description}</p>
                    //         <p>Job Requirement : {post.Job_Requirement}</p>
                    //         <p>Responsibility : {post.Responsibilities}</p>
                    //         <p>Salary : {post.Salary}</p>
                    //         <p>Vacancy : {post.Vacancy}</p>
                    //         <p>Employment Status : {post.Employment_Status}</p>
                    //         <p>Workplace : {post.Workplace}</p>
                    //         <p>Job Location : {post.Job_Location}</p>
                    //         <p>Deadline : {post.Deadline}</p>
                    //         <p>Post Title : {post.Post_Title}</p>
                    //         <p>Post Title : {post.Deadline}</p>
                    //     </div>
                    // ))

                    posts.map(p=>(
                        <fieldset style={{width:"400px", margin:"auto"}}>
                        <li key={p.Post_id}> Title: <Link to={"/freelance/posts/details/"+p.Post_Id}>{p.Post_Title} </Link><br/>Salary: {p.Salary}
                        <br/>Posted By: {p.Posted_By}<br/>Post Status: {p.Post_Status}<br/><br/>
                        {/* <a class="button-update" href={"/posts/update/"+p.Post_id}>Update</a>
                        {" "}<a class="button-delete" href="#about">Delete</a> */}
                        <hr/></li>
                        </fieldset>
                    ))
                }
                
        </div>
    )
}
export default FreelanceJobs;