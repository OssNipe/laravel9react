<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('Home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'userId' => auth()->id() // Retrieve the logged-in user's ID
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/changeImage', function () {
    return Inertia::render('changeImage', [
        'userId' => auth()->id() // Retrieve the logged-in user's ID
    ]);
})->middleware(['auth', 'verified'])->name('changeImage');
Route::get('/Tutordetails/{id}/{adId}', function ($id, $AdId) {
    return Inertia::render('Tutordetails', [
        'tutorId' => $id, // Pass the tutor's ID as a parameter
        'ADid' => $AdId,
        'userId' => auth()->id()
    ]);
})->name('Tutordetails');
Route::get('/TutorComponent', function () {
    return Inertia::render('TutorComponent', [
        'userId' => auth()->id() // Retrieve the logged-in user's ID
    ]);
})->name('TutorComponent');
Route::get('/Navbar', function () {
    return Inertia::render('Navbar', [
        'userId' => auth()->id() // Retrieve the logged-in user's ID
    ]);
})->name('Navbar');
Route::get('/lessons', function () {
    return Inertia::render('lessons', []);
})->name('lessons');
Route::get('/Tutor', function () {
    return Inertia::render('Tutor', [
        'userId' => auth()->id() // Retrieve the logged-in user's ID
    ]);
})->name('Tutor');
Route::get('/ImageUpload', function () {
    return Inertia::render('ImageUpload', [
        'userId' => auth()->id() // Retrieve the logged-in user's ID
    ]);
})->middleware(['auth', 'verified'])->name('ImageUpload');
Route::get('/BecomTutor', function () {
    return Inertia::render('BecomTutor', [
        'userId' => auth()->id() // Retrieve the logged-in user's ID
    ]);
})->middleware(['auth', 'verified'])->name('BecomTutor');


Route::middleware('auth')->group(function () {

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');

    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
