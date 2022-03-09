<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\FEmp;
use App\Models\Token;
use DateTime;


class LoginValidation extends Controller
{
    //
    function login()
    {
        return view('FreelanceEmployer.login');
    }


    function loginSubmit(Request $request)
    {
        $this->validate(
            $request,
            [
                'username'=>'required',
                'password'=>'required|min:6',
            ],
            [
                'username.required'=>'Username is required !',
                'password.required'=>'Password required !',
                'password.min'=>'Minimum 6 character required !'
            ]
        );




     $FreelanceEmployer=FEmp::where('Username',$request->username)
                            ->where('Password',$request->password)
                            ->first();
    


        if($FreelanceEmployer)
        {
            $request->session()->put('freelance_id',$FreelanceEmployer->Freelance_Id);
            $request->session()->put('freelance_username',$FreelanceEmployer->Username);
            return redirect()->route('freelancerDash');
        }

        else{
            return("Account not found");
        }

    }

    function APILoginSubmit(Request $request)
    {
     
     $FreelanceEmployer=FEmp::where('Username',$request->username)
                            ->where('Password',$request->password)
                            ->first();
    
       

        if($FreelanceEmployer)
        {
            $apiToken=Str::random(64);
            $token=new Token();
            $token->userid=$FreelanceEmployer->Freelance_Id;
            $token->token= $apiToken;
            $token->created_at=new DateTime();
            $token->save();
            return $token;
        }

        else{
            return "0";
        }

    }



    public function logout(){
        session()->forget('freelance_id');
        return redirect()->route('login');
    }

    public function APIlogout(Request $request){

        $Token=Token::where('id',$request->id)->first();
        if($Token)
        {
            $Token->expired_at=new DateTime();
            $Token->save();
            return $Token;
        }
       
        
    }





    public function freelancerDash(){

         $FreelanceEmployer=FEmp::where('Freelance_Id',Session()->get('freelance_id'))->first();

         return view('FreelanceEmployer.Dashboard')->with('FreelanceEmployer',$FreelanceEmployer);
    }



}
