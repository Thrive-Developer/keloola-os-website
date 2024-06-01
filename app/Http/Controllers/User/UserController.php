<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\News;
use App\Models\Release;
use App\Models\Edition;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $news = News::getModelData($request->all());

        Inertia::setRootView('user');
        return Inertia::render('User/Index', [
            'news' => $news
        ]);
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

    public function download(Request $request)
    {
        $models = Release::getModelData($request->all());
        
        $edition = Edition::all()->toArray();

        foreach ($models->items() as $key => $value) {
            $deskripsi = [];
            $editionIds = json_decode($value->edition_id, true);
            foreach ($editionIds as $editionId) {
                $editionName = current(array_filter($edition, fn($item) => $item['id'] == $editionId))['nama'] ?: null;
                
                if ($editionName) {
                    $deskripsi[] = $editionName;
                }
            }
            $models->items()[$key]->edition_id = $deskripsi;
        }

        Inertia::setRootView('user');
        return Inertia::render('User/Download', [
            'release' => $models
        ]);
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
