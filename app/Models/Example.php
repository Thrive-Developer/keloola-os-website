<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;

class Example extends Model
{
    use HasFactory;

    protected $table = 'example';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'content',
    ];

    public function saveModel($data)
    {
        try {
            $this->fill($data);
            return $this->save();
        } catch (\Exception $e) {
            throw $e;
        }
    }

    /*
     * The original method name was getModel.
     * But the name must be changed because it was conflict with HasRoles class
     */
    public static function getModelData($params, $raw = false)
    {
        $modelQuery = static::query();

        $params['page'] = 1;
        $params['limit'] = $params['limit'] ?? 10;

        $modelQuery->latest();

        if (($sort_data = Arr::get($params, 'sort', false)) !== false) {
            $modelQuery->orderBy($sort_data['column'], $sort_data['order']);
        }

        if (($search = Arr::get($params, 'search', false)) !== false) {
            $modelQuery->whereRaw('LOWER(title) LIKE ?', ['%' . strtolower($search) . '%']);
        }

        if (!$raw) {
            if (($item_per_page = Arr::get($params, 'limit', false))) {
                $modelQuery = $modelQuery->paginate($item_per_page);
            } else {
                $modelQuery = $modelQuery->get();
            }
        }

        return $modelQuery;
    }
}
