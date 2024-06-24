<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SponsorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'id' => 1,
                'name' => 'Gold Sponsor',
            ],
            [
                'id' => 2,
                'name' => 'Silver Sponsor',
            ],
            [
                'id' => 3,
                'name' => 'Bronze Sponsor',
            ],
            [
                'id' => 4,
                'name' => 'Community Sponsor',
            ],
        ];

        foreach ($data as $item) {
            \App\Models\Sponsor::updateOrCreate($item);
        }
    }
}
