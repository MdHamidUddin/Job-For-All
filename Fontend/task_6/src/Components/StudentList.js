import React from 'react';

function StudentList(props)
{
    return (
        <div> 
       <h3>Student : {props.sl}</h3>

       <p><b>Name :</b> {props.name}<br/>

       <b>Id :</b> {props.id}<br/>

       <b>Cgpa :</b> {props.cgpa}<br/>

       <b>Credit Completed :</b> {props.cc}<br/>

       <b> Semester :</b> {props.semester}</p>
       

        
        
        </div>
    )
}
export default StudentList;