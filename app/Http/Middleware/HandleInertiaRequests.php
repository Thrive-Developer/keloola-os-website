<?php

namespace App\Http\Middleware;

use App\Models\Config;
use App\Models\OsVersion;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $btn_install_guide = Config::where('key', 'BUTTON_INSTALLATION_GUIDE')->first();
        $latest_version = OsVersion::orderBy('version', 'desc')->first();
        $before_latest_version = OsVersion::orderBy('version', 'desc')->skip(1)->first();

        return array_merge(parent::share($request), [
            'flash' => [
                'success' => fn () => $request->session()->get('success'),
                'error' => fn () => $request->session()->get('error')
            ],
            'user' => auth()->user(),
            'csrf_token' => csrf_token(),
            'btn_install_guide' => $btn_install_guide,
            'latest_version' => $latest_version,
            'before_latest_version' => $before_latest_version
            // 'authorization' => [
            //     'roles' => !is_null(auth()->user()) ? auth()->user()->getRoleNames() : null,
            //     'permissions' => !is_null(auth()->user()) ? auth()->user()->getPermissionNames() : null
            // ]
        ]);
    }
}
