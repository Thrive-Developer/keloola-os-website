<?php

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Response;

Route::get('/login', [\App\Http\Controllers\AuthController::class, 'showFormLogin'])->name('login');
Route::post('/login', [\App\Http\Controllers\AuthController::class, 'login']);

Route::group(['prefix' => 'admin', 'middleware' => 'auth'], function () {

    Route::get('/', [\App\Http\Controllers\DashboardController::class, 'index'])->name('dashboard');
    Route::post('/logout', [\App\Http\Controllers\AuthController::class, 'logout'])->name('logout');
    Route::post('/upload', [\App\Http\Controllers\UploadController::class, 'upload'])->name('upload');
    Route::resource('/example', \App\Http\Controllers\ExampleController::class);
    Route::resource('news', App\Http\Controllers\NewsController::class);
    Route::resource('editions', App\Http\Controllers\EditionsController::class);
    Route::resource('release', App\Http\Controllers\ReleaseController::class);
    Route::resource('faq', App\Http\Controllers\FaqController::class);
    Route::resource('testimonial', App\Http\Controllers\TestimonialController::class);
    Route::resource('os-version', App\Http\Controllers\OsVersionController::class);
    Route::resource('os-edition', App\Http\Controllers\OsEditionController::class);
    Route::resource('sponsor', App\Http\Controllers\SponsorController::class);
    Route::resource('sponsor-logo', App\Http\Controllers\SponsorLogoController::class);
    Route::resource('config', App\Http\Controllers\ConfigController::class);
    Route::resource('donor', App\Http\Controllers\DonorController::class);
});

Route::get('/', [\App\Http\Controllers\User\HomeController::class, 'index'])->name('user.index');
Route::get('/contact', [\App\Http\Controllers\User\ContactController::class, 'index'])->name('user.contact');
Route::get('/donors', [\App\Http\Controllers\User\DonorController::class, 'index'])->name('user.donors');
Route::get('/download', [\App\Http\Controllers\User\DownloadController::class, 'index'])->name('user.download');
Route::get('/download/{slug}', [\App\Http\Controllers\User\DownloadController::class, 'detail_version'])->name('user.detail_version');
Route::get('/new-feature/{slug}', [\App\Http\Controllers\User\DownloadController::class, 'new_feature'])->name('user.newFeature');
Route::get('/release-notes/{slug}', [\App\Http\Controllers\User\DownloadController::class, 'release_notes'])->name('user.releaseNotes');
Route::get('/ready-download/{slug}', [\App\Http\Controllers\User\DownloadController::class, 'ready_download'])->name('user.readyDownload');
Route::get('/get-involved', [\App\Http\Controllers\User\InvolvedController::class, 'index'])->name('user.getInvolved');
Route::get('/partners', [\App\Http\Controllers\User\PartnerController::class, 'index'])->name('user.partners');
Route::get('/sponsors', [\App\Http\Controllers\User\SponsorController::class, 'index'])->name('user.sponsors');
Route::get('/tambora', [\App\Http\Controllers\User\UserController::class, 'tambora'])->name('user.tambora');
Route::get('/team', [\App\Http\Controllers\User\UserController::class, 'team'])->name('user.team');
Route::get('/faq', [\App\Http\Controllers\User\UserController::class, 'faq'])->name('user.faq');
Route::get('/news', [\App\Http\Controllers\User\NewsController::class, 'index'])->name('user.index');
Route::get('/news/{slug}', [\App\Http\Controllers\User\NewsController::class, 'show'])->name('user.show');

Route::get('storage/images/{folder}/{filename}', function ($folder, $filename) {
    $path = storage_path('app/images/' . $folder . '/' . $filename);

    if (!File::exists($path)) {
        abort(404);
    }

    $file = File::get($path);
    $type = File::mimeType($path);

    $response = Response::make($file, 200);
    $response->header("Content-Type", $type);

    return $response;
});
