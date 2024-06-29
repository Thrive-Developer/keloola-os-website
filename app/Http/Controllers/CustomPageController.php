<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\CustomPage as Model;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\CustomPageRequest as ModelRequest;
use Illuminate\Support\Str;

class CustomPageController extends Controller
{
    public function index(Request $request)
    {
        $models = Model::getModelData($request->all());

        return Inertia::render('CustomPage/Index', [
            'models' => $models
        ]);
    }

    public function create()
    {
        return Inertia::render('CustomPage/Form');
    }

    public function store(ModelRequest $request, Model $model)
    {
        $data = $request->all();
        $data['slug'] = Str::slug($data['title']);
        if ($model->where('slug', $data['slug'])->exists()) {
            $data['slug'] = $data['slug'] . '-' . time();
        }

        if ($model->saveModel($data)) {
            return Redirect::route('custom-page.index')->with('success', 'Data berhasil disimpan');
        } else {
            return Redirect::route('custom-page.index')->with('error', 'Data gagal disimpan');
        }
    }

    public function show(Model $custom_page)
    {
        return Inertia::render('CustomPage/Detail', [
            'custom_page' => $custom_page
        ]);
    }

    public function edit(Model $custom_page)
    {
        return Inertia::render('CustomPage/Form', [
            'custom_page' => $custom_page
        ]);
    }

    public function update(ModelRequest $request, Model $custom_page)
    {
        /*
         * When updating unique column we must use different rules as store method.
         * The validation rules must exclude current data as unique data.
         */
        $validation_rules = [
            'title' => 'required',
            'content' => 'required',
        ];

        $data = $request->all();
        $data['slug'] = Str::slug($data['title']);
        if ($custom_page->where('slug', $data['slug'])->whereNot('id', $custom_page->id)->exists()) {
            $data['slug'] = $data['slug'] . '-' . time();
        }
        if ($request->validate($validation_rules) && $custom_page->saveModel($data)) {
            return Redirect::route('custom-page.index')->with('success', 'Data berhasil diupdate');
        } else {
            return Redirect::route('custom-page.index')->with('error', 'Data berhasil diupdate');
        }
    }

    public function destroy($id)
    {
        try {
            if (Model::findOrFail($id)->delete()) {
                return Redirect::route('custom-page.index')->with('success', 'Data berhasil dihapus');
            } else {
                return Redirect::route('custom-page.index')->with('error', 'Data gagal dihapus');
            }
        } catch (\Exception $e) {
            return Redirect::route('custom-page.index')->with('error', 'Data gagal dihapus');
        }
    }
}
