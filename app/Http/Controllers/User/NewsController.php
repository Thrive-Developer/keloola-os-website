<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\News;

class NewsController extends Controller
{
    public function index(Request $request)
    {
        $news = News::orderBy('id', 'desc')->get();

        Inertia::setRootView('user');
        return Inertia::render('User/News', [
            'news' => $news
        ]);
    }

    public function show($slug)
    {
        $news = News::where('slug', $slug)->first();

        Inertia::setRootView('user');
        return Inertia::render('User/DetailNews', [
            'news' => $news
        ]);
    }
}
