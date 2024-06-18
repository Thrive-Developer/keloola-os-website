<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Config;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\News;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        $news = News::latest()->take(3)->get();
        $button_download = Config::where('key', 'BUTTON_DOWNLOAD')->first();
        $button_installation_instruction = Config::where('key', 'BUTTON_INSTALLATION_INSTRUCTIONS')->first();

        Inertia::setRootView('user');
        return Inertia::render('User/Index', [
            'news' => $news,
            'button_download' => $button_download,
            'button_installation_instruction' => $button_installation_instruction
        ]);
    }
}
