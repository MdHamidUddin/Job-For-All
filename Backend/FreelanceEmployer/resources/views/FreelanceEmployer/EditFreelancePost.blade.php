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
    <form action="{{route('SubmitEditPostedJobs')}}" class="col-md-6" method="post" enctype="multipart/form-data">
        <!-- Cross Site Request Forgery-->
        
        {{csrf_field()}}

        <fieldset>
        <legend>Update Post Information</legend>


        <div class="form-group">

            <input type="hidden" name="post_id" value="{{$Post->Post_Id}}"  class="form-control">
            @error('title')
                <span class="text-danger">{{$message}}</span>
            @enderror
            </div>


        <div class="form-group">
            <span>Post Title</span>
            <input type="text" name="title" value="{{$Post->Post_Title}}" class="form-control">
            @error('title')
                <span class="text-danger">{{$message}}</span>
            @enderror
            </div>

            <div class="form-group">
            <span>Post Description</span>
            <input type="text" name="description" value="{{$Post->Post_Description}}" class="form-control">
            @error('description')
                <span class="text-danger">{{$message}}</span>
            @enderror
            </div>



        <div class="form-group">
            <span>Job Requirements</span>
            <input type="text" name="requirements" value="{{$Post->Job_Requirement}}" class="form-control">
            @error('requirements')
                <span class="text-danger">{{$message}}</span>
            @enderror
            </div>

            

            <div class="form-group">
            <span>Job Resbonsibilities</span>
            <input type="text" name="resbonsibilities" value="{{$Post->Responsibilities}}" class="form-control">
            @error('resbonsibilities')
                <span class="text-danger">{{$message}}</span>
            @enderror
            </div>

            <div class="form-group">
            <span>Salary</span>
            <input type="text" name="salary" value="{{$Post->Salary}}" class="form-control">
            @error('salary')
                <span class="text-danger">{{$message}}</span>
            @enderror
            </div>

            
            <div class="form-group">
            <span>Vacancy</span>
            <input type="text" name="vacancy" value="{{$Post->Vacancy}}" class="form-control">
            @error('vacancy')
                <span class="text-danger">{{$message}}</span>
            @enderror
            </div>

            <?php 
            $P=$F="";
            if($Post->Employment_Status=="Part Time")
            {
                $P="checked";
            }

            else 
            {
                $F="checked";
            }

            ?>

            <div class="form-group">
            <span>Employment Status</span><br>
              <input type="radio" id="half" name="status" value="Part Time" <?php echo $P; ?>>
                <label for="HalfTime">Half Time</label><br>
                 <input type="radio" id="css" name="status" value="Full Time" <?php echo $F; ?>>
                 <label for="FullTime">Full Time</label><br>
           
            @error('status')
                <span class="text-danger">{{$message}}</span>
            @enderror
            </div>



            <div class="form-group">
            <span>Workplace</span>
            <input type="text" name="workplace" value="{{$Post->Workplace}}" class="form-control">
            @error('workplace')
                <span class="text-danger">{{$message}}</span>
            @enderror
            </div>


            <div class="form-group">
            <span>Job Location</span>
            <input type="text" name="location" value="{{$Post->Job_Location}}" class="form-control">
            @error('location')
                <span class="text-danger">{{$message}}</span>
            @enderror
            </div>

            
            <div class="form-group">
            <span>Compensation & Other Benefits</span>
            <input type="text" name="compensation" value="{{$Post->Compensation}}" class="form-control">
            @error('compensation')
                <span class="text-danger">{{$message}}</span>
            @enderror
            </div>

            
            <div class="form-group">
            <span>Deadline</span>
            <input type="date" name="deadline" value="{{$Post->Deadline}}" class="form-control">
            @error('deadline')
                <span class="text-danger">{{$message}}</span>
            @enderror
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