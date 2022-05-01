<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use Illuminate\Foundation\Application;
use Illuminate\Routing\RouteGroup;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

require __DIR__.'/auth.php';

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', DashboardController::class)->name('dashboard');

Route::controller(ContactController::class)->group(function() {
    Route::get('/contacts', 'index')->name('contacts');
    Route::get('/contacts/create', 'create')->name('contacts.create');
    Route::post('/contacts', 'store');
    Route::get('/contacts/{contact}/edit', 'edit')->name('contacts.edit');
    Route::post('/contacts/{contact}/update', 'update')->name('contacts.update');
    Route::delete('/contacts/{contact}/delete', 'destroy')->name('contacts.delete');
});
