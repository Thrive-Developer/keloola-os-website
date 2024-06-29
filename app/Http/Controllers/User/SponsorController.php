<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Config;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\News;
use App\Models\Sponsor;
use App\Models\SponsorLogo;

class SponsorController extends Controller
{
    public function index(Request $request)
    {
        // $sponsors = Sponsor::all();
        $gold_sponsors = SponsorLogo::where('sponsor_id', 1)->get();
        $silver_sponsors = SponsorLogo::where('sponsor_id', 2)->get();
        $bronze_sponsors = SponsorLogo::where('sponsor_id', 3)->get();
        $community_sponsors = SponsorLogo::where('sponsor_id', 4)->get();

        $btn_sponsor = Config::where('key', 'BUTTON_BECOME_SPONSOR')->first();

        Inertia::setRootView('user');
        return Inertia::render('User/Sponsors', [
            'gold_sponsors' => $gold_sponsors,
            'silver_sponsors' => $silver_sponsors,
            'bronze_sponsors' => $bronze_sponsors,
            'community_sponsors' => $community_sponsors,
            'btn_sponsor' => $btn_sponsor
        ]);
    }
}
