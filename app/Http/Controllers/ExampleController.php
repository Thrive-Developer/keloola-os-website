<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Example as Model;
use App\Http\Requests\ExampleRequest as ModelRequest;
use Illuminate\Support\Facades\Redirect;

class ExampleController extends Controller
{
    public function index(Request $request)
    {
        $models = Model::getModelData($request->all());

        return Inertia::render('Example/Index', [
            'models' => $models
        ]);
    }

    public function create()
    {
        return Inertia::render('Example/Form');
    }

    public function store(ModelRequest $request, Model $model)
    {
        if ($model->saveModel($request->all())) {
            return Redirect::route('example.index')->with('success', 'Data berhasil disimpan');
        } else {
            return Redirect::route('example.index')->with('error', 'Data gagal disimpan');
        }
    }

    public function edit(Model $example)
    {
        return Inertia::render('Example/Form', [
            'example' => $example
        ]);
    }

    public function update(ModelRequest $request, Model $example)
    {
        /*
         * When updating unique column we must use different rules as store method.
         * The validation rules must exclude current data as unique data.
         */
        $validation_rules = [
            'title' => 'required',
            'content' => 'required',
        ];


        if ($request->validate($validation_rules) && $example->saveModel($request->all())) {
            return Redirect::route('example.index')->with('success', 'Data berhasil diupdate');
        } else {
            return Redirect::route('example.index')->with('error', 'Data berhasil diupdate');
        }
    }

    public function destroy($id)
    {
        try {
            if (Model::findOrFail($id)->delete()) {
                return Redirect::route('example.index')->with('success', 'Data berhasil dihapus');
            } else {
                return Redirect::route('example.index')->with('error', 'Data gagal dihapus');
            }
        } catch (\Exception $e) {
            return Redirect::route('example.index')->with('error', 'Data gagal dihapus');
        }
    }
}
