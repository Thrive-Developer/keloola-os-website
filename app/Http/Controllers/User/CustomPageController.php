<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\CustomPage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CustomPageController extends Controller
{
    public function show($slug)
    {
        $custom_page = CustomPage::where('slug', $slug)->first();

        Inertia::setRootView('user');
        return Inertia::render('User/CustomPage', [
            'custom_page' => $custom_page
        ]);
    }
}
