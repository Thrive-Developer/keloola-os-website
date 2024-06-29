<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\News as Model;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\NewsRequest as ModelRequest;
use Illuminate\Support\Str;

class NewsController extends Controller
{
    public function index(Request $request)
    {
        $models = Model::getModelData($request->all());

        return Inertia::render('News/Index', [
            'models' => $models
        ]);
    }

    public function create()
    {
        return Inertia::render('News/Form');
    }

    public function store(ModelRequest $request, Model $model)
    {
        $data = $request->all();
        $data['slug'] = Str::slug($data['title']);
        if ($model->where('slug', $data['slug'])->exists()) {
            $data['slug'] = $data['slug'] . '-' . time();
        }
        if ($model->saveModel($data)) {
            return Redirect::route('news.index')->with('success', 'Data berhasil disimpan');
        } else {
            return Redirect::route('news.index')->with('error', 'Data gagal disimpan');
        }
    }

    public function show(Model $news)
    {
        return Inertia::render('News/Detail', [
            'news' => $news
        ]);
    }

    public function edit(Model $news)
    {
        return Inertia::render('News/Form', [
            'news' => $news
        ]);
    }

    public function update(ModelRequest $request, Model $news)
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
        if ($news->where('slug', $data['slug'])->whereNot('id', $news->id)->exists()) {
            $data['slug'] = $data['slug'] . '-' . time();
        }
        if ($request->validate($validation_rules) && $news->saveModel($data)) {
            return Redirect::route('news.index')->with('success', 'Data berhasil diupdate');
        } else {
            return Redirect::route('news.index')->with('error', 'Data berhasil diupdate');
        }
    }

    public function destroy($id)
    {
        try {
            if (Model::findOrFail($id)->delete()) {
                return Redirect::route('news.index')->with('success', 'Data berhasil dihapus');
            } else {
                return Redirect::route('news.index')->with('error', 'Data gagal dihapus');
            }
        } catch (\Exception $e) {
            return Redirect::route('news.index')->with('error', 'Data gagal dihapus');
        }
    }
}
