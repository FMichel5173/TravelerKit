const countriesData = [
  {
    name: "Afghanistan",
    code: "AF",
    language: {
      code: "ps",
      name: "Pashto",
    },
  },
  {
    name: "Åland Islands",
    code: "AX",
    language: {
      code: "sv",
      name: "Swedish",
    },
  },
  {
    name: "Albania",
    code: "AL",
    language: {
      code: "sq",
      name: "Albanian",
    },
  },
  {
    name: "Algeria",
    code: "DZ",
    language: {
      code: "ar",
      name: "Arabic",
    },
  },
  {
    name: "American Samoa",
    code: "AS",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Andorra",
    code: "AD",
    language: {
      code: "ca",
      name: "Catalan",
    },
  },
  {
    name: "Angola",
    code: "AO",
    language: {
      code: "pt",
      name: "Portuguese",
    },
  },
  {
    name: "Anguilla",
    code: "AI",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Antigua and Barbuda",
    code: "AG",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Argentina",
    code: "AR",
    language: {
      code: "es",
      name: "Spanish",
    },
  },
  {
    name: "Armenia",
    code: "AM",
    language: {
      code: "hy",
      name: "Armenian",
    },
  },
  {
    name: "Aruba",
    code: "AW",
    language: {
      code: "nl",
      name: "Dutch",
    },
  },
  {
    name: "Australia",
    code: "AU",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Austria",
    code: "AT",
    language: {
      code: "de",
      name: "German",
    },
  },
  {
    name: "Azerbaijan",
    code: "AZ",
    language: {
      code: "az",
      name: "Azerbaijani",
    },
  },
  {
    name: "Bahamas",
    code: "BS",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Bahrain",
    code: "BH",
    language: {
      code: "ar",
      name: "Arabic",
    },
  },
  {
    name: "Bangladesh",
    code: "BD",
    language: {
      code: "bn",
      name: "Bengali",
    },
  },
  {
    name: "Barbados",
    code: "BB",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Belarus",
    code: "BY",
    language: {
      code: "be",
      name: "Belarusian",
    },
  },
  {
    name: "Belgium",
    code: "BE",
    language: {
      code: "nl",
      name: "Dutch",
    },
  },
  {
    name: "Belize",
    code: "BZ",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Benin",
    code: "BJ",
    language: {
      code: "fr",
      name: "French",
    },
  },
  {
    name: "Bermuda",
    code: "BM",
    capital: "Hamilton",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Bhutan",
    code: "BT",
    language: {
      code: "dz",
      name: "Dzongkha",
    },
  },
  {
    name: "Bolivia (Plurinational State of)",
    code: "BO",
    language: {
      code: "es",
      name: "Spanish",
    },
  },
  {
    name: "Bonaire, Sint Eustatius and Saba",
    code: "BQ",
    language: {
      code: "nl",
      name: "Dutch",
    },
  },
  {
    name: "Bosnia and Herzegovina",
    code: "BA",
    language: {
      code: "bs",
      name: "Bosnian",
    },
  },
  {
    name: "Botswana",
    code: "BW",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Bouvet Island",
    code: "BV",
    language: {
      code: "no",
      name: "Norwegian",
    },
  },
  {
    name: "Brazil",
    code: "BR",
    language: {
      code: "pt",
      name: "Portuguese",
    },
  },
  {
    name: "British Indian Ocean Territory",
    code: "IO",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "United States Minor Outlying Islands",
    code: "UM",
    capital: "",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Virgin Islands (British)",
    code: "VG",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Virgin Islands (U.S.)",
    code: "VI",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Brunei Darussalam",
    code: "BN",
    language: {
      code: "ms",
      name: "Malay",
    },
  },
  {
    name: "Bulgaria",
    code: "BG",
    language: {
      code: "bg",
      name: "Bulgarian",
    },
  },
  {
    name: "Burkina Faso",
    code: "BF",
    language: {
      code: "fr",
      name: "French",
    },
  },
  {
    name: "Burundi",
    code: "BI",
    language: {
      code: "fr",
      name: "French",
    },
  },
  {
    name: "Cambodia",
    code: "KH",
    language: {
      code: "km",
      name: "Khmer",
    },
  },
  {
    name: "Cameroon",
    code: "CM",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Canada",
    code: "CA",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Cabo Verde",
    code: "CV",
    language: {
      code: "pt",
      iso639_2: "por",
      name: "Portuguese",
      nativeName: "Português",
    },
  },
  {
    name: "Cayman Islands",
    code: "KY",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Central African Republic",
    code: "CF",
    language: {
      code: "fr",
      name: "French",
    },
  },
  {
    name: "Chad",
    code: "TD",
    language: {
      code: "fr",
      name: "French",
    },
  },
  {
    name: "Chile",
    code: "CL",
    language: {
      code: "es",
      name: "Spanish",
    },
  },
  {
    name: "China",
    code: "CN",
    language: {
      code: "zh",
      name: "Chinese",
    },
  },
  {
    name: "Christmas Island",
    code: "CX",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Cocos (Keeling) Islands",
    code: "CC",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Colombia",
    code: "CO",
    language: {
      code: "es",
      name: "Spanish",
    },
  },
  {
    name: "Comoros",
    code: "KM",
    language: {
      code: "fr",
      name: "French",
    },
  },
  {
    name: "Congo",
    code: "CG",
    language: {
      code: "fr",
      name: "French",
    },
  },
  {
    name: "Congo (Democratic Republic of the)",
    code: "CD",
    language: {
      code: "fr",
      name: "French",
    },
  },
  {
    name: "Cook Islands",
    code: "CK",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Costa Rica",
    code: "CR",
    language: {
      code: "es",
      name: "Spanish",
    },
  },
  {
    name: "Croatia",
    code: "HR",
    language: {
      code: "hr",
      name: "Croatian",
    },
  },
  {
    name: "Cuba",
    code: "CU",
    language: {
      code: "es",
      name: "Spanish",
    },
  },
  {
    name: "Curaçao",
    code: "CW",
    language: {
      code: "nl",
      name: "Dutch",
    },
  },
  {
    name: "Cyprus",
    code: "CY",
    language: {
      code: "tr",
      name: "Turkish",
    },
  },
  {
    name: "Czech Republic",
    code: "CZ",
    language: {
      code: "cs",
      name: "Czech",
    },
  },
  {
    name: "Denmark",
    code: "DK",
    language: {
      code: "da",
      name: "Danish",
    },
  },
  {
    name: "Djibouti",
    code: "DJ",
    language: {
      code: "fr",
      name: "French",
    },
  },
  {
    name: "Dominica",
    code: "DM",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Dominican Republic",
    code: "DO",
    language: {
      code: "es",
      name: "Spanish",
    },
  },
  {
    name: "Ecuador",
    code: "EC",
    language: {
      code: "es",
      name: "Spanish",
    },
  },
  {
    name: "Egypt",
    code: "EG",
    language: {
      code: "ar",
      name: "Arabic",
    },
  },
  {
    name: "El Salvador",
    code: "SV",
    language: {
      code: "es",
      name: "Spanish",
    },
  },
  {
    name: "Equatorial Guinea",
    code: "GQ",
    language: {
      code: "es",
      name: "Spanish",
    },
  },
  {
    name: "Eritrea",
    code: "ER",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Estonia",
    code: "EE",
    language: {
      code: "et",
      name: "Estonian",
    },
  },
  {
    name: "Ethiopia",
    code: "ET",
    language: {
      code: "am",
      name: "Amharic",
    },
  },
  {
    name: "Falkland Islands (Malvinas)",
    code: "FK",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Faroe Islands",
    code: "FO",
    language: {
      code: "fo",
      name: "Faroese",
    },
  },
  {
    name: "Fiji",
    code: "FJ",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Finland",
    code: "FI",
    language: {
      code: "fi",
      name: "Finnish",
    },
  },
  {
    name: "France",
    code: "FR",
    language: {
      code: "fr",
      name: "French",
    },
  },
  {
    name: "French Guiana",
    code: "GF",
    language: {
      code: "fr",
      name: "French",
    },
  },
  {
    name: "French Polynesia",
    code: "PF",
    language: {
      code: "fr",
      name: "French",
    },
  },
  {
    name: "French Southern Territories",
    code: "TF",
    language: {
      code: "fr",
      name: "French",
    },
  },
  {
    name: "Gabon",
    code: "GA",
    language: {
      code: "fr",
      name: "French",
    },
  },
  {
    name: "Gambia",
    code: "GM",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Georgia",
    code: "GE",
    language: {
      code: "ka",
      name: "Georgian",
    },
  },
  {
    name: "Germany",
    code: "DE",
    language: {
      code: "de",
      name: "German",
    },
  },
  {
    name: "Ghana",
    code: "GH",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Gibraltar",
    code: "GI",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Greece",
    code: "GR",
    language: {
      code: "el",
      name: "Greek (modern)",
    },
  },
  {
    name: "Greenland",
    code: "GL",
    language: {
      code: "kl",
      name: "Kalaallisut",
    },
  },
  {
    name: "Grenada",
    code: "GD",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Guadeloupe",
    code: "GP",
    language: {
      code: "fr",
      name: "French",
    },
  },
  {
    name: "Guam",
    code: "GU",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Guatemala",
    code: "GT",
    language: {
      code: "es",
      name: "Spanish",
    },
  },
  {
    name: "Guernsey",
    code: "GG",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Guinea",
    code: "GN",
    language: {
      code: "fr",
      name: "French",
    },
  },
  {
    name: "Guinea-Bissau",
    code: "GW",
    language: {
      code: "pt",
      name: "Portuguese",
    },
  },
  {
    name: "Guyana",
    code: "GY",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Haiti",
    code: "HT",
    language: {
      code: "fr",
      name: "French",
    },
  },
  {
    name: "Heard Island and McDonald Islands",
    code: "HM",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Holy See",
    code: "VA",
    language: {
      code: "fr",
      name: "French",
    },
  },
  {
    name: "Honduras",
    code: "HN",
    language: {
      code: "es",
      name: "Spanish",
    },
  },
  {
    name: "Hong Kong",
    code: "HK",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Hungary",
    code: "HU",
    language: {
      code: "hu",
      name: "Hungarian",
    },
  },
  {
    name: "Iceland",
    code: "IS",
    language: {
      code: "is",
      name: "Icelandic",
    },
  },
  {
    name: "India",
    code: "IN",
    language: {
      code: "hi",
      name: "Hindi",
    },
  },
  {
    name: "Indonesia",
    code: "ID",
    language: {
      code: "id",
      name: "Indonesian",
    },
  },
  {
    name: "Côte d'Ivoire",
    code: "CI",
    language: {
      code: "fr",
      name: "French",
    },
  },
  {
    name: "Iran (Islamic Republic of)",
    code: "IR",
    language: {
      code: "fa",
      name: "Persian (Farsi)",
    },
  },
  {
    name: "Iraq",
    code: "IQ",
    language: {
      code: "ar",
      name: "Arabic",
    },
  },
  {
    name: "Ireland",
    code: "IE",
    language: {
      code: "ga",
      name: "Irish",
    },
  },
  {
    name: "Isle of Man",
    code: "IM",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Israel",
    code: "IL",
    language: {
      code: "he",
      name: "Hebrew (modern)",
    },
  },
  {
    name: "Italy",
    code: "IT",
    language: {
      code: "it",
      name: "Italian",
    },
  },
  {
    name: "Jamaica",
    code: "JM",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Japan",
    code: "JP",
    language: {
      code: "ja",
      name: "Japanese",
    },
  },
  {
    name: "Jersey",
    code: "JE",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Jordan",
    code: "JO",
    language: {
      code: "ar",
      name: "Arabic",
    },
  },
  {
    name: "Kazakhstan",
    code: "KZ",
    language: {
      code: "kk",
      name: "Kazakh",
    },
  },
  {
    name: "Kenya",
    code: "KE",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Kiribati",
    code: "KI",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Kuwait",
    code: "KW",
    language: {
      code: "ar",
      name: "Arabic",
    },
  },
  {
    name: "Kyrgyzstan",
    code: "KG",
    language: {
      code: "ky",
      name: "Kyrgyz",
    },
  },
  {
    name: "Lao People's Democratic Republic",
    code: "LA",
    language: {
      code: "lo",
      name: "Lao",
    },
  },
  {
    name: "Latvia",
    code: "LV",
    language: {
      code: "lv",
      name: "Latvian",
    },
  },
  {
    name: "Lebanon",
    code: "LB",
    language: {
      code: "ar",
      name: "Arabic",
    },
  },
  {
    name: "Lesotho",
    code: "LS",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Liberia",
    code: "LR",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Libya",
    code: "LY",
    language: {
      code: "ar",
      name: "Arabic",
    },
  },
  {
    name: "Liechtenstein",
    code: "LI",
    language: {
      code: "de",
      name: "German",
    },
  },
  {
    name: "Lithuania",
    code: "LT",
    language: {
      code: "lt",
      name: "Lithuanian",
    },
  },
  {
    name: "Luxembourg",
    code: "LU",
    language: {
      code: "fr",
      name: "French",
    },
  },
  {
    name: "Macao",
    code: "MO",
    language: {
      code: "zh",
      name: "Chinese",
    },
  },
  {
    name: "Macedonia (the former Yugoslav Republic of)",
    code: "MK",
    language: {
      code: "mk",
      name: "Macedonian",
    },
  },
  {
    name: "Madagascar",
    code: "MG",
    language: {
      code: "fr",
      name: "French",
    },
  },
  {
    name: "Malawi",
    code: "MW",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Malaysia",
    code: "MY",
    language: {
      code: null,
      name: "Malaysian",
    },
  },
  {
    name: "Maldives",
    code: "MV",
    language: {
      code: "dv",
      name: "Divehi",
    },
  },
  {
    name: "Mali",
    code: "ML",
    language: {
      code: "fr",
      name: "French",
    },
  },
  {
    name: "Malta",
    code: "MT",
    language: {
      code: "mt",
      name: "Maltese",
    },
  },
  {
    name: "Marshall Islands",
    code: "MH",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Martinique",
    code: "MQ",
    language: {
      code: "fr",
      name: "French",
    },
  },
  {
    name: "Mauritania",
    code: "MR",
    language: {
      code: "ar",
      name: "Arabic",
    },
  },
  {
    name: "Mauritius",
    code: "MU",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Mayotte",
    code: "YT",
    language: {
      code: "fr",
      name: "French",
    },
  },
  {
    name: "Mexico",
    code: "MX",
    language: {
      code: "es",
      name: "Spanish",
    },
  },
  {
    name: "Micronesia (Federated States of)",
    code: "FM",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Moldova (Republic of)",
    code: "MD",
    language: {
      code: "ro",
      name: "Romanian",
    },
  },
  {
    name: "Monaco",
    code: "MC",
    language: {
      code: "fr",
      name: "French",
    },
  },
  {
    name: "Mongolia",
    code: "MN",
    language: {
      code: "mn",
      name: "Mongolian",
    },
  },
  {
    name: "Montenegro",
    code: "ME",
    language: {
      code: "sr",
      name: "Serbian",
    },
  },
  {
    name: "Montserrat",
    code: "MS",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Morocco",
    code: "MA",
    language: {
      code: "ar",
      name: "Arabic",
    },
  },
  {
    name: "Mozambique",
    code: "MZ",
    language: {
      code: "pt",
      name: "Portuguese",
    },
  },
  {
    name: "Myanmar",
    code: "MM",
    language: {
      code: "my",
      name: "Burmese",
    },
  },
  {
    name: "Namibia",
    code: "NA",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Nauru",
    code: "NR",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Nepal",
    code: "NP",
    language: {
      code: "ne",
      name: "Nepali",
    },
  },
  {
    name: "Netherlands",
    code: "NL",
    language: {
      code: "nl",
      name: "Dutch",
    },
  },
  {
    name: "New Caledonia",
    code: "NC",
    language: {
      code: "fr",
      name: "French",
    },
  },
  {
    name: "New Zealand",
    code: "NZ",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Nicaragua",
    code: "NI",
    language: {
      code: "es",
      name: "Spanish",
    },
  },
  {
    name: "Niger",
    code: "NE",
    language: {
      code: "fr",
      name: "French",
    },
  },
  {
    name: "Nigeria",
    code: "NG",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Niue",
    code: "NU",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Norfolk Island",
    code: "NF",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Korea (Democratic People's Republic of)",
    code: "KP",
    language: {
      code: "ko",
      name: "Korean",
    },
  },
  {
    name: "Northern Mariana Islands",
    code: "MP",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Norway",
    code: "NO",
    language: {
      code: "no",
      name: "Norwegian",
    },
  },
  {
    name: "Oman",
    code: "OM",
    language: {
      code: "ar",
      name: "Arabic",
    },
  },
  {
    name: "Pakistan",
    code: "PK",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Palau",
    code: "PW",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Palestine, State of",
    code: "PS",
    language: {
      code: "ar",
      name: "Arabic",
    },
  },
  {
    name: "Panama",
    code: "PA",
    language: {
      code: "es",
      name: "Spanish",
    },
  },
  {
    name: "Papua New Guinea",
    code: "PG",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Paraguay",
    code: "PY",
    language: {
      code: "es",
      name: "Spanish",
    },
  },
  {
    name: "Peru",
    code: "PE",
    language: {
      code: "es",
      name: "Spanish",
    },
  },
  {
    name: "Philippines",
    code: "PH",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Pitcairn",
    code: "PN",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Poland",
    code: "PL",
    language: {
      code: "pl",
      name: "Polish",
    },
  },
  {
    name: "Portugal",
    code: "PT",
    language: {
      code: "pt",
      name: "Portuguese",
    },
  },
  {
    name: "Puerto Rico",
    code: "PR",
    language: {
      code: "es",
      name: "Spanish",
    },
  },
  {
    name: "Qatar",
    code: "QA",
    language: {
      code: "ar",
      name: "Arabic",
    },
  },
  {
    name: "Republic of Kosovo",
    code: "XK",
    language: {
      code: "sq",
      name: "Albanian",
    },
  },
  {
    name: "Réunion",
    code: "RE",
    language: {
      code: "fr",
      name: "French",
    },
  },
  {
    name: "Romania",
    code: "RO",
    language: {
      code: "ro",
      name: "Romanian",
    },
  },
  {
    name: "Russian Federation",
    code: "RU",
    language: {
      code: "ru",
      name: "Russian",
    },
  },
  {
    name: "Rwanda",
    code: "RW",
    language: {
      code: "rw",
      name: "Kinyarwanda",
    },
  },
  {
    name: "Saint Barthélemy",
    code: "BL",
    language: {
      code: "fr",
      name: "French",
    },
  },
  {
    name: "Saint Helena, Ascension and Tristan da Cunha",
    code: "SH",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Saint Kitts and Nevis",
    code: "KN",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Saint Lucia",
    code: "LC",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Saint Martin (French part)",
    code: "MF",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Saint Pierre and Miquelon",
    code: "PM",
    language: {
      code: "fr",
      name: "French",
    },
  },
  {
    name: "Saint Vincent and the Grenadines",
    code: "VC",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Samoa",
    code: "WS",
    language: {
      code: "sm",
      name: "Samoan",
    },
  },
  {
    name: "San Marino",
    code: "SM",
    language: {
      code: "it",
      name: "Italian",
    },
  },
  {
    name: "Sao Tome and Principe",
    code: "ST",
    language: {
      code: "pt",
      name: "Portuguese",
    },
  },
  {
    name: "Saudi Arabia",
    code: "SA",
    language: {
      code: "ar",
      name: "Arabic",
    },
  },
  {
    name: "Senegal",
    code: "SN",
    language: {
      code: "fr",
      name: "French",
    },
  },
  {
    name: "Serbia",
    code: "RS",
    language: {
      code: "sr",
      name: "Serbian",
    },
  },
  {
    name: "Seychelles",
    code: "SC",
    language: {
      code: "fr",
      name: "French",
    },
  },
  {
    name: "Sierra Leone",
    code: "SL",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Singapore",
    code: "SG",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Sint Maarten (Dutch part)",
    code: "SX",
    language: {
      code: "nl",
      name: "Dutch",
    },
  },
  {
    name: "Slovakia",
    code: "SK",
    language: {
      code: "sk",
      name: "Slovak",
    },
  },
  {
    name: "Slovenia",
    code: "SI",
    language: {
      code: "sl",
      name: "Slovene",
    },
  },
  {
    name: "Solomon Islands",
    code: "SB",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Somalia",
    code: "SO",
    language: {
      code: "ar",
      name: "Arabic",
    },
  },
  {
    name: "South Africa",
    code: "ZA",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    code: "GS",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Korea (Republic of)",
    code: "KR",
    language: {
      code: "ko",
      name: "Korean",
    },
  },
  {
    name: "South Sudan",
    code: "SS",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Spain",
    code: "ES",
    language: {
      code: "es",
      name: "Spanish",
    },
  },
  {
    name: "Sri Lanka",
    code: "LK",
    language: {
      code: "si",
      name: "Sinhalese",
    },
  },
  {
    name: "Sudan",
    code: "SD",
    language: {
      code: "ar",
      name: "Arabic",
    },
  },
  {
    name: "Suriname",
    code: "SR",
    language: {
      code: "nl",
      name: "Dutch",
    },
  },
  {
    name: "Svalbard and Jan Mayen",
    code: "SJ",
    language: {
      code: "no",
      name: "Norwegian",
    },
  },
  {
    name: "Swaziland",
    code: "SZ",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Sweden",
    code: "SE",
    language: {
      code: "sv",
      name: "Swedish",
    },
  },
  {
    name: "Switzerland",
    code: "CH",
    language: {
      code: "de",
      name: "German",
    },
  },
  {
    name: "Syrian Arab Republic",
    code: "SY",
    language: {
      code: "ar",
      name: "Arabic",
    },
  },
  {
    name: "Taiwan",
    code: "TW",
    language: {
      code: "zh",
      name: "Chinese",
    },
  },
  {
    name: "Tajikistan",
    code: "TJ",
    language: {
      code: "tg",
      name: "Tajik",
    },
  },
  {
    name: "Tanzania, United Republic of",
    code: "TZ",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Thailand",
    code: "TH",
    language: {
      code: "th",
      name: "Thai",
    },
  },
  {
    name: "Timor-Leste",
    code: "TL",
    language: {
      code: "pt",
      name: "Portuguese",
    },
  },
  {
    name: "Togo",
    code: "TG",
    language: {
      code: "fr",
      name: "French",
    },
  },
  {
    name: "Tokelau",
    code: "TK",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Tonga",
    code: "TO",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Trinidad and Tobago",
    code: "TT",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Tunisia",
    code: "TN",
    language: {
      code: "ar",
      name: "Arabic",
    },
  },
  {
    name: "Turkey",
    code: "TR",
    language: {
      code: "tr",
      name: "Turkish",
    },
  },
  {
    name: "Turkmenistan",
    code: "TM",
    language: {
      code: "tk",
      name: "Turkmen",
    },
  },
  {
    name: "Turks and Caicos Islands",
    code: "TC",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Tuvalu",
    code: "TV",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Uganda",
    code: "UG",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Ukraine",
    code: "UA",
    language: {
      code: "uk",
      name: "Ukrainian",
    },
  },
  {
    name: "United Arab Emirates",
    code: "AE",
    language: {
      code: "ar",
      name: "Arabic",
    },
  },
  {
    name: "United Kingdom of Great Britain and Northern Ireland",
    code: "GB",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "United States of America",
    code: "US",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Uruguay",
    code: "UY",
    language: {
      code: "es",
      name: "Spanish",
    },
  },
  {
    name: "Uzbekistan",
    code: "UZ",
    language: {
      code: "uz",
      name: "Uzbek",
    },
  },
  {
    name: "Vanuatu",
    code: "VU",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Venezuela (Bolivarian Republic of)",
    code: "VE",
    language: {
      code: "es",
      name: "Spanish",
    },
  },
  {
    name: "Viet Nam",
    code: "VN",
    language: {
      code: "vi",
      name: "Vietnamese",
    },
  },
  {
    name: "Wallis and Futuna",
    code: "WF",
    language: {
      code: "fr",
      name: "French",
    },
  },
  {
    name: "Western Sahara",
    code: "EH",
    language: {
      code: "es",
      name: "Spanish",
    },
  },
  {
    name: "Yemen",
    code: "YE",
    language: {
      code: "ar",
      name: "Arabic",
    },
  },
  {
    name: "Zambia",
    code: "ZM",
    language: {
      code: "en",
      name: "English",
    },
  },
  {
    name: "Zimbabwe",
    code: "ZW",
    language: {
      code: "en",
      name: "English",
    },
  },
];

export default countriesData;