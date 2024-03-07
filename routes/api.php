<?php

use App\Http\Controllers\BrotherController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TutorController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserImageController;
use App\Http\Controllers\TutorAdController;
use App\Models\User; // Import the User model
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

// Route for deleting a user image
Route::post('/user_images', [UserImageController::class, 'store']);


Route::get('/user_images/{userId}', [UserImageController::class, 'show']);
Route::resource('tutors', TutorController::class);

Route::post('/brother', [BrotherController::class, 'store']);
Route::get('/brother', [BrotherController::class, 'index']);
