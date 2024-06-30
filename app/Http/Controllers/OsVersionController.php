<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\OsVersion as Model;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\OsVersionRequest as ModelRequest;
use Illuminate\Support\Str;

class OsVersionController extends Controller
{
    public function index(Request $request)
    {
        $models = Model::getModelData($request->all());

        return Inertia::render('OsVersion/Index', [
            'models' => $models
        ]);
    }

    public function create()
    {
        return Inertia::render('OsVersion/Form');
    }

    public function store(ModelRequest $request, Model $model)
    {
        $data = $request->all();
        $data['slug'] = Str::slug($data['code_name']);
        if ($model->where('slug', $data['slug'])->exists()) {
            $data['slug'] = $data['slug'] . '-' . time();
        }
        // $data['slogan'] = null;
        if ($model->saveModel($data)) {
            return Redirect::route('os-version.index')->with('success', 'Data berhasil disimpan');
        } else {
            return Redirect::route('os-version.index')->with('error', 'Data gagal disimpan');
        }
    }

    public function show(Model $os_version)
    {
        return Inertia::render('OsVersion/Detail', [
            'os_version' => $os_version
        ]);
    }

    public function edit(Model $os_version)
    {
        return Inertia::render('OsVersion/Form', [
            'os_version' => $os_version
        ]);
    }

    public function update(Request $request, Model $os_version)
    {
        /*
         * When updating unique column we must use different rules as store method.
         * The validation rules must exclude current data as unique data.
         */
        $validation_rules = [
            'version' => 'required',
            'code_name' => 'required',
            'package_base' => 'required',
            'status' => 'required',
        ];


        $data = $request->all();
        $data['slug'] = Str::slug($data['code_name']);
        if (Model::where('slug', $data['slug'])->whereNotIn('id', [$os_version->id])->exists()) {
            $data['slug'] = $data['slug'] . '-' . time();
        }

        if ($request->validate($validation_rules) && $os_version->saveModel($data)) {
            return Redirect::route('os-version.index')->with('success', 'Data berhasil diupdate');
        } else {
            return Redirect::route('os-version.index')->with('error', 'Data berhasil diupdate');
        }
    }

    public function destroy($id)
    {
        try {
            if (Model::findOrFail($id)->delete()) {
                return Redirect::route('os-version.index')->with('success', 'Data berhasil dihapus');
            } else {
                return Redirect::route('os-version.index')->with('error', 'Data gagal dihapus');
            }
        } catch (\Exception $e) {
            return Redirect::route('os-version.index')->with('error', 'Data gagal dihapus');
        }
    }
}
