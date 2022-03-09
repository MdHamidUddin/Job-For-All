<?php  
use App\Models\FEmp;
use App\Http\Middleware\ValidFreelanceEmployer;
?>

@extends('layouts.app')
@section('content')



<table class="table table-borded ">
    
<tr>
    <td>Post Title</td>
    <td>Post Description</td>
    <td>Job Requirement</td>
    <td>Responsibilities</td>
    <td>Salary</td>
    <td>Vacancy</td>
    <td>Employment Status</td>
    <td>Workplace</td>
    <td>Job Location</td>
    <td>Compensation</td>
    <td>Deadline</td>
    <td>Posted By</td>

</tr>

@foreach($PostedJobs as $job)
          <tr>
          
          <?php 
                $User=$job->Posted_By;
                $len=strlen($job->Posted_By);
                $len-=1;
                $User1=substr($User,0,1);
                $Username=substr($User,1,$len);
                
              //  echo $User1."   ";
              //  echo $Username." <br> ";
                if($User1=='F' and $job->Post_Status=="Approved" and FetchUser()==$Username )
                {
                ?>            
                <tr>
                <td>{{$job->Post_Title}}</td>
                <td>{{$job->Post_Description}}</td>
                <td>{{$job->Job_Requirement}}</td>
                <td>{{$job->Responsibilities}}</td>
                <td>{{$job->Salary}}</td>
                <td>{{$job->Vacancy}}</td>
                <td>{{$job->Employment_Status}}</td>
                <td>{{$job->Workplace}}</td>
                <td>{{$job->Job_Location}}</td>
                <td>{{$job->Compensation}}</td>
                <td>{{$job->Deadline}}</td>
                <td>{{$Username}}</td>
                
                <td><a class="btn btn-info btn-sm" href="/Freelance/Edit/PostedJobs/{{$job->Post_Id}}/{{$job->Post_Title}}">Edit</a></td>
                <td><a class="btn btn-danger btn-sm" href="/Freelance/Delete/PostedJobs/{{$job->Post_Id}}/{{$job->Post_Title}}">Delete</a></td>
                  </tr>

                  <?php }?>
                  </tr>
        @endforeach
                </table>

                <?php 

                  function FetchUser()
                  {
                    $FreelanceEmployer=FEmp::where('Freelance_Id',Session()->get('freelance_id'))
                    ->first();
                    $User=$FreelanceEmployer->Username;
                    return $User;
                  }


                ?>

        @endsection