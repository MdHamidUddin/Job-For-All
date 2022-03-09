import {Component} from 'react';


class ShowContact extends Component
{
    constructor()
    {
        super()
        this.state={
            Name:"Aiub Banany Campus",
            Address:"Banani, Mohakhali, Dhaka",
            Phone:"0721334455"
        }
    }
    ChangeDetails()
    {
        this.setState({
            Name:"Aiub Parmanent Campus",
            Address:"Kuril,Dhaka",
            Phone:"0721334455"
        });
    }
    render(){
        return (
            <div>

               
              <h3>{this.state.Name} <br/>
              {this.state.Address}<br/>
               {this.state.Phone}</h3>
            <button onClick={()=>this.ChangeDetails()}>New Details</button>
            </div>
   
        )
    }
    

}
export default ShowContact;
