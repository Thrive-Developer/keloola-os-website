<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;

class OsVersion extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'os_version';

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = ['version', 'code_name', 'slug', 'package_base', 'status', 'description', 'slogan', 'image'];

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

        $modelQuery->orderBy('version', 'desc');

        if (($sort_data = Arr::get($params, 'sort', false)) !== false) {
            $modelQuery->orderBy($sort_data['column'], $sort_data['order']);
        }

        if (($search = Arr::get($params, 'search', false)) !== false) {
            $modelQuery->whereRaw('LOWER(code_name) LIKE ?', ['%' . strtolower($search) . '%']);
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


    public function os_editions()
    {
        return $this->hasMany(OsEdition::class);
    }
}
