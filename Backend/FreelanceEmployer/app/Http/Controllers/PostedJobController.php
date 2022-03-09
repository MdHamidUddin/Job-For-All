<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\models\Post;

class PostedJobController extends Controller
{
    //

    public function PostedJobs(){
       // echo substr("Hello world",0,1);
        $Jobs = Post::all();
        return view('FreelanceEmployer.PostedJobs')->with('PostedJobs',$Jobs);
    }



    function EditPostedJobs(Request $request)
    {
        $Post_Id = $request->id;
        $Post = Post::where('Post_Id',$Post_Id)->first();
        return view('FreelanceEmployer.EditFreelancePost')->with('Post', $Post);
    }


    function SubmitEditPostedJobs(Request $request)
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





        $var = new Post();
        $var = Post::where('Post_Id',$request->post_id)->first();
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
        $var->Post_Status="Pending";
        $var->save();
    
        return redirect()->route('freelancerDash');
    
      
    }


    function DeletePostedJobs(Request $request)
    {
        $var = Post::where('Post_Id',$request->id)->first();
        $var->delete();
        return redirect()->route('PostedJobs');
    }

}
