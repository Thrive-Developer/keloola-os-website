<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Config;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\News;
use App\Models\Release;
use App\Models\Edition;

class InvolvedController extends Controller
{
    public function index(Request $request)
    {
        $btn_donation = Config::where('key', 'BUTTON_DONATION')->first();
        $btn_sponsor = Config::where('key', 'BUTTON_SPONSORSHIP')->first();
        $btn_community = Config::where('key', 'BUTTON_JOIN_COMMUNITY')->first();
        $btn_help_other = Config::where('key', 'BUTTON_HELP_OTHER')->first();
        $btn_report_bug = Config::where('key', 'BUTTON_REPORT_BUGS')->first();
        $btn_translate = Config::where('key', 'BUTTON_TRANSLATE')->first();
        $btn_develop = Config::where('key', 'BUTTON_DEVELOP')->first();

        Inertia::setRootView('user');
        return Inertia::render('User/GetInvolved', [
            'btn_donation' => $btn_donation,
            'btn_sponsor' => $btn_sponsor,
            'btn_community' => $btn_community,
            'btn_help_other' => $btn_help_other,
            'btn_report_bug' => $btn_report_bug,
            'btn_translate' => $btn_translate,
            'btn_develop' => $btn_develop
        ]);
    }
}
