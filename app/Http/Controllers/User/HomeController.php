<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\News;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        $news = News::latest()->take(3)->get();

        Inertia::setRootView('user');
        return Inertia::render('User/Index', [
            'news' => $news
        ]);
    }
}
