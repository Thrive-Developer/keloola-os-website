<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            'name' => 'Admin',
            'email' => 'admin@local.test',
            'password' => Hash::make('admin'),
            'created_at' => now(),
        ];

        $user = \App\Models\User::where('email', $data['email'])->exists();
        if (!$user) {
            $user = \App\Models\User::create($data);
        }
    }
}
