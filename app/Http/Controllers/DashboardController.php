<?php

namespace App\Http\Controllers;

use App\Models\CustomPage;
use App\Models\Donor;
use App\Models\Faq;
use App\Models\News;
use App\Models\OsEdition;
use App\Models\OsVersion;
use App\Models\SponsorLogo;
use App\Models\Testimonial;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $count_news = News::count();
        $count_custom_page = CustomPage::count();
        $count_faq = Faq::count();
        $count_testimonial = Testimonial::count();
        $count_os_version = OsVersion::count();
        $count_os_edition = OsEdition::count();
        $count_sponsor = SponsorLogo::count();
        $count_donor = Donor::count();

        return Inertia::render('Dashboard/Index', [
            'count_news' => $count_news,
            'count_custom_page' => $count_custom_page,
            'count_faq' => $count_faq,
            'count_testimonial' => $count_testimonial,
            'count_os_version' => $count_os_version,
            'count_os_edition' => $count_os_edition,
            'count_sponsor' => $count_sponsor,
            'count_donor' => $count_donor
        ]);
    }
}
