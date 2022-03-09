<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    //

    function Contact()
    {
        return view('FreelanceEmployer.ContactPage');
    }

    function ContactSubmit(Request $request)
    {
        $this->validate(
            $request,
            [
                'name'=>'required|min:3|max:30',
                'email'=>'required|regex:/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix',
                'phone'=>'required|min:11',
                'message'=>'required',


            ],
            [
                'name.required'=>'Please Enter Your Name',
                'name.min'=>'Name must be greater than 2 charcters',
               
               
                'phone.required'=>'Phone Number Needed!!',
                'phone.min'=>'Phone number not valid',
                
                'email.required'=>'Email required !',
                'email.regex'=>'Email Formate is invalid!',
               



    
    
            ]
        );

        $var = new Contact();
        $var->Name= $request->name;
        $var->Email = $request->email;
        $var->Phone=$request->phone;
        $var->Message = $request->message;
        
        
        $var->save();
    

        return redirect()->route('login');
    
      
    }
}
