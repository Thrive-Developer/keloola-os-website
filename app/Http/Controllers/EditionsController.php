<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Edition as Model;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\EditionsRequest as ModelRequest;

class EditionsController extends Controller
{
    public function index(Request $request)
    {
        $models = Model::getModelData($request->all());

        return Inertia::render('Editions/Index', [
            'models' => $models
        ]);
    }

    public function create()
    {
    	return Inertia::render('Editions/Form');
    }

    public function store(ModelRequest $request, Model $model)
    {
        if ($model->saveModel($request->all())) {
            return Redirect::route('editions.index')->with('success', 'Data berhasil disimpan');
        } else {
            return Redirect::route('editions.index')->with('error', 'Data gagal disimpan');
        }
    }

    public function show(Model $edition)
    {
        return Inertia::render('Editions/Detail', [
            'editions' => $edition
        ]);
    }

    public function edit(Model $edition)
    {
        return Inertia::render('Editions/Form', [
            'editions' => $edition
        ]);
    }

    public function update(ModelRequest $request, Model $edition)
    {
        /*
         * When updating unique column we must use different rules as store method.
         * The validation rules must exclude current data as unique data.
         */
        $validation_rules = [
            'nama' => 'required',
        ];


        if ($request->validate($validation_rules) && $edition->saveModel($request->all())) {
            return Redirect::route('editions.index')->with('success', 'Data berhasil diupdate');
        } else {
            return Redirect::route('editions.index')->with('error', 'Data berhasil diupdate');
        }
    }

    public function destroy($id)
    {
        try {
            if (Model::findOrFail($id)->delete()) {
                return Redirect::route('editions.index')->with('success', 'Data berhasil dihapus');
            } else {
                return Redirect::route('editions.index')->with('error', 'Data gagal dihapus');
            }
        } catch (\Exception $e) {
            return Redirect::route('editions.index')->with('error', 'Data gagal dihapus');
        }
    }
}
