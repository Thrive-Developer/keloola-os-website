<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Testimonial as Model;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\TestimonialRequest as ModelRequest;

class TestimonialController extends Controller
{
    public function index(Request $request)
    {
        $models = Model::getModelData($request->all());

        return Inertia::render('Testimonial/Index', [
            'models' => $models
        ]);
    }

    public function create()
    {
    	return Inertia::render('Testimonial/Form');
    }

    public function store(ModelRequest $request, Model $model)
    {
        if ($model->saveModel($request->all())) {
            return Redirect::route('testimonial.index')->with('success', 'Data berhasil disimpan');
        } else {
            return Redirect::route('testimonial.index')->with('error', 'Data gagal disimpan');
        }
    }

    public function show(Model $testimonial)
    {
        return Inertia::render('Testimonial/Detail', [
            'testimonial' => $testimonial
        ]);
    }

    public function edit(Model $testimonial)
    {
        return Inertia::render('Testimonial/Form', [
            'testimonial' => $testimonial
        ]);
    }

    public function update(ModelRequest $request, Model $testimonial)
    {
        /*
         * When updating unique column we must use different rules as store method.
         * The validation rules must exclude current data as unique data.
         */
        $validation_rules = [
            'name' => 'required',
'description' => 'required',
'from' => 'required',
        ];


        if ($request->validate($validation_rules) && $testimonial->saveModel($request->all())) {
            return Redirect::route('testimonial.index')->with('success', 'Data berhasil diupdate');
        } else {
            return Redirect::route('testimonial.index')->with('error', 'Data berhasil diupdate');
        }
    }

    public function destroy($id)
    {
        try {
            if (Model::findOrFail($id)->delete()) {
                return Redirect::route('testimonial.index')->with('success', 'Data berhasil dihapus');
            } else {
                return Redirect::route('testimonial.index')->with('error', 'Data gagal dihapus');
            }
        } catch (\Exception $e) {
            return Redirect::route('testimonial.index')->with('error', 'Data gagal dihapus');
        }
    }
}
