<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Config;
use Inertia\Inertia;

class DonorController extends Controller
{
    public function index()
    {
        $btn_usd = Config::where('key', 'BUTTON_DONATION_USD')->first();
        $btn_idr = Config::where('key', 'BUTTON_DONATION_IDR')->first();
        $btn_patreon = Config::where('key', 'BUTTON_PATREON')->first();

        Inertia::setRootView('user');
        return Inertia::render('User/Donors', [
            'btn_usd' => $btn_usd,
            'btn_idr' => $btn_idr,
            'btn_patreon' => $btn_patreon
        ]);
    }
}
