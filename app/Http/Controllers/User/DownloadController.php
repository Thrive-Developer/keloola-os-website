<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Edition;
use App\Models\OsEdition;
use App\Models\OsVersion;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Release;

class DownloadController extends Controller
{
    public function index(Request $request)
    {
        $os_versions = OsVersion::with('os_editions')->get();

        Inertia::setRootView('user');
        return Inertia::render('User/Download', [
            'os_versions' => $os_versions
        ]);
    }

    public function detail_version($slug)
    {
        $os_version = OsVersion::where('slug', $slug)->first();
        $editions = OsEdition::where('os_version_id', $os_version->id)->get();

        Inertia::setRootView('user');
        return Inertia::render('User/Tambora', [
            'os_version' => $os_version,
            'editions' => $editions
        ]);
    }
}
