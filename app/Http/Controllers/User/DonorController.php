<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class DonorController extends Controller
{
    public function index()
    {
        Inertia::setRootView('user');
        return Inertia::render('User/Donors');
    }
}
