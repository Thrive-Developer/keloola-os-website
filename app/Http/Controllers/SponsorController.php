<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Sponsor as Model;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\SponsorRequest as ModelRequest;

class SponsorController extends Controller
{
    public function index(Request $request)
    {
        $models = Model::getModelData($request->all());

        return Inertia::render('Sponsor/Index', [
            'models' => $models
        ]);
    }

    public function create()
    {
        return Inertia::render('Sponsor/Form');
    }

    public function store(ModelRequest $request, Model $model)
    {
        if ($model->saveModel($request->all())) {
            return Redirect::route('sponsor.index')->with('success', 'Data berhasil disimpan');
        } else {
            return Redirect::route('sponsor.index')->with('error', 'Data gagal disimpan');
        }
    }

    public function show(Model $sponsor)
    {
        return Inertia::render('Sponsor/Detail', [
            'sponsor' => $sponsor
        ]);
    }

    public function edit(Model $sponsor)
    {
        return Inertia::render('Sponsor/Form', [
            'sponsor' => $sponsor
        ]);
    }

    public function update(ModelRequest $request, Model $sponsor)
    {
        /*
         * When updating unique column we must use different rules as store method.
         * The validation rules must exclude current data as unique data.
         */
        $validation_rules = [
            'name' => 'required',
        ];


        if ($request->validate($validation_rules) && $sponsor->saveModel($request->all())) {
            return Redirect::route('sponsor.index')->with('success', 'Data berhasil diupdate');
        } else {
            return Redirect::route('sponsor.index')->with('error', 'Data berhasil diupdate');
        }
    }

    public function destroy($id)
    {
        try {
            if (Model::findOrFail($id)->delete()) {
                return Redirect::route('sponsor.index')->with('success', 'Data berhasil dihapus');
            } else {
                return Redirect::route('sponsor.index')->with('error', 'Data gagal dihapus');
            }
        } catch (\Exception $e) {
            return Redirect::route('sponsor.index')->with('error', 'Data gagal dihapus');
        }
    }
}
