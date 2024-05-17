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
