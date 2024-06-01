<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Release as Model;
use App\Models\Edition;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\ReleaseRequest as ModelRequest;

class ReleaseController extends Controller
{
    public function index(Request $request)
    {
        $models = Model::getModelData($request->all());
        
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
        
        return Inertia::render('Release/Index', [
            'models' => $models,
            'edition' => $edition
        ]);
    }

    public function create(Request $request)
    {
        $edition = Edition::getModelData($request->all());
    	return Inertia::render('Release/Form', [
            'edition' => $edition
        ]);
    }

    public function store(ModelRequest $request, Model $model)
    {
        if ($model->saveModel($request->all())) {
            return Redirect::route('release.index')->with('success', 'Data berhasil disimpan');
        } else {
            return Redirect::route('release.index')->with('error', 'Data gagal disimpan');
        }
    }

    public function show(Model $release)
    {
        return Inertia::render('Release/Detail', [
            'release' => $release
        ]);
    }

    public function edit(Model $release, Request $request)
    {
        $edition = Edition::getModelData($request->all());
        return Inertia::render('Release/Form', [
            'release' => $release,
            'edition' => $edition
        ]);
    }

    public function update(ModelRequest $request, Model $release)
    {
        /*
         * When updating unique column we must use different rules as store method.
         * The validation rules must exclude current data as unique data.
         */
        $validation_rules = [
            'version' => 'required',
            'code_name' => 'required',
            'edition_id' => 'required',
            'package_use' => 'required',
            'status' => 'required',
        ];


        if ($request->validate($validation_rules) && $release->saveModel($request->all())) {
            return Redirect::route('release.index')->with('success', 'Data berhasil diupdate');
        } else {
            return Redirect::route('release.index')->with('error', 'Data berhasil diupdate');
        }
    }

    public function destroy($id)
    {
        try {
            if (Model::findOrFail($id)->delete()) {
                return Redirect::route('release.index')->with('success', 'Data berhasil dihapus');
            } else {
                return Redirect::route('release.index')->with('error', 'Data gagal dihapus');
            }
        } catch (\Exception $e) {
            return Redirect::route('release.index')->with('error', 'Data gagal dihapus');
        }
    }
}
