@extends('layouts.app')
@section('content')

<style>

fieldset {
  background-color: #eeeeee;
}

legend {
  background-color: gray;
  color: white;
  padding: 5px 10px;
}

input {
  margin: 5px;
}
</style>


<html>
    <body>

    <div class="col-md-14"> 

    <form action="{{route('updatesubmit')}}" class="col-md-6" method="post" enctype="multipart/form-data">
        <!-- Cross Site Request Forgery-->
        {{csrf_field()}}
        <fieldset>
        <legend>Update Profile</legend>

        
        <div class="form-group">
            <span>Name</span>
            <input type="text" name="name" value="{{$Freelance->Name}}" class="form-control">
            @error('name')
                <span class="text-danger">{{$message}}</span>
            @enderror
            </div>

            <div class="form-group">
            <span>Username</span>
            <input type="text" name="username" value="{{$Freelance->Username}}"  readonly="readonly" class="form-control">
            @error('username')
                <span class="text-danger">{{$message}}</span>
            @enderror
            </div>

            <div class="form-group">
            <span>Email</span>
            <input type="text" name="email" value="{{$Freelance->Email}}" class="form-control">
            @error('email')
                <span class="text-danger">{{$message}}</span>
            @enderror
            </div>


            <div class="form-group">
            <span>Address</span>
            <input type="text" name="address" value="{{$Freelance->Address}}" class="form-control">
            @error('address')
                <span class="text-danger">{{$message}}</span>
            @enderror
            </div>


            <div class="form-group">
            <span>Password</span>
            <input type="text" name="password" value="{{$Freelance->Password}}" class="form-control">
            @error('password')
                <span class="text-danger">{{$message}}</span>
            @enderror
            </div>

            <div class="form-group">
            <span>Phone</span>
            <input type="text" name="phone" value="{{$Freelance->Phone}}" class="form-control">
            @error('phone')
                <span class="text-danger">{{$message}}</span>
            @enderror
            </div>

            <div class="form-group">
            <span>NID</span>
            <input type="text" name="nid" value="{{$Freelance->NID}}" class="form-control">
            @error('nid')
                <span class="text-danger">{{$message}}</span>
            @enderror
            </div>


            <div class="form-group">
            <span>Job Type</span>
            <input type="text" name="jobtype" value="{{$Freelance->JobType}}" class="form-control">
            @error('jobtype')
                <span class="text-danger">{{$message}}</span>
            @enderror
            </div>

            <div class="form-group">
            <span>Profile Pic</span>
            <input type="file" name="file" value="$Freelance->Picture" >
            @error('file')
                <span class="text-danger">{{$message}}</span>
            @enderror
            <img src="{{asset('freelance/profilepic/'.$Freelance->Picture)}}" width=20%>
            </div>


        <div class="form-group">
        
        <input type="submit" class="btn btn-success" value="Update" ></li>
        </div>
        </fieldset>
    </form>
    
    </div>
         </body>
</html>

    @endsection