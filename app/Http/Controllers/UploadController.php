<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

class UploadController extends Controller
{
    public function upload(Request $request)
    {
        $request->validate([
            'upload' => 'required|image',
        ]);

        try {
            if ($request->hasFile('upload')) {
                $file_name = date('dmYHis') . Str::random(5);
                $file_extension = $request->upload->extension();

                $attachment_filename = $file_name . '.' . $file_extension;

                $request->upload->storeAs('images/media', $attachment_filename);

                return response()->json([
                    'url' => url('storage/images/media/' . $attachment_filename),
                ]);
            }

            return response()->json([
                'error' => [
                    'message' => 'Could not upload the file.',
                ],
            ], 500);
        } catch (\Exception $e) {
            throw $e;
            return response()->json([
                'error' => [
                    'message' => 'Could not upload the file.',
                ],
            ], 500);
        }
    }
}
