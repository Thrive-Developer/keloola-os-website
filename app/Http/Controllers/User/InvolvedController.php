<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\News;
use App\Models\Release;
use App\Models\Edition;

class InvolvedController extends Controller
{
    public function index(Request $request)
    {
        Inertia::setRootView('user');
        return Inertia::render('User/GetInvolved');
    }
}
