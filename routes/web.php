<?php

use Illuminate\Support\Facades\Route;

Route::get('/login', [\App\Http\Controllers\AuthController::class, 'showFormLogin'])->name('login');
Route::post('/login', [\App\Http\Controllers\AuthController::class, 'login']);

Route::group(['prefix' => 'admin', 'middleware' => 'auth'], function () {

    Route::post('/logout', [\App\Http\Controllers\AuthController::class, 'logout'])->name('logout');
    Route::get('/', [\App\Http\Controllers\DashboardController::class, 'index'])->name('dashboard');
    Route::resource('/example', \App\Http\Controllers\ExampleController::class);
});

Route::get('/', [\App\Http\Controllers\User\UserController::class, 'index'])->name('user.index');
Route::get('/contact', [\App\Http\Controllers\User\UserController::class, 'contact'])->name('user.contact');
Route::get('/donors', [\App\Http\Controllers\User\UserController::class, 'donors'])->name('user.donors');
Route::get('/download', [\App\Http\Controllers\User\UserController::class, 'download'])->name('user.download');
Route::get('/get-involved', [\App\Http\Controllers\User\UserController::class, 'getInvolved'])->name('user.getInvolved');
Route::get('/partners', [\App\Http\Controllers\User\UserController::class, 'partners'])->name('user.partners');
Route::get('/ready-download', [\App\Http\Controllers\User\UserController::class, 'readyDownload'])->name('user.readyDownload');
Route::get('/sponsors', [\App\Http\Controllers\User\UserController::class, 'sponsors'])->name('user.sponsors');
Route::get('/tambora', [\App\Http\Controllers\User\UserController::class, 'tambora'])->name('user.tambora');
Route::get('/team', [\App\Http\Controllers\User\UserController::class, 'team'])->name('user.team');
Route::get('/new-feature', [\App\Http\Controllers\User\UserController::class, 'newFeature'])->name('user.newFeature');
Route::get('/release-notes', [\App\Http\Controllers\User\UserController::class, 'releaseNotes'])->name('user.releaseNotes');
Route::resource('news', App\Http\Controllers\NewsController::class);
Route::resource('editions', App\Http\Controllers\EditionsController::class);Route::resource('release', App\Http\Controllers\ReleaseController::class);