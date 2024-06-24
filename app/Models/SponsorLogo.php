<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class SponsorLogo extends Model
{
    use HasFactory;

    protected $table = 'sponsor_logo';

    const ATTACHMENT_PATH = 'images/sponsors';

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = ['sponsor_id', 'image'];

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

        $modelQuery->with('sponsor');
        $modelQuery->latest();

        if (($sort_data = Arr::get($params, 'sort', false)) !== false) {
            $modelQuery->orderBy($sort_data['column'], $sort_data['order']);
        }

        if (($search = Arr::get($params, 'search', false)) !== false) {
            // $modelQuery->whereRaw('LOWER(title) LIKE ?', ['%' . strtolower($search) . '%']);
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
                return url('storage/images/sponsors/' . $attachment_filename);
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

    public function sponsor()
    {
        return $this->belongsTo(Sponsor::class);
    }
}
