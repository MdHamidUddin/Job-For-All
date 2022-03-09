
import { Link } from "react-router-dom";
import React,{useState,useEffect} from "react";
import axios from 'axios';
import Post from './Post';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
const Delete=()=>{
    let history = useHistory();
    const {id}=useParams();
    const [posts,setPosts]=useState([]);

   if(
        axios.get("http://127.0.0.1:8000/api/Freelancer/Posted/Jobs/delete/"+id).then(resp=>{
            console.log(resp.data);
            setPosts(resp.data);
            
          

        }).catch(err=>{
            console.log(err);
        })
   )
    {
        history.push("/Freelance/MyPostedJob");
    }
    return (
        <div>
      
                
        </div>
    )
}
export default Delete;