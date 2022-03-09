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
    <form action="{{route('ContactSubmit')}}" class="col-md-6" method="post">
        <!-- Cross Site Request Forgery-->
        {{csrf_field()}}
        <fieldset>
        <legend>Contact Us</legend>

<!--  class="col-md-4 form-group" -->
            <div class="form-group">
            <span>Name</span>
            <input type="text" name="name" value="{{old('name')}}" class="form-control">
            @error('name')
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
            <span>Phone</span>
            <input type="text" name="phone" value="{{old('phone')}}" class="form-control">
            @error('phone')
                <span class="text-danger">{{$message}}</span>
            @enderror
            </div>

            <div class="form-group">
            <span>Message</span>
            <input type="text" name="message" value="{{old('message')}}" class="form-control">
            @error('message')
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
             <input type="submit" class="btn btn-success" value="Send">
            </div>
            </fieldset>
    </form>
    
    </div>
         </body>
</html>

    @endsection