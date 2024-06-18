<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\SponsorLogo as Model;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\SponsorLogoRequest as ModelRequest;
use App\Models\Sponsor;

class SponsorLogoController extends Controller
{
    public function index(Request $request)
    {
        $models = Model::getModelData($request->all());

        return Inertia::render('SponsorLogo/Index', [
            'models' => $models
        ]);
    }

    public function create()
    {
        $sponsors = Sponsor::orderBy('id', 'asc')->get();

        return Inertia::render('SponsorLogo/Form', [
            'sponsors' => $sponsors
        ]);
    }

    public function store(ModelRequest $request, Model $model)
    {
        $data = $request->all();
        $data['image'] = Model::uploadAttachment($request);

        if ($model->saveModel($data)) {
            return Redirect::route('sponsor-logo.index')->with('success', 'Data berhasil disimpan');
        } else {
            return Redirect::route('sponsor-logo.index')->with('error', 'Data gagal disimpan');
        }
    }

    public function show(Model $sponsor_logo)
    {
        return Inertia::render('SponsorLogo/Detail', [
            'sponsor_logo' => $sponsor_logo
        ]);
    }

    public function edit(Model $sponsor_logo)
    {
        $sponsors = Sponsor::orderBy('id', 'asc')->get();

        return Inertia::render('SponsorLogo/Form', [
            'sponsor_logo' => $sponsor_logo,
            'sponsors' => $sponsors
        ]);
    }

    public function update(ModelRequest $request, Model $sponsor_logo)
    {
        /*
         * When updating unique column we must use different rules as store method.
         * The validation rules must exclude current data as unique data.
         */
        $validation_rules = [
            'image' => 'required',
            'sponsor_id' => 'required',
        ];

        $data = $request->all();
        if ($request->hasFile('image')) {
            $data['image'] = Model::uploadAttachment($request);

            $filename = explode('/', $sponsor_logo->image);
            $filename = $filename[count($filename) - 1];
            Model::deleteAttachment($filename);
        }

        if ($request->validate($validation_rules) && $sponsor_logo->saveModel($data)) {
            return Redirect::route('sponsor-logo.index')->with('success', 'Data berhasil diupdate');
        } else {
            return Redirect::route('sponsor-logo.index')->with('error', 'Data berhasil diupdate');
        }
    }

    public function destroy($id)
    {
        try {
            $model = Model::findOrFail($id);

            if ($model) {
                $model->delete();

                $filename = explode('/', $model->image);
                $filename = $filename[count($filename) - 1];
                Model::deleteAttachment($filename);
                return Redirect::route('sponsor-logo.index')->with('success', 'Data berhasil dihapus');
            } else {
                return Redirect::route('sponsor-logo.index')->with('error', 'Data gagal dihapus');
            }
        } catch (\Exception $e) {
            return Redirect::route('sponsor-logo.index')->with('error', 'Data gagal dihapus');
        }
    }
}
