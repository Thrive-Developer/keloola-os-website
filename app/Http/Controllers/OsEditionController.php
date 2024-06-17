<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\OsEdition as Model;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\OsEditionRequest as ModelRequest;
use App\Models\OsVersion;
use Illuminate\Support\Str;

class OsEditionController extends Controller
{
    public function index(Request $request)
    {
        $models = Model::getModelData($request->all());

        return Inertia::render('OsEdition/Index', [
            'models' => $models
        ]);
    }

    public function create()
    {
        $os_versions = OsVersion::orderBy('version', 'desc')
            ->orderBy('code_name', 'asc')
            ->get();

        return Inertia::render('OsEdition/Form', [
            'os_versions' => $os_versions
        ]);
    }

    public function store(ModelRequest $request, Model $model)
    {
        $data = $request->all();
        $data['slug'] = Str::slug($data['name']);
        if ($model->where('slug', $data['slug'])->exists()) {
            $data['slug'] = $data['slug'] . '-' . time();
        }

        $data['image'] = Model::uploadAttachment($request);

        if ($model->saveModel($data)) {
            return Redirect::route('os-edition.index')->with('success', 'Data berhasil disimpan');
        } else {
            return Redirect::route('os-edition.index')->with('error', 'Data gagal disimpan');
        }
    }

    public function show(Model $os_edition)
    {
        return Inertia::render('OsEdition/Detail', [
            'os_edition' => $os_edition
        ]);
    }

    public function edit(Model $os_edition)
    {
        $os_versions = OsVersion::orderBy('version', 'desc')
            ->orderBy('code_name', 'asc')
            ->get();

        return Inertia::render('OsEdition/Form', [
            'os_edition' => $os_edition,
            'os_versions' => $os_versions
        ]);
    }

    public function update(ModelRequest $request, Model $os_edition)
    {
        /*
         * When updating unique column we must use different rules as store method.
         * The validation rules must exclude current data as unique data.
         */
        $validation_rules = [
            'os_version_id' => 'required',
            'name' => 'required',
            'download_link' => 'required',
            'slogan' => 'required',
            'description' => 'required',
            'image' => 'required',
        ];

        $data = $request->all();
        $data['slug'] = Str::slug($data['name']);
        if (Model::where('slug', $data['slug'])->whereNotIn('id', [$os_edition->id])->exists()) {
            $data['slug'] = $data['slug'] . '-' . time();
        }

        if ($request->hasFile('image')) {
            $data['image'] = Model::uploadAttachment($request);

            $filename = explode('/', $os_edition->image);
            $filename = $filename[count($filename) - 1];
            Model::deleteAttachment($filename);
        }

        if ($request->validate($validation_rules) && $os_edition->saveModel($data)) {
            return Redirect::route('os-edition.index')->with('success', 'Data berhasil diupdate');
        } else {
            return Redirect::route('os-edition.index')->with('error', 'Data berhasil diupdate');
        }
    }

    public function destroy($id)
    {
        try {
            if (Model::findOrFail($id)->delete()) {
                return Redirect::route('os-edition.index')->with('success', 'Data berhasil dihapus');
            } else {
                return Redirect::route('os-edition.index')->with('error', 'Data gagal dihapus');
            }
        } catch (\Exception $e) {
            return Redirect::route('os-edition.index')->with('error', 'Data gagal dihapus');
        }
    }
}
