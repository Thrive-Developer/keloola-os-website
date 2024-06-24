<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Config as Model;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\ConfigRequest as ModelRequest;

class ConfigController extends Controller
{
    public function index(Request $request)
    {
        $models = Model::getModelData($request->all());

        return Inertia::render('Config/Index', [
            'models' => $models
        ]);
    }

    public function create()
    {
    	return Inertia::render('Config/Form');
    }

    public function store(ModelRequest $request, Model $model)
    {
        if ($model->saveModel($request->all())) {
            return Redirect::route('config.index')->with('success', 'Data berhasil disimpan');
        } else {
            return Redirect::route('config.index')->with('error', 'Data gagal disimpan');
        }
    }

    public function show(Model $config)
    {
        return Inertia::render('Config/Detail', [
            'config' => $config
        ]);
    }

    public function edit(Model $config)
    {
        return Inertia::render('Config/Form', [
            'config' => $config
        ]);
    }

    public function update(ModelRequest $request, Model $config)
    {
        /*
         * When updating unique column we must use different rules as store method.
         * The validation rules must exclude current data as unique data.
         */
        $validation_rules = [
            'key' => 'required',
'value' => 'required',
        ];


        if ($request->validate($validation_rules) && $config->saveModel($request->all())) {
            return Redirect::route('config.index')->with('success', 'Data berhasil diupdate');
        } else {
            return Redirect::route('config.index')->with('error', 'Data berhasil diupdate');
        }
    }

    public function destroy($id)
    {
        try {
            if (Model::findOrFail($id)->delete()) {
                return Redirect::route('config.index')->with('success', 'Data berhasil dihapus');
            } else {
                return Redirect::route('config.index')->with('error', 'Data gagal dihapus');
            }
        } catch (\Exception $e) {
            return Redirect::route('config.index')->with('error', 'Data gagal dihapus');
        }
    }
}
