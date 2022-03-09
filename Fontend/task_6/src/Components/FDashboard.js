import React,{useState,useEffect} from "react";
import axios from 'axios';
import '../assets/css/style.css';


const AllPost=()=>{
    const [posts,setPosts]=useState([]);

    useState(()=>{
        var storedInfo = JSON.parse(localStorage.getItem("user"));
        var obj = {freelance_Id : storedInfo.userId};

        //console.log(obj);
        axios.post("http://127.0.0.1:8000/api/dashboard",obj).then(resp=>{
           console.log(resp.data);
            setPosts(resp.data);

            console.log(storedInfo.userId);
            //window.location.reload(false);
        }).catch(err=>{
            console.log(err);
        });
        
    },[])
    return (
        <div>
   
             <fieldset style={{width:"350px", margin:"auto"}}>
                {
                <div>
                    <p style={{textAlign:"center"}}>Freelance Dashboard</p> 
                    <p>User Id : {posts.Freelance_Id}</p>
                    <p>Username : {posts.Username}</p>
                    <p>Name : {posts.Name}</p>
                    <p>Email : {posts.Email}</p>
                    <p>Phone : {posts.Phone}</p>
                    <p>NID : {posts.NID}</p>
                    <p>Address : {posts.Address}</p>
                    <p>Job Type : {posts.JobType}</p>
                    <a class="button-update" href={"/profile/update/"+posts.Freelance_Id}>Update Profile</a>
                   
                </div>
                    
                }
                </fieldset>
        </div>
    )
}
export default AllPost;