<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CountrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //     INSERT INTO country (countrycode, countryname, code)
        //     VALUES
        //     ('AFG','Afghanistan','AF'),
        //     ('ALA','Åland','AX'),
        //     ('ALB','Albania','AL'),
        //     ('DZA','Algeria','DZ'),
        //     ('ASM','American Samoa','AS'),
        //     ('AND','Andorra','AD'),
        //     ('AGO','Angola','AO'),
        //     ('AIA','Anguilla','AI'),
        //     ('ATA','Antarctica','AQ'),
        //     ('ATG','Antigua and Barbuda','AG'),
        //     ('ARG','Argentina','AR'),
        //     ('ARM','Armenia','AM'),
        //     ('ABW','Aruba','AW'),
        //     ('AUS','Australia','AU'),
        //     ('AUT','Austria','AT'),
        //     ('AZE','Azerbaijan','AZ'),
        //     ('BHS','Bahamas','BS'),
        //     ('BHR','Bahrain','BH'),
        //     ('BGD','Bangladesh','BD'),
        //     ('BRB','Barbados','BB'),
        //     ('BLR','Belarus','BY'),
        //     ('BEL','Belgium','BE'),
        //     ('BLZ','Belize','BZ'),
        //     ('BEN','Benin','BJ'),
        //     ('BMU','Bermuda','BM'),
        //     ('BTN','Bhutan','BT'),
        //     ('BOL','Bolivia','BO'),
        //     ('BES','Bonaire','BQ'),
        //     ('BIH','Bosnia and Herzegovina','BA'),
        //     ('BWA','Botswana','BW'),
        //     ('BVT','Bouvet Island','BV'),
        //     ('BRA','Brazil','BR'),
        //     ('IOT','British Indian Ocean Territory','IO'),
        //     ('VGB','British Virgin Islands','VG'),
        //     ('BRN','Brunei','BN'),
        //     ('BGR','Bulgaria','BG'),
        //     ('BFA','Burkina Faso','BF'),
        //     ('BDI','Burundi','BI'),
        //     ('KHM','Cambodia','KH'),
        //     ('CMR','Cameroon','CM'),
        //     ('CAN','Canada','CA'),
        //     ('CPV','Cape Verde','CV'),
        //     ('CYM','Cayman Islands','KY'),
        //     ('CAF','Central African Republic','CF'),
        //     ('TCD','Chad','TD'),
        //     ('CHL','Chile','CL'),
        //     ('CHN','China','CN'),
        //     ('CXR','Christmas Island','CX'),
        //     ('CCK','Cocos [Keeling] Islands','CC'),
        //     ('COL','Colombia','CO'),
        //     ('COM','Comoros','KM'),
        //     ('COK','Cook Islands','CK'),
        //     ('CRI','Costa Rica','CR'),
        //     ('HRV','Croatia','HR'),
        //     ('CUB','Cuba','CU'),
        //     ('CUW','Curacao','CW'),
        //     ('CYP','Cyprus','CY'),
        //     ('CZE','Czech Republic','CZ'),
        //     ('COD','Democratic Republic of the Congo','CD'),
        //     ('DNK','Denmark','DK'),
        //     ('DJI','Djibouti','DJ'),
        //     ('DMA','Dominica','DM'),
        //     ('DOM','Dominican Republic','DO'),
        //     ('TLS','East Timor','TL'),
        //     ('ECU','Ecuador','EC'),
        //     ('EGY','Egypt','EG'),
        //     ('SLV','El Salvador','SV'),
        //     ('GNQ','Equatorial Guinea','GQ'),
        //     ('ERI','Eritrea','ER'),
        //     ('EST','Estonia','EE'),
        //     ('ETH','Ethiopia','ET'),
        //     ('FLK','Falkland Islands','FK'),
        //     ('FRO','Faroe Islands','FO'),
        //     ('FJI','Fiji','FJ'),
        //     ('FIN','Finland','FI'),
        //     ('FRA','France','FR'),
        //     ('GUF','French Guiana','GF'),
        //     ('PYF','French Polynesia','PF'),
        //     ('ATF','French Southern Territories','TF'),
        //     ('GAB','Gabon','GA'),
        //     ('GMB','Gambia','GM'),
        //     ('GEO','Georgia','GE'),
        //     ('DEU','Germany','DE'),
        //     ('GHA','Ghana','GH'),
        //     ('GIB','Gibraltar','GI'),
        //     ('GRC','Greece','GR'),
        //     ('GRL','Greenland','GL'),
        //     ('GRD','Grenada','GD'),
        //     ('GLP','Guadeloupe','GP'),
        //     ('GUM','Guam','GU'),
        //     ('GTM','Guatemala','GT'),
        //     ('GGY','Guernsey','GG'),
        //     ('GIN','Guinea','GN'),
        //     ('GNB','Guinea-Bissau','GW'),
        //     ('GUY','Guyana','GY'),
        //     ('HTI','Haiti','HT'),
        //     ('HMD','Heard Island and McDonald Islands','HM'),
        //     ('HND','Honduras','HN'),
        //     ('HKG','Hong Kong','HK'),
        //     ('HUN','Hungary','HU'),
        //     ('ISL','Iceland','IS'),
        //     ('IND','India','IN'),
        //     ('IDN','Indonesia','ID'),
        //     ('IRN','Iran','IR'),
        //     ('IRQ','Iraq','IQ'),
        //     ('IRL','Ireland','IE'),
        //     ('IMN','Isle of Man','IM'),
        //     ('ISR','Israel','IL'),
        //     ('ITA','Italy','IT'),
        //     ('CIV','Ivory Coast','CI'),
        //     ('JAM','Jamaica','JM'),
        //     ('JPN','Japan','JP'),
        //     ('JEY','Jersey','JE'),
        //     ('JOR','Jordan','JO'),
        //     ('KAZ','Kazakhstan','KZ'),
        //     ('KEN','Kenya','KE'),
        //     ('KIR','Kiribati','KI'),
        //     ('XKX','Kosovo','XK'),
        //     ('KWT','Kuwait','KW'),
        //     ('KGZ','Kyrgyzstan','KG'),
        //     ('LAO','Laos','LA'),
        //     ('LVA','Latvia','LV'),
        //     ('LBN','Lebanon','LB'),
        //     ('LSO','Lesotho','LS'),
        //     ('LBR','Liberia','LR'),
        //     ('LBY','Libya','LY'),
        //     ('LIE','Liechtenstein','LI'),
        //     ('LTU','Lithuania','LT'),
        //     ('LUX','Luxembourg','LU'),
        //     ('MAC','Macao','MO'),
        //     ('MKD','Macedonia','MK'),
        //     ('MDG','Madagascar','MG'),
        //     ('MWI','Malawi','MW'),
        //     ('MYS','Malaysia','MY'),
        //     ('MDV','Maldives','MV'),
        //     ('MLI','Mali','ML'),
        //     ('MLT','Malta','MT'),
        //     ('MHL','Marshall Islands','MH'),
        //     ('MTQ','Martinique','MQ'),
        //     ('MRT','Mauritania','MR'),
        //     ('MUS','Mauritius','MU'),
        //     ('MYT','Mayotte','YT'),
        //     ('MEX','Mexico','MX'),
        //     ('FSM','Micronesia','FM'),
        //     ('MDA','Moldova','MD'),
        //     ('MCO','Monaco','MC'),
        //     ('MNG','Mongolia','MN'),
        //     ('MNE','Montenegro','ME'),
        //     ('MSR','Montserrat','MS'),
        //     ('MAR','Morocco','MA'),
        //     ('MOZ','Mozambique','MZ'),
        //     ('MMR','Myanmar [Burma]','MM'),
        //     ('NAM','Namibia','NA'),
        //     ('NRU','Nauru','NR'),
        //     ('NPL','Nepal','NP'),
        //     ('NLD','Netherlands','NL'),
        //     ('NCL','New Caledonia','NC'),
        //     ('NZL','New Zealand','NZ'),
        //     ('NIC','Nicaragua','NI'),
        //     ('NER','Niger','NE'),
        //     ('NGA','Nigeria','NG'),
        //     ('NIU','Niue','NU'),
        //     ('NFK','Norfolk Island','NF'),
        //     ('PRK','North Korea','KP'),
        //     ('MNP','Northern Mariana Islands','MP'),
        //     ('NOR','Norway','NO'),
        //     ('OMN','Oman','OM'),
        //     ('PAK','Pakistan','PK'),
        //     ('PLW','Palau','PW'),
        //     ('PSE','Palestine','PS'),
        //     ('PAN','Panama','PA'),
        //     ('PNG','Papua New Guinea','PG'),
        //     ('PRY','Paraguay','PY'),
        //     ('PER','Peru','PE'),
        //     ('PHL','Philippines','PH'),
        //     ('PCN','Pitcairn Islands','PN'),
        //     ('POL','Poland','PL'),
        //     ('PRT','Portugal','PT'),
        //     ('PRI','Puerto Rico','PR'),
        //     ('QAT','Qatar','QA'),
        //     ('COG','Republic of the Congo','CG'),
        //     ('REU','Réunion','RE'),
        //     ('ROU','Romania','RO'),
        //     ('RUS','Russia','RU'),
        //     ('RWA','Rwanda','RW'),
        //     ('BLM','Saint Barthélemy','BL'),
        //     ('SHN','Saint Helena','SH'),
        //     ('KNA','Saint Kitts and Nevis','KN'),
        //     ('LCA','Saint Lucia','LC'),
        //     ('MAF','Saint Martin','MF'),
        //     ('SPM','Saint Pierre and Miquelon','PM'),
        //     ('VCT','Saint Vincent and the Grenadines','VC'),
        //     ('WSM','Samoa','WS'),
        //     ('SMR','San Marino','SM'),
        //     ('STP','São Tomé and Príncipe','ST'),
        //     ('SAU','Saudi Arabia','SA'),
        //     ('SEN','Senegal','SN'),
        //     ('SRB','Serbia','RS'),
        //     ('SYC','Seychelles','SC'),
        //     ('SLE','Sierra Leone','SL'),
        //     ('SGP','Singapore','SG'),
        //     ('SXM','Sint Maarten','SX'),
        //     ('SVK','Slovakia','SK'),
        //     ('SVN','Slovenia','SI'),
        //     ('SLB','Solomon Islands','SB'),
        //     ('SOM','Somalia','SO'),
        //     ('ZAF','South Africa','ZA'),
        //     ('SGS','South Georgia and the South Sandwich Islands','GS'),
        //     ('KOR','South Korea','KR'),
        //     ('SSD','South Sudan','SS'),
        //     ('ESP','Spain','ES'),
        //     ('LKA','Sri Lanka','LK'),
        //     ('SDN','Sudan','SD'),
        //     ('SUR','Suriname','SR'),
        //     ('SJM','Svalbard and Jan Mayen','SJ'),
        //     ('SWZ','Swaziland','SZ'),
        //     ('SWE','Sweden','SE'),
        //     ('CHE','Switzerland','CH'),
        //     ('SYR','Syria','SY'),
        //     ('TWN','Taiwan','TW'),
        //     ('TJK','Tajikistan','TJ'),
        //     ('TZA','Tanzania','TZ'),
        //     ('THA','Thailand','TH'),
        //     ('TGO','Togo','TG'),
        //     ('TKL','Tokelau','TK'),
        //     ('TON','Tonga','TO'),
        //     ('TTO','Trinidad and Tobago','TT'),
        //     ('TUN','Tunisia','TN'),
        //     ('TUR','Turkey','TR'),
        //     ('TKM','Turkmenistan','TM'),
        //     ('TCA','Turks and Caicos Islands','TC'),
        //     ('TUV','Tuvalu','TV'),
        //     ('UMI','U.S. Minor Outlying Islands','UM'),
        //     ('VIR','U.S. Virgin Islands','VI'),
        //     ('UGA','Uganda','UG'),
        //     ('UKR','Ukraine','UA'),
        //     ('ARE','United Arab Emirates','AE'),
        //     ('GBR','United Kingdom','GB'),
        //     ('USA','United States','US'),
        //     ('URY','Uruguay','UY'),
        //     ('UZB','Uzbekistan','UZ'),
        //     ('VUT','Vanuatu','VU'),
        //     ('VAT','Vatican City','VA'),
        //     ('VEN','Venezuela','VE'),
        //     ('VNM','Vietnam','VN'),
        //     ('WLF','Wallis and Futuna','WF'),
        //     ('ESH','Western Sahara','EH'),
        //     ('YEM','Yemen','YE'),
        //     ('ZMB','Zambia','ZM'),
        //     ('ZWE','Zimbabwe','ZW');

        $data = [
            [
                'country_code' => 'AFG',
                'country_name' => 'Afghanistan',
                'country_iso' => 'AF'
            ],
            [
                'country_code' => 'ALA',
                'country_name' => 'Aland Islands',
                'country_iso' => 'AX'
            ],
            [
                'country_code' => 'ALB',
                'country_name' => 'Albania',
                'country_iso' => 'AL'
            ],
            [
                'country_code' => 'DZA',
                'country_name' => 'Algeria',
                'country_iso' => 'DZ'
            ],
            [
                'country_code' => 'ASM',
                'country_name' => 'American Samoa',
                'country_iso' => 'AS'
            ],
            [
                'country_code' => 'AND',
                'country_name' => 'Andorra',
                'country_iso' => 'AD'
            ],
            [
                'country_code' => 'AGO',
                'country_name' => 'Angola',
                'country_iso' => 'AO'
            ],
            [
                'country_code' => 'AIA',
                'country_name' => 'Anguilla',
                'country_iso' => 'AI'
            ],
            [
                'country_code' => 'ATA',
                'country_name' => 'Antarctica',
                'country_iso' => 'AQ'
            ],
            [
                'country_code' => 'ATG',
                'country_name' => 'Antigua and Barbuda',
                'country_iso' => 'AG'
            ],
            [
                'country_code' => 'ARG',
                'country_name' => 'Argentina',
                'country_iso' => 'AR'
            ],
            [
                'country_code' => 'ARM',
                'country_name' => 'Armenia',
                'country_iso' => 'AM'
            ],
            [
                'country_code' => 'ABW',
                'country_name' => 'Aruba',
                'country_iso' => 'AW'
            ],
            [
                'country_code' => 'AUS',
                'country_name' => 'Australia',
                'country_iso' => 'AU'
            ],
            [
                'country_code' => 'AUT',
                'country_name' => 'Austria',
                'country_iso' => 'AT'
            ],
            [
                'country_code' => 'AZE',
                'country_name' => 'Azerbaijan',
                'country_iso' => 'AZ'
            ],
            [
                'country_code' => 'BHS',
                'country_name' => 'Bahamas',
                'country_iso' => 'BS'
            ],
            [
                'country_code' => 'BHR',
                'country_name' => 'Bahrain',
                'country_iso' => 'BH'
            ],
            [
                'country_code' => 'BGD',
                'country_name' => 'Bangladesh',
                'country_iso' => 'BD'
            ],
            [
                'country_code' => 'BRB',
                'country_name' => 'Barbados',
                'country_iso' => 'BB'
            ],
            [
                'country_code' => 'BLR',
                'country_name' => 'Belarus',
                'country_iso' => 'BY'
            ],
            [
                'country_code' => 'BEL',
                'country_name' => 'Belgium',
                'country_iso' => 'BE'
            ],
            [
                'country_code' => 'BLZ',
                'country_name' => 'Belize',
                'country_iso' => 'BZ'
            ],
            [
                'country_code' => 'BEN',
                'country_name' => 'Benin',
                'country_iso' => 'BJ'
            ],
            [
                'country_code' => 'BMU',
                'country_name' => 'Bermuda',
                'country_iso' => 'BM'
            ],
            [
                'country_code' => 'BTN',
                'country_name' => 'Bhutan',
                'country_iso' => 'BT'
            ],
            [
                'country_code' => 'BOL',
                'country_name' => 'Bolivia',
                'country_iso' => 'BO'
            ],
            [
                'country_code' => 'BIH',
                'country_name' => 'Bosnia and Herzegovina',
                'country_iso' => 'BA'
            ],
            [
                'country_code' => 'BWA',
                'country_name' => 'Botswana',
                'country_iso' => 'BW'
            ],
            [
                'country_code' => 'BVT',
                'country_name' => 'Bouvet Island',
                'country_iso' => 'BV'
            ],
            [
                'country_code' => 'BRA',
                'country_name' => 'Brazil',
                'country_iso' => 'BR'
            ],
            [
                'country_code' => 'IOT',
                'country_name' => 'British Indian Ocean Territory',
                'country_iso' => 'IO'
            ],
            [
                'country_code' => 'VGB',
                'country_name' => 'British Virgin Islands',
                'country_iso' => 'VG'
            ],
            [
                'country_code' => 'BRN',
                'country_name' => 'Brunei Darussalam',
                'country_iso' => 'BN'
            ],
            [
                'country_code' => 'BGR',
                'country_name' => 'Bulgaria',
                'country_iso' => 'BG'
            ],
            [
                'country_code' => 'BFA',
                'country_name' => 'Burkina Faso',
                'country_iso' => 'BF'
            ],
            [
                'country_code' => 'BDI',
                'country_name' => 'Burundi',
                'country_iso' => 'BI'
            ],
            [
                'country_code' => 'KHM',
                'country_name' => 'Cambodia',
                'country_iso' => 'KH'
            ],
            [
                'country_code' => 'CMR',
                'country_name' => 'Cameroon',
                'country_iso' => 'CM'
            ],
            [
                'country_code' => 'CAN',
                'country_name' => 'Canada',
                'country_iso' => 'CA'
            ],
            [
                'country_code' => 'CPV',
                'country_name' => 'Cape Verde',
                'country_iso' => 'CV'
            ],
            [
                'country_code' => 'CYM',
                'country_name' => 'Cayman Islands',
                'country_iso' => 'KY'
            ],
            [
                'country_code' => 'CAF',
                'country_name' => 'Central African Republic',
                'country_iso' => 'CF'
            ],
            [
                'country_code' => 'TCD',
                'country_name' => 'Chad',
                'country_iso' => 'TD'
            ],
            [
                'country_code' => 'CHL',
                'country_name' => 'Chile',
                'country_iso' => 'CL'
            ],
            [
                'country_code' => 'CHN',
                'country_name' => 'China',
                'country_iso' => 'CN'
            ],
            [
                'country_code' => 'CXR',
                'country_name' => 'Christmas Island',
                'country_iso' => 'CX'
            ],
            [
                'country_code' => 'CCK',
                'country_name' => 'Cocos (Keeling) Islands',
                'country_iso' => 'CC'
            ],
            [
                'country_code' => 'COL',
                'country_name' => 'Colombia',
                'country_iso' => 'CO'
            ],
            [
                'country_code' => 'COM',
                'country_name' => 'Comoros',
                'country_iso' => 'KM'
            ],
            [
                'country_code' => 'COG',
                'country_name' => 'Congo',
                'country_iso' => 'CG'
            ],
            [
                'country_code' => 'COK',
                'country_name' => 'Cook Islands',
                'country_iso' => 'CK'
            ],
            [
                'country_code' => 'CRI',
                'country_name' => 'Costa Rica',
                'country_iso' => 'CR'
            ],
            [
                'country_code' => 'HRV',
                'country_name' => 'Croatia',
                'country_iso' => 'HR'
            ],
            [
                'country_code' => 'CUB',
                'country_name' => 'Cuba',
                'country_iso' => 'CU'
            ],
            [
                'country_code' => 'CYP',
                'country_name' => 'Cyprus',
                'country_iso' => 'CY'
            ],
            [
                'country_code' => 'CZE',
                'country_name' => 'Czech Republic',
                'country_iso' => 'CZ'
            ],
            [
                'country_code' => 'DNK',
                'country_name' => 'Denmark',
                'country_iso' => 'DK'
            ],
            [
                'country_code' => 'DJI',
                'country_name' => 'Djibouti',
                'country_iso' => 'DJ'
            ],
            [
                'country_code' => 'DMA',
                'country_name' => 'Dominica',
                'country_iso' => 'DM'
            ],
            [
                'country_code' => 'DOM',
                'country_name' => 'Dominican Republic',
                'country_iso' => 'DO'
            ],
            [
                'country_code' => 'ECU',
                'country_name' => 'Ecuador',
                'country_iso' => 'EC'
            ],
            [
                'country_code' => 'EGY',
                'country_name' => 'Egypt',
                'country_iso' => 'EG'
            ],
            [
                'country_code' => 'SLV',
                'country_name' => 'El Salvador',
                'country_iso' => 'SV'
            ],
            [
                'country_code' => 'GNQ',
                'country_name' => 'Equatorial Guinea',
                'country_iso' => 'GQ'
            ],
            [
                'country_code' => 'ERI',
                'country_name' => 'Eritrea',
                'country_iso' => 'ER'
            ],
            [
                'country_code' => 'EST',
                'country_name' => 'Estonia',
                'country_iso' => 'EE'
            ],
            [
                'country_code' => 'ETH',
                'country_name' => 'Ethiopia',
                'country_iso' => 'ET'
            ],
            [
                'country_code' => 'FLK',
                'country_name' => 'Falkland Islands (Malvinas)',
                'country_iso' => 'FK'
            ],
            [
                'country_code' => 'FRO',
                'country_name' => 'Faroe Islands',
                'country_iso' => 'FO'
            ],
            [
                'country_code' => 'FJI',
                'country_name' => 'Fiji',
                'country_iso' => 'FJ'
            ],
            [
                'country_code' => 'FIN',
                'country_name' => 'Finland',
                'country_iso' => 'FI'
            ],
            [
                'country_code' => 'FRA',
                'country_name' => 'France',
                'country_iso' => 'FR'
            ],
            [
                'country_code' => 'GUF',
                'country_name' => 'French Guiana',
                'country_iso' => 'GF'
            ],
            [
                'country_code' => 'PYF',
                'country_name' => 'French Polynesia',
                'country_iso' => 'PF'
            ],
            [
                'country_code' => 'ATF',
                'country_name' => 'French Southern Territories',
                'country_iso' => 'TF'
            ],
            [
                'country_code' => 'GAB',
                'country_name' => 'Gabon',
                'country_iso' => 'GA'
            ],
            [
                'country_code' => 'GMB',
                'country_name' => 'Gambia',
                'country_iso' => 'GM'
            ],
            [
                'country_code' => 'GEO',
                'country_name' => 'Georgia',
                'country_iso' => 'GE'
            ],
            [
                'country_code' => 'DEU',
                'country_name' => 'Germany',
                'country_iso' => 'DE'
            ],
            [
                'country_code' => 'GHA',
                'country_name' => 'Ghana',
                'country_iso' => 'GH'
            ],
            [
                'country_code' => 'GIB',
                'country_name' => 'Gibraltar',
                'country_iso' => 'GI'
            ],
            [
                'country_code' => 'GRC',
                'country_name' => 'Greece',
                'country_iso' => 'GR'
            ],
            [
                'country_code' => 'GRL',
                'country_name' => 'Greenland',
                'country_iso' => 'GL'
            ],
            [
                'country_code' => 'GRD',
                'country_name' => 'Grenada',
                'country_iso' => 'GD'
            ],
            [
                'country_code' => 'GLP',
                'country_name' => 'Guadeloupe',
                'country_iso' => 'GP'
            ],
            [
                'country_code' => 'GUM',
                'country_name' => 'Guam',
                'country_iso' => 'GU'
            ],
            [
                'country_code' => 'GTM',
                'country_name' => 'Guatemala',
                'country_iso' => 'GT'
            ],
            [
                'country_code' => 'GGY',
                'country_name' => 'Guernsey',
                'country_iso' => 'GG'
            ],
            [
                'country_code' => 'GIN',
                'country_name' => 'Guinea',
                'country_iso' => 'GN'
            ],
            [
                'country_code' => 'GNB',
                'country_name' => 'Guinea-Bissau',
                'country_iso' => 'GW'
            ],
            [
                'country_code' => 'GUY',
                'country_name' => 'Guyana',
                'country_iso' => 'GY'
            ],
            [
                'country_code' => 'HTI',
                'country_name' => 'Haiti',
                'country_iso' => 'HT'
            ],
            [
                'country_code' => 'HMD',
                'country_name' => 'Heard Island and McDonald Islands',
                'country_iso' => 'HM'
            ],
            [
                'country_code' => 'VAT',
                'country_name' => 'Holy See (Vatican City State)',
                'country_iso' => 'VA'
            ],
            [
                'country_code' => 'HND',
                'country_name' => 'Honduras',
                'country_iso' => 'HN'
            ],
            [
                'country_code' => 'HKG',
                'country_name' => 'Hong Kong',
                'country_iso' => 'HK'
            ],
            [
                'country_code' => 'HUN',
                'country_name' => 'Hungary',
                'country_iso' => 'HU'
            ],
            [
                'country_code' => 'ISL',
                'country_name' => 'Iceland',
                'country_iso' => 'IS'
            ],
            [
                'country_code' => 'IND',
                'country_name' => 'India',
                'country_iso' => 'IN'
            ],
            [
                'country_code' => 'IDN',
                'country_name' => 'Indonesia',
                'country_iso' => 'ID'
            ],
            [
                'country_code' => 'IRN',
                'country_name' => 'Iran, Islamic Republic of',
                'country_iso' => 'IR'
            ],
            [
                'country_code' => 'IRQ',
                'country_name' => 'Iraq',
                'country_iso' => 'IQ'
            ],
            [
                'country_code' => 'IRL',
                'country_name' => 'Ireland',
                'country_iso' => 'IE'
            ],
            [
                'country_code' => 'IMN',
                'country_name' => 'Isle of Man',
                'country_iso' => 'IM'
            ],
            [
                'country_code' => 'ISR',
                'country_name' => 'Israel',
                'country_iso' => 'IL'
            ],
            [
                'country_code' => 'ITA',
                'country_name' => 'Italy',
                'country_iso' => 'IT'
            ],
            [
                'country_code' => 'JAM',
                'country_name' => 'Jamaica',
                'country_iso' => 'JM'
            ],
            [
                'country_code' => 'JPN',
                'country_name' => 'Japan',
                'country_iso' => 'JP'
            ],
            [
                'country_code' => 'JEY',
                'country_name' => 'Jersey',
                'country_iso' => 'JE'
            ],
            [
                'country_code' => 'JOR',
                'country_name' => 'Jordan',
                'country_iso' => 'JO'
            ],
            [
                'country_code' => 'KAZ',
                'country_name' => 'Kazakhstan',
                'country_iso' => 'KZ'
            ],
            [
                'country_code' => 'KEN',
                'country_name' => 'Kenya',
                'country_iso' => 'KE'
            ],
            [
                'country_code' => 'KIR',
                'country_name' => 'Kiribati',
                'country_iso' => 'KI'
            ],
            [
                'country_code' => 'PRK',
                'country_name' => 'Korea, Democratic People\'s Republic of',
                'country_iso' => 'KP'
            ],
            [
                'country_code' => 'KOR',
                'country_name' => 'Korea, Republic of',
                'country_iso' => 'KR'
            ],
            [
                'country_code' => 'KWT',
                'country_name' => 'Kuwait',
                'country_iso' => 'KW'
            ],
            [
                'country_code' => 'KGZ',
                'country_name' => 'Kyrgyzstan',
                'country_iso' => 'KG'
            ],
            [
                'country_code' => 'LAO',
                'country_name' => 'Lao People\'s Democratic Republic',
                'country_iso' => 'LA'
            ],
            [
                'country_code' => 'LVA',
                'country_name' => 'Latvia',
                'country_iso' => 'LV'
            ],
            [
                'country_code' => 'LBN',
                'country_name' => 'Lebanon',
                'country_iso' => 'LB'
            ],
            [
                'country_code' => 'LSO',
                'country_name' => 'Lesotho',
                'country_iso' => 'LS'
            ],
            [
                'country_code' => 'LBR',
                'country_name' => 'Liberia',
                'country_iso' => 'LR'
            ],
            [
                'country_code' => 'LBY',
                'country_name' => 'Libya',
                'country_iso' => 'LY'
            ],
            [
                'country_code' => 'LIE',
                'country_name' => 'Liechtenstein',
                'country_iso' => 'LI'
            ],
            [
                'country_code' => 'LTU',
                'country_name' => 'Lithuania',
                'country_iso' => 'LT'
            ],
            [
                'country_code' => 'LUX',
                'country_name' => 'Luxembourg',
                'country_iso' => 'LU'
            ],
            [
                'country_code' => 'MAC',
                'country_name' => 'Macao',
                'country_iso' => 'MO'
            ],
            [
                'country_code' => 'MKD',
                'country_name' => 'Macedonia, the former Yugoslav Republic of',
                'country_iso' => 'MK'
            ],
            [
                'country_code' => 'MDG',
                'country_name' => 'Madagascar',
                'country_iso' => 'MG'
            ],
            [
                'country_code' => 'MWI',
                'country_name' => 'Malawi',
                'country_iso' => 'MW'
            ],
            [
                'country_code' => 'MYS',
                'country_name' => 'Malaysia',
                'country_iso' => 'MY'
            ],
            [
                'country_code' => 'MDV',
                'country_name' => 'Maldives',
                'country_iso' => 'MV'
            ],
            [
                'country_code' => 'MLI',
                'country_name' => 'Mali',
                'country_iso' => 'ML'
            ],
            [
                'country_code' => 'MLT',
                'country_name' => 'Malta',
                'country_iso' => 'MT'
            ],
            [
                'country_code' => 'MHL',
                'country_name' => 'Marshall Islands',
                'country_iso' => 'MH'
            ],
            [
                'country_code' => 'MTQ',
                'country_name' => 'Martinique',
                'country_iso' => 'MQ'
            ],
            [
                'country_code' => 'MRT',
                'country_name' => 'Mauritania',
                'country_iso' => 'MR'
            ],
            [
                'country_code' => 'MUS',
                'country_name' => 'Mauritius',
                'country_iso' => 'MU'
            ],
            [
                'country_code' => 'MYT',
                'country_name' => 'Mayotte',
                'country_iso' => 'YT'
            ],
            [
                'country_code' => 'MEX',
                'country_name' => 'Mexico',
                'country_iso' => 'MX'
            ],
            [
                'country_code' => 'FSM',
                'country_name' => 'Micronesia, Federated States of',
                'country_iso' => 'FM'
            ],
            [
                'country_code' => 'MDA',
                'country_name' => 'Moldova, Republic of',
                'country_iso' => 'MD'
            ],
            [
                'country_code' => 'MCO',
                'country_name' => 'Monaco',
                'country_iso' => 'MC'
            ],
            [
                'country_code' => 'MNG',
                'country_name' => 'Mongolia',
                'country_iso' => 'MN'
            ],
            [
                'country_code' => 'MNE',
                'country_name' => 'Montenegro',
                'country_iso' => 'ME'
            ],
            [
                'country_code' => 'MSR',
                'country_name' => 'Montserrat',
                'country_iso' => 'MS'
            ],
            [
                'country_code' => 'MAR',
                'country_name' => 'Morocco',
                'country_iso' => 'MA'
            ],
            [
                'country_code' => 'MOZ',
                'country_name' => 'Mozambique',
                'country_iso' => 'MZ'
            ],
            [
                'country_code' => 'MMR',
                'country_name' => 'Myanmar',
                'country_iso' => 'MM'
            ],
            [
                'country_code' => 'NAM',
                'country_name' => 'Namibia',
                'country_iso' => 'NA'
            ],
            [
                'country_code' => 'NRU',
                'country_name' => 'Nauru',
                'country_iso' => 'NR'
            ],
            [
                'country_code' => 'NPL',
                'country_name' => 'Nepal',
                'country_iso' => 'NP'
            ],
            [
                'country_code' => 'NLD',
                'country_name' => 'Netherlands',
                'country_iso' => 'NL'
            ],
            [
                'country_code' => 'NCL',
                'country_name' => 'New Caledonia',
                'country_iso' => 'NC'
            ],
            [
                'country_code' => 'NZL',
                'country_name' => 'New Zealand',
                'country_iso' => 'NZ'
            ],
            [
                'country_code' => 'NIC',
                'country_name' => 'Nicaragua',
                'country_iso' => 'NI'
            ],
            [
                'country_code' => 'NER',
                'country_name' => 'Niger',
                'country_iso' => 'NE'
            ],
            [
                'country_code' => 'NGA',
                'country_name' => 'Nigeria',
                'country_iso' => 'NG'
            ],
            [
                'country_code' => 'NIU',
                'country_name' => 'Niue',
                'country_iso' => 'NU'
            ],
            [
                'country_code' => 'NFK',
                'country_name' => 'Norfolk Island',
                'country_iso' => 'NF'
            ],
            [
                'country_code' => 'MNP',
                'country_name' => 'Northern Mariana Islands',
                'country_iso' => 'MP'
            ],
            [
                'country_code' => 'NOR',
                'country_name' => 'Norway',
                'country_iso' => 'NO'
            ],
            [
                'country_code' => 'OMN',
                'country_name' => 'Oman',
                'country_iso' => 'OM'
            ],
            [
                'country_code' => 'PAK',
                'country_name' => 'Pakistan',
                'country_iso' => 'PK'
            ],
            [
                'country_code' => 'PLW',
                'country_name' => 'Palau',
                'country_iso' => 'PW'
            ],
            [
                'country_code' => 'PSE',
                'country_name' => 'Palestinian Territory, Occupied',
                'country_iso' => 'PS'
            ],
            [
                'country_code' => 'PAN',
                'country_name' => 'Panama',
                'country_iso' => 'PA'
            ],
            [
                'country_code' => 'PNG',
                'country_name' => 'Papua New Guinea',
                'country_iso' => 'PG'
            ],
            [
                'country_code' => 'PRY',
                'country_name' => 'Paraguay',
                'country_iso' => 'PY'
            ],
            [
                'country_code' => 'PER',
                'country_name' => 'Peru',
                'country_iso' => 'PE'
            ],
            [
                'country_code' => 'PHL',
                'country_name' => 'Philippines',
                'country_iso' => 'PH'
            ],
            [
                'country_code' => 'PCN',
                'country_name' => 'Pitcairn',
                'country_iso' => 'PN'
            ],
            [
                'country_code' => 'POL',
                'country_name' => 'Poland',
                'country_iso' => 'PL'
            ],
            [
                'country_code' => 'PRT',
                'country_name' => 'Portugal',
                'country_iso' => 'PT'
            ],
            [
                'country_code' => 'PRI',
                'country_name' => 'Puerto Rico',
                'country_iso' => 'PR'
            ],
            [
                'country_code' => 'QAT',
                'country_name' => 'Qatar',
                'country_iso' => 'QA'
            ],
            [
                'country_code' => 'REU',
                'country_name' => 'Reunion',
                'country_iso' => 'RE'
            ],
            [
                'country_code' => 'ROU',
                'country_name' => 'Romania',
                'country_iso' => 'RO'
            ],
            [
                'country_code' => 'RUS',
                'country_name' => 'Russian',
                'country_iso' => 'RU'
            ],
            [
                'country_code' => 'RWA',
                'country_name' => 'Rwanda',
                'country_iso' => 'RW'
            ],
            [
                'country_code' => 'BLM',
                'country_name' => 'Saint Barthelemy',
                'country_iso' => 'BL'
            ],
            [
                'country_code' => 'SHN',
                'country_name' => 'Saint Helena',
                'country_iso' => 'SH'
            ],
            [
                'country_code' => 'KNA',
                'country_name' => 'Saint Kitts and Nevis',
                'country_iso' => 'KN'
            ],
            [
                'country_code' => 'LCA',
                'country_name' => 'Saint Lucia',
                'country_iso' => 'LC'
            ],
            [
                'country_code' => 'MAF',
                'country_name' => 'Saint Martin',
                'country_iso' => 'MF'
            ],
            [
                'country_code' => 'SPM',
                'country_name' => 'Saint Pierre and Miquelon',
                'country_iso' => 'PM'
            ],
            [
                'country_code' => 'VCT',
                'country_name' => 'Saint Vincent and the Grenadines',
                'country_iso' => 'VC'
            ],
            [
                'country_code' => 'WSM',
                'country_name' => 'Samoa',
                'country_iso' => 'WS'
            ],
            [
                'country_code' => 'SMR',
                'country_name' => 'San Marino',
                'country_iso' => 'SM'
            ],
            [
                'country_code' => 'STP',
                'country_name' => 'Sao Tome and Principe',
                'country_iso' => 'ST'
            ],
            [
                'country_code' => 'SAU',
                'country_name' => 'Saudi Arabia',
                'country_iso' => 'SA'
            ],
            [
                'country_code' => 'SEN',
                'country_name' => 'Senegal',
                'country_iso' => 'SN'
            ],
            [
                'country_code' => 'SRB',
                'country_name' => 'Serbia',
                'country_iso' => 'RS'
            ],
            [
                'country_code' => 'SYC',
                'country_name' => 'Seychelles',
                'country_iso' => 'SC'
            ],
            [
                'country_code' => 'SLE',
                'country_name' => 'Sierra Leone',
                'country_iso' => 'SL'
            ],
            [
                'country_code' => 'SGP',
                'country_name' => 'Singapore',
                'country_iso' => 'SG'
            ],
            [
                'country_code' => 'SXM',
                'country_name' => 'Sint Maarten',
                'country_iso' => 'SX'
            ],
            [
                'country_code' => 'SVK',
                'country_name' => 'Slovakia',
                'country_iso' => 'SK'
            ],
            [
                'country_code' => 'SVN',
                'country_name' => 'Slovenia',
                'country_iso' => 'SI'
            ],
            [
                'country_code' => 'SLB',
                'country_name' => 'Solomon Islands',
                'country_iso' => 'SB'
            ],
            [
                'country_code' => 'SOM',
                'country_name' => 'Somalia',
                'country_iso' => 'SO'
            ],
            [
                'country_code' => 'ZAF',
                'country_name' => 'South Africa',
                'country_iso' => 'ZA'
            ],
            [
                'country_code' => 'SGS',
                'country_name' => 'South Georgia and the South Sandwich Islands',
                'country_iso' => 'GS'
            ],
            [
                'country_code' => 'SSD',
                'country_name' => 'South Sudan',
                'country_iso' => 'SS'
            ],
            [
                'country_code' => 'ESP',
                'country_name' => 'Spain',
                'country_iso' => 'ES'
            ],
            [
                'country_code' => 'LKA',
                'country_name' => 'Sri Lanka',
                'country_iso' => 'LK'
            ],
            [
                'country_code' => 'SDN',
                'country_name' => 'Sudan',
                'country_iso' => 'SD'
            ],
            [
                'country_code' => 'SWE',
                'country_name' => 'Sweden',
                'country_iso' => 'SE'
            ],
            [
                'country_code' => 'CHE',
                'country_name' => 'Switzerland',
                'country_iso' => 'CH'
            ],
            [
                'country_code' => 'SYR',
                'country_name' => 'Syria',
                'country_iso' => 'SY'
            ],
            [
                'country_code' => 'TWN',
                'country_name' => 'Taiwan',
                'country_iso' => 'TW'
            ],
            [
                'country_code' => 'TJK',
                'country_name' => 'Tajikistan',
                'country_iso' => 'TJ'
            ],
            [
                'country_code' => 'TZA',
                'country_name' => 'Tanzania',
                'country_iso' => 'TZ'
            ],
            [
                'country_code' => 'THA',
                'country_name' => 'Thailand',
                'country_iso' => 'TH'
            ],
            [
                'country_code' => 'TLS',
                'country_name' => 'Timor-Leste',
                'country_iso' => 'TL'
            ],
            [
                'country_code' => 'TGO',
                'country_name' => 'Togo',
                'country_iso' => 'TG'
            ],
            [
                'country_code' => 'TKL',
                'country_name' => 'Tokelau',
                'country_iso' => 'TK'
            ],
            [
                'country_code' => 'TON',
                'country_name' => 'Tonga',
                'country_iso' => 'TO'
            ],
            [
                'country_code' => 'TTO',
                'country_name' => 'Trinidad and Tobago',
                'country_iso' => 'TT'
            ],
            [
                'country_code' => 'TUN',
                'country_name' => 'Tunisia',
                'country_iso' => 'TN'
            ],
            [
                'country_code' => 'TUR',
                'country_name' => 'Turkey',
                'country_iso' => 'TR'
            ],
            [
                'country_code' => 'TKM',
                'country_name' => 'Turkmenistan',
                'country_iso' => 'TM'
            ],
            [
                'country_code' => 'TCA',
                'country_name' => 'Turks and Caicos Islands',
                'country_iso' => 'TC'
            ],
            [
                'country_code' => 'TUV',
                'country_name' => 'Tuvalu',
                'country_iso' => 'TV'
            ],
            [
                'country_code' => 'UGA',
                'country_name' => 'Uganda',
                'country_iso' => 'UG'
            ],
            [
                'country_code' => 'UKR',
                'country_name' => 'Ukraine',
                'country_iso' => 'UA'
            ],
            [
                'country_code' => 'ARE',
                'country_name' => 'United Arab Emirates',
                'country_iso' => 'AE'
            ],
            [
                'country_code' => 'GBR',
                'country_name' => 'United Kingdom',
                'country_iso' => 'GB'
            ],
            [
                'country_code' => 'USA',
                'country_name' => 'United States',
                'country_iso' => 'US'
            ],
            [
                'country_code' => 'UMI',
                'country_name' => 'United States Minor Outlying Islands',
                'country_iso' => 'UM'
            ],
            [
                'country_code' => 'URY',
                'country_name' => 'Uruguay',
                'country_iso' => 'UY'
            ],
            [
                'country_code' => 'UZB',
                'country_name' => 'Uzbekistan',
                'country_iso' => 'UZ'
            ],
            [
                'country_code' => 'VUT',
                'country_name' => 'Vanuatu',
                'country_iso' => 'VU'
            ],
            [
                'country_code' => 'VEN',
                'country_name' => 'Venezuela',
                'country_iso' => 'VE'
            ],
            [
                'country_code' => 'VNM',
                'country_name' => 'Vietnam',
                'country_iso' => 'VN'
            ],
            [
                'country_code' => 'VGB',
                'country_name' => 'Virgin Islands, British',
                'country_iso' => 'VG'
            ],
            [
                'country_code' => 'VIR',
                'country_name' => 'Virgin Islands, U.S.',
                'country_iso' => 'VI'
            ],
            [
                'country_code' => 'WLF',
                'country_name' => 'Wallis and Futuna',
                'country_iso' => 'WF'
            ],
            [
                'country_code' => 'ESH',
                'country_name' => 'Western Sahara',
                'country_iso' => 'EH'
            ],
            [
                'country_code' => 'YEM',
                'country_name' => 'Yemen',
                'country_iso' => 'YE'
            ],
            [
                'country_code' => 'ZMB',
                'country_name' => 'Zambia',
                'country_iso' => 'ZM'
            ],
            [
                'country_code' => 'ZWE',
                'country_name' => 'Zimbabwe',
                'country_iso' => 'ZW'
            ],
        ];

        foreach ($data as $item) {
            \App\Models\Country::updateOrCreate(
                [
                    'country_code' => $item['country_code']
                ],
                $item
            );
        }
    }
}
