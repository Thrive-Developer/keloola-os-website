<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Config;
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

    public function detail_version(Request $request, $slug)
    {
        $os_version = OsVersion::where('slug', $slug)->first();
        $editions = OsEdition::where('os_version_id', $os_version->id)->byEdition($request->edition)->get();

        Inertia::setRootView('user');
        return Inertia::render('User/Tambora', [
            'os_version' => $os_version,
            'editions' => $editions
        ]);
    }

    public function ready_download(Request $request, $slug)
    {
        $btn_install_instruction = Config::where('key', 'BUTTON_INSTALLATION_INSTRUCTIONS')->first();
        $os_version = OsVersion::where('slug', $slug)->first();
        if (isset($request->edition)) {
            $editions = OsEdition::where('os_version_id', $os_version->id)->where('slug', $request->edition)->get();
        } else {
            $editions = OsEdition::where('os_version_id', $os_version->id)->orderBy('id', 'desc')->get();
        }

        Inertia::setRootView('user');
        return Inertia::render('User/ReadyDownload', [
            'os_version' => $os_version,
            'editions' => $editions,
            'btn_install_instruction' => $btn_install_instruction
        ]);
    }

    public function new_feature($slug)
    {
        $os_edition = OsEdition::where('slug', $slug)->first();

        Inertia::setRootView('user');
        return Inertia::render('User/NewFeature', [
            'os_edition' => $os_edition,
        ]);
    }

    public function release_notes($slug)
    {
        $os_edition = OsEdition::where('slug', $slug)->first();

        Inertia::setRootView('user');
        return Inertia::render('User/ReleaseNotes', [
            'os_edition' => $os_edition,
        ]);
    }
}
