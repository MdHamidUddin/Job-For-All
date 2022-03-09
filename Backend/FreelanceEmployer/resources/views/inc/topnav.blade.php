
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="{{route('Home')}}">Job For All</a>
    </div>
    <ul class="nav navbar-nav">
     
      
      
      <?php if(Session::has('freelance_id')) {?>
 


         <li><a href="{{route('Home')}}" class="btn btn-dark btn-sm" role="button"> Home</a></li>
        
         <li><a href="{{route('freelancerDash')}}" class="btn btn-dark btn-sm" role="button"> Dashboard</a></li>
         <li><a href="{{route('PostJob')}}" class="btn btn-dark btn-sm" role="button"> Post New Job</a></li>
         <li><a href="{{route('PostedJobs')}}" class="btn btn-dark btn-sm" role="button"> Posted Jobs</a></li>




         <li class="nev-item dropdown">
<a class="nav-link dropdown-toggle btn-sm" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">Live Jobs</a>
<div class="dropdown-menu " aria-labelledby="navbarDropdown">

<a class="dropdown-item btn btn-dark btn-sm" href="{{route('FreelanceJobs')}}">Freelance Jobs</a>
<div class="dropdown-divider"></div>
<a class="dropdown-item btn btn-dark btn-sm" href="{{route('CorporateJobs')}}">Corporate Jobs</a>

<div class="dropdown-divider"></div>
<a class="dropdown-item btn btn-dark btn-sm" href="{{route('AllJobs')}}">All Jobs</a>
</div>


<li><a href="{{route('Contact')}}" class="btn btn-dark btn-sm" role="button"> Contact Us</a></li>
         <li><a href="{{route('logout')}}" class="btn btn-dark btn-sm" role="button"> Sign Out</a></li>
      <?php    
    
      }

       else  {?>
       <li><a href="{{route('Home')}}" class="btn btn-dark btn-sm" role="button"> Home</a></li>

       <li class="nev-item dropdown">
<a class="nav-link dropdown-toggle btn-sm" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">Live Jobs</a>
<div class="dropdown-menu " aria-labelledby="navbarDropdown">

<a class="dropdown-item btn btn-dark btn-sm" href="{{route('FreelanceJobs')}}">Freelance Jobs</a>
<div class="dropdown-divider"></div>
<a class="dropdown-item btn btn-dark btn-sm" href="{{route('CorporateJobs')}}">Corporate Jobs</a>

<div class="dropdown-divider"></div>
<a class="dropdown-item btn btn-dark btn-sm" href="{{route('AllJobs')}}">All Jobs</a>
</div>

       <li><a href="{{route('Registration')}}" class="btn btn-dark btn-sm" role="button"> Sign Up</a></li>
       <li><a href="{{route('login')}}" class="btn btn-dark btn-sm" role="button"> Sign In</a></li>
    
        <?php } ?>







</li>


    </ul>
  </div>
</nav>




