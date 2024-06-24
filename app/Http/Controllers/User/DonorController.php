<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Config;
use App\Models\Donor;
use Inertia\Inertia;

class DonorController extends Controller
{
    public function index()
    {
        $btn_usd = Config::where('key', 'BUTTON_DONATION_USD')->first();
        $btn_idr = Config::where('key', 'BUTTON_DONATION_IDR')->first();
        $btn_other = Config::where('key', 'BUTTON_DONATION_OTHER')->first();

        $image_hero = Config::where('key', 'IMAGE_HERO_DONATION')->first();
        $image_bitcoin = Config::where('key', 'IMAGE_BITCOIN_DONATION')->first();
        $text_hero = Config::where('key', 'TEXT_HERO_DONATION')->first();

        $latest_donor = Donor::with('r_country')->latest()->take(10)->get();
        $top10_country = Donor::with('r_country')->selectRaw('country, count(*) as total, avg(amount) as avg, max(amount) as max')->groupBy('country')->orderBy('total', 'desc')->take(10)->get();
        $top100_country_count_donation = Donor::with('r_country')->selectRaw('country, count(*) as total, sum(amount) as sum')->groupBy('country')->orderBy('total', 'desc')->take(100)->get();


        Inertia::setRootView('user');
        return Inertia::render('User/Donors', [
            'btn_usd' => $btn_usd,
            'btn_idr' => $btn_idr,
            'btn_other' => $btn_other,
            'image_hero' => $image_hero,
            'text_hero' => $text_hero,
            'image_bitcoin' => $image_bitcoin,
            'latest_donor' => $latest_donor,
            'top10_country' => $top10_country,
            'top100_country_count_donation' => $top100_country_count_donation
        ]);
    }
}
