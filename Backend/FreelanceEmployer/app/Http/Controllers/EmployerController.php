<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FEmp;

class EmployerController extends Controller
{
    //

    function Home()
    {
        return view('Home');
    }

    function Dashboard()
    {
        return view('FreelanceEmployer.Dashboard');
    }

    function APIDashboard(Request $request)
    {
        $FreelanceEmployer=FEmp::where('Freelance_Id',$request->freelance_Id)->first();
        return $FreelanceEmployer;
    }


    function Registration()
    {
        return view('FreelanceEmployer.Registration');
    }

    function alluser()
    {
        return FEmp::all();
    }

    function RegistrationSubmit(Request $request)
    {
        $this->validate(
            $request,
            [
                'name'=>'required|min:3|max:30',
                'username'=>'required|unique:App\Models\FEmp,Username',
                'email'=>'required|regex:/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix',
                'address'=>'required',
                'password'=>'required|min:6',
                'phone'=>'required|min:11',
                'jobtype'=>'required',
                'file'=>'required',
                'nid'=>'required',


            ],
            [
                'username.required'=>'Username required !',
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
        $Image="";
       // $Image=$request->file('file')->store('Image');
       
        echo "Image ".$Image; 



        $var = new FEmp();
        $var->Username= $request->username;
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
    

        return redirect()->route('login');
    
      
    }

    //
    function APIRegistrationSubmit(Request $request)
    {
        $this->validate(
            $request,
            [
                'Name'=>'required|min:3|max:30',
                'Username'=>'required|unique:App\Models\FEmp,Username',
                'Email'=>'required|regex:/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix',
                'Address'=>'required',
                'Password'=>'required|min:6',
                'Phone'=>'required|min:11',
                'JobType'=>'required',
               
                'NID'=>'required',


            ],
            [
                'Username.required'=>'Username required !',
                'Name.required'=>'Please Enter Your Name',
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
        
        $Image="";
       // $Image=$request->file('file')->store('Image');
       
        //echo "Image ".$Image; 



        $var = new FEmp();
        $var->Username= $request->Username;
        $var->Name= $request->Name;
        $var->Email = $request->Email;
        $var->Address = $request->Address;
        $var->Phone=$request->Phone;
        $var->JobType = $request->JobType;
        $var->Password = $request->Password;
        $var->NID=$request->NID;
        $var->Picture=$Image;

            // $file=$request->file('file');
            // $ext=$file->getClientOriginalExtension();
            // $filename=time().'.'.$ext;
            // $file->move('freelance/profilepic/',$filename);
            // $var->Picture=$filename;
            //echo "dbdrb".$filename;
        
        
        $var->save();
   //     return $this->validate();
    return $var;

      //  return redirect()->route('login');
    
      
    }

    function FreelancerDashboardUpdate(Request $request)
    {
        $User=FEmp::where('Freelance_Id',$request->id)->first();
        if($User)
        {
            $User->Name=$request->Name;
            $User->Email=$request->Email;
            $User->Address=$request->Address;
            $User->NID=$request->NID;
            $User->Phone=$request->Phone;
            $User->JobType=$request->JobType;
            $User->save();
            return $User;
        }
        else 
        {
            return "Data not found";
        }

    }






    public function DashboardByIdAPI(Request $request)
    {
       
        $Femps = FEmp::all();
        
        foreach($Femps as $emp)
        {

        if($emp->Freelance_Id==$request->id)
        {
            return $emp;
        }

        }
      
    }





 


}
