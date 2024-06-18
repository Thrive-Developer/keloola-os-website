<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ConfigSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'key' => "BUTTON_DOWNLOAD",
                'value' => 'Download',
                'type' => 'BUTTON',
                'link' => ''
            ],
            [
                'key' => "BUTTON_INSTALLATION_INSTRUCTIONS",
                'value' => 'Installation Instructions',
                'type' => 'BUTTON',
                'link' => ''
            ],
            [
                'key' => "BUTTON_INSTALLATION_GUIDE",
                'value' => 'Installation Guide',
                'type' => 'BUTTON',
                'link' => ''
            ],
            [
                'key' => "BUTTON_CHAT_ROOM",
                'value' => 'Chat',
                'type' => 'BUTTON',
                'link' => ''
            ],
            [
                'key' => "BUTTON_GET_INVOLVED",
                'value' => 'Go',
                'type' => 'BUTTON',
                'link' => ''
            ],
            [
                'key' => "BUTTON_DONATION_USD",
                'value' => 'Make a donation in USD',
                'type' => 'BUTTON',
                'link' => ''
            ],
            [
                'key' => "BUTTON_DONATION_IDR",
                'value' => 'Make a donation in IDR',
                'type' => 'BUTTON',
                'link' => ''
            ],
            [
                'key' => "BUTTON_PATREON",
                'value' => 'Become a patron',
                'type' => 'BUTTON',
                'link' => ''
            ],
            [
                'key' => "BUTTON_PATREON",
                'value' => 'Become a patron',
                'type' => 'BUTTON',
                'link' => ''
            ],
            [
                'key' => "IMAGE_HERO_DONATION",
                'value' => '/assets/donations.svg',
                'type' => 'IMAGE',
                'link' => ''
            ],
            [
                'key' => "TEXT_HERO_DONATION",
                'value' => '<p class="text-sm leading-loose">We believe Linux Mint can gather the momentum and the community <br>
                        necessary to fund itself entirely through donations, sponsoring and<br>
                        advertisement without the need to engage in commercial activities and<br>
                        without focusing on anything else than improving the distribution itself.<br>
                    </p>
                    <p class="my-4 text-sm leading-loose">
                        The donations we receive range from a single dollar to a couple of hundreds.<br>
                        The important thing is for people to give something, and for us to generate the<br>
                        income that will let us work and succeed on this project, month after month.<br>
                    </p>
                    <p class="text-sm leading-loose">
                        If you want to help and if you can do so please make a donation to the project<br>
                        and encourage others to do so.
                    </p>
                ',
                'type' => 'TEXT',
                'link' => ''
            ],
        ];

        foreach ($data as $item) {
            \App\Models\Config::updateOrCreate($item);
        }
    }
}
