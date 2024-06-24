<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Donor as Model;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\DonorRequest as ModelRequest;
use App\Models\Country;

class DonorController extends Controller
{
    public function index(Request $request)
    {
        $models = Model::getModelData($request->all());

        return Inertia::render('Donor/Index', [
            'models' => $models
        ]);
    }

    public function create()
    {
        $countries = Country::all();

        return Inertia::render('Donor/Form', [
            'countries' => $countries
        ]);
    }

    public function store(ModelRequest $request, Model $model)
    {
        if ($model->saveModel($request->all())) {
            return Redirect::route('donor.index')->with('success', 'Data berhasil disimpan');
        } else {
            return Redirect::route('donor.index')->with('error', 'Data gagal disimpan');
        }
    }

    public function show(Model $donor)
    {
        return Inertia::render('Donor/Detail', [
            'donor' => $donor
        ]);
    }

    public function edit(Model $donor)
    {
        $countries = Country::all();

        return Inertia::render('Donor/Form', [
            'donor' => $donor,
            'countries' => $countries
        ]);
    }

    public function update(ModelRequest $request, Model $donor)
    {
        /*
         * When updating unique column we must use different rules as store method.
         * The validation rules must exclude current data as unique data.
         */
        $validation_rules = [
            'date' => 'required',
            'sponsor_name' => 'required',
            'desc' => 'required',
            'amount' => 'required',
            'country' => 'required',
            'platform' => 'required',
        ];


        if ($request->validate($validation_rules) && $donor->saveModel($request->all())) {
            return Redirect::route('donor.index')->with('success', 'Data berhasil diupdate');
        } else {
            return Redirect::route('donor.index')->with('error', 'Data berhasil diupdate');
        }
    }

    public function destroy($id)
    {
        try {
            if (Model::findOrFail($id)->delete()) {
                return Redirect::route('donor.index')->with('success', 'Data berhasil dihapus');
            } else {
                return Redirect::route('donor.index')->with('error', 'Data gagal dihapus');
            }
        } catch (\Exception $e) {
            return Redirect::route('donor.index')->with('error', 'Data gagal dihapus');
        }
    }
}
