<?php

use Illuminate\Support\Facades\Route;
use App\http\controllers\EmployerController;
use App\http\controllers\LoginValidation;
use App\http\controllers\FreelanceUpdateController;
use App\http\controllers\FreelancePostJobController;
use App\http\controllers\PostedJobController;

use App\http\controllers\LiveJobsController;
use App\http\controllers\ContactController;




Route::get('/',[EmployerController::class,'Home'])->name('Home');

Route::get('/Registration/Handle',[EmployerController::class,'RegistrationHandle'])->name('RegistrationHandle');

Route::get('/Freelance/Registration',[EmployerController::class,'Registration'])->name('Registration');

Route::post('/Registrationubmit',[EmployerController::class,'RegistrationSubmit'])->name('RegistrationSubmit');



Route::get('/dashboard',[EmployerController::class,'Dashboard'])->name('Dashboard')->middleware('ValidFreelanceEmployer');


Route::get('/login',[LoginValidation::class,'login'])->name('login');

Route::post('/login',[LoginValidation::class,'loginsubmit'])->name('loginsubmit');

Route::get('/logout',[LoginValidation::class,'logout'])->name('logout');

Route::get('/FreelancerDashboard',[LoginValidation::class,'freelancerDash'])->name('freelancerDash');

Route::get('/Freelancer/Job/Post',[FreelancePostJobController::class,'Post'])->name('PostJob');

Route::post('/Freelancer/Job/Post',[FreelancePostJobController::class,'PostSubmit'])->name('PostJobSubmit');

Route::get('/Freelance/update/{id}/{name}/',[FreelanceUpdateController::class,'update'])->name('update');

Route::post('/Freelance/update/',[FreelanceUpdateController::class,'UpdateSubmit'])->name('updatesubmit');

Route::get('/Freelance/Posted/Jobs',[PostedJobController::class,'PostedJobs'])->name('PostedJobs');


Route::get('/Freelance/Edit/PostedJobs/{id}/{title}/',[PostedJobController::class,'EditPostedJobs'])->name('EditPostedJobs');

Route::post('/Freelance/Edit/PostedJobs',[PostedJobController::class,'SubmitEditPostedJobs'])->name('SubmitEditPostedJobs');

Route::get('/Freelance/Delete/PostedJobs/{id}/{title}/',[PostedJobController::class,'DeletePostedJobs'])->name('DeletePostedJobs');

Route::get('/Freelance/Delete/PostedJobs/Freelance/',[LiveJobsController::class,'FreelanceJobs'])->name('FreelanceJobs');

Route::get('/Freelance/Delete/PostedJobs/Corporate/',[LiveJobsController::class,'CorporateJobs'])->name('CorporateJobs');

Route::get('/Freelance/Delete/PostedJobs/All/',[LiveJobsController::class,'AllJobs'])->name('AllJobs');

Route::get('/Freelance/Contact/Us/',[ContactController::class,'Contact'])->name('Contact');

Route::post('/Freelance/Contact/Us/',[ContactController::class,'ContactSubmit'])->name('ContactSubmit');



