<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FEmp;
use App\Http\Middleware\ValidFreelanceEmployer;

class FreelanceUpdateController extends Controller
{
    //

    function Update(Request $request)
    {
        $id = $request->id;
        $FreelanceEmployer = FEmp::where('Freelance_Id',$id)->first();
        return view('FreelanceEmployer.FreelanceUpdate')->with('Freelance', $FreelanceEmployer);
    }

    function UpdateAPI(Request $request)
    {
        $id = $request->id;
        $FreelanceEmployer = FEmp::where('Freelance_Id',$id)->first();
      return $FreelanceEmployer;
    }

    function UpdateSubmit(Request $request){

        $this->validate(
            $request,
            [
                'name'=>'required|min:3|max:30',
                'email'=>'required|regex:/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix',
                'address'=>'required',
                'password'=>'required|min:6',
                'phone'=>'required|min:11',
                'jobtype'=>'required'


            ],
            [
                'name.required'=>'Please Enter Your Name',
                'name.min'=>'Name must be greater than 2 charcters',
               
                'address.required'=>'Address Needed',
                'phone.required'=>'Phone Number Needed!!',
                'phone.min'=>'Phone number not valid',
                'jobtype.required'=>'Enter job category please',
                'email.required'=>'Email required !',
                'email.regex'=>'Email Formate is invalid!',
                'password.required'=>'Password required !',
                'password.min'=>'Minimum 6 character required !'
            ]
        );

        $var = FEmp::where('Freelance_Id',Session()->get('freelance_id'))->first();
        $var->Name= $request->name;
        $var->Email = $request->email;
        $var->Address = $request->address;
        $var->Phone=$request->phone;
        $var->JobType = $request->jobtype;
        $var->Password = $request->password;
        $var->NID=$request->nid;

        $file=$request->file('file');
        $ext=$file->getClientOriginalExtension();
        $filename=time().'.'.$ext;
        $file->move('freelance/profilepic/',$filename);
        $var->Picture=$filename;
        //echo "dbdrb".$filename;



        $var->save();
    

        return redirect()->route('freelancerDash');
    

    }
}
