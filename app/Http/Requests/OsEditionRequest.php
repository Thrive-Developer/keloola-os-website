<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OsEditionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'os_version_id' => 'required',
            'name' => 'required',
            'download_link' => 'required',
            'slogan' => 'required',
            'description' => 'required',
            'image' => 'required',
        ];
    }
}
