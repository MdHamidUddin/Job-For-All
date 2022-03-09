@extends('layouts.app')
@section('content')


<?php if(Session::has('freelance_id')) {?>
    <h1></h1>


        <h4>Name :  {{ $FreelanceEmployer->Name }} </h4>
        <h4>Email :  {{ $FreelanceEmployer->Email }}</h4>
        <h4>Address : {{ $FreelanceEmployer->Address }} </h4>
        <h4>Phone :  {{ $FreelanceEmployer->Phone }}</h4>
        <h4>User Type :  {{ $FreelanceEmployer->JobType }}</h4>
        <h4><img src="{{asset('freelance/profilepic/'.$FreelanceEmployer->Picture)}}" width=20%></h4>

        <td><a  class="btn btn-info" href="/Freelance/update/{{$FreelanceEmployer->Freelance_Id}}/{{$FreelanceEmployer->Username}}">Update</a></td>


<?php }?>




@endsection