<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Config;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index()
    {
        $button_chat_room = Config::where('key', 'BUTTON_CHAT_ROOM')->first();
        $button_get_involved = Config::where('key', 'BUTTON_GET_INVOLVED')->first();

        Inertia::setRootView('user');
        return Inertia::render('User/Contact', [
            'button_chat_room' => $button_chat_room,
            'button_get_involved' => $button_get_involved
        ]);
    }
}
