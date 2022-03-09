import React, {Component, useEffect, useState} from "react";
import ReactDOM from 'react-dom';
import background from "./Background.jpg";

//import { Platform, StyleSheet, View, Text } from 'react-native';
class Test extends React.Component {
    constructor(props) {
      super(props);

      this.state =React.createRef()
  
      this.state = {
        fields: {},
        name:'',username:'',email:'',password:'',address:'',phone:'',nid:'',jobtype:'',
        errors: {},
      };
    }


    loadDoc(){
      const xhttp = new XMLHttpRequest();
      var data=[];
          data = {
                      Name: document.getElementById("name").value,
                      Email: document.getElementById("email").value,
                      Phone: document.getElementById("phone").value,
                      Password: document.getElementById("password").value,
                      Address: document.getElementById("address").value,
                      Username: document.getElementById("username").value,
                      NID: document.getElementById("nid").value,
                      JobType: document.getElementById("jobtype").value,
                     
  
                  };
                  //console.log(document.getElementById('name').value);
                  console.log(data);
                
                  console.log(JSON.stringify(data));
                  
    xhttp.open("post", "http://127.0.0.1:8000/api/FreelanceRegistration");
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.responseType = 'json';
    xhttp.send(JSON.stringify(data));
    xhttp.onload = () => {
    console.log(xhttp.response);
    };

  console.log("Checking");

  }




  changeHandler=e=>{
    this.setState({[e.target.name]:e.target.value})
  }
  
    handleValidation() {
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;
  
      //Name
      if (!fields["name"]) {
        formIsValid = false;
        errors["name"] = "Name Cannot be empty";
      }
      
      if (typeof fields["name"] !== "undefined") {
        if (!fields["name"].match(/^[a-zA-Z]+$/)) {
          formIsValid = false;
          errors["name"] = "Only letters";
        }
      }
  
      //Email
      if (!fields["email"]) {
        formIsValid = false;
        errors["email"] = "Email Cannot be empty";
      }
  
      if (typeof fields["email"] !== "undefined") {
        let lastAtPos = fields["email"].lastIndexOf("@");
        let lastDotPos = fields["email"].lastIndexOf(".");
  
        if (
          !(
            lastAtPos < lastDotPos &&
            lastAtPos > 0 &&
            fields["email"].indexOf("@@") == -1 &&
            lastDotPos > 2 &&
            fields["email"].length - lastDotPos > 2
          )
        ) {
          formIsValid = false;
          errors["email"] = "Email is not valid";
        }
      }
      if (!fields["phone"]) {
        formIsValid = false;
        errors["phone"] = "Phone can not be empty";
      }
      if (!fields["address"]) {
        formIsValid = false;
        errors["address"] = "Address Can not be empty";
      }
      if (!fields["username"]) {
        formIsValid = false;
        errors["username"] = "Username Can not be empty";
      }
      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "Password Can not be empty";
      }
      if (!fields["Cpassword"]) {
        formIsValid = false;
        errors["Cpassword"] = "Confirm Password Can not be empty";
      }
      if (!fields["nid"]) {
        formIsValid = false;
        errors["nid"] = "NID Can not be empty";
      }
      if (!fields["jobtype"]) {
        formIsValid = false;
        errors["jobtype"] = "Job Type Can not be empty";
      }
  
  
      this.setState({ errors: errors });
      return formIsValid;
    }
  
    contactSubmit(e) {
      e.preventDefault();
  
      //console.log(this.state);


      if (this.handleValidation()) {
        alert("Form submitted");
      } else {
        alert("Form has errors.");
      }
    }
  
    handleChange(field, e) {
      let fields = this.state.fields;
      fields[field] = e.target.value;
      this.setState({ fields });
    }
  
    render() {
      return (
        
        // style={{
        //   backgroundImage: `url(${background})`,
        //   backgroundSize: "750px",
        //   width: "1000px",
        //   height: "cover"
        // }}
        <div  >
              <br />
                    <div className="section-title">
                        <h2 align="center">Registration</h2>
                    </div>

             
        
            
          <form
            name="contactform"
            className="contactform"
            onSubmit={this.contactSubmit.bind(this)}
          >
            <div className="col-md-6">

              <fieldset style={{border:"1px solid rgb(255,232,57)",width: "350px",margin:"auto"}}>
              {/* 255,232,57 */}
                
                <input
                  ref="name"
                  id="name"
                  type="text"
                  size="30"
                  placeholder="Name"
                  style={{borderRadius: "15px" ,width: "350px", height: "20px", borderColor:"rgb(255,232,57)", marginBottom: "10px", fontFamily:"Consolas"}}
                  
                  onChange={this.handleChange.bind(this, "name")} 
                  
                  value={this.state.fields["name"]}
                />
                <span style={{ color: "black" ,fontSize: "12px", fontWeight: "10px", fontFamily:"Consolas"}}>{this.state.errors["name"]}</span>
                <br />
                
            <input type="text" refs='username'id="username"
              style={{borderRadius: "15px" ,width: "350px", height: "20px", borderColor:"rgb(255,232,57)" , marginBottom: "10px", fontFamily:"Consolas"}}
              placeholder="Enter your Username" size="30"
            onChange={this.handleChange.bind(this, "username")}
            
            value={this.state.fields["username"]}
            />
              <span style={{ color: "black" ,fontSize: "12px", fontWeight: "10px", fontFamily:"Consolas"}}>{this.state.errors["username"]}</span>
            <br/>

                <input
                  refs="email"
                  type="text"
                  id="email"
                  size="30"
                  placeholder="Email"
                  style={{borderRadius: "15px" ,width: "350px", height: "20px", borderColor:"rgb(255,232,57)" , marginBottom: "10px", fontFamily:"Consolas"}}
                  onChange={this.handleChange.bind(this, "email")}
                  
                  value={this.state.fields["email"]}
                />
                <span style={{ color: "black" ,fontSize: "12px", fontWeight: "10px", fontFamily:"Consolas"}}>{this.state.errors["email"]}</span>
                <br />

                
            <input type="password" refs='password' id="password" 
            style={{borderRadius: "15px" ,width: "350px", height: "20px", borderColor:"rgb(255,232,57)" , marginBottom: "10px", fontFamily:"Consolas"}}
            placeholder="Enter your Password" size="30"
              onChange={this.handleChange.bind(this, "password")}
              
              value={this.state.fields["password"]}
            />
              <span style={{ color: "black" ,fontSize: "12px", fontWeight: "10px", fontFamily:"Consolas"}}>{this.state.errors["password"]}</span>
                <br/>

                <input type="password" refs='Cpassword' id="Cpassword"
                style={{borderRadius: "15px" ,width: "350px", height: "20px", borderColor:"rgb(255,232,57)" , marginBottom: "10px", fontFamily:"Consolas"}}
                 placeholder="Enter your Confirm Password" size="30"
              onChange={this.handleChange.bind(this, "Cpassword")}
              
              value={this.state.fields["Cpassword"]}           
            />
                <span style={{ color: "black" ,fontSize: "12px", fontWeight: "10px", fontFamily:"Consolas"}}>{this.state.errors["Cpassword"]}</span>
                <br/>

                <input
                  refs="address"
                  type="text"
                  id="address"
                  size="30"
                  placeholder="Address"
                  style={{borderRadius: "15px" ,width: "350px", height: "20px", borderColor:"rgb(255,232,57)" , marginBottom: "10px", fontFamily:"Consolas"}}
                  onChange={this.handleChange.bind(this, "address")}
                  
                  value={this.state.fields["address"]}
                />
                     <span style={{ color: "black" ,fontSize: "12px", fontWeight: "10px", fontFamily:"Consolas"}}>{this.state.errors["address"]}</span>
                <br />

                <input
                  refs="phone"
                  type="text"
                  id="phone"
                  size="30"
                  placeholder="Phone"
                  style={{borderRadius: "15px" ,width: "350px", height: "20px", borderColor:"rgb(255,232,57)" , marginBottom: "10px", fontFamily:"Consolas"}}
                  onChange={this.handleChange.bind(this, "phone")}
                  
                  value={this.state.fields["phone"]}
                />
                     <span style={{ color: "black",fontSize: "12px", fontWeight: "10px", fontFamily:"Consolas" }}>{this.state.errors["phone"]}</span>
                <br />

               
            <input type="text" refs='nid' id="nid" 
            style={{borderRadius: "15px" ,width: "350px", height: "20px", borderColor:"rgb(255,232,57)" , marginBottom: "10px", fontFamily:"Consolas"}}
            placeholder="Enter your NID"  size="30"
            onChange={this.handleChange.bind(this, "nid")}
            
            value={this.state.fields["nid"]}    
            />
              <span style={{ color: "black",fontSize: "12px", fontWeight: "10px", fontFamily:"Consolas" }}>{this.state.errors["nid"]}</span>
                <br />

             
            <input type="text" refs='jobtype' id="jobtype" 
            style={{borderRadius: "15px" ,width: "350px", height: "20px", borderColor:"rgb(255,232,57)" , marginBottom: "10px", fontFamily:"Consolas"}}
            placeholder="Select your Job Type" size="30"
            onChange={this.handleChange.bind(this, "jobtype")}
            
            value={this.state.fields["jobtype"]}
            />
              <span style={{ color: "black"  ,fontSize: "12px", fontWeight: "10px", fontFamily:"Consolas"}}>{this.state.errors["jobtype"]}</span>
            <br />

                <button type="submit" onClick={this.loadDoc}   value="Post" name="Post"
                style={{  background: "#ffc107",
                    border: "0",
                    padding: "7px 30px",
                    color: "#fff",
                    transition: "0.4s",
                    borderRadius: "50px",
                    marginLeft:"120px",
                    hover:"#ffce3a"
                }}
                >Registration</button>
              </fieldset>
            </div>
          </form>
          </div>
      );
    }
  }

  // React.render(<Test />, document.getElementById("container"));
  export default Test;