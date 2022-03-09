<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\models\Post;
use App\models\FEmp;

class LiveJobsController extends Controller
{
    //

    function FreelanceJobs()
    {
        $Jobs = Post::all();
        return view('FreelanceEmployer.LiveFreelanceJobs')->with('PostedJobs',$Jobs);

    }

    function FreelanceJobsAPI()
    {
        $Jobs = Post::all();
        $SelectedJob=[];
        foreach($Jobs as $job)
        {
        $User=$job->userType;


        if($User=="Freelance" and $job->Post_Status=="Approved")
        {
            $SelectedJob[]= $job;
        }
    

        }

        return $SelectedJob;
    }
   public function FreelanceJobsAPIPost(Request $request)
    {
        $Jobs = Post::all();
        $SelectedJob=[];
        foreach($Jobs as $job)
        {
        $User=$job->userType;


        if($User=="Freelance" and $job->Post_Status=="Approved" and $job->Post_Id==$request->id)
        {
            return $job;
        }
    

        }

      
        

        //return view('FreelanceEmployer.LiveFreelanceJobs')->with('PostedJobs',$Jobs);
    }

    function CorporateJobs()
    {
        $Jobs = Post::all();
        return view('FreelanceEmployer.LiveCorporateJobs')->with('PostedJobs',$Jobs);
    }
    function CorporateJobsAPI()
    {
        $Jobs = Post::all();
        $SelectedJob=[];
        foreach($Jobs as $job)
        {
        $User=$job->userType;


        if($User=="Corporate" and $job->Post_Status=="Approved")
        {
            $SelectedJob[]= $job;
        }
    

        }

        return $SelectedJob;
        

    }

    function CorporateJobsAPIPost(Request $request)
    {
        $Jobs = Post::all();
        
        foreach($Jobs as $job)
        {
        $User=$job->userType;


        if($User=="Corporate" and $job->Post_Status=="Approved"  and $job->Post_Id==$request->id)
        {
            return $job;
        }
        }
        

    }

    function AllJobs()
    {
        $Jobs = Post::all();
        return view('FreelanceEmployer.AllLiveJobs')->with('PostedJobs',$Jobs);

    }
    
    function AllJobsAPI()
    {
        $Jobs = Post::all();
        $SelectedJob=[];
        foreach($Jobs as $job)
        {
        $User=$job->userType;


        if($job->Post_Status=="Approved")
        {
            $SelectedJob[]= $job;
        }
    

        }

        return $SelectedJob;
        

    }

    function AllJobsAPIPost(Request $request)
    {
        $Jobs = Post::all();
        
        foreach($Jobs as $job)
        {
        $User=$job->userType;

        if($job->Post_Status=="Approved"  and $job->Post_Id==$request->id)
        {
            return $job;
        }
        }
        

    }
    
    

}
