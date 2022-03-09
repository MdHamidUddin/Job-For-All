
import { Link } from "react-router-dom";
import React,{useState,useEffect} from "react";
import axios from 'axios';
import Post from './Post';
import { useParams } from "react-router-dom";
const JobDetails=()=>{
    const {id}=useParams();
    const[posts, setPosts] = useState([]);

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/Freelance/PostedJobs/Corporate/"+id).then(resp=>{
            console.log(resp.data);
            setPosts(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    },[])
    return (
        <div>
            <p  style={{textAlign:"center"}}>Corporate Jobs   </p> 
                        <div>
                            <p>Post Title : {posts.Post_Title}</p>
                            <p>Post Description : {posts.Post_Description}</p>
                            <p>Job Requirement : {posts.Job_Requirement}</p>
                            <p>Responsibility : {posts.Responsibilities}</p>
                            <p>Salary : {posts.Salary}</p>
                            <p>Vacancy : {posts.Vacancy}</p>
                            <p>Employment Status : {posts.Employment_Status}</p>
                            <p>Workplace : {posts.Workplace}</p>
                            <p>Job Location : {posts.Job_Location}</p>
                            <p>Deadline : {posts.Deadline}</p>
                            <p>Post Title : {posts.Post_Title}</p>
                            <p>Post Title : {posts.Deadline}</p>
                        </div>
                   

                    
                
        </div>
    )
}
export default JobDetails;