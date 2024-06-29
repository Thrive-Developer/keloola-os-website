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
                'link' => '',
                'page' => '/',
                'section' => 'Hero'
            ],
            [
                'key' => "BUTTON_INSTALLATION_INSTRUCTIONS",
                'value' => 'Installation Instructions',
                'type' => 'BUTTON',
                'link' => '',
                'page' => '/',
                'section' => 'Home'
            ],
            [
                'key' => "BUTTON_INSTALLATION_GUIDE",
                'value' => 'Installation Guide',
                'type' => 'BUTTON',
                'link' => '',
                'page' => '/',
                'section' => 'Navbar'
            ],
            [
                'key' => "BUTTON_CHAT_ROOM",
                'value' => 'Chat',
                'type' => 'BUTTON',
                'link' => 'https://discord.com/invite/MJeZsPacuY',
                'page' => '/contact',
                'section' => 'Support Queries'
            ],
            [
                'key' => "BUTTON_GET_INVOLVED",
                'value' => 'Go',
                'type' => 'BUTTON',
                'link' => '/get-involved',
                'page' => '/contact',
                'section' => 'Feedback'
            ],
            [
                'key' => "BUTTON_DONATION_USD",
                'value' => 'Make a donation in USD',
                'type' => 'BUTTON',
                'link' => '',
                'page' => '/donors',
                'section' => 'Bank Transfer'
            ],
            [
                'key' => "BUTTON_DONATION_IDR",
                'value' => 'Make a donation in IDR',
                'type' => 'BUTTON',
                'link' => '',
                'page' => '/donors',
                'section' => 'Bank Transfer'
            ],
            [
                'key' => "BUTTON_DONATION_OTHER",
                'value' => 'Other',
                'type' => 'BUTTON',
                'link' => '',
                'page' => '/donors',
                'section' => 'Other'
            ],
            [
                'key' => "IMAGE_BITCOIN_DONATION",
                'value' => '',
                'type' => 'IMAGE',
                'link' => '',
                'page' => '/donors',
                'section' => 'Crypto-currencies'
            ],
            [
                'key' => "IMAGE_HERO_DONATION",
                'value' => '/assets/donations.svg',
                'type' => 'IMAGE',
                'link' => '',
                'page' => '/donors',
                'section' => 'Hero'
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
                'link' => '',
                'page' => '/donors',
                'section' => 'Hero'
            ],
            [
                'key' => "BUTTON_BECOME_SPONSOR",
                'value' => 'Apply to become a sponsor',
                'type' => 'BUTTON',
                'link' => '',
                'page' => '/sponsors',
                'section' => 'Many thanks to all our sponsors'
            ],
            [
                'key' => "BUTTON_DONATION",
                'value' => 'Donate',
                'type' => 'BUTTON',
                'link' => '',
                'page' => '/get-involved',
                'section' => 'Financial help'
            ],
            [
                'key' => "BUTTON_SPONSORSHIP",
                'value' => 'Sponsor',
                'type' => 'BUTTON',
                'link' => '',
                'page' => '/get-involved',
                'section' => 'Financial help'
            ],
            [
                'key' => "BUTTON_JOIN_COMMUNITY",
                'value' => 'Join the forums',
                'type' => 'BUTTON',
                'link' => '',
                'page' => '/get-involved',
                'section' => 'Support and promotion'
            ],
            [
                'key' => "BUTTON_HELP_OTHER",
                'value' => 'Chat room',
                'type' => 'BUTTON',
                'link' => '',
                'page' => '/get-involved',
                'section' => 'Support and promotion'
            ],
            [
                'key' => "BUTTON_REPORT_BUGS",
                'value' => 'Report',
                'type' => 'BUTTON',
                'link' => '',
                'page' => '/get-involved',
                'section' => 'Project contributions'
            ],
            [
                'key' => "BUTTON_TRANSLATE",
                'value' => 'Translate',
                'type' => 'BUTTON',
                'link' => '',
                'page' => '/get-involved',
                'section' => 'Project contributions'
            ],
            [
                'key' => "BUTTON_DEVELOP",
                'value' => 'Develop',
                'type' => 'BUTTON',
                'link' => '',
                'page' => '/get-involved',
                'section' => 'Project contributions'
            ],
        ];

        foreach ($data as $item) {
            \App\Models\Config::updateOrCreate(
                [
                    'key' => $item['key']
                ],
                $item
            );
        }
    }
}
