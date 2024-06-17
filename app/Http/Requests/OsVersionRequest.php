<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OsVersionRequest extends FormRequest
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
            'version' => 'required',
            'code_name' => 'required',
            // 'slug' => 'required',
            'package_base' => 'required',
            'status' => 'required',
        ];
    }
}
