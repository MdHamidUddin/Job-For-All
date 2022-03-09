<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\http\controllers\EmployerController;
use App\http\controllers\LoginValidation;
use App\http\controllers\FreelanceUpdateController;
use App\http\controllers\FreelancePostJobController;
use App\http\controllers\PostedJobController;

use App\http\controllers\LiveJobsController;
use App\http\controllers\ContactController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//-------All Get API------//
Route::get('/Freelance/PostedJobs/Freelance/',[LiveJobsController::class,'FreelanceJobsAPI']);

Route::get('/Freelance/PostedJobs/Corporate/',[LiveJobsController::class,'CorporateJobsAPI']);
Route::get('/Freelance/PostedJobs/Corporate/{id}/',[LiveJobsController::class,'CorporateJobsAPIPost']);

Route::get('/Freelance/PostedJobs/All/',[LiveJobsController::class,'AllJobsAPI']);

Route::get('/Freelance/PostedJobs/All/{id}/',[LiveJobsController::class,'AllJobsAPIPost']);

Route::get('/Freelance/UpdateProfile/{id}/',[EmployerController::class,'DashboardByIdAPI']);

Route::get('/Freelance/PostedJobs/Freelance/{id}/',[LiveJobsController::class,'FreelanceJobsAPIPost']);


Route::get('/Freelance/update/{id}/',[FreelanceUpdateController::class,'UpdateAPI']);
Route::get('/Freelance/alluser',[EmployerController::class,'alluser']);


Route::get('/Freelance/Posted/Jobs/{user}/',[FreelancePostJobController::class,'PostedJobsByUser']);

Route::get('/Freelancer/Posted/Jobs/',[FreelancePostJobController::class,'PostedJobsByFreelance']);

Route::get('/Freelancer/Posted/Jobs/delete/{id}/',[FreelancePostJobController::class,'DeletePostedJobs']);


Route::get('/Freelancer/Pre/Update/{id}/',[FreelancePostJobController::class,'FreelancerFetch']);



Route::post('/dashboard',[EmployerController::class,'APIDashboard'])->middleware('APIAuth');


// ->middleware('APIAuth');


//----  All Post API------------//
//APIlogout





Route::post('/FreelanceRegistration',[EmployerController::class,'APIRegistrationSubmit']);

Route::post('/FreelanceDashboardUpdate',[EmployerController::class,'FreelancerDashboardUpdate']);

Route::post('/Freelancer/Job/Post',[FreelancePostJobController::class,'FreelanceJobPostSubmit']);

Route::post('/Freelancer/Job/Update',[FreelancePostJobController::class,'JobEditAPI']);//

Route::post('/FreelanceLogin',[LoginValidation::class,'APILoginSubmit']);

Route::post('/FreelanceLogout',[LoginValidation::class,'APIlogout']);