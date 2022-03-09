import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from "axios";
import Home from './Components/Home';
import Nav from './Components/Nav';
import Student from './Components/Student';
import Contact from './Components/Contact';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'; 
import ColorState from './Components/ColorState';
import EffctHookCheck from './Components/EffectHookCheck';
import AllPost from './Components/AllPost';
import  FreelanceRegistration from './Components/FreelanceRegistration';

import TestPost from './Components/TestPost';
import background from "./Components/Background.jpg";
import Header from './Components/Header';
import FreelanceLogin from './Components/FreelanceLogin';
import Login from './Components/Login';
import FDashboard from './Components/FDashboard';
import FreelanceJobs from './Components/FreelanceJobs';
import CorporateJobs from './Components/CorporateJobs';
import AllJobs from './Components/AllJobs';
import FreelanceJobDetails from './Components/FreelanceJobDetails';
import CorporateJobDetails from './Components/CorporateJobDetails';
import AllJobDetails from './Components/AllJobDetails';
import FreelanceUpdateProfile from './Components/FreelanceUpdateProfile';
import FPostJob from './Components/FPostJob';
import PostedJob from './Components/PostedJob';
import Delete from './Components/Delete';
import UpdateJobPost from './Components/UpdateJobPost';



// import './assets/vendor/bootstrap/css/bootstrap.min.css';
// import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
// import './assets/vendor/boxicons/css/boxicons.min.css';
// import './assets/vendor/glightbox/css/glightbox.min.css';
// import './assets/vendor/swiper/swiper-bundle.min.css';
// import './assets/css/style.css';

var token = null;
if(localStorage.getItem('user')){
  var obj = JSON.parse(localStorage.getItem('user'));
  token = obj.access_token;
}

axios.defaults.headers.common["Authorization"] = token;


ReactDOM.render(
  <React.StrictMode>
    <Router>
    
    <div>
      <div><Nav/></div>
    

    
    <div
    style={{
            // backgroundImage: `url(${background})`,
            backgroundSize: "100%",
            backgroundColor: "#f1ddcf",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed"
          }}>
  <div style={{padding:"50px 0px",PaddingTop:"20px"}}>
      <Switch>
        <Route exact path="/">
            <Home/>
        </Route>


        <Route exact path="/Contact">
            <Contact/>
        </Route>


        <Route exact path="/Student">
            <Student/>
        </Route>

        <Route exact path="/color">
            <ColorState/>
        </Route>
        <Route exact path="/EffectHook">
            <EffctHookCheck/>
        </Route>

        <Route exact path="/post">
            <AllPost/>
        </Route>

      </Switch>
      
  <Route exact path="/freelanceRegistration">
            <FreelanceRegistration/>
        </Route>

              
  <Route exact path="/freelanceLogin">
          <Login/>
           
        </Route>

              
  <Route exact path="/test">
            <TestPost/>
        </Route>

        <Route exact path="/dashboard">
            <FDashboard/>
        </Route>

        <Route exact path="/freelance/jobs">
            <FreelanceJobs/>
        </Route>

        <Route exact path="/CorporateJobs/jobs">
            <CorporateJobs/>
        </Route>

        <Route exact path="/All/jobs">
            <AllJobs/>
        </Route>
        
        <Route exact path="/freelance/posts/details/:id">
            <FreelanceJobDetails/>
        </Route>

        <Route exact path="/corporate/posts/details/:id">
            <CorporateJobDetails/>
        </Route>

        <Route exact path="/all/posts/details/:id">
            <AllJobDetails/>
        </Route>

        <Route exact path="/profile/update/:id">
            <FreelanceUpdateProfile/>
        </Route>

        <Route exact path="/Freelance/PostJob">
            <FPostJob/>
        </Route>

        <Route exact path="/Freelance/MyPostedJob">
            <PostedJob/>
        </Route>

        <Route exact path="/Freelance/Delete/:id">
            <Delete/>
        </Route>

        <Route exact path="/Freelance/Update/:id">
            <UpdateJobPost/>
        </Route>
  
  
  
        {/* <Route exact path="/loginn">
        <FreelanceLogin/>
        </Route> */}



        </div>
        </div>
        </div>
    </Router>
    
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
