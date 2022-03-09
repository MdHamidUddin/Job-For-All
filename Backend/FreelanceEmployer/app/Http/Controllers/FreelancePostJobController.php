<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\models\Post;
use App\Models\FEmp;
use App\Http\Middleware\ValidFreelanceEmployer;


class FreelancePostJobController extends Controller
{
    //

    function Post()
    {
        return view('FreelanceEmployer.FreelanceJobPost');
    }
    //

    function PostSubmit(Request $request)
    {
        $this->validate(
            $request,
            [
                'title'=>'required',
                'description'=>'required',
                'requirements'=>'required',
                'resbonsibilities'=>'required',
                'salary'=>'required',
                'vacancy'=>'required',
                'status'=>'required',
                'workplace'=>'required',
                'location'=>'required',
                'compensation'=>'required',
                'deadline'=>'required'


            ],
            [
                'title.required'=>'Job Title required !',
                'description.required'=>'Please Enter Job Description',
                'requirements.required'=>'Please Enter Job Requirement',
                'resbonsibilities.required'=>'Enter Job Responsibilities',
                'salary.required'=>'You must give a salary',
                'vacancy.required'=>'Enter the number of seat vacancy',
                'status.required'=>'Working Status required !',
                'location.required'=>'You must give Your Location',
                'compensation.required'=>'You must give info about compensation',
                'deadline.required'=>'You must set the deadline'

    
            ]
        );

$PostedBy="";
       
            $FreelanceEmployer=FEmp::where('Freelance_Id',Session()->get('freelance_id'))->first();
            $PostedBy=$FreelanceEmployer->Username;
$PostedBy="F".$PostedBy;




        $var = new Post();
        $var->Post_Title= $request->title;
        $var->Post_Description= $request->description;
        $var->Job_Requirement = $request->requirements;
        $var->Responsibilities = $request->resbonsibilities;
        $var->Salary=$request->salary;
        $var->Vacancy = $request->vacancy;
        $var->Employment_Status  = $request->status;
        $var->Workplace=$request->workplace;
        $var->Job_Location=$request->location;
        $var->Compensation=$request->compensation;
        $var->Deadline=$request->deadline;
        $var->Posted_By=$PostedBy;
        $var->Post_Status="Pending";
        $var->save();
    
        return redirect()->route('freelancerDash');
    
      
    }


    //

    function FreelanceJobPostSubmit(Request $request)
    {

        // $PostedBy="Freelance";
       
        $var = new Post();
        $var->Post_Title= $request->Title;
        $var->Post_Description= $request->Desc;
        $var->Job_Requirement = $request->Req;
        $var->Responsibilities = $request->Res;
        $var->Salary=$request->Salary;
        $var->Vacancy = $request->Vacancy;
        $var->Employment_Status  = $request->Status;
        $var->Workplace=$request->Workplace;
        $var->Job_Location=$request->Location;//
        $var->Compensation=$request->Comp;
        $var->Deadline=$request->Date;
        $var->Posted_By=$request->PostedBy;
        $var->userType="Freelance";
        $var->Post_Status="Pending";
        $var->save();
    
       return $var;
    
      
    }
    function PostedJobsByUser(Request $request)
    {
        $user=$request->user;
        $Jobs=Post::where('Posted_By',$user)->where("Post_Status","Approved")->get();
        return $Jobs;
    }
   function PostedJobsByFreelance()
   {
    $user=$request->user;
    $Jobs=Post::where('Posted_By',$user)->where("Post_Status","Approved")->get();
    return $Jobs;
   }

   function DeletePostedJobs(Request $request)
   {
    $delete=Post::where('Post_Id',$request->id)->delete();
    return $delete;
   }

   function FreelancerFetch(Request $request)
   {
    $user=$request->id;
    $Jobs=Post::where('Post_Id',$user)->first();
    return $Jobs;
   }

   function JobEditAPI(Request $request)
   {
        $job=Post::where("Posted_By",$request->PostedBy)->first();

        if($job)
        {
            $job->Post_Title=$request->Title;
            $job->Post_Description=$request->Desc;
            $job->Job_Requirement=$request->Req;
            $job->Responsibilities=$request->Res;
            $job->Salary=$request->Salary;
            $job->Vacancy=$request->Vacancy;
            $job->Workplace=$request->Workplace;
            $job->Job_Location=$request->Location;
            $job->Compensation=$request->Comp;
            $job->Deadline=$request->Date;
            $job->save();
            return $job;

        }
   }


}
