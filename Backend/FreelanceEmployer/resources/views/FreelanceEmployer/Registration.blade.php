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
    <form action="{{route('RegistrationSubmit')}}" class="col-md-6" method="post" enctype="multipart/form-data">
        <!-- Cross Site Request Forgery-->
        {{csrf_field()}}
        <fieldset>
        <legend>Sign Up</legend>

        
        <div class="form-group">
            <span>Name</span>
            <input type="text" name="name" value="{{old('name')}}" class="form-control" >
            @error('name')
                <span class="text-danger">{{$message}}</span>
            @enderror
            </div>

            <div class="form-group">
            <span>Username</span>
            <input type="text" name="username" value="{{old('username')}}" class="form-control">
            @error('username')
                <span class="text-danger">{{$message}}</span>
            @enderror
            </div>

            <div class="form-group">
            <span>Email</span>
            <input type="text" name="email" value="{{old('email')}}" class="form-control">
            @error('email')
                <span class="text-danger">{{$message}}</span>
            @enderror
            </div>


            <div class="form-group">
            <span>Address</span>
            <input type="text" name="address" value="{{old('address')}}" class="form-control">
            @error('address')
                <span class="text-danger">{{$message}}</span>
            @enderror
            </div>


            <div class="form-group">
            <span>Password</span>
            <input type="password" name="password" value="{{old('password')}}" class="form-control">
            @error('password')
                <span class="text-danger">{{$message}}</span>
            @enderror
            </div>

            <div class="form-group">
            <span>Phone</span>
            <input type="phone" name="phone" value="{{old('phone')}}" class="form-control">
            @error('phone')
                <span class="text-danger">{{$message}}</span>
            @enderror
            </div>

            <div class="form-group">
            <span>NID</span>
            <input type="text" name="nid" value="{{old('nid')}}" class="form-control">
            @error('nid')
                <span class="text-danger">{{$message}}</span>
            @enderror
            </div>

            <div class="form-group">
            <span>Job Type</span>
            <input type="text" name="jobtype" value="{{old('jobtype')}}" class="form-control">
            @error('jobtype')
                <span class="text-danger">{{$message}}</span>
            @enderror
            </div>

            <div class="form-group">
            <span>Picture</span>
            <input type="file" name="file" value="{{old('file')}}" class="form-control">
            @error('file')
                <span class="text-danger">{{$message}}</span>
            @enderror
            </div>


        <div class="form-group">
        
        <input type="submit" class="btn btn-success" value="Registration" ></li>
        </div>
        </fieldset>
    </form>
    
    </div>
         </body>
</html>

    @endsection