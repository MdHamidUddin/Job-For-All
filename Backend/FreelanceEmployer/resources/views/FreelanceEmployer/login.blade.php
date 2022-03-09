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
    <form action="{{route('loginsubmit')}}" class="col-md-6" method="post">
        <!-- Cross Site Request Forgery-->
        {{csrf_field()}}
        <fieldset>
        <legend>Sign Up</legend>

<!--  class="col-md-4 form-group" -->
            <div class="form-group">
            <span>Username</span>
            <input type="text" name="username" value="{{old('username')}}" class="form-control">
            @error('username')
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

            @isset($message)
          <div class="alert alert-success">
          <strong>{{@message}}</strong>
          </div>
            @endif
            

            <div class="form-group">    
                <span> </span>
             <input type="submit" class="btn btn-success" value="Sign In">
            </div>
            </fieldset>
    </form>
    
    </div>
         </body>
</html>

    @endsection