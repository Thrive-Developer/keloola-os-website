<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        Inertia::setRootView('user');
        return Inertia::render('User/Index');
    }

    public function contact()
    {
        Inertia::setRootView('user');
        return Inertia::render('User/Contact');
    }

    public function donors()
    {
        Inertia::setRootView('user');
        return Inertia::render('User/Donors');
    }

    public function download()
    {
        Inertia::setRootView('user');
        return Inertia::render('User/Download');
    }

    public function getInvolved()
    {
        Inertia::setRootView('user');
        return Inertia::render('User/GetInvolved');
    }

    public function partners()
    {
        Inertia::setRootView('user');
        return Inertia::render('User/Partners');
    }

    public function readyDownload()
    {
        Inertia::setRootView('user');
        return Inertia::render('User/ReadyDownload');
    }

    public function sponsors()
    {
        Inertia::setRootView('user');
        return Inertia::render('User/Sponsors');
    }

    public function tambora()
    {
        Inertia::setRootView('user');
        return Inertia::render('User/Tambora');
    }

    public function team()
    {
        Inertia::setRootView('user');
        return Inertia::render('User/Team');
    }
}
