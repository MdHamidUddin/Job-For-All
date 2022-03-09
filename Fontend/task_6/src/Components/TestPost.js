import React, {Component} from "react";
import ReactDOM from 'react-dom';
class Test extends React.Component {
    constructor(props) {
      super(props);
  
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
        <div class="col-lg-6">
<form
  name="contactform"
  className="contactform"
  role="form"
  class="php-email-form"
  onSubmit={this.contactSubmit.bind(this)}>

  <div class="col-md-6 form-group">
      <input
      class="form-control"
        ref="name"
        id="name"
        type="text"
        size="30"
        placeholder="Name"
        onChange={this.handleChange.bind(this, "name")} 
        
        value={this.state.fields["name"]}
      />
      <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
      
      <br />
      <div class="col-md-6 form-group">
  <input type="text" refs='username'id="username" placeholder="Enter your Username" size="30"
  onChange={this.handleChange.bind(this, "username")}
  
  value={this.state.fields["username"]}
  />
    <span style={{ color: "red" }}>{this.state.errors["username"]}</span>
  <br/>
  <div/>
  <div class="col-md-6 form-group">
      <input
       class="form-control"
        refs="email"
        type="text"
        id="email"
        size="30"
        placeholder="Email"
        onChange={this.handleChange.bind(this, "email")}
        
        value={this.state.fields["email"]}
      />
      <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
      <br />
      </div>

      <div class="col-md-6 form-group"></div>
  <input type="password"  class="form-control" refs='password' id="password" placeholder="Enter your Password" size="30"
    onChange={this.handleChange.bind(this, "password")}
    
    value={this.state.fields["password"]}
  />
    <span style={{ color: "red" }}>{this.state.errors["password"]}</span>
      <br/>
      <div/>
      <div class="col-md-6 form-group">
      <input type="password" class="form-control" refs='Cpassword' id="Cpassword" placeholder="Enter your Confirm Password" size="30"
    onChange={this.handleChange.bind(this, "Cpassword")}
    
    value={this.state.fields["Cpassword"]}           
  />
      <span style={{ color: "red" }}>{this.state.errors["Cpassword"]}</span>
      <br/>
      </div>
      <div class="col-md-6 form-group">
      <input
       class="form-control"
        refs="address"
        type="text"
        id="address"
        size="30"
        placeholder="Address"
        onChange={this.handleChange.bind(this, "address")}
        
        value={this.state.fields["address"]}
      />
           <span style={{ color: "red" }}>{this.state.errors["address"]}</span>
      <br />
      </div>
      <div class="col-md-6 form-group">
      <input
       class="form-control"
        refs="phone"
        type="text"
        id="phone"
        size="30"
        placeholder="Phone"
        onChange={this.handleChange.bind(this, "phone")}
        
        value={this.state.fields["phone"]}
      />
           <span style={{ color: "red" }}>{this.state.errors["phone"]}</span>
      <br />
      </div>
      <div class="col-md-6 form-group">
     
  <input type="text"  class="form-control" refs='nid' id="nid" placeholder="Enter your NID"  size="30"
  onChange={this.handleChange.bind(this, "nid")}
  
  value={this.state.fields["nid"]}    
  />
    <span style={{ color: "red" }}>{this.state.errors["nid"]}</span>
      <br />
      </div>

      <div class="col-md-6 form-group">
  <input type="text"  class="form-control" refs='jobtype' id="jobtype" placeholder="Select your Job Type" size="30"
  onChange={this.handleChange.bind(this, "jobtype")}
  
  value={this.state.fields["jobtype"]}
  />
    <span style={{ color: "red" }}>{this.state.errors["jobtype"]}</span>
  <br />
  </div>
  <div class="text-center">
      <button type="submit"  class="form-control" onClick={this.loadDoc}   value="Post" name="Post">Post</button>
      </div>

  </div>
  </div>
</form>
</div>
      );
    }
  }

  // React.render(<Test />, document.getElementById("container"));
  export default Test;