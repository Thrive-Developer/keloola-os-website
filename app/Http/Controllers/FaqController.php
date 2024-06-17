<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Faq as Model;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\FaqRequest as ModelRequest;

class FaqController extends Controller
{
    public function index(Request $request)
    {
        $models = Model::getModelData($request->all());

        return Inertia::render('Faq/Index', [
            'models' => $models
        ]);
    }

    public function create()
    {
        return Inertia::render('Faq/Form');
    }

    public function store(ModelRequest $request, Model $model)
    {
        if ($model->saveModel($request->all())) {
            return Redirect::route('faq.index')->with('success', 'Data berhasil disimpan');
        } else {
            return Redirect::route('faq.index')->with('error', 'Data gagal disimpan');
        }
    }

    public function show(Model $faq)
    {
        return Inertia::render('Faq/Detail', [
            'faq' => $faq
        ]);
    }

    public function edit(Model $faq)
    {
        return Inertia::render('Faq/Form', [
            'faq' => $faq
        ]);
    }

    public function update(ModelRequest $request, Model $faq)
    {
        /*
         * When updating unique column we must use different rules as store method.
         * The validation rules must exclude current data as unique data.
         */
        $validation_rules = [
            'question' => 'required',
            'answer' => 'required',
        ];


        if ($request->validate($validation_rules) && $faq->saveModel($request->all())) {
            return Redirect::route('faq.index')->with('success', 'Data berhasil diupdate');
        } else {
            return Redirect::route('faq.index')->with('error', 'Data berhasil diupdate');
        }
    }

    public function destroy($id)
    {
        try {
            if (Model::findOrFail($id)->delete()) {
                return Redirect::route('faq.index')->with('success', 'Data berhasil dihapus');
            } else {
                return Redirect::route('faq.index')->with('error', 'Data gagal dihapus');
            }
        } catch (\Exception $e) {
            return Redirect::route('faq.index')->with('error', 'Data gagal dihapus');
        }
    }
}
