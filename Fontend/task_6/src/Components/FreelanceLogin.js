import React, {Component} from "react";
import ReactDOM from 'react-dom';
import background from "./Background.jpg";
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'; 
import { Redirect } from 'react-router-dom';
import Post from './Post';


class FreelanceLogin extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        fields: {},
        username:'',password:'',redirect: null ,
        errors: {}
      };
      
    }

    loadDoc(){
      const xhttp = new XMLHttpRequest();
      var status = 0;
      var data=[];
          data = {                
                      password: document.getElementById("password").value,
                      username: document.getElementById("username").value,
                  };
                  console.log(data);
                  console.log(JSON.stringify(data));
                  
    xhttp.open("post", "http://127.0.0.1:8000/api/FreelanceLogin");
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.responseType = 'json';
    xhttp.send(JSON.stringify(data));
    xhttp.onload = () => {
       console.log(xhttp.response.token);
        if(xhttp.response==1)
        {
            window.location.replace("/post");
        }
        else
        {
            console.log(xhttp.response);
        }

    };
    
  }

  handleChange(e)
  {
      this.setState({[e.target.name]:e.target.value})
  }

 
    handleValidation() {
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;
  
      if (!fields["username"]) {
        formIsValid = false;
        errors["username"] = "Username Can not be empty";
      }
      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "Password Can not be empty";
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
        if(this.state.redirect)
        {
            // <Redirect push to="/post"/>

            return <Redirect to={this.state.redirect} />
        }
            
      

      return (
          
        <div  style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "750px",
            width: "1000px",
            height: "cover"
          }}>
          <html>
              <body>
          <form
            name="contactform"
            className="contactform"
            onSubmit={this.contactSubmit.bind(this)}
          >
            <div className="col-md-6">

              <fieldset style={{border:"1px solid rgb(255,232,57)",width: "350px",margin:"auto"}}>
              {/* 255,232,57 */}
                
              
                
            <input type="text" refs='username'id="username"
              style={{borderRadius: "15px" ,width: "350px", height: "20px", borderColor:"rgb(255,232,57)" , marginBottom: "10px", fontFamily:"Consolas"}}
              placeholder="Enter your Username" size="30"
            onChange={this.handleChange.bind(this, "username")}
            
            value={this.state.fields["username"]}
            />
              <span style={{ color: "black" ,fontSize: "12px", fontWeight: "10px", fontFamily:"Consolas"}}>{this.state.errors["username"]}</span>
            <br/> 
            <input type="password" refs='password' id="password" 
            style={{borderRadius: "15px" ,width: "350px", height: "20px", borderColor:"rgb(255,232,57)" , marginBottom: "10px", fontFamily:"Consolas"}}
            placeholder="Enter your Password" size="30"
              onChange={this.handleChange.bind(this, "password")}
              
              value={this.state.fields["password"]}
            />
              <span style={{ color: "black" ,fontSize: "12px", fontWeight: "10px", fontFamily:"Consolas"}}>{this.state.errors["password"]}</span>
                <br/>

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
                >Login</button>
              </fieldset>
            </div>
          </form>
        
        </body>
          </html>
          </div>
      );
    }
  }

  // React.render(<Test />, document.getElementById("container"));
  export default FreelanceLogin;