
import React,{useState,useEffect} from "react";
import axios from 'axios';
import Post from './Post';
const AllPost=()=>{
    const [posts,setPosts]=useState([]);

    useState(()=>{
       
        // https://jsonplaceholder.typicode.com/todos/
        axios.get("http://127.0.0.1:8000/api/user/list").then(resp=>{
            console.log(resp.data);
            setPosts(resp.data);

        }).catch(err=>{
            console.log(err);
        });
    },[])
    return (
        <div>
            <p>Showing Customer Information   </p> 
                {
                    posts.map(post=>(
                        <Post ID={post.ID} Email={post.Email} 
                        Name={post.Name} Phone={post.Phone} NID={post.NID} Package={post.Package}
                        
                        ></Post>
                    ))
                }
                
        </div>
    )
}
export default AllPost;