<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class OsEdition extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'os_edition';

    const ATTACHMENT_PATH = 'images/editions';

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = ['os_version_id', 'name', 'slug', 'download_link', 'slogan', 'description', 'image', 'new_features', 'release_notes'];

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

        $modelQuery->with('os_version');
        $modelQuery->latest();

        if (($sort_data = Arr::get($params, 'sort', false)) !== false) {
            $modelQuery->orderBy($sort_data['column'], $sort_data['order']);
        }

        if (($search = Arr::get($params, 'search', false)) !== false) {
            $modelQuery->whereRaw('LOWER(name) LIKE ?', ['%' . strtolower($search) . '%']);
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

    public static function uploadAttachment($request)
    {
        try {
            if ($request->hasFile('image')) {
                $file_name = date('dmYHis') . Str::random(5);
                $file_extension = $request->image->extension();

                $attachment_filename = $file_name . '.' . $file_extension;

                $request->image->storeAs(self::ATTACHMENT_PATH, $attachment_filename);
                return url('storage/images/editions/' . $attachment_filename);
            }

            return null;
        } catch (\Exception $e) {
            throw $e;
        }
    }

    public static function deleteAttachment($filename)
    {
        try {
            if (Storage::exists(self::ATTACHMENT_PATH . '/' . $filename)) {
                Storage::delete(self::ATTACHMENT_PATH . '/' . $filename);
                return true;
            }


            return false;
        } catch (\Exception $e) {
            throw $e;
        }
    }

    public function os_version()
    {
        return $this->belongsTo(OsVersion::class);
    }

    public function scopeByEdition($builder, $slug)
    {
        if ($slug) {
            return $builder->where('slug', $slug)->take(1);
        }
    }
}
