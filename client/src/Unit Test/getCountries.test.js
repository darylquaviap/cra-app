import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { MockedProvider } from "@apollo/client/testing";
import GetCountries from "../Components/apollo/getCountries";
import { GET_COUNTRIES } from "../Components/graphql/queries";
import Home from '../Pages/Home/index';


const mocks = [
    {
        request: {
            query: GET_COUNTRIES,
        },
        result: {
            data: {
                "countries": [
                    {
                        "capital": "Andorra la Vella",
                        "code": "AD",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "EUR",
                        "languages": [
                            {
                                "code": "ca",
                                "name": "Catalan",
                                "native": "Català",
                                "rtl": false
                            }
                        ],
                        "name": "Andorra",
                        "native": "Andorra",
                        "phone": "376",
                        "states": []
                    },
                    {
                        "capital": "Abu Dhabi",
                        "code": "AE",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "AED",
                        "languages": [
                            {
                                "code": "ar",
                                "name": "Arabic",
                                "native": "العربية",
                                "rtl": true
                            }
                        ],
                        "name": "United Arab Emirates",
                        "native": "دولة الإمارات العربية المتحدة",
                        "phone": "971",
                        "states": []
                    },
                    {
                        "capital": "Kabul",
                        "code": "AF",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "AFN",
                        "languages": [
                            {
                                "code": "ps",
                                "name": "Pashto",
                                "native": "پښتو",
                                "rtl": true
                            },
                            {
                                "code": "uz",
                                "name": "Uzbek",
                                "native": "Ўзбек",
                                "rtl": false
                            },
                            {
                                "code": "tk",
                                "name": "Turkmen",
                                "native": "Туркмен / تركمن",
                                "rtl": false
                            }
                        ],
                        "name": "Afghanistan",
                        "native": "افغانستان",
                        "phone": "93",
                        "states": []
                    },
                    {
                        "capital": "Saint John's",
                        "code": "AG",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "XCD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Antigua and Barbuda",
                        "native": "Antigua and Barbuda",
                        "phone": "1268",
                        "states": []
                    },
                    {
                        "capital": "The Valley",
                        "code": "AI",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "XCD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Anguilla",
                        "native": "Anguilla",
                        "phone": "1264",
                        "states": []
                    },
                    {
                        "capital": "Tirana",
                        "code": "AL",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "ALL",
                        "languages": [
                            {
                                "code": "sq",
                                "name": "Albanian",
                                "native": "Shqip",
                                "rtl": false
                            }
                        ],
                        "name": "Albania",
                        "native": "Shqipëria",
                        "phone": "355",
                        "states": []
                    },
                    {
                        "capital": "Yerevan",
                        "code": "AM",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "AMD",
                        "languages": [
                            {
                                "code": "hy",
                                "name": "Armenian",
                                "native": "Հայերեն",
                                "rtl": false
                            },
                            {
                                "code": "ru",
                                "name": "Russian",
                                "native": "Русский",
                                "rtl": false
                            }
                        ],
                        "name": "Armenia",
                        "native": "Հայաստան",
                        "phone": "374",
                        "states": []
                    },
                    {
                        "capital": "Luanda",
                        "code": "AO",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "AOA",
                        "languages": [
                            {
                                "code": "pt",
                                "name": "Portuguese",
                                "native": "Português",
                                "rtl": false
                            }
                        ],
                        "name": "Angola",
                        "native": "Angola",
                        "phone": "244",
                        "states": []
                    },
                    {
                        "capital": null,
                        "code": "AQ",
                        "continent": {
                            "code": "AN",
                            "name": "Antarctica"
                        },
                        "currency": null,
                        "languages": [],
                        "name": "Antarctica",
                        "native": "Antarctica",
                        "phone": "672",
                        "states": []
                    },
                    {
                        "capital": "Buenos Aires",
                        "code": "AR",
                        "continent": {
                            "code": "SA",
                            "name": "South America"
                        },
                        "currency": "ARS",
                        "languages": [
                            {
                                "code": "es",
                                "name": "Spanish",
                                "native": "Español",
                                "rtl": false
                            },
                            {
                                "code": "gn",
                                "name": "Guarani",
                                "native": "Avañe'ẽ",
                                "rtl": false
                            }
                        ],
                        "name": "Argentina",
                        "native": "Argentina",
                        "phone": "54",
                        "states": [
                            {
                                "code": null,
                                "name": "Ciudad Autónoma de Buenos Aires"
                            },
                            {
                                "code": null,
                                "name": "Buenos Aires"
                            },
                            {
                                "code": null,
                                "name": "Catamarca"
                            },
                            {
                                "code": null,
                                "name": "Chaco"
                            },
                            {
                                "code": null,
                                "name": "Chubut"
                            },
                            {
                                "code": null,
                                "name": "Córdoba"
                            },
                            {
                                "code": null,
                                "name": "Corrientes"
                            },
                            {
                                "code": null,
                                "name": "Entre Ríos"
                            },
                            {
                                "code": null,
                                "name": "Formosa"
                            },
                            {
                                "code": null,
                                "name": "Jujuy"
                            },
                            {
                                "code": null,
                                "name": "La Pampa"
                            },
                            {
                                "code": null,
                                "name": "La Rioja"
                            },
                            {
                                "code": null,
                                "name": "Mendoza"
                            },
                            {
                                "code": null,
                                "name": "Misiones"
                            },
                            {
                                "code": null,
                                "name": "Neuquén"
                            },
                            {
                                "code": null,
                                "name": "Río Negro"
                            },
                            {
                                "code": null,
                                "name": "Salta"
                            },
                            {
                                "code": null,
                                "name": "San Juan"
                            },
                            {
                                "code": null,
                                "name": "San Luis"
                            },
                            {
                                "code": null,
                                "name": "Santa Cruz"
                            },
                            {
                                "code": null,
                                "name": "Santa Fe"
                            },
                            {
                                "code": null,
                                "name": "Santiago del Estero"
                            },
                            {
                                "code": null,
                                "name": "Tierra del Fuego, Antártida e Islas del Atlántico Sur"
                            },
                            {
                                "code": null,
                                "name": "Tucumán"
                            }
                        ]
                    },
                    {
                        "capital": "Pago Pago",
                        "code": "AS",
                        "continent": {
                            "code": "OC",
                            "name": "Oceania"
                        },
                        "currency": "USD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            },
                            {
                                "code": "sm",
                                "name": "Samoan",
                                "native": "Gagana Samoa",
                                "rtl": false
                            }
                        ],
                        "name": "American Samoa",
                        "native": "American Samoa",
                        "phone": "1684",
                        "states": []
                    },
                    {
                        "capital": "Vienna",
                        "code": "AT",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "EUR",
                        "languages": [
                            {
                                "code": "de",
                                "name": "German",
                                "native": "Deutsch",
                                "rtl": false
                            }
                        ],
                        "name": "Austria",
                        "native": "Österreich",
                        "phone": "43",
                        "states": [
                            {
                                "code": "B",
                                "name": "Burgenland"
                            },
                            {
                                "code": "K",
                                "name": "Kärnten"
                            },
                            {
                                "code": "NÖ",
                                "name": "Niederösterreich"
                            },
                            {
                                "code": "OÖ",
                                "name": "Oberösterreich"
                            },
                            {
                                "code": "S",
                                "name": "Salzburg"
                            },
                            {
                                "code": "ST",
                                "name": "Steiermark"
                            },
                            {
                                "code": "T",
                                "name": "Tirol"
                            },
                            {
                                "code": "V",
                                "name": "Vorarlberg"
                            },
                            {
                                "code": "W",
                                "name": "Wien"
                            }
                        ]
                    },
                    {
                        "capital": "Canberra",
                        "code": "AU",
                        "continent": {
                            "code": "OC",
                            "name": "Oceania"
                        },
                        "currency": "AUD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Australia",
                        "native": "Australia",
                        "phone": "61",
                        "states": [
                            {
                                "code": null,
                                "name": "Ashmore and Cartier Islands"
                            },
                            {
                                "code": null,
                                "name": "Australian Antarctic Territory"
                            },
                            {
                                "code": "ACT",
                                "name": "Australian Capital Territory"
                            },
                            {
                                "code": "CX",
                                "name": "Christmas Island"
                            },
                            {
                                "code": "CC",
                                "name": "Cocos Islands"
                            },
                            {
                                "code": null,
                                "name": "Coral Sea Islands"
                            },
                            {
                                "code": "HM",
                                "name": "Heard Island and McDonald Islands"
                            },
                            {
                                "code": "JBT",
                                "name": "Jervis Bay Territory"
                            },
                            {
                                "code": "NSW",
                                "name": "New South Wales"
                            },
                            {
                                "code": "NF",
                                "name": "Norfolk Island"
                            },
                            {
                                "code": "NT",
                                "name": "Northern Territory"
                            },
                            {
                                "code": "QLD",
                                "name": "Queensland"
                            },
                            {
                                "code": "SA",
                                "name": "South Australia"
                            },
                            {
                                "code": "TAS",
                                "name": "Tasmania"
                            },
                            {
                                "code": "VIC",
                                "name": "Victoria"
                            },
                            {
                                "code": "WA",
                                "name": "Western Australia"
                            }
                        ]
                    },
                    {
                        "capital": "Oranjestad",
                        "code": "AW",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "AWG",
                        "languages": [
                            {
                                "code": "nl",
                                "name": "Dutch",
                                "native": "Nederlands",
                                "rtl": false
                            },
                            {
                                "code": "pa",
                                "name": "Panjabi / Punjabi",
                                "native": "ਪੰਜਾਬੀ / पंजाबी / پنجابي",
                                "rtl": false
                            }
                        ],
                        "name": "Aruba",
                        "native": "Aruba",
                        "phone": "297",
                        "states": []
                    },
                    {
                        "capital": "Mariehamn",
                        "code": "AX",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "EUR",
                        "languages": [
                            {
                                "code": "sv",
                                "name": "Swedish",
                                "native": "Svenska",
                                "rtl": false
                            }
                        ],
                        "name": "Åland",
                        "native": "Åland",
                        "phone": "358",
                        "states": []
                    },
                    {
                        "capital": "Baku",
                        "code": "AZ",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "AZN",
                        "languages": [
                            {
                                "code": "az",
                                "name": "Azerbaijani",
                                "native": "Azərbaycanca / آذربايجان",
                                "rtl": false
                            }
                        ],
                        "name": "Azerbaijan",
                        "native": "Azərbaycan",
                        "phone": "994",
                        "states": []
                    },
                    {
                        "capital": "Sarajevo",
                        "code": "BA",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "BAM",
                        "languages": [
                            {
                                "code": "bs",
                                "name": "Bosnian",
                                "native": "Bosanski",
                                "rtl": false
                            },
                            {
                                "code": "hr",
                                "name": "Croatian",
                                "native": "Hrvatski",
                                "rtl": false
                            },
                            {
                                "code": "sr",
                                "name": "Serbian",
                                "native": "Српски",
                                "rtl": false
                            }
                        ],
                        "name": "Bosnia and Herzegovina",
                        "native": "Bosna i Hercegovina",
                        "phone": "387",
                        "states": []
                    },
                    {
                        "capital": "Bridgetown",
                        "code": "BB",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "BBD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Barbados",
                        "native": "Barbados",
                        "phone": "1246",
                        "states": []
                    },
                    {
                        "capital": "Dhaka",
                        "code": "BD",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "BDT",
                        "languages": [
                            {
                                "code": "bn",
                                "name": "Bengali",
                                "native": "বাংলা",
                                "rtl": false
                            }
                        ],
                        "name": "Bangladesh",
                        "native": "Bangladesh",
                        "phone": "880",
                        "states": [
                            {
                                "code": null,
                                "name": "বরগুনা"
                            },
                            {
                                "code": null,
                                "name": "বরিশাল"
                            },
                            {
                                "code": null,
                                "name": "ভোলা"
                            },
                            {
                                "code": null,
                                "name": "ঝালকাঠি"
                            },
                            {
                                "code": null,
                                "name": "পটুয়াখালী"
                            },
                            {
                                "code": null,
                                "name": "পিরোজপুর"
                            },
                            {
                                "code": null,
                                "name": "বান্দরবান"
                            },
                            {
                                "code": null,
                                "name": "ব্রাহ্মণবাড়ীয়া"
                            },
                            {
                                "code": null,
                                "name": "চাঁদপুর"
                            },
                            {
                                "code": null,
                                "name": "চট্টগ্রাম"
                            },
                            {
                                "code": null,
                                "name": "কুমিল্লা"
                            },
                            {
                                "code": null,
                                "name": "কক্সবাজার"
                            },
                            {
                                "code": null,
                                "name": "ফেনী"
                            },
                            {
                                "code": null,
                                "name": "খাগড়াছড়ি"
                            },
                            {
                                "code": null,
                                "name": "লক্ষীপুর"
                            },
                            {
                                "code": null,
                                "name": "নোয়াখালী"
                            },
                            {
                                "code": null,
                                "name": "রাঙ্গামাটি"
                            },
                            {
                                "code": null,
                                "name": "ঢাকা"
                            },
                            {
                                "code": null,
                                "name": "ফরিদপুর"
                            },
                            {
                                "code": null,
                                "name": "গাজীপুর"
                            },
                            {
                                "code": null,
                                "name": "গোপালগঞ্জ"
                            },
                            {
                                "code": null,
                                "name": "জামালপুর"
                            },
                            {
                                "code": null,
                                "name": "কিশোরগঞ্জ"
                            },
                            {
                                "code": null,
                                "name": "মাদারীপুর"
                            },
                            {
                                "code": null,
                                "name": "মানিকগঞ্জ"
                            },
                            {
                                "code": null,
                                "name": "মুন্সীগঞ্জ"
                            },
                            {
                                "code": null,
                                "name": "ময়মনসিংহ"
                            },
                            {
                                "code": null,
                                "name": "নারায়ণগঞ্জ"
                            },
                            {
                                "code": null,
                                "name": "নরসিংদী"
                            },
                            {
                                "code": null,
                                "name": "নেত্রকোনা"
                            },
                            {
                                "code": null,
                                "name": "রাজবাড়ী"
                            },
                            {
                                "code": null,
                                "name": "শরীয়তপুর"
                            },
                            {
                                "code": null,
                                "name": "শেরপুর"
                            },
                            {
                                "code": null,
                                "name": "টাঙ্গাইল"
                            },
                            {
                                "code": null,
                                "name": "বাগেরহাট"
                            },
                            {
                                "code": null,
                                "name": "চুয়াডাঙ্গা"
                            },
                            {
                                "code": null,
                                "name": "যশোর"
                            },
                            {
                                "code": null,
                                "name": "ঝিনাইদহ"
                            },
                            {
                                "code": null,
                                "name": "খুলনা"
                            },
                            {
                                "code": null,
                                "name": "কুষ্টিয়া"
                            },
                            {
                                "code": null,
                                "name": "মাগুরা"
                            },
                            {
                                "code": null,
                                "name": "মেহেরপুর"
                            },
                            {
                                "code": null,
                                "name": "নড়াইল"
                            },
                            {
                                "code": null,
                                "name": "সাতক্ষিরা"
                            },
                            {
                                "code": null,
                                "name": "বগুড়া"
                            },
                            {
                                "code": null,
                                "name": "জয়পুরহাট"
                            },
                            {
                                "code": null,
                                "name": "নওগাঁ"
                            },
                            {
                                "code": null,
                                "name": "নাটোর"
                            },
                            {
                                "code": null,
                                "name": "নওয়াবগঞ্জ"
                            },
                            {
                                "code": null,
                                "name": "পাবনা"
                            },
                            {
                                "code": null,
                                "name": "রাজশাহী"
                            },
                            {
                                "code": null,
                                "name": "সিরাজগঞ্জ"
                            },
                            {
                                "code": null,
                                "name": "দিনাজপুর"
                            },
                            {
                                "code": null,
                                "name": "গাইবান্ধা"
                            },
                            {
                                "code": null,
                                "name": "কুড়িগ্রাম"
                            },
                            {
                                "code": null,
                                "name": "লালমনিরহাট"
                            },
                            {
                                "code": null,
                                "name": "নীলফামারী"
                            },
                            {
                                "code": null,
                                "name": "পঞ্চগড়"
                            },
                            {
                                "code": null,
                                "name": "রংপুর"
                            },
                            {
                                "code": null,
                                "name": "ঠাকুরগাঁ"
                            },
                            {
                                "code": null,
                                "name": "হবিগঞ্জ"
                            },
                            {
                                "code": null,
                                "name": "মৌলভীবাজার"
                            },
                            {
                                "code": null,
                                "name": "সুনামগঞ্জ"
                            },
                            {
                                "code": null,
                                "name": "সিলেট"
                            }
                        ]
                    },
                    {
                        "capital": "Brussels",
                        "code": "BE",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "EUR",
                        "languages": [
                            {
                                "code": "nl",
                                "name": "Dutch",
                                "native": "Nederlands",
                                "rtl": false
                            },
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            },
                            {
                                "code": "de",
                                "name": "German",
                                "native": "Deutsch",
                                "rtl": false
                            }
                        ],
                        "name": "Belgium",
                        "native": "België",
                        "phone": "32",
                        "states": [
                            {
                                "code": "ANT",
                                "name": "Antwerpen"
                            },
                            {
                                "code": "HAI",
                                "name": "Henegouwen"
                            },
                            {
                                "code": "LIE",
                                "name": "Luik"
                            },
                            {
                                "code": "LIM",
                                "name": "Limburg"
                            },
                            {
                                "code": "LUX",
                                "name": "Luxemburg"
                            },
                            {
                                "code": "NAM",
                                "name": "Namen"
                            },
                            {
                                "code": "OVL",
                                "name": "Oost-Vlaanderen"
                            },
                            {
                                "code": "VBR",
                                "name": "Vlaams-Brabant"
                            },
                            {
                                "code": "WBR",
                                "name": "Waals-Brabant"
                            },
                            {
                                "code": "WVL",
                                "name": "West-Vlaanderen"
                            }
                        ]
                    },
                    {
                        "capital": "Ouagadougou",
                        "code": "BF",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "XOF",
                        "languages": [
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            },
                            {
                                "code": "ff",
                                "name": "Peul",
                                "native": "Fulfulde",
                                "rtl": false
                            }
                        ],
                        "name": "Burkina Faso",
                        "native": "Burkina Faso",
                        "phone": "226",
                        "states": []
                    },
                    {
                        "capital": "Sofia",
                        "code": "BG",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "BGN",
                        "languages": [
                            {
                                "code": "bg",
                                "name": "Bulgarian",
                                "native": "Български",
                                "rtl": false
                            }
                        ],
                        "name": "Bulgaria",
                        "native": "България",
                        "phone": "359",
                        "states": []
                    },
                    {
                        "capital": "Manama",
                        "code": "BH",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "BHD",
                        "languages": [
                            {
                                "code": "ar",
                                "name": "Arabic",
                                "native": "العربية",
                                "rtl": true
                            }
                        ],
                        "name": "Bahrain",
                        "native": "‏البحرين",
                        "phone": "973",
                        "states": []
                    },
                    {
                        "capital": "Bujumbura",
                        "code": "BI",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "BIF",
                        "languages": [
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            },
                            {
                                "code": "rn",
                                "name": "Kirundi",
                                "native": "Kirundi",
                                "rtl": false
                            }
                        ],
                        "name": "Burundi",
                        "native": "Burundi",
                        "phone": "257",
                        "states": []
                    },
                    {
                        "capital": "Porto-Novo",
                        "code": "BJ",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "XOF",
                        "languages": [
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            }
                        ],
                        "name": "Benin",
                        "native": "Bénin",
                        "phone": "229",
                        "states": []
                    },
                    {
                        "capital": "Gustavia",
                        "code": "BL",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "EUR",
                        "languages": [
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            }
                        ],
                        "name": "Saint Barthélemy",
                        "native": "Saint-Barthélemy",
                        "phone": "590",
                        "states": []
                    },
                    {
                        "capital": "Hamilton",
                        "code": "BM",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "BMD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Bermuda",
                        "native": "Bermuda",
                        "phone": "1441",
                        "states": []
                    },
                    {
                        "capital": "Bandar Seri Begawan",
                        "code": "BN",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "BND",
                        "languages": [
                            {
                                "code": "ms",
                                "name": "Malay",
                                "native": "Bahasa Melayu",
                                "rtl": false
                            }
                        ],
                        "name": "Brunei",
                        "native": "Negara Brunei Darussalam",
                        "phone": "673",
                        "states": []
                    },
                    {
                        "capital": "Sucre",
                        "code": "BO",
                        "continent": {
                            "code": "SA",
                            "name": "South America"
                        },
                        "currency": "BOB,BOV",
                        "languages": [
                            {
                                "code": "es",
                                "name": "Spanish",
                                "native": "Español",
                                "rtl": false
                            },
                            {
                                "code": "ay",
                                "name": "Aymara",
                                "native": "Aymar",
                                "rtl": false
                            },
                            {
                                "code": "qu",
                                "name": "Quechua",
                                "native": "Runa Simi",
                                "rtl": false
                            }
                        ],
                        "name": "Bolivia",
                        "native": "Bolivia",
                        "phone": "591",
                        "states": [
                            {
                                "code": null,
                                "name": "Cercado"
                            },
                            {
                                "code": null,
                                "name": "Iténez"
                            },
                            {
                                "code": null,
                                "name": "José Ballivián"
                            },
                            {
                                "code": null,
                                "name": "Mamoré"
                            },
                            {
                                "code": null,
                                "name": "Marbán"
                            },
                            {
                                "code": null,
                                "name": "Moxos"
                            },
                            {
                                "code": null,
                                "name": "Vaca Díez"
                            },
                            {
                                "code": null,
                                "name": "Yacuma"
                            },
                            {
                                "code": null,
                                "name": "Azurduy"
                            },
                            {
                                "code": null,
                                "name": "Belisario Boeto"
                            },
                            {
                                "code": null,
                                "name": "Hernando Siles"
                            },
                            {
                                "code": null,
                                "name": "Jaime Zudáñez"
                            },
                            {
                                "code": null,
                                "name": "Luis Calvo"
                            },
                            {
                                "code": null,
                                "name": "Nor Cinti"
                            },
                            {
                                "code": null,
                                "name": "Oropeza"
                            },
                            {
                                "code": null,
                                "name": "Sud Cinti"
                            },
                            {
                                "code": null,
                                "name": "Tomina"
                            },
                            {
                                "code": null,
                                "name": "Yamparáez"
                            },
                            {
                                "code": null,
                                "name": "Arani"
                            },
                            {
                                "code": null,
                                "name": "Arque"
                            },
                            {
                                "code": null,
                                "name": "Ayopaya"
                            },
                            {
                                "code": null,
                                "name": "Capinota"
                            },
                            {
                                "code": null,
                                "name": "Carrasco"
                            },
                            {
                                "code": null,
                                "name": "Cercado"
                            },
                            {
                                "code": null,
                                "name": "Chapare"
                            },
                            {
                                "code": null,
                                "name": "Esteban Arce"
                            },
                            {
                                "code": null,
                                "name": "Germán Jordán"
                            },
                            {
                                "code": null,
                                "name": "Mizque"
                            },
                            {
                                "code": null,
                                "name": "Campero"
                            },
                            {
                                "code": null,
                                "name": "Punata"
                            },
                            {
                                "code": null,
                                "name": "Quillacollo"
                            },
                            {
                                "code": null,
                                "name": "Bolívar"
                            },
                            {
                                "code": null,
                                "name": "Tapacarí"
                            },
                            {
                                "code": null,
                                "name": "Tiraque"
                            },
                            {
                                "code": null,
                                "name": "Abel Iturralde"
                            },
                            {
                                "code": null,
                                "name": "Aroma"
                            },
                            {
                                "code": null,
                                "name": "Bautista Saavedra"
                            },
                            {
                                "code": null,
                                "name": "Caranavi"
                            },
                            {
                                "code": null,
                                "name": "Eliodoro Camacho"
                            },
                            {
                                "code": null,
                                "name": "Franz Tamayo"
                            },
                            {
                                "code": null,
                                "name": "Gualberto Villarroel"
                            },
                            {
                                "code": null,
                                "name": "Ingavi"
                            },
                            {
                                "code": null,
                                "name": "Inquisivi"
                            },
                            {
                                "code": null,
                                "name": "José Manuel Pando"
                            },
                            {
                                "code": null,
                                "name": "Larecaja"
                            },
                            {
                                "code": null,
                                "name": "Loayza"
                            },
                            {
                                "code": null,
                                "name": "Los Andes"
                            },
                            {
                                "code": null,
                                "name": "Manco Kapac"
                            },
                            {
                                "code": null,
                                "name": "Muñecas"
                            },
                            {
                                "code": null,
                                "name": "Nor Yungas"
                            },
                            {
                                "code": null,
                                "name": "Omasuyos"
                            },
                            {
                                "code": null,
                                "name": "Pacajes"
                            },
                            {
                                "code": null,
                                "name": "Murillo"
                            },
                            {
                                "code": null,
                                "name": "Sud Yungas"
                            },
                            {
                                "code": null,
                                "name": "Atahuallpa"
                            },
                            {
                                "code": null,
                                "name": "Carangas"
                            },
                            {
                                "code": null,
                                "name": "Cercado"
                            },
                            {
                                "code": null,
                                "name": "Eduardo Avaroa"
                            },
                            {
                                "code": null,
                                "name": "Ladislao Cabrera"
                            },
                            {
                                "code": null,
                                "name": "Litoral"
                            },
                            {
                                "code": null,
                                "name": "Nor Carangas"
                            },
                            {
                                "code": null,
                                "name": "Pantaléon Dalence"
                            },
                            {
                                "code": null,
                                "name": "Poopó"
                            },
                            {
                                "code": null,
                                "name": "Puerto de Mejillones"
                            },
                            {
                                "code": null,
                                "name": "Sajama"
                            },
                            {
                                "code": null,
                                "name": "San Pedro de Totora"
                            },
                            {
                                "code": null,
                                "name": "Saucarí"
                            },
                            {
                                "code": null,
                                "name": "Sebastián Pagador"
                            },
                            {
                                "code": null,
                                "name": "Sud Carangas"
                            },
                            {
                                "code": null,
                                "name": "Tomas Barrón"
                            },
                            {
                                "code": null,
                                "name": "Abuná"
                            },
                            {
                                "code": null,
                                "name": "Federico Román"
                            },
                            {
                                "code": null,
                                "name": "Madre de Dios"
                            },
                            {
                                "code": null,
                                "name": "Manuripi"
                            },
                            {
                                "code": null,
                                "name": "Nicolás Suárez"
                            },
                            {
                                "code": null,
                                "name": "Alonso de Ibáñez"
                            },
                            {
                                "code": null,
                                "name": "Antonio Quijarro"
                            },
                            {
                                "code": null,
                                "name": "Bernardino Bilbao"
                            },
                            {
                                "code": null,
                                "name": "Charcas"
                            },
                            {
                                "code": null,
                                "name": "Chayanta"
                            },
                            {
                                "code": null,
                                "name": "Cornelio Saavedra"
                            },
                            {
                                "code": null,
                                "name": "Daniel Campos"
                            },
                            {
                                "code": null,
                                "name": "Enrique Baldivieso"
                            },
                            {
                                "code": null,
                                "name": "José María Linares"
                            },
                            {
                                "code": null,
                                "name": "Modesto Omiste"
                            },
                            {
                                "code": null,
                                "name": "Nor Chichas"
                            },
                            {
                                "code": null,
                                "name": "Nor Lípez"
                            },
                            {
                                "code": null,
                                "name": "Rafael Bustillo"
                            },
                            {
                                "code": null,
                                "name": "Sur Chichas"
                            },
                            {
                                "code": null,
                                "name": "Sur Lípez"
                            },
                            {
                                "code": null,
                                "name": "Tomás Frías"
                            },
                            {
                                "code": null,
                                "name": "Andrés Ibáñez"
                            },
                            {
                                "code": null,
                                "name": "Ángel Sandoval"
                            },
                            {
                                "code": null,
                                "name": "Chiquitos"
                            },
                            {
                                "code": null,
                                "name": "Cordillera"
                            },
                            {
                                "code": null,
                                "name": "Florida"
                            },
                            {
                                "code": null,
                                "name": "Germán Busch"
                            },
                            {
                                "code": null,
                                "name": "Guarayos"
                            },
                            {
                                "code": null,
                                "name": "Ichilo"
                            },
                            {
                                "code": null,
                                "name": "Ignacio Warnes"
                            },
                            {
                                "code": null,
                                "name": "José Miguel de Velasco"
                            },
                            {
                                "code": null,
                                "name": "Manuel María Caballero"
                            },
                            {
                                "code": null,
                                "name": "Ñuflo de Chávez"
                            },
                            {
                                "code": null,
                                "name": "Obispo Santistevan"
                            },
                            {
                                "code": null,
                                "name": "Sara"
                            },
                            {
                                "code": null,
                                "name": "Vallegrande"
                            },
                            {
                                "code": null,
                                "name": "Aniceto Arce"
                            },
                            {
                                "code": null,
                                "name": "Burnet O'Connor"
                            },
                            {
                                "code": null,
                                "name": "Cercado"
                            },
                            {
                                "code": null,
                                "name": "Eustaquio Méndez"
                            },
                            {
                                "code": null,
                                "name": "Gran Chaco"
                            },
                            {
                                "code": null,
                                "name": "José María Avilés"
                            }
                        ]
                    },
                    {
                        "capital": "Kralendijk",
                        "code": "BQ",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "USD",
                        "languages": [
                            {
                                "code": "nl",
                                "name": "Dutch",
                                "native": "Nederlands",
                                "rtl": false
                            }
                        ],
                        "name": "Bonaire",
                        "native": "Bonaire",
                        "phone": "5997",
                        "states": []
                    },
                    {
                        "capital": "Brasília",
                        "code": "BR",
                        "continent": {
                            "code": "SA",
                            "name": "South America"
                        },
                        "currency": "BRL",
                        "languages": [
                            {
                                "code": "pt",
                                "name": "Portuguese",
                                "native": "Português",
                                "rtl": false
                            }
                        ],
                        "name": "Brazil",
                        "native": "Brasil",
                        "phone": "55",
                        "states": [
                            {
                                "code": "AC",
                                "name": "Acre"
                            },
                            {
                                "code": "AL",
                                "name": "Alagoas"
                            },
                            {
                                "code": "AP",
                                "name": "Amapá"
                            },
                            {
                                "code": "AM",
                                "name": "Amazonas"
                            },
                            {
                                "code": "BA",
                                "name": "Bahia"
                            },
                            {
                                "code": "CE",
                                "name": "Ceará"
                            },
                            {
                                "code": "DF",
                                "name": "Distrito Federal"
                            },
                            {
                                "code": "ES",
                                "name": "Espírito Santo"
                            },
                            {
                                "code": "GO",
                                "name": "Goiás"
                            },
                            {
                                "code": "MA",
                                "name": "Maranhão"
                            },
                            {
                                "code": "MT",
                                "name": "Mato Grosso"
                            },
                            {
                                "code": "MS",
                                "name": "Mato Grosso do Sul"
                            },
                            {
                                "code": "MG",
                                "name": "Minas Gerais"
                            },
                            {
                                "code": "PA",
                                "name": "Pará"
                            },
                            {
                                "code": "PB",
                                "name": "Paraíba"
                            },
                            {
                                "code": "PR",
                                "name": "Paraná"
                            },
                            {
                                "code": "PE",
                                "name": "Pernambuco"
                            },
                            {
                                "code": "PI",
                                "name": "Piauí"
                            },
                            {
                                "code": "RJ",
                                "name": "Rio de Janeiro"
                            },
                            {
                                "code": "RN",
                                "name": "Rio Grande do Norte"
                            },
                            {
                                "code": "RS",
                                "name": "Rio Grande do Sul"
                            },
                            {
                                "code": "RO",
                                "name": "Rondônia"
                            },
                            {
                                "code": "RR",
                                "name": "Roraima"
                            },
                            {
                                "code": "SC",
                                "name": "Santa Catarina"
                            },
                            {
                                "code": "SP",
                                "name": "São Paulo"
                            },
                            {
                                "code": "SE",
                                "name": "Sergipe"
                            },
                            {
                                "code": "TO",
                                "name": "Tocantins"
                            }
                        ]
                    },
                    {
                        "capital": "Nassau",
                        "code": "BS",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "BSD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Bahamas",
                        "native": "Bahamas",
                        "phone": "1242",
                        "states": []
                    },
                    {
                        "capital": "Thimphu",
                        "code": "BT",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "BTN,INR",
                        "languages": [
                            {
                                "code": "dz",
                                "name": "Dzongkha",
                                "native": "ཇོང་ཁ",
                                "rtl": false
                            }
                        ],
                        "name": "Bhutan",
                        "native": "ʼbrug-yul",
                        "phone": "975",
                        "states": []
                    },
                    {
                        "capital": null,
                        "code": "BV",
                        "continent": {
                            "code": "AN",
                            "name": "Antarctica"
                        },
                        "currency": "NOK",
                        "languages": [
                            {
                                "code": "no",
                                "name": "Norwegian",
                                "native": "Norsk",
                                "rtl": false
                            },
                            {
                                "code": "nb",
                                "name": "Norwegian Bokmål",
                                "native": "Norsk bokmål",
                                "rtl": false
                            },
                            {
                                "code": "nn",
                                "name": "Norwegian Nynorsk",
                                "native": "Norsk nynorsk",
                                "rtl": false
                            }
                        ],
                        "name": "Bouvet Island",
                        "native": "Bouvetøya",
                        "phone": "47",
                        "states": []
                    },
                    {
                        "capital": "Gaborone",
                        "code": "BW",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "BWP",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            },
                            {
                                "code": "tn",
                                "name": "Tswana",
                                "native": "Setswana",
                                "rtl": false
                            }
                        ],
                        "name": "Botswana",
                        "native": "Botswana",
                        "phone": "267",
                        "states": []
                    },
                    {
                        "capital": "Minsk",
                        "code": "BY",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "BYN",
                        "languages": [
                            {
                                "code": "be",
                                "name": "Belarusian",
                                "native": "Беларуская",
                                "rtl": false
                            },
                            {
                                "code": "ru",
                                "name": "Russian",
                                "native": "Русский",
                                "rtl": false
                            }
                        ],
                        "name": "Belarus",
                        "native": "Белару́сь",
                        "phone": "375",
                        "states": []
                    },
                    {
                        "capital": "Belmopan",
                        "code": "BZ",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "BZD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            },
                            {
                                "code": "es",
                                "name": "Spanish",
                                "native": "Español",
                                "rtl": false
                            }
                        ],
                        "name": "Belize",
                        "native": "Belize",
                        "phone": "501",
                        "states": []
                    },
                    {
                        "capital": "Ottawa",
                        "code": "CA",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "CAD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            },
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            }
                        ],
                        "name": "Canada",
                        "native": "Canada",
                        "phone": "1",
                        "states": [
                            {
                                "code": "AB",
                                "name": "Alberta"
                            },
                            {
                                "code": "BC",
                                "name": "British Columbia"
                            },
                            {
                                "code": "MB",
                                "name": "Manitoba"
                            },
                            {
                                "code": "NB",
                                "name": "New Brunswick"
                            },
                            {
                                "code": "NL",
                                "name": "Newfoundland and Labrador"
                            },
                            {
                                "code": "NS",
                                "name": "Nova Scotia"
                            },
                            {
                                "code": "NU",
                                "name": "Nunavut"
                            },
                            {
                                "code": "NT",
                                "name": "Northwest Territories"
                            },
                            {
                                "code": "ON",
                                "name": "Ontario"
                            },
                            {
                                "code": "PE",
                                "name": "Prince Edward Island"
                            },
                            {
                                "code": "QC",
                                "name": "Quebec"
                            },
                            {
                                "code": "SK",
                                "name": "Saskatchewan"
                            },
                            {
                                "code": "YT",
                                "name": "Yukon"
                            }
                        ]
                    },
                    {
                        "capital": "West Island",
                        "code": "CC",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "AUD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Cocos [Keeling] Islands",
                        "native": "Cocos (Keeling) Islands",
                        "phone": "61",
                        "states": []
                    },
                    {
                        "capital": "Kinshasa",
                        "code": "CD",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "CDF",
                        "languages": [
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            },
                            {
                                "code": "ln",
                                "name": "Lingala",
                                "native": "Lingála",
                                "rtl": false
                            },
                            {
                                "code": "kg",
                                "name": "Kongo",
                                "native": "KiKongo",
                                "rtl": false
                            },
                            {
                                "code": "sw",
                                "name": "Swahili",
                                "native": "Kiswahili",
                                "rtl": false
                            },
                            {
                                "code": "lu",
                                "name": "Luba-Katanga",
                                "native": "Tshiluba",
                                "rtl": false
                            }
                        ],
                        "name": "Democratic Republic of the Congo",
                        "native": "République démocratique du Congo",
                        "phone": "243",
                        "states": []
                    },
                    {
                        "capital": "Bangui",
                        "code": "CF",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "XAF",
                        "languages": [
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            },
                            {
                                "code": "sg",
                                "name": "Sango",
                                "native": "Sängö",
                                "rtl": false
                            }
                        ],
                        "name": "Central African Republic",
                        "native": "Ködörösêse tî Bêafrîka",
                        "phone": "236",
                        "states": []
                    },
                    {
                        "capital": "Brazzaville",
                        "code": "CG",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "XAF",
                        "languages": [
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            },
                            {
                                "code": "ln",
                                "name": "Lingala",
                                "native": "Lingála",
                                "rtl": false
                            }
                        ],
                        "name": "Republic of the Congo",
                        "native": "République du Congo",
                        "phone": "242",
                        "states": []
                    },
                    {
                        "capital": "Bern",
                        "code": "CH",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "CHE,CHF,CHW",
                        "languages": [
                            {
                                "code": "de",
                                "name": "German",
                                "native": "Deutsch",
                                "rtl": false
                            },
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            },
                            {
                                "code": "it",
                                "name": "Italian",
                                "native": "Italiano",
                                "rtl": false
                            }
                        ],
                        "name": "Switzerland",
                        "native": "Schweiz",
                        "phone": "41",
                        "states": []
                    },
                    {
                        "capital": "Yamoussoukro",
                        "code": "CI",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "XOF",
                        "languages": [
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            }
                        ],
                        "name": "Ivory Coast",
                        "native": "Côte d'Ivoire",
                        "phone": "225",
                        "states": []
                    },
                    {
                        "capital": "Avarua",
                        "code": "CK",
                        "continent": {
                            "code": "OC",
                            "name": "Oceania"
                        },
                        "currency": "NZD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Cook Islands",
                        "native": "Cook Islands",
                        "phone": "682",
                        "states": []
                    },
                    {
                        "capital": "Santiago",
                        "code": "CL",
                        "continent": {
                            "code": "SA",
                            "name": "South America"
                        },
                        "currency": "CLF,CLP",
                        "languages": [
                            {
                                "code": "es",
                                "name": "Spanish",
                                "native": "Español",
                                "rtl": false
                            }
                        ],
                        "name": "Chile",
                        "native": "Chile",
                        "phone": "56",
                        "states": [
                            {
                                "code": null,
                                "name": "Arica"
                            },
                            {
                                "code": null,
                                "name": "Parinacota"
                            },
                            {
                                "code": null,
                                "name": "Iquique"
                            },
                            {
                                "code": null,
                                "name": "Tamarugal"
                            },
                            {
                                "code": null,
                                "name": "Antofagasta"
                            },
                            {
                                "code": null,
                                "name": "El Loa"
                            },
                            {
                                "code": null,
                                "name": "Tocopilla"
                            },
                            {
                                "code": null,
                                "name": "Copiapó"
                            },
                            {
                                "code": null,
                                "name": "Huasco"
                            },
                            {
                                "code": null,
                                "name": "Chañaral"
                            },
                            {
                                "code": null,
                                "name": "Elqui"
                            },
                            {
                                "code": null,
                                "name": "Limarí"
                            },
                            {
                                "code": null,
                                "name": "Choapa"
                            },
                            {
                                "code": null,
                                "name": "Isla de Pascua"
                            },
                            {
                                "code": null,
                                "name": "Los Andes"
                            },
                            {
                                "code": null,
                                "name": "Marga Marga"
                            },
                            {
                                "code": null,
                                "name": "Petorca"
                            },
                            {
                                "code": null,
                                "name": "Quillota"
                            },
                            {
                                "code": null,
                                "name": "San Antonio"
                            },
                            {
                                "code": null,
                                "name": "San Felipe de Aconcagua"
                            },
                            {
                                "code": null,
                                "name": "Valparaíso"
                            },
                            {
                                "code": null,
                                "name": "Cachapoal"
                            },
                            {
                                "code": null,
                                "name": "Colchagua"
                            },
                            {
                                "code": null,
                                "name": "Cardenal Caro"
                            },
                            {
                                "code": null,
                                "name": "Talca"
                            },
                            {
                                "code": null,
                                "name": "Linares"
                            },
                            {
                                "code": null,
                                "name": "Curicó"
                            },
                            {
                                "code": null,
                                "name": "Cauquenes"
                            },
                            {
                                "code": null,
                                "name": "Concepción"
                            },
                            {
                                "code": null,
                                "name": "Ñuble"
                            },
                            {
                                "code": null,
                                "name": "Biobío"
                            },
                            {
                                "code": null,
                                "name": "Arauco"
                            },
                            {
                                "code": null,
                                "name": "Cautin"
                            },
                            {
                                "code": null,
                                "name": "Malleco"
                            },
                            {
                                "code": null,
                                "name": "Valdivia"
                            },
                            {
                                "code": null,
                                "name": "Ranco"
                            },
                            {
                                "code": null,
                                "name": "Llanquihue"
                            },
                            {
                                "code": null,
                                "name": "Osorno"
                            },
                            {
                                "code": null,
                                "name": "Chiloe"
                            },
                            {
                                "code": null,
                                "name": "Palena"
                            },
                            {
                                "code": null,
                                "name": "Coihaique"
                            },
                            {
                                "code": null,
                                "name": "Aisén"
                            },
                            {
                                "code": null,
                                "name": "General Carrera"
                            },
                            {
                                "code": null,
                                "name": "Capitan Prat"
                            },
                            {
                                "code": null,
                                "name": "Magallanes"
                            },
                            {
                                "code": null,
                                "name": "Ultima Esperanza"
                            },
                            {
                                "code": null,
                                "name": "Tierra del Fuego"
                            },
                            {
                                "code": null,
                                "name": "Antártica Chilena"
                            },
                            {
                                "code": null,
                                "name": "Santiago"
                            },
                            {
                                "code": null,
                                "name": "Cordillera"
                            },
                            {
                                "code": null,
                                "name": "Maipo"
                            },
                            {
                                "code": null,
                                "name": "Talagante"
                            },
                            {
                                "code": null,
                                "name": "Melipilla"
                            },
                            {
                                "code": null,
                                "name": "Chacabuco"
                            }
                        ]
                    },
                    {
                        "capital": "Yaoundé",
                        "code": "CM",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "XAF",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            },
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            }
                        ],
                        "name": "Cameroon",
                        "native": "Cameroon",
                        "phone": "237",
                        "states": []
                    },
                    {
                        "capital": "Beijing",
                        "code": "CN",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "CNY",
                        "languages": [
                            {
                                "code": "zh",
                                "name": "Chinese",
                                "native": "中文",
                                "rtl": false
                            }
                        ],
                        "name": "China",
                        "native": "中国",
                        "phone": "86",
                        "states": [
                            {
                                "code": "渝",
                                "name": "重庆"
                            },
                            {
                                "code": "黑",
                                "name": "黑龙江"
                            },
                            {
                                "code": "吉",
                                "name": "吉林"
                            },
                            {
                                "code": "琼",
                                "name": "海南"
                            },
                            {
                                "code": "京",
                                "name": "北京"
                            },
                            {
                                "code": "辽",
                                "name": "辽宁"
                            },
                            {
                                "code": "蒙",
                                "name": "内蒙古"
                            },
                            {
                                "code": "藏",
                                "name": "西藏"
                            },
                            {
                                "code": "青",
                                "name": "青海"
                            },
                            {
                                "code": "宁",
                                "name": "宁夏"
                            },
                            {
                                "code": "新",
                                "name": "新疆"
                            },
                            {
                                "code": "甘",
                                "name": "甘肃"
                            },
                            {
                                "code": "冀",
                                "name": "河北"
                            },
                            {
                                "code": "豫",
                                "name": "河南"
                            },
                            {
                                "code": "鄂",
                                "name": "湖北"
                            },
                            {
                                "code": "湘",
                                "name": "湖南"
                            },
                            {
                                "code": "鲁",
                                "name": "山东"
                            },
                            {
                                "code": "苏",
                                "name": "江苏"
                            },
                            {
                                "code": "皖",
                                "name": "安徽"
                            },
                            {
                                "code": "晋",
                                "name": "山西"
                            },
                            {
                                "code": "陕",
                                "name": "陕西"
                            },
                            {
                                "code": "川",
                                "name": "四川"
                            },
                            {
                                "code": "滇",
                                "name": "云南"
                            },
                            {
                                "code": "黔",
                                "name": "贵州"
                            },
                            {
                                "code": "浙",
                                "name": "浙江"
                            },
                            {
                                "code": "闽",
                                "name": "福建"
                            },
                            {
                                "code": "桂",
                                "name": "广西"
                            },
                            {
                                "code": "沪",
                                "name": "上海"
                            },
                            {
                                "code": "津",
                                "name": "天津"
                            },
                            {
                                "code": "港",
                                "name": "香港"
                            },
                            {
                                "code": "澳",
                                "name": "澳门"
                            },
                            {
                                "code": "台",
                                "name": "台湾"
                            },
                            {
                                "code": "赣",
                                "name": "江西"
                            },
                            {
                                "code": "粤",
                                "name": "广东"
                            }
                        ]
                    },
                    {
                        "capital": "Bogotá",
                        "code": "CO",
                        "continent": {
                            "code": "SA",
                            "name": "South America"
                        },
                        "currency": "COP",
                        "languages": [
                            {
                                "code": "es",
                                "name": "Spanish",
                                "native": "Español",
                                "rtl": false
                            }
                        ],
                        "name": "Colombia",
                        "native": "Colombia",
                        "phone": "57",
                        "states": []
                    },
                    {
                        "capital": "San José",
                        "code": "CR",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "CRC",
                        "languages": [
                            {
                                "code": "es",
                                "name": "Spanish",
                                "native": "Español",
                                "rtl": false
                            }
                        ],
                        "name": "Costa Rica",
                        "native": "Costa Rica",
                        "phone": "506",
                        "states": [
                            {
                                "code": null,
                                "name": "San José"
                            },
                            {
                                "code": null,
                                "name": "Alajuela"
                            },
                            {
                                "code": null,
                                "name": "Cartago"
                            },
                            {
                                "code": null,
                                "name": "Heredia"
                            },
                            {
                                "code": null,
                                "name": "Guanacaste"
                            },
                            {
                                "code": null,
                                "name": "Puntarenas"
                            },
                            {
                                "code": null,
                                "name": "Limón"
                            }
                        ]
                    },
                    {
                        "capital": "Havana",
                        "code": "CU",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "CUC,CUP",
                        "languages": [
                            {
                                "code": "es",
                                "name": "Spanish",
                                "native": "Español",
                                "rtl": false
                            }
                        ],
                        "name": "Cuba",
                        "native": "Cuba",
                        "phone": "53",
                        "states": [
                            {
                                "code": null,
                                "name": "Camagüey"
                            },
                            {
                                "code": null,
                                "name": "Ciego de Ávila"
                            },
                            {
                                "code": null,
                                "name": "Cienfuegos"
                            },
                            {
                                "code": null,
                                "name": "Havana"
                            },
                            {
                                "code": null,
                                "name": "Bayamo"
                            },
                            {
                                "code": null,
                                "name": "Guantánamo"
                            },
                            {
                                "code": null,
                                "name": "Holguín"
                            },
                            {
                                "code": null,
                                "name": "Nueva Gerona"
                            },
                            {
                                "code": null,
                                "name": "Artemisa"
                            },
                            {
                                "code": null,
                                "name": "Las Tunas"
                            },
                            {
                                "code": null,
                                "name": "Matanzas"
                            },
                            {
                                "code": null,
                                "name": "San José de las Lajas"
                            },
                            {
                                "code": null,
                                "name": "Pinar del Río"
                            },
                            {
                                "code": null,
                                "name": "Sancti Spíritus"
                            },
                            {
                                "code": null,
                                "name": "Santiago de Cuba"
                            },
                            {
                                "code": null,
                                "name": "Santa Clara"
                            }
                        ]
                    },
                    {
                        "capital": "Praia",
                        "code": "CV",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "CVE",
                        "languages": [
                            {
                                "code": "pt",
                                "name": "Portuguese",
                                "native": "Português",
                                "rtl": false
                            }
                        ],
                        "name": "Cape Verde",
                        "native": "Cabo Verde",
                        "phone": "238",
                        "states": []
                    },
                    {
                        "capital": "Willemstad",
                        "code": "CW",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "ANG",
                        "languages": [
                            {
                                "code": "nl",
                                "name": "Dutch",
                                "native": "Nederlands",
                                "rtl": false
                            },
                            {
                                "code": "pa",
                                "name": "Panjabi / Punjabi",
                                "native": "ਪੰਜਾਬੀ / पंजाबी / پنجابي",
                                "rtl": false
                            },
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Curacao",
                        "native": "Curaçao",
                        "phone": "5999",
                        "states": []
                    },
                    {
                        "capital": "Flying Fish Cove",
                        "code": "CX",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "AUD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Christmas Island",
                        "native": "Christmas Island",
                        "phone": "61",
                        "states": []
                    },
                    {
                        "capital": "Nicosia",
                        "code": "CY",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "EUR",
                        "languages": [
                            {
                                "code": "el",
                                "name": "Greek",
                                "native": "Ελληνικά",
                                "rtl": false
                            },
                            {
                                "code": "tr",
                                "name": "Turkish",
                                "native": "Türkçe",
                                "rtl": false
                            },
                            {
                                "code": "hy",
                                "name": "Armenian",
                                "native": "Հայերեն",
                                "rtl": false
                            }
                        ],
                        "name": "Cyprus",
                        "native": "Κύπρος",
                        "phone": "357",
                        "states": []
                    },
                    {
                        "capital": "Prague",
                        "code": "CZ",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "CZK",
                        "languages": [
                            {
                                "code": "cs",
                                "name": "Czech",
                                "native": "Česky",
                                "rtl": false
                            },
                            {
                                "code": "sk",
                                "name": "Slovak",
                                "native": "Slovenčina",
                                "rtl": false
                            }
                        ],
                        "name": "Czech Republic",
                        "native": "Česká republika",
                        "phone": "420",
                        "states": []
                    },
                    {
                        "capital": "Berlin",
                        "code": "DE",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "EUR",
                        "languages": [
                            {
                                "code": "de",
                                "name": "German",
                                "native": "Deutsch",
                                "rtl": false
                            }
                        ],
                        "name": "Germany",
                        "native": "Deutschland",
                        "phone": "49",
                        "states": [
                            {
                                "code": "BW",
                                "name": "Baden-Württemberg"
                            },
                            {
                                "code": "BY",
                                "name": "Bayern"
                            },
                            {
                                "code": "BE",
                                "name": "Berlin"
                            },
                            {
                                "code": "BB",
                                "name": "Brandenburg"
                            },
                            {
                                "code": "HB",
                                "name": "Bremen"
                            },
                            {
                                "code": "HH",
                                "name": "Hamburg"
                            },
                            {
                                "code": "HE",
                                "name": "Hessen"
                            },
                            {
                                "code": "MV",
                                "name": "Mecklenburg-Vorpommern"
                            },
                            {
                                "code": "NI",
                                "name": "Niedersachsen"
                            },
                            {
                                "code": "NW",
                                "name": "Nordrhein-Westfalen"
                            },
                            {
                                "code": "RP",
                                "name": "Rheinland-Pfalz"
                            },
                            {
                                "code": "SL",
                                "name": "Saarland"
                            },
                            {
                                "code": "SN",
                                "name": "Sachsen"
                            },
                            {
                                "code": "ST",
                                "name": "Sachsen-Anhalt"
                            },
                            {
                                "code": "SH",
                                "name": "Schleswig-Holstein"
                            },
                            {
                                "code": "TH",
                                "name": "Thüringen"
                            }
                        ]
                    },
                    {
                        "capital": "Djibouti",
                        "code": "DJ",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "DJF",
                        "languages": [
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            },
                            {
                                "code": "ar",
                                "name": "Arabic",
                                "native": "العربية",
                                "rtl": true
                            }
                        ],
                        "name": "Djibouti",
                        "native": "Djibouti",
                        "phone": "253",
                        "states": []
                    },
                    {
                        "capital": "Copenhagen",
                        "code": "DK",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "DKK",
                        "languages": [
                            {
                                "code": "da",
                                "name": "Danish",
                                "native": "Dansk",
                                "rtl": false
                            }
                        ],
                        "name": "Denmark",
                        "native": "Danmark",
                        "phone": "45",
                        "states": [
                            {
                                "code": null,
                                "name": "Hovedstaden"
                            },
                            {
                                "code": null,
                                "name": "Midtjylland"
                            },
                            {
                                "code": null,
                                "name": "Nordjylland"
                            },
                            {
                                "code": null,
                                "name": "Sjælland"
                            },
                            {
                                "code": null,
                                "name": "Syddanmark"
                            }
                        ]
                    },
                    {
                        "capital": "Roseau",
                        "code": "DM",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "XCD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Dominica",
                        "native": "Dominica",
                        "phone": "1767",
                        "states": []
                    },
                    {
                        "capital": "Santo Domingo",
                        "code": "DO",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "DOP",
                        "languages": [
                            {
                                "code": "es",
                                "name": "Spanish",
                                "native": "Español",
                                "rtl": false
                            }
                        ],
                        "name": "Dominican Republic",
                        "native": "República Dominicana",
                        "phone": "1809,1829,1849",
                        "states": []
                    },
                    {
                        "capital": "Algiers",
                        "code": "DZ",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "DZD",
                        "languages": [
                            {
                                "code": "ar",
                                "name": "Arabic",
                                "native": "العربية",
                                "rtl": true
                            }
                        ],
                        "name": "Algeria",
                        "native": "الجزائر",
                        "phone": "213",
                        "states": []
                    },
                    {
                        "capital": "Quito",
                        "code": "EC",
                        "continent": {
                            "code": "SA",
                            "name": "South America"
                        },
                        "currency": "USD",
                        "languages": [
                            {
                                "code": "es",
                                "name": "Spanish",
                                "native": "Español",
                                "rtl": false
                            }
                        ],
                        "name": "Ecuador",
                        "native": "Ecuador",
                        "phone": "593",
                        "states": []
                    },
                    {
                        "capital": "Tallinn",
                        "code": "EE",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "EUR",
                        "languages": [
                            {
                                "code": "et",
                                "name": "Estonian",
                                "native": "Eesti",
                                "rtl": false
                            }
                        ],
                        "name": "Estonia",
                        "native": "Eesti",
                        "phone": "372",
                        "states": []
                    },
                    {
                        "capital": "Cairo",
                        "code": "EG",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "EGP",
                        "languages": [
                            {
                                "code": "ar",
                                "name": "Arabic",
                                "native": "العربية",
                                "rtl": true
                            }
                        ],
                        "name": "Egypt",
                        "native": "مصر‎",
                        "phone": "20",
                        "states": []
                    },
                    {
                        "capital": "El Aaiún",
                        "code": "EH",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "MAD,DZD,MRU",
                        "languages": [
                            {
                                "code": "es",
                                "name": "Spanish",
                                "native": "Español",
                                "rtl": false
                            }
                        ],
                        "name": "Western Sahara",
                        "native": "الصحراء الغربية",
                        "phone": "212",
                        "states": []
                    },
                    {
                        "capital": "Asmara",
                        "code": "ER",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "ERN",
                        "languages": [
                            {
                                "code": "ti",
                                "name": "Tigrinya",
                                "native": "ትግርኛ",
                                "rtl": false
                            },
                            {
                                "code": "ar",
                                "name": "Arabic",
                                "native": "العربية",
                                "rtl": true
                            },
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Eritrea",
                        "native": "ኤርትራ",
                        "phone": "291",
                        "states": []
                    },
                    {
                        "capital": "Madrid",
                        "code": "ES",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "EUR",
                        "languages": [
                            {
                                "code": "es",
                                "name": "Spanish",
                                "native": "Español",
                                "rtl": false
                            },
                            {
                                "code": "eu",
                                "name": "Basque",
                                "native": "Euskara",
                                "rtl": false
                            },
                            {
                                "code": "ca",
                                "name": "Catalan",
                                "native": "Català",
                                "rtl": false
                            },
                            {
                                "code": "gl",
                                "name": "Galician",
                                "native": "Galego",
                                "rtl": false
                            },
                            {
                                "code": "oc",
                                "name": "Occitan",
                                "native": "Occitan",
                                "rtl": false
                            }
                        ],
                        "name": "Spain",
                        "native": "España",
                        "phone": "34",
                        "states": [
                            {
                                "code": "C",
                                "name": "La Coruña"
                            },
                            {
                                "code": "LU",
                                "name": "Lugo"
                            },
                            {
                                "code": "BI",
                                "name": "Vizcaya"
                            },
                            {
                                "code": "SS",
                                "name": "Guipúzcoa"
                            },
                            {
                                "code": "HU",
                                "name": "Huesca"
                            },
                            {
                                "code": "L",
                                "name": "Lérida"
                            },
                            {
                                "code": "GI",
                                "name": "Gerona"
                            },
                            {
                                "code": "B",
                                "name": "Barcelona"
                            },
                            {
                                "code": "T",
                                "name": "Tarragona"
                            },
                            {
                                "code": "CS",
                                "name": "Castellón"
                            },
                            {
                                "code": "V",
                                "name": "Valencia"
                            },
                            {
                                "code": "A",
                                "name": "Alicante"
                            },
                            {
                                "code": "MU",
                                "name": "Murcia"
                            },
                            {
                                "code": "Z",
                                "name": "Zaragoza"
                            },
                            {
                                "code": "TE",
                                "name": "Teruel"
                            },
                            {
                                "code": "CU",
                                "name": "Cuenca"
                            },
                            {
                                "code": "AB",
                                "name": "Albacete"
                            },
                            {
                                "code": "AL",
                                "name": "Almeria"
                            },
                            {
                                "code": "GR",
                                "name": "Granada"
                            },
                            {
                                "code": "MA",
                                "name": "Málaga"
                            },
                            {
                                "code": "TF",
                                "name": "Tenerife"
                            },
                            {
                                "code": "CA",
                                "name": "Cádiz"
                            },
                            {
                                "code": "SE",
                                "name": "Sevilla"
                            },
                            {
                                "code": "H",
                                "name": "Huelva"
                            },
                            {
                                "code": "GC",
                                "name": "Las Palmas"
                            },
                            {
                                "code": "M",
                                "name": "Madrid"
                            },
                            {
                                "code": "BA",
                                "name": "Badajoz"
                            },
                            {
                                "code": "CC",
                                "name": "Cáceres"
                            },
                            {
                                "code": "TO",
                                "name": "Toledo"
                            },
                            {
                                "code": "CR",
                                "name": "Ciudad Real"
                            },
                            {
                                "code": "SA",
                                "name": "Salamanca"
                            },
                            {
                                "code": "CO",
                                "name": "Córdoba"
                            },
                            {
                                "code": "J",
                                "name": "Jaén"
                            },
                            {
                                "code": "AV",
                                "name": "Ávila"
                            },
                            {
                                "code": "VA",
                                "name": "Valladolid"
                            },
                            {
                                "code": "ZA",
                                "name": "Zamora"
                            },
                            {
                                "code": "VI",
                                "name": "Álava"
                            },
                            {
                                "code": "SG",
                                "name": "Segovia"
                            },
                            {
                                "code": "BU",
                                "name": "Burgos"
                            },
                            {
                                "code": "PO",
                                "name": "Pontevedra"
                            },
                            {
                                "code": "LE",
                                "name": "León"
                            },
                            {
                                "code": "OU",
                                "name": "Orense"
                            },
                            {
                                "code": "P",
                                "name": "Palencia"
                            },
                            {
                                "code": "LO",
                                "name": "La Rioja"
                            },
                            {
                                "code": "SO",
                                "name": "Soria"
                            },
                            {
                                "code": "GU",
                                "name": "Guadalajara"
                            }
                        ]
                    },
                    {
                        "capital": "Addis Ababa",
                        "code": "ET",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "ETB",
                        "languages": [
                            {
                                "code": "am",
                                "name": "Amharic",
                                "native": "አማርኛ",
                                "rtl": false
                            }
                        ],
                        "name": "Ethiopia",
                        "native": "ኢትዮጵያ",
                        "phone": "251",
                        "states": [
                            {
                                "code": null,
                                "name": "Addis Ababa"
                            },
                            {
                                "code": null,
                                "name": "Afar Region"
                            },
                            {
                                "code": null,
                                "name": "Amhara Region"
                            },
                            {
                                "code": null,
                                "name": "Benishangul-Gumuz"
                            },
                            {
                                "code": null,
                                "name": "Dire Dawa"
                            },
                            {
                                "code": null,
                                "name": "Gambela"
                            },
                            {
                                "code": null,
                                "name": "Harari"
                            },
                            {
                                "code": null,
                                "name": "Oromia"
                            },
                            {
                                "code": null,
                                "name": "Somali"
                            },
                            {
                                "code": null,
                                "name": "Southern Nations, Nationalities, and Peoples' Region"
                            },
                            {
                                "code": null,
                                "name": "Tigray Region"
                            }
                        ]
                    },
                    {
                        "capital": "Helsinki",
                        "code": "FI",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "EUR",
                        "languages": [
                            {
                                "code": "fi",
                                "name": "Finnish",
                                "native": "Suomi",
                                "rtl": false
                            },
                            {
                                "code": "sv",
                                "name": "Swedish",
                                "native": "Svenska",
                                "rtl": false
                            }
                        ],
                        "name": "Finland",
                        "native": "Suomi",
                        "phone": "358",
                        "states": []
                    },
                    {
                        "capital": "Suva",
                        "code": "FJ",
                        "continent": {
                            "code": "OC",
                            "name": "Oceania"
                        },
                        "currency": "FJD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            },
                            {
                                "code": "fj",
                                "name": "Fijian",
                                "native": "Na Vosa Vakaviti",
                                "rtl": false
                            },
                            {
                                "code": "hi",
                                "name": "Hindi",
                                "native": "हिन्दी",
                                "rtl": false
                            },
                            {
                                "code": "ur",
                                "name": "Urdu",
                                "native": "اردو",
                                "rtl": true
                            }
                        ],
                        "name": "Fiji",
                        "native": "Fiji",
                        "phone": "679",
                        "states": []
                    },
                    {
                        "capital": "Stanley",
                        "code": "FK",
                        "continent": {
                            "code": "SA",
                            "name": "South America"
                        },
                        "currency": "FKP",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Falkland Islands",
                        "native": "Falkland Islands",
                        "phone": "500",
                        "states": []
                    },
                    {
                        "capital": "Palikir",
                        "code": "FM",
                        "continent": {
                            "code": "OC",
                            "name": "Oceania"
                        },
                        "currency": "USD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Micronesia",
                        "native": "Micronesia",
                        "phone": "691",
                        "states": []
                    },
                    {
                        "capital": "Tórshavn",
                        "code": "FO",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "DKK",
                        "languages": [
                            {
                                "code": "fo",
                                "name": "Faroese",
                                "native": "Føroyskt",
                                "rtl": false
                            }
                        ],
                        "name": "Faroe Islands",
                        "native": "Føroyar",
                        "phone": "298",
                        "states": []
                    },
                    {
                        "capital": "Paris",
                        "code": "FR",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "EUR",
                        "languages": [
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            }
                        ],
                        "name": "France",
                        "native": "France",
                        "phone": "33",
                        "states": []
                    },
                    {
                        "capital": "Libreville",
                        "code": "GA",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "XAF",
                        "languages": [
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            }
                        ],
                        "name": "Gabon",
                        "native": "Gabon",
                        "phone": "241",
                        "states": []
                    },
                    {
                        "capital": "London",
                        "code": "GB",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "GBP",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "United Kingdom",
                        "native": "United Kingdom",
                        "phone": "44",
                        "states": [
                            {
                                "code": null,
                                "name": "Avon"
                            },
                            {
                                "code": null,
                                "name": "Bedfordshire"
                            },
                            {
                                "code": null,
                                "name": "Berkshire"
                            },
                            {
                                "code": null,
                                "name": "Borders"
                            },
                            {
                                "code": null,
                                "name": "Bristol"
                            },
                            {
                                "code": null,
                                "name": "Buckinghamshire"
                            },
                            {
                                "code": null,
                                "name": "Cambridgeshire"
                            },
                            {
                                "code": null,
                                "name": "Channel Islands"
                            },
                            {
                                "code": null,
                                "name": "Cheshire"
                            },
                            {
                                "code": null,
                                "name": "Cleveland"
                            },
                            {
                                "code": null,
                                "name": "Cornwall"
                            },
                            {
                                "code": null,
                                "name": "Cumbria"
                            },
                            {
                                "code": null,
                                "name": "Derbyshire"
                            },
                            {
                                "code": null,
                                "name": "Devon"
                            },
                            {
                                "code": null,
                                "name": "Dorset"
                            },
                            {
                                "code": null,
                                "name": "Durham"
                            },
                            {
                                "code": null,
                                "name": "East Riding of Yorkshire"
                            },
                            {
                                "code": null,
                                "name": "East Sussex"
                            },
                            {
                                "code": null,
                                "name": "Essex"
                            },
                            {
                                "code": null,
                                "name": "Gloucestershire"
                            },
                            {
                                "code": null,
                                "name": "Greater Manchester"
                            },
                            {
                                "code": null,
                                "name": "Hampshire"
                            },
                            {
                                "code": null,
                                "name": "Herefordshire"
                            },
                            {
                                "code": null,
                                "name": "Hertfordshire"
                            },
                            {
                                "code": null,
                                "name": "Humberside"
                            },
                            {
                                "code": null,
                                "name": "Isle of Man"
                            },
                            {
                                "code": null,
                                "name": "Isle of Wight"
                            },
                            {
                                "code": null,
                                "name": "Isles of Scilly"
                            },
                            {
                                "code": null,
                                "name": "Kent"
                            },
                            {
                                "code": null,
                                "name": "Lancashire"
                            },
                            {
                                "code": null,
                                "name": "Leicestershire"
                            },
                            {
                                "code": null,
                                "name": "Lincolnshire"
                            },
                            {
                                "code": null,
                                "name": "London"
                            },
                            {
                                "code": null,
                                "name": "Merseyside"
                            },
                            {
                                "code": null,
                                "name": "Middlesex"
                            },
                            {
                                "code": null,
                                "name": "Norfolk"
                            },
                            {
                                "code": null,
                                "name": "North Yorkshire"
                            },
                            {
                                "code": null,
                                "name": "Northamptonshire"
                            },
                            {
                                "code": null,
                                "name": "Northumberland"
                            },
                            {
                                "code": null,
                                "name": "Nottinghamshire"
                            },
                            {
                                "code": null,
                                "name": "Oxfordshire"
                            },
                            {
                                "code": null,
                                "name": "Rutland"
                            },
                            {
                                "code": null,
                                "name": "Shropshire"
                            },
                            {
                                "code": null,
                                "name": "Somerset"
                            },
                            {
                                "code": null,
                                "name": "South Yorkshire"
                            },
                            {
                                "code": null,
                                "name": "Staffordshire"
                            },
                            {
                                "code": null,
                                "name": "Suffolk"
                            },
                            {
                                "code": null,
                                "name": "Surrey"
                            },
                            {
                                "code": null,
                                "name": "Tyne and Wear"
                            },
                            {
                                "code": null,
                                "name": "Warwickshire"
                            },
                            {
                                "code": null,
                                "name": "West Midlands"
                            },
                            {
                                "code": null,
                                "name": "West Sussex"
                            },
                            {
                                "code": null,
                                "name": "West Yorkshire"
                            },
                            {
                                "code": null,
                                "name": "Wiltshire"
                            },
                            {
                                "code": null,
                                "name": "Worcestershire"
                            },
                            {
                                "code": null,
                                "name": "Antrim"
                            },
                            {
                                "code": null,
                                "name": "Down"
                            },
                            {
                                "code": null,
                                "name": "Fermanagh"
                            },
                            {
                                "code": null,
                                "name": "Londonderry"
                            },
                            {
                                "code": null,
                                "name": "Tyrone"
                            },
                            {
                                "code": null,
                                "name": "Aberdeen City"
                            },
                            {
                                "code": null,
                                "name": "Aberdeenshire"
                            },
                            {
                                "code": null,
                                "name": "Angus"
                            },
                            {
                                "code": null,
                                "name": "Argyll and Bute"
                            },
                            {
                                "code": null,
                                "name": "Armagh"
                            },
                            {
                                "code": null,
                                "name": "Carmarthenshire"
                            },
                            {
                                "code": null,
                                "name": "Clackmannan"
                            },
                            {
                                "code": null,
                                "name": "Dumfries and Galloway"
                            },
                            {
                                "code": null,
                                "name": "East Ayrshire"
                            },
                            {
                                "code": null,
                                "name": "East Dunbartonshire"
                            },
                            {
                                "code": null,
                                "name": "East Lothian"
                            },
                            {
                                "code": null,
                                "name": "East Renfrewshire"
                            },
                            {
                                "code": null,
                                "name": "Edinburgh City"
                            },
                            {
                                "code": null,
                                "name": "Falkirk"
                            },
                            {
                                "code": null,
                                "name": "Fife"
                            },
                            {
                                "code": null,
                                "name": "Glasgow"
                            },
                            {
                                "code": null,
                                "name": "Highland"
                            },
                            {
                                "code": null,
                                "name": "Inverclyde"
                            },
                            {
                                "code": null,
                                "name": "Midlothian"
                            },
                            {
                                "code": null,
                                "name": "Moray"
                            },
                            {
                                "code": null,
                                "name": "North Ayrshire"
                            },
                            {
                                "code": null,
                                "name": "North Lanarkshire"
                            },
                            {
                                "code": null,
                                "name": "Orkney"
                            },
                            {
                                "code": null,
                                "name": "Perthshire and Kinross"
                            },
                            {
                                "code": null,
                                "name": "Renfrewshire"
                            },
                            {
                                "code": null,
                                "name": "Roxburghshire"
                            },
                            {
                                "code": null,
                                "name": "Shetland"
                            },
                            {
                                "code": null,
                                "name": "South Ayrshire"
                            },
                            {
                                "code": null,
                                "name": "South Lanarkshire"
                            },
                            {
                                "code": null,
                                "name": "Stirling"
                            },
                            {
                                "code": null,
                                "name": "West Dunbartonshire"
                            },
                            {
                                "code": null,
                                "name": "West Lothian"
                            },
                            {
                                "code": null,
                                "name": "Western Isles"
                            },
                            {
                                "code": null,
                                "name": "Blaenau Gwent"
                            },
                            {
                                "code": null,
                                "name": "Bridgend"
                            },
                            {
                                "code": null,
                                "name": "Caerphilly"
                            },
                            {
                                "code": null,
                                "name": "Cardiff"
                            },
                            {
                                "code": null,
                                "name": "Ceredigion"
                            },
                            {
                                "code": null,
                                "name": "Conwy"
                            },
                            {
                                "code": null,
                                "name": "Denbighshire"
                            },
                            {
                                "code": null,
                                "name": "Flintshire"
                            },
                            {
                                "code": null,
                                "name": "Gwynedd"
                            },
                            {
                                "code": null,
                                "name": "Isle of Anglesey"
                            },
                            {
                                "code": null,
                                "name": "Merthyr Tydfil"
                            },
                            {
                                "code": null,
                                "name": "Monmouthshire"
                            },
                            {
                                "code": null,
                                "name": "Neath Port Talbot"
                            },
                            {
                                "code": null,
                                "name": "Newport"
                            },
                            {
                                "code": null,
                                "name": "Pembrokeshire"
                            },
                            {
                                "code": null,
                                "name": "Powys"
                            },
                            {
                                "code": null,
                                "name": "Rhondda Cynon Taff"
                            },
                            {
                                "code": null,
                                "name": "Swansea"
                            },
                            {
                                "code": null,
                                "name": "The Vale of Glamorgan"
                            },
                            {
                                "code": null,
                                "name": "Torfaen"
                            },
                            {
                                "code": null,
                                "name": "Wrexham"
                            }
                        ]
                    },
                    {
                        "capital": "St. George's",
                        "code": "GD",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "XCD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Grenada",
                        "native": "Grenada",
                        "phone": "1473",
                        "states": []
                    },
                    {
                        "capital": "Tbilisi",
                        "code": "GE",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "GEL",
                        "languages": [
                            {
                                "code": "ka",
                                "name": "Georgian",
                                "native": "ქართული",
                                "rtl": false
                            }
                        ],
                        "name": "Georgia",
                        "native": "საქართველო",
                        "phone": "995",
                        "states": []
                    },
                    {
                        "capital": "Cayenne",
                        "code": "GF",
                        "continent": {
                            "code": "SA",
                            "name": "South America"
                        },
                        "currency": "EUR",
                        "languages": [
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            }
                        ],
                        "name": "French Guiana",
                        "native": "Guyane française",
                        "phone": "594",
                        "states": []
                    },
                    {
                        "capital": "St. Peter Port",
                        "code": "GG",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "GBP",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            },
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            }
                        ],
                        "name": "Guernsey",
                        "native": "Guernsey",
                        "phone": "44",
                        "states": []
                    },
                    {
                        "capital": "Accra",
                        "code": "GH",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "GHS",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Ghana",
                        "native": "Ghana",
                        "phone": "233",
                        "states": []
                    },
                    {
                        "capital": "Gibraltar",
                        "code": "GI",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "GIP",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Gibraltar",
                        "native": "Gibraltar",
                        "phone": "350",
                        "states": []
                    },
                    {
                        "capital": "Nuuk",
                        "code": "GL",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "DKK",
                        "languages": [
                            {
                                "code": "kl",
                                "name": "Greenlandic",
                                "native": "Kalaallisut",
                                "rtl": false
                            }
                        ],
                        "name": "Greenland",
                        "native": "Kalaallit Nunaat",
                        "phone": "299",
                        "states": []
                    },
                    {
                        "capital": "Banjul",
                        "code": "GM",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "GMD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Gambia",
                        "native": "Gambia",
                        "phone": "220",
                        "states": []
                    },
                    {
                        "capital": "Conakry",
                        "code": "GN",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "GNF",
                        "languages": [
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            },
                            {
                                "code": "ff",
                                "name": "Peul",
                                "native": "Fulfulde",
                                "rtl": false
                            }
                        ],
                        "name": "Guinea",
                        "native": "Guinée",
                        "phone": "224",
                        "states": []
                    },
                    {
                        "capital": "Basse-Terre",
                        "code": "GP",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "EUR",
                        "languages": [
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            }
                        ],
                        "name": "Guadeloupe",
                        "native": "Guadeloupe",
                        "phone": "590",
                        "states": []
                    },
                    {
                        "capital": "Malabo",
                        "code": "GQ",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "XAF",
                        "languages": [
                            {
                                "code": "es",
                                "name": "Spanish",
                                "native": "Español",
                                "rtl": false
                            },
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            }
                        ],
                        "name": "Equatorial Guinea",
                        "native": "Guinea Ecuatorial",
                        "phone": "240",
                        "states": []
                    },
                    {
                        "capital": "Athens",
                        "code": "GR",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "EUR",
                        "languages": [
                            {
                                "code": "el",
                                "name": "Greek",
                                "native": "Ελληνικά",
                                "rtl": false
                            }
                        ],
                        "name": "Greece",
                        "native": "Ελλάδα",
                        "phone": "30",
                        "states": []
                    },
                    {
                        "capital": "King Edward Point",
                        "code": "GS",
                        "continent": {
                            "code": "AN",
                            "name": "Antarctica"
                        },
                        "currency": "GBP",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "South Georgia and the South Sandwich Islands",
                        "native": "South Georgia",
                        "phone": "500",
                        "states": []
                    },
                    {
                        "capital": "Guatemala City",
                        "code": "GT",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "GTQ",
                        "languages": [
                            {
                                "code": "es",
                                "name": "Spanish",
                                "native": "Español",
                                "rtl": false
                            }
                        ],
                        "name": "Guatemala",
                        "native": "Guatemala",
                        "phone": "502",
                        "states": []
                    },
                    {
                        "capital": "Hagåtña",
                        "code": "GU",
                        "continent": {
                            "code": "OC",
                            "name": "Oceania"
                        },
                        "currency": "USD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            },
                            {
                                "code": "ch",
                                "name": "Chamorro",
                                "native": "Chamoru",
                                "rtl": false
                            },
                            {
                                "code": "es",
                                "name": "Spanish",
                                "native": "Español",
                                "rtl": false
                            }
                        ],
                        "name": "Guam",
                        "native": "Guam",
                        "phone": "1671",
                        "states": []
                    },
                    {
                        "capital": "Bissau",
                        "code": "GW",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "XOF",
                        "languages": [
                            {
                                "code": "pt",
                                "name": "Portuguese",
                                "native": "Português",
                                "rtl": false
                            }
                        ],
                        "name": "Guinea-Bissau",
                        "native": "Guiné-Bissau",
                        "phone": "245",
                        "states": []
                    },
                    {
                        "capital": "Georgetown",
                        "code": "GY",
                        "continent": {
                            "code": "SA",
                            "name": "South America"
                        },
                        "currency": "GYD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Guyana",
                        "native": "Guyana",
                        "phone": "592",
                        "states": []
                    },
                    {
                        "capital": "City of Victoria",
                        "code": "HK",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "HKD",
                        "languages": [
                            {
                                "code": "zh",
                                "name": "Chinese",
                                "native": "中文",
                                "rtl": false
                            },
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Hong Kong",
                        "native": "香港",
                        "phone": "852",
                        "states": []
                    },
                    {
                        "capital": null,
                        "code": "HM",
                        "continent": {
                            "code": "AN",
                            "name": "Antarctica"
                        },
                        "currency": "AUD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Heard Island and McDonald Islands",
                        "native": "Heard Island and McDonald Islands",
                        "phone": "61",
                        "states": []
                    },
                    {
                        "capital": "Tegucigalpa",
                        "code": "HN",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "HNL",
                        "languages": [
                            {
                                "code": "es",
                                "name": "Spanish",
                                "native": "Español",
                                "rtl": false
                            }
                        ],
                        "name": "Honduras",
                        "native": "Honduras",
                        "phone": "504",
                        "states": []
                    },
                    {
                        "capital": "Zagreb",
                        "code": "HR",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "HRK",
                        "languages": [
                            {
                                "code": "hr",
                                "name": "Croatian",
                                "native": "Hrvatski",
                                "rtl": false
                            }
                        ],
                        "name": "Croatia",
                        "native": "Hrvatska",
                        "phone": "385",
                        "states": []
                    },
                    {
                        "capital": "Port-au-Prince",
                        "code": "HT",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "HTG,USD",
                        "languages": [
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            },
                            {
                                "code": "ht",
                                "name": "Haitian",
                                "native": "Krèyol ayisyen",
                                "rtl": false
                            }
                        ],
                        "name": "Haiti",
                        "native": "Haïti",
                        "phone": "509",
                        "states": []
                    },
                    {
                        "capital": "Budapest",
                        "code": "HU",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "HUF",
                        "languages": [
                            {
                                "code": "hu",
                                "name": "Hungarian",
                                "native": "Magyar",
                                "rtl": false
                            }
                        ],
                        "name": "Hungary",
                        "native": "Magyarország",
                        "phone": "36",
                        "states": []
                    },
                    {
                        "capital": "Jakarta",
                        "code": "ID",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "IDR",
                        "languages": [
                            {
                                "code": "id",
                                "name": "Indonesian",
                                "native": "Bahasa Indonesia",
                                "rtl": false
                            }
                        ],
                        "name": "Indonesia",
                        "native": "Indonesia",
                        "phone": "62",
                        "states": [
                            {
                                "code": "ID-AC",
                                "name": "Special Region of Aceh"
                            },
                            {
                                "code": "ID-BA",
                                "name": "Bali"
                            },
                            {
                                "code": "ID-BB",
                                "name": "Bangka–Belitung Islands"
                            },
                            {
                                "code": "ID-BT",
                                "name": "Banten"
                            },
                            {
                                "code": "ID-BE",
                                "name": "Bengkulu"
                            },
                            {
                                "code": "ID-JT",
                                "name": "Central Java"
                            },
                            {
                                "code": "ID-KT",
                                "name": "Central Kalimantan"
                            },
                            {
                                "code": "ID-ST",
                                "name": "Central Sulawesi"
                            },
                            {
                                "code": "ID-JI",
                                "name": "East Java"
                            },
                            {
                                "code": "ID-KI",
                                "name": "East Kalimantan"
                            },
                            {
                                "code": "ID-NT",
                                "name": "East Nusa Tenggara"
                            },
                            {
                                "code": "ID-GO",
                                "name": "Gorontalo"
                            },
                            {
                                "code": "ID-JK",
                                "name": "Jakarta Special Capital Region"
                            },
                            {
                                "code": "ID-JA",
                                "name": "Jambi"
                            },
                            {
                                "code": "ID-LA",
                                "name": "Lampung"
                            },
                            {
                                "code": "ID-MA",
                                "name": "Maluku"
                            },
                            {
                                "code": "ID-KU",
                                "name": "North Kalimantan"
                            },
                            {
                                "code": "ID-MU",
                                "name": "North Maluku"
                            },
                            {
                                "code": "ID-SA",
                                "name": "North Sulawesi"
                            },
                            {
                                "code": "ID-SU",
                                "name": "North Sumatra"
                            },
                            {
                                "code": "ID-PA",
                                "name": "Special Region of Papua"
                            },
                            {
                                "code": "ID-RI",
                                "name": "Riau"
                            },
                            {
                                "code": "ID-KR",
                                "name": "Riau Islands"
                            },
                            {
                                "code": "ID-SG",
                                "name": "Southeast Sulawesi"
                            },
                            {
                                "code": "ID-KS",
                                "name": "South Kalimantan"
                            },
                            {
                                "code": "ID-SN",
                                "name": "South Sulawesi"
                            },
                            {
                                "code": "ID-SS",
                                "name": "South Sumatra"
                            },
                            {
                                "code": "ID-JB",
                                "name": "West Java"
                            },
                            {
                                "code": "ID-KB",
                                "name": "West Kalimantan"
                            },
                            {
                                "code": "ID-NB",
                                "name": "West Nusa Tenggara"
                            },
                            {
                                "code": "ID-PB",
                                "name": "Special Region of West Papua"
                            },
                            {
                                "code": "ID-SR",
                                "name": "West Sulawesi"
                            },
                            {
                                "code": "ID-SB",
                                "name": "West Sumatra"
                            },
                            {
                                "code": "ID-YO",
                                "name": "Special Region of Yogyakarta"
                            }
                        ]
                    },
                    {
                        "capital": "Dublin",
                        "code": "IE",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "EUR",
                        "languages": [
                            {
                                "code": "ga",
                                "name": "Irish",
                                "native": "Gaeilge",
                                "rtl": false
                            },
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Ireland",
                        "native": "Éire",
                        "phone": "353",
                        "states": []
                    },
                    {
                        "capital": "Jerusalem",
                        "code": "IL",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "ILS",
                        "languages": [
                            {
                                "code": "he",
                                "name": "Hebrew",
                                "native": "עברית",
                                "rtl": true
                            },
                            {
                                "code": "ar",
                                "name": "Arabic",
                                "native": "العربية",
                                "rtl": true
                            }
                        ],
                        "name": "Israel",
                        "native": "יִשְׂרָאֵל",
                        "phone": "972",
                        "states": []
                    },
                    {
                        "capital": "Douglas",
                        "code": "IM",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "GBP",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            },
                            {
                                "code": "gv",
                                "name": "Manx",
                                "native": "Gaelg",
                                "rtl": false
                            }
                        ],
                        "name": "Isle of Man",
                        "native": "Isle of Man",
                        "phone": "44",
                        "states": []
                    },
                    {
                        "capital": "New Delhi",
                        "code": "IN",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "INR",
                        "languages": [
                            {
                                "code": "hi",
                                "name": "Hindi",
                                "native": "हिन्दी",
                                "rtl": false
                            },
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "India",
                        "native": "भारत",
                        "phone": "91",
                        "states": [
                            {
                                "code": "AP",
                                "name": "Andhra Pradesh"
                            },
                            {
                                "code": "AR",
                                "name": "Arunachal Pradesh"
                            },
                            {
                                "code": "AS",
                                "name": "Assam"
                            },
                            {
                                "code": "BR",
                                "name": "Bihar"
                            },
                            {
                                "code": "CT",
                                "name": "Chhattisgarh"
                            },
                            {
                                "code": "GA",
                                "name": "Goa"
                            },
                            {
                                "code": "GJ",
                                "name": "Gujarat"
                            },
                            {
                                "code": "HR",
                                "name": "Haryana"
                            },
                            {
                                "code": "HP",
                                "name": "Himachal Pradesh"
                            },
                            {
                                "code": "JK",
                                "name": "Jammu and Kashmir"
                            },
                            {
                                "code": "JH",
                                "name": "Jharkhand"
                            },
                            {
                                "code": "KA",
                                "name": "Karnataka"
                            },
                            {
                                "code": "KL",
                                "name": "Kerala"
                            },
                            {
                                "code": "MP",
                                "name": "Madhya Pradesh"
                            },
                            {
                                "code": "MH",
                                "name": "Maharashtra"
                            },
                            {
                                "code": "MN",
                                "name": "Manipur"
                            },
                            {
                                "code": "ML",
                                "name": "Meghalaya"
                            },
                            {
                                "code": "MZ",
                                "name": "Mizoram"
                            },
                            {
                                "code": "NL",
                                "name": "Nagaland"
                            },
                            {
                                "code": "OR",
                                "name": "Odisha"
                            },
                            {
                                "code": "PB",
                                "name": "Punjab"
                            },
                            {
                                "code": "RJ",
                                "name": "Rajasthan"
                            },
                            {
                                "code": "SK",
                                "name": "Sikkim"
                            },
                            {
                                "code": "TN",
                                "name": "Tamil Nadu"
                            },
                            {
                                "code": "TG",
                                "name": "Telangana"
                            },
                            {
                                "code": "TR",
                                "name": "Tripura"
                            },
                            {
                                "code": "UP",
                                "name": "Uttar Pradesh"
                            },
                            {
                                "code": "UT",
                                "name": "Uttarakhand"
                            },
                            {
                                "code": "WB",
                                "name": "West Bengal"
                            },
                            {
                                "code": "AN",
                                "name": "Andaman and Nicobar Islands"
                            },
                            {
                                "code": "CH",
                                "name": "Chandigarh"
                            },
                            {
                                "code": "DN",
                                "name": "Dadra and Nagar Haveli"
                            },
                            {
                                "code": "DD",
                                "name": "Daman and Diu"
                            },
                            {
                                "code": "LD",
                                "name": "Lakshadweep"
                            },
                            {
                                "code": "DL",
                                "name": "National Capital Territory of Delhi"
                            },
                            {
                                "code": "PY",
                                "name": "Puducherry"
                            }
                        ]
                    },
                    {
                        "capital": "Diego Garcia",
                        "code": "IO",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "USD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "British Indian Ocean Territory",
                        "native": "British Indian Ocean Territory",
                        "phone": "246",
                        "states": []
                    },
                    {
                        "capital": "Baghdad",
                        "code": "IQ",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "IQD",
                        "languages": [
                            {
                                "code": "ar",
                                "name": "Arabic",
                                "native": "العربية",
                                "rtl": true
                            },
                            {
                                "code": "ku",
                                "name": "Kurdish",
                                "native": "Kurdî / كوردی",
                                "rtl": true
                            }
                        ],
                        "name": "Iraq",
                        "native": "العراق",
                        "phone": "964",
                        "states": []
                    },
                    {
                        "capital": "Tehran",
                        "code": "IR",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "IRR",
                        "languages": [
                            {
                                "code": "fa",
                                "name": "Persian",
                                "native": "فارسی",
                                "rtl": true
                            }
                        ],
                        "name": "Iran",
                        "native": "ایران",
                        "phone": "98",
                        "states": []
                    },
                    {
                        "capital": "Reykjavik",
                        "code": "IS",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "ISK",
                        "languages": [
                            {
                                "code": "is",
                                "name": "Icelandic",
                                "native": "Íslenska",
                                "rtl": false
                            }
                        ],
                        "name": "Iceland",
                        "native": "Ísland",
                        "phone": "354",
                        "states": []
                    },
                    {
                        "capital": "Rome",
                        "code": "IT",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "EUR",
                        "languages": [
                            {
                                "code": "it",
                                "name": "Italian",
                                "native": "Italiano",
                                "rtl": false
                            }
                        ],
                        "name": "Italy",
                        "native": "Italia",
                        "phone": "39",
                        "states": []
                    },
                    {
                        "capital": "Saint Helier",
                        "code": "JE",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "GBP",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            },
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            }
                        ],
                        "name": "Jersey",
                        "native": "Jersey",
                        "phone": "44",
                        "states": []
                    },
                    {
                        "capital": "Kingston",
                        "code": "JM",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "JMD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Jamaica",
                        "native": "Jamaica",
                        "phone": "1876",
                        "states": []
                    },
                    {
                        "capital": "Amman",
                        "code": "JO",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "JOD",
                        "languages": [
                            {
                                "code": "ar",
                                "name": "Arabic",
                                "native": "العربية",
                                "rtl": true
                            }
                        ],
                        "name": "Jordan",
                        "native": "الأردن",
                        "phone": "962",
                        "states": [
                            {
                                "code": null,
                                "name": "Irbid"
                            },
                            {
                                "code": null,
                                "name": "Ajloun"
                            },
                            {
                                "code": null,
                                "name": "Jerash"
                            },
                            {
                                "code": null,
                                "name": "Mafraq"
                            },
                            {
                                "code": null,
                                "name": "Balqa"
                            },
                            {
                                "code": null,
                                "name": "Amman"
                            },
                            {
                                "code": null,
                                "name": "Zarqa"
                            },
                            {
                                "code": null,
                                "name": "Madaba"
                            },
                            {
                                "code": null,
                                "name": "Karak"
                            },
                            {
                                "code": null,
                                "name": "Tafilah"
                            },
                            {
                                "code": null,
                                "name": "Ma'an"
                            },
                            {
                                "code": null,
                                "name": "Aqaba"
                            }
                        ]
                    },
                    {
                        "capital": "Tokyo",
                        "code": "JP",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "JPY",
                        "languages": [
                            {
                                "code": "ja",
                                "name": "Japanese",
                                "native": "日本語",
                                "rtl": false
                            }
                        ],
                        "name": "Japan",
                        "native": "日本",
                        "phone": "81",
                        "states": [
                            {
                                "code": null,
                                "name": "愛知県"
                            },
                            {
                                "code": null,
                                "name": "秋田県"
                            },
                            {
                                "code": null,
                                "name": "青森県"
                            },
                            {
                                "code": null,
                                "name": "千葉県"
                            },
                            {
                                "code": null,
                                "name": "愛媛県"
                            },
                            {
                                "code": null,
                                "name": "福井県"
                            },
                            {
                                "code": null,
                                "name": "福岡県"
                            },
                            {
                                "code": null,
                                "name": "福島県"
                            },
                            {
                                "code": null,
                                "name": "岐阜県"
                            },
                            {
                                "code": null,
                                "name": "群馬県"
                            },
                            {
                                "code": null,
                                "name": "広島県"
                            },
                            {
                                "code": null,
                                "name": "北海道"
                            },
                            {
                                "code": null,
                                "name": "兵庫県"
                            },
                            {
                                "code": null,
                                "name": "茨城県"
                            },
                            {
                                "code": null,
                                "name": "石川県"
                            },
                            {
                                "code": null,
                                "name": "岩手県"
                            },
                            {
                                "code": null,
                                "name": "香川県"
                            },
                            {
                                "code": null,
                                "name": "鹿児島県"
                            },
                            {
                                "code": null,
                                "name": "神奈川県"
                            },
                            {
                                "code": null,
                                "name": "高知県"
                            },
                            {
                                "code": null,
                                "name": "熊本県"
                            },
                            {
                                "code": null,
                                "name": "京都府"
                            },
                            {
                                "code": null,
                                "name": "三重県"
                            },
                            {
                                "code": null,
                                "name": "宮城県"
                            },
                            {
                                "code": null,
                                "name": "宮崎県"
                            },
                            {
                                "code": null,
                                "name": "長野県"
                            },
                            {
                                "code": null,
                                "name": "長崎県"
                            },
                            {
                                "code": null,
                                "name": "奈良県"
                            },
                            {
                                "code": null,
                                "name": "新潟県"
                            },
                            {
                                "code": null,
                                "name": "大分県"
                            },
                            {
                                "code": null,
                                "name": "岡山県"
                            },
                            {
                                "code": null,
                                "name": "沖縄県"
                            },
                            {
                                "code": null,
                                "name": "大阪府"
                            },
                            {
                                "code": null,
                                "name": "佐賀県"
                            },
                            {
                                "code": null,
                                "name": "埼玉県"
                            },
                            {
                                "code": null,
                                "name": "滋賀県"
                            },
                            {
                                "code": null,
                                "name": "島根県"
                            },
                            {
                                "code": null,
                                "name": "静岡県"
                            },
                            {
                                "code": null,
                                "name": "栃木県"
                            },
                            {
                                "code": null,
                                "name": "徳島県"
                            },
                            {
                                "code": null,
                                "name": "東京都"
                            },
                            {
                                "code": null,
                                "name": "鳥取県"
                            },
                            {
                                "code": null,
                                "name": "富山県"
                            },
                            {
                                "code": null,
                                "name": "和歌山県"
                            },
                            {
                                "code": null,
                                "name": "山形県"
                            },
                            {
                                "code": null,
                                "name": "山口県"
                            },
                            {
                                "code": null,
                                "name": "山梨県"
                            }
                        ]
                    },
                    {
                        "capital": "Nairobi",
                        "code": "KE",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "KES",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            },
                            {
                                "code": "sw",
                                "name": "Swahili",
                                "native": "Kiswahili",
                                "rtl": false
                            }
                        ],
                        "name": "Kenya",
                        "native": "Kenya",
                        "phone": "254",
                        "states": []
                    },
                    {
                        "capital": "Bishkek",
                        "code": "KG",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "KGS",
                        "languages": [
                            {
                                "code": "ky",
                                "name": "Kirghiz",
                                "native": "Kırgızca / Кыргызча",
                                "rtl": false
                            },
                            {
                                "code": "ru",
                                "name": "Russian",
                                "native": "Русский",
                                "rtl": false
                            }
                        ],
                        "name": "Kyrgyzstan",
                        "native": "Кыргызстан",
                        "phone": "996",
                        "states": []
                    },
                    {
                        "capital": "Phnom Penh",
                        "code": "KH",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "KHR",
                        "languages": [
                            {
                                "code": "km",
                                "name": "Cambodian",
                                "native": "ភាសាខ្មែរ",
                                "rtl": false
                            }
                        ],
                        "name": "Cambodia",
                        "native": "Kâmpŭchéa",
                        "phone": "855",
                        "states": [
                            {
                                "code": null,
                                "name": "ភ្នំពេញ"
                            },
                            {
                                "code": null,
                                "name": "បន្ទាយមានជ័យ"
                            },
                            {
                                "code": null,
                                "name": "បាត់ដំបង"
                            },
                            {
                                "code": null,
                                "name": "កំពង់ចាម"
                            },
                            {
                                "code": null,
                                "name": "កំពង់ឆ្នាំង"
                            },
                            {
                                "code": null,
                                "name": "កំពង់ស្ពឺ"
                            },
                            {
                                "code": null,
                                "name": "កំពង់ធំ"
                            },
                            {
                                "code": null,
                                "name": "កំពត"
                            },
                            {
                                "code": null,
                                "name": "កណ្តាល"
                            },
                            {
                                "code": null,
                                "name": "កោះកុង"
                            },
                            {
                                "code": null,
                                "name": "កែប"
                            },
                            {
                                "code": null,
                                "name": "ក្រចេះ"
                            },
                            {
                                "code": null,
                                "name": "មណ្ឌលគីរី"
                            },
                            {
                                "code": null,
                                "name": "ឧត្តរមានជ័យ"
                            },
                            {
                                "code": null,
                                "name": "បៃលិន"
                            },
                            {
                                "code": null,
                                "name": "ព្រះសីហនុ"
                            },
                            {
                                "code": null,
                                "name": "ព្រះវិហារ"
                            },
                            {
                                "code": null,
                                "name": "ពោធិ៍សាត់"
                            },
                            {
                                "code": null,
                                "name": "ព្រៃវែង"
                            },
                            {
                                "code": null,
                                "name": "រតនគីរី"
                            },
                            {
                                "code": null,
                                "name": "សៀមរាប"
                            },
                            {
                                "code": null,
                                "name": "ស្ទឹងត្រែង"
                            },
                            {
                                "code": null,
                                "name": "ស្វាយរៀង"
                            },
                            {
                                "code": null,
                                "name": "តាកែវ"
                            },
                            {
                                "code": null,
                                "name": "ត្បូងឃ្មុំ"
                            }
                        ]
                    },
                    {
                        "capital": "South Tarawa",
                        "code": "KI",
                        "continent": {
                            "code": "OC",
                            "name": "Oceania"
                        },
                        "currency": "AUD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Kiribati",
                        "native": "Kiribati",
                        "phone": "686",
                        "states": []
                    },
                    {
                        "capital": "Moroni",
                        "code": "KM",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "KMF",
                        "languages": [
                            {
                                "code": "ar",
                                "name": "Arabic",
                                "native": "العربية",
                                "rtl": true
                            },
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            }
                        ],
                        "name": "Comoros",
                        "native": "Komori",
                        "phone": "269",
                        "states": []
                    },
                    {
                        "capital": "Basseterre",
                        "code": "KN",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "XCD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Saint Kitts and Nevis",
                        "native": "Saint Kitts and Nevis",
                        "phone": "1869",
                        "states": []
                    },
                    {
                        "capital": "Pyongyang",
                        "code": "KP",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "KPW",
                        "languages": [
                            {
                                "code": "ko",
                                "name": "Korean",
                                "native": "한국어",
                                "rtl": false
                            }
                        ],
                        "name": "North Korea",
                        "native": "북한",
                        "phone": "850",
                        "states": []
                    },
                    {
                        "capital": "Seoul",
                        "code": "KR",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "KRW",
                        "languages": [
                            {
                                "code": "ko",
                                "name": "Korean",
                                "native": "한국어",
                                "rtl": false
                            }
                        ],
                        "name": "South Korea",
                        "native": "대한민국",
                        "phone": "82",
                        "states": []
                    },
                    {
                        "capital": "Kuwait City",
                        "code": "KW",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "KWD",
                        "languages": [
                            {
                                "code": "ar",
                                "name": "Arabic",
                                "native": "العربية",
                                "rtl": true
                            }
                        ],
                        "name": "Kuwait",
                        "native": "الكويت",
                        "phone": "965",
                        "states": []
                    },
                    {
                        "capital": "George Town",
                        "code": "KY",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "KYD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Cayman Islands",
                        "native": "Cayman Islands",
                        "phone": "1345",
                        "states": []
                    },
                    {
                        "capital": "Astana",
                        "code": "KZ",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "KZT",
                        "languages": [
                            {
                                "code": "kk",
                                "name": "Kazakh",
                                "native": "Қазақша",
                                "rtl": false
                            },
                            {
                                "code": "ru",
                                "name": "Russian",
                                "native": "Русский",
                                "rtl": false
                            }
                        ],
                        "name": "Kazakhstan",
                        "native": "Қазақстан",
                        "phone": "76,77",
                        "states": []
                    },
                    {
                        "capital": "Vientiane",
                        "code": "LA",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "LAK",
                        "languages": [
                            {
                                "code": "lo",
                                "name": "Laotian",
                                "native": "ລາວ / Pha xa lao",
                                "rtl": false
                            }
                        ],
                        "name": "Laos",
                        "native": "ສປປລາວ",
                        "phone": "856",
                        "states": []
                    },
                    {
                        "capital": "Beirut",
                        "code": "LB",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "LBP",
                        "languages": [
                            {
                                "code": "ar",
                                "name": "Arabic",
                                "native": "العربية",
                                "rtl": true
                            },
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            }
                        ],
                        "name": "Lebanon",
                        "native": "لبنان",
                        "phone": "961",
                        "states": []
                    },
                    {
                        "capital": "Castries",
                        "code": "LC",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "XCD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Saint Lucia",
                        "native": "Saint Lucia",
                        "phone": "1758",
                        "states": []
                    },
                    {
                        "capital": "Vaduz",
                        "code": "LI",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "CHF",
                        "languages": [
                            {
                                "code": "de",
                                "name": "German",
                                "native": "Deutsch",
                                "rtl": false
                            }
                        ],
                        "name": "Liechtenstein",
                        "native": "Liechtenstein",
                        "phone": "423",
                        "states": []
                    },
                    {
                        "capital": "Colombo",
                        "code": "LK",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "LKR",
                        "languages": [
                            {
                                "code": "si",
                                "name": "Sinhalese",
                                "native": "සිංහල",
                                "rtl": false
                            },
                            {
                                "code": "ta",
                                "name": "Tamil",
                                "native": "தமிழ்",
                                "rtl": false
                            }
                        ],
                        "name": "Sri Lanka",
                        "native": "śrī laṃkāva",
                        "phone": "94",
                        "states": []
                    },
                    {
                        "capital": "Monrovia",
                        "code": "LR",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "LRD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Liberia",
                        "native": "Liberia",
                        "phone": "231",
                        "states": []
                    },
                    {
                        "capital": "Maseru",
                        "code": "LS",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "LSL,ZAR",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            },
                            {
                                "code": "st",
                                "name": "Southern Sotho",
                                "native": "Sesotho",
                                "rtl": false
                            }
                        ],
                        "name": "Lesotho",
                        "native": "Lesotho",
                        "phone": "266",
                        "states": []
                    },
                    {
                        "capital": "Vilnius",
                        "code": "LT",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "EUR",
                        "languages": [
                            {
                                "code": "lt",
                                "name": "Lithuanian",
                                "native": "Lietuvių",
                                "rtl": false
                            }
                        ],
                        "name": "Lithuania",
                        "native": "Lietuva",
                        "phone": "370",
                        "states": []
                    },
                    {
                        "capital": "Luxembourg",
                        "code": "LU",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "EUR",
                        "languages": [
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            },
                            {
                                "code": "de",
                                "name": "German",
                                "native": "Deutsch",
                                "rtl": false
                            },
                            {
                                "code": "lb",
                                "name": "Luxembourgish",
                                "native": "Lëtzebuergesch",
                                "rtl": false
                            }
                        ],
                        "name": "Luxembourg",
                        "native": "Luxembourg",
                        "phone": "352",
                        "states": []
                    },
                    {
                        "capital": "Riga",
                        "code": "LV",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "EUR",
                        "languages": [
                            {
                                "code": "lv",
                                "name": "Latvian",
                                "native": "Latviešu",
                                "rtl": false
                            }
                        ],
                        "name": "Latvia",
                        "native": "Latvija",
                        "phone": "371",
                        "states": []
                    },
                    {
                        "capital": "Tripoli",
                        "code": "LY",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "LYD",
                        "languages": [
                            {
                                "code": "ar",
                                "name": "Arabic",
                                "native": "العربية",
                                "rtl": true
                            }
                        ],
                        "name": "Libya",
                        "native": "‏ليبيا",
                        "phone": "218",
                        "states": []
                    },
                    {
                        "capital": "Rabat",
                        "code": "MA",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "MAD",
                        "languages": [
                            {
                                "code": "ar",
                                "name": "Arabic",
                                "native": "العربية",
                                "rtl": true
                            }
                        ],
                        "name": "Morocco",
                        "native": "المغرب",
                        "phone": "212",
                        "states": []
                    },
                    {
                        "capital": "Monaco",
                        "code": "MC",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "EUR",
                        "languages": [
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            }
                        ],
                        "name": "Monaco",
                        "native": "Monaco",
                        "phone": "377",
                        "states": []
                    },
                    {
                        "capital": "Chișinău",
                        "code": "MD",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "MDL",
                        "languages": [
                            {
                                "code": "ro",
                                "name": "Romanian",
                                "native": "Română",
                                "rtl": false
                            }
                        ],
                        "name": "Moldova",
                        "native": "Moldova",
                        "phone": "373",
                        "states": []
                    },
                    {
                        "capital": "Podgorica",
                        "code": "ME",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "EUR",
                        "languages": [
                            {
                                "code": "sr",
                                "name": "Serbian",
                                "native": "Српски",
                                "rtl": false
                            },
                            {
                                "code": "bs",
                                "name": "Bosnian",
                                "native": "Bosanski",
                                "rtl": false
                            },
                            {
                                "code": "sq",
                                "name": "Albanian",
                                "native": "Shqip",
                                "rtl": false
                            },
                            {
                                "code": "hr",
                                "name": "Croatian",
                                "native": "Hrvatski",
                                "rtl": false
                            }
                        ],
                        "name": "Montenegro",
                        "native": "Црна Гора",
                        "phone": "382",
                        "states": []
                    },
                    {
                        "capital": "Marigot",
                        "code": "MF",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "EUR",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            },
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            },
                            {
                                "code": "nl",
                                "name": "Dutch",
                                "native": "Nederlands",
                                "rtl": false
                            }
                        ],
                        "name": "Saint Martin",
                        "native": "Saint-Martin",
                        "phone": "590",
                        "states": []
                    },
                    {
                        "capital": "Antananarivo",
                        "code": "MG",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "MGA",
                        "languages": [
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            },
                            {
                                "code": "mg",
                                "name": "Malagasy",
                                "native": "Malagasy",
                                "rtl": false
                            }
                        ],
                        "name": "Madagascar",
                        "native": "Madagasikara",
                        "phone": "261",
                        "states": []
                    },
                    {
                        "capital": "Majuro",
                        "code": "MH",
                        "continent": {
                            "code": "OC",
                            "name": "Oceania"
                        },
                        "currency": "USD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            },
                            {
                                "code": "mh",
                                "name": "Marshallese",
                                "native": "Kajin Majel / Ebon",
                                "rtl": false
                            }
                        ],
                        "name": "Marshall Islands",
                        "native": "M̧ajeļ",
                        "phone": "692",
                        "states": []
                    },
                    {
                        "capital": "Skopje",
                        "code": "MK",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "MKD",
                        "languages": [
                            {
                                "code": "mk",
                                "name": "Macedonian",
                                "native": "Македонски",
                                "rtl": false
                            }
                        ],
                        "name": "North Macedonia",
                        "native": "Северна Македонија",
                        "phone": "389",
                        "states": []
                    },
                    {
                        "capital": "Bamako",
                        "code": "ML",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "XOF",
                        "languages": [
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            }
                        ],
                        "name": "Mali",
                        "native": "Mali",
                        "phone": "223",
                        "states": []
                    },
                    {
                        "capital": "Naypyidaw",
                        "code": "MM",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "MMK",
                        "languages": [
                            {
                                "code": "my",
                                "name": "Burmese",
                                "native": "မြန်မာစာ",
                                "rtl": false
                            }
                        ],
                        "name": "Myanmar [Burma]",
                        "native": "မြန်မာ",
                        "phone": "95",
                        "states": []
                    },
                    {
                        "capital": "Ulan Bator",
                        "code": "MN",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "MNT",
                        "languages": [
                            {
                                "code": "mn",
                                "name": "Mongolian",
                                "native": "Монгол",
                                "rtl": false
                            }
                        ],
                        "name": "Mongolia",
                        "native": "Монгол улс",
                        "phone": "976",
                        "states": []
                    },
                    {
                        "capital": null,
                        "code": "MO",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "MOP",
                        "languages": [
                            {
                                "code": "zh",
                                "name": "Chinese",
                                "native": "中文",
                                "rtl": false
                            },
                            {
                                "code": "pt",
                                "name": "Portuguese",
                                "native": "Português",
                                "rtl": false
                            }
                        ],
                        "name": "Macao",
                        "native": "澳門",
                        "phone": "853",
                        "states": []
                    },
                    {
                        "capital": "Saipan",
                        "code": "MP",
                        "continent": {
                            "code": "OC",
                            "name": "Oceania"
                        },
                        "currency": "USD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            },
                            {
                                "code": "ch",
                                "name": "Chamorro",
                                "native": "Chamoru",
                                "rtl": false
                            }
                        ],
                        "name": "Northern Mariana Islands",
                        "native": "Northern Mariana Islands",
                        "phone": "1670",
                        "states": []
                    },
                    {
                        "capital": "Fort-de-France",
                        "code": "MQ",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "EUR",
                        "languages": [
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            }
                        ],
                        "name": "Martinique",
                        "native": "Martinique",
                        "phone": "596",
                        "states": []
                    },
                    {
                        "capital": "Nouakchott",
                        "code": "MR",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "MRU",
                        "languages": [
                            {
                                "code": "ar",
                                "name": "Arabic",
                                "native": "العربية",
                                "rtl": true
                            }
                        ],
                        "name": "Mauritania",
                        "native": "موريتانيا",
                        "phone": "222",
                        "states": []
                    },
                    {
                        "capital": "Plymouth",
                        "code": "MS",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "XCD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Montserrat",
                        "native": "Montserrat",
                        "phone": "1664",
                        "states": []
                    },
                    {
                        "capital": "Valletta",
                        "code": "MT",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "EUR",
                        "languages": [
                            {
                                "code": "mt",
                                "name": "Maltese",
                                "native": "bil-Malti",
                                "rtl": false
                            },
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Malta",
                        "native": "Malta",
                        "phone": "356",
                        "states": []
                    },
                    {
                        "capital": "Port Louis",
                        "code": "MU",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "MUR",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Mauritius",
                        "native": "Maurice",
                        "phone": "230",
                        "states": []
                    },
                    {
                        "capital": "Malé",
                        "code": "MV",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "MVR",
                        "languages": [
                            {
                                "code": "dv",
                                "name": "Divehi",
                                "native": "ދިވެހިބަސް",
                                "rtl": true
                            }
                        ],
                        "name": "Maldives",
                        "native": "Maldives",
                        "phone": "960",
                        "states": []
                    },
                    {
                        "capital": "Lilongwe",
                        "code": "MW",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "MWK",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            },
                            {
                                "code": "ny",
                                "name": "Chichewa",
                                "native": "Chi-Chewa",
                                "rtl": false
                            }
                        ],
                        "name": "Malawi",
                        "native": "Malawi",
                        "phone": "265",
                        "states": []
                    },
                    {
                        "capital": "Mexico City",
                        "code": "MX",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "MXN",
                        "languages": [
                            {
                                "code": "es",
                                "name": "Spanish",
                                "native": "Español",
                                "rtl": false
                            }
                        ],
                        "name": "Mexico",
                        "native": "México",
                        "phone": "52",
                        "states": [
                            {
                                "code": "AG",
                                "name": "Aguascalientes"
                            },
                            {
                                "code": "BC",
                                "name": "Baja California"
                            },
                            {
                                "code": "BS",
                                "name": "Baja California Sur"
                            },
                            {
                                "code": "CM",
                                "name": "Campeche"
                            },
                            {
                                "code": "CS",
                                "name": "Chiapas"
                            },
                            {
                                "code": "CH",
                                "name": "Chihuahua"
                            },
                            {
                                "code": "MX",
                                "name": "Coahuila"
                            },
                            {
                                "code": "CL",
                                "name": "Colima"
                            },
                            {
                                "code": "DF",
                                "name": "Federal District"
                            },
                            {
                                "code": "DG",
                                "name": "Durango"
                            },
                            {
                                "code": "GT",
                                "name": "Guanajuato"
                            },
                            {
                                "code": "GR",
                                "name": "Guerrero"
                            },
                            {
                                "code": "HG",
                                "name": "Hidalgo"
                            },
                            {
                                "code": "JA",
                                "name": "Jalisco"
                            },
                            {
                                "code": "ME",
                                "name": "Mexico"
                            },
                            {
                                "code": "MI",
                                "name": "Michoacán"
                            },
                            {
                                "code": "MO",
                                "name": "Morelos"
                            },
                            {
                                "code": "NA",
                                "name": "Nayarit"
                            },
                            {
                                "code": "NL",
                                "name": "Nuevo León"
                            },
                            {
                                "code": "OA",
                                "name": "Oaxaca"
                            },
                            {
                                "code": "PU",
                                "name": "Puebla"
                            },
                            {
                                "code": "QE",
                                "name": "Querétaro"
                            },
                            {
                                "code": "QR",
                                "name": "Quintana Roo"
                            },
                            {
                                "code": "SL",
                                "name": "San Luis Potosí"
                            },
                            {
                                "code": "SI",
                                "name": "Sinaloa"
                            },
                            {
                                "code": "SO",
                                "name": "Sonora"
                            },
                            {
                                "code": "TB",
                                "name": "Tabasco"
                            },
                            {
                                "code": "TM",
                                "name": "Tamaulipas"
                            },
                            {
                                "code": "TL",
                                "name": "Tlaxcala"
                            },
                            {
                                "code": "VE",
                                "name": "Veracruz"
                            },
                            {
                                "code": "YU",
                                "name": "Yucatán"
                            },
                            {
                                "code": "ZA",
                                "name": "Zacatecas"
                            }
                        ]
                    },
                    {
                        "capital": "Kuala Lumpur",
                        "code": "MY",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "MYR",
                        "languages": [
                            {
                                "code": "ms",
                                "name": "Malay",
                                "native": "Bahasa Melayu",
                                "rtl": false
                            }
                        ],
                        "name": "Malaysia",
                        "native": "Malaysia",
                        "phone": "60",
                        "states": []
                    },
                    {
                        "capital": "Maputo",
                        "code": "MZ",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "MZN",
                        "languages": [
                            {
                                "code": "pt",
                                "name": "Portuguese",
                                "native": "Português",
                                "rtl": false
                            }
                        ],
                        "name": "Mozambique",
                        "native": "Moçambique",
                        "phone": "258",
                        "states": []
                    },
                    {
                        "capital": "Windhoek",
                        "code": "NA",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "NAD,ZAR",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            },
                            {
                                "code": "af",
                                "name": "Afrikaans",
                                "native": "Afrikaans",
                                "rtl": false
                            }
                        ],
                        "name": "Namibia",
                        "native": "Namibia",
                        "phone": "264",
                        "states": []
                    },
                    {
                        "capital": "Nouméa",
                        "code": "NC",
                        "continent": {
                            "code": "OC",
                            "name": "Oceania"
                        },
                        "currency": "XPF",
                        "languages": [
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            }
                        ],
                        "name": "New Caledonia",
                        "native": "Nouvelle-Calédonie",
                        "phone": "687",
                        "states": []
                    },
                    {
                        "capital": "Niamey",
                        "code": "NE",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "XOF",
                        "languages": [
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            }
                        ],
                        "name": "Niger",
                        "native": "Niger",
                        "phone": "227",
                        "states": []
                    },
                    {
                        "capital": "Kingston",
                        "code": "NF",
                        "continent": {
                            "code": "OC",
                            "name": "Oceania"
                        },
                        "currency": "AUD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Norfolk Island",
                        "native": "Norfolk Island",
                        "phone": "672",
                        "states": []
                    },
                    {
                        "capital": "Abuja",
                        "code": "NG",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "NGN",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Nigeria",
                        "native": "Nigeria",
                        "phone": "234",
                        "states": [
                            {
                                "code": "AB",
                                "name": "Abia"
                            },
                            {
                                "code": "FC",
                                "name": "Abuja"
                            },
                            {
                                "code": "AD",
                                "name": "Adamawa"
                            },
                            {
                                "code": "AK",
                                "name": "Akwa Ibom"
                            },
                            {
                                "code": "AN",
                                "name": "Anambra"
                            },
                            {
                                "code": "BA",
                                "name": "Bauchi"
                            },
                            {
                                "code": "BY",
                                "name": "Bayelsa"
                            },
                            {
                                "code": "BE",
                                "name": "Benue"
                            },
                            {
                                "code": "BO",
                                "name": "Borno"
                            },
                            {
                                "code": "CR",
                                "name": "Cross River"
                            },
                            {
                                "code": "DE",
                                "name": "Delta"
                            },
                            {
                                "code": "EB",
                                "name": "Ebonyi"
                            },
                            {
                                "code": "ED",
                                "name": "Edo"
                            },
                            {
                                "code": "EK",
                                "name": "Ekiti"
                            },
                            {
                                "code": "EN",
                                "name": "Enugu"
                            },
                            {
                                "code": "GO",
                                "name": "Gombe"
                            },
                            {
                                "code": "IM",
                                "name": "Imo"
                            },
                            {
                                "code": "JI",
                                "name": "Jigawa"
                            },
                            {
                                "code": "KD",
                                "name": "Kaduna"
                            },
                            {
                                "code": "KN",
                                "name": "Kano"
                            },
                            {
                                "code": "KT",
                                "name": "Katsina"
                            },
                            {
                                "code": "KE",
                                "name": "Kebbi"
                            },
                            {
                                "code": "KO",
                                "name": "Kogi"
                            },
                            {
                                "code": "KW",
                                "name": "Kwara"
                            },
                            {
                                "code": "LA",
                                "name": "Lagos"
                            },
                            {
                                "code": "NA",
                                "name": "Nasarawa"
                            },
                            {
                                "code": "NI",
                                "name": "Niger"
                            },
                            {
                                "code": "OG",
                                "name": "Ogun"
                            },
                            {
                                "code": "ON",
                                "name": "Ondo"
                            },
                            {
                                "code": "OS",
                                "name": "Osun"
                            },
                            {
                                "code": "OY",
                                "name": "Oyo"
                            },
                            {
                                "code": "PL",
                                "name": "Plateau"
                            },
                            {
                                "code": "RI",
                                "name": "Rivers"
                            },
                            {
                                "code": "SO",
                                "name": "Sokoto"
                            },
                            {
                                "code": "TA",
                                "name": "Taraba"
                            },
                            {
                                "code": "YO",
                                "name": "Yobe"
                            },
                            {
                                "code": "ZA",
                                "name": "Zamfara"
                            }
                        ]
                    },
                    {
                        "capital": "Managua",
                        "code": "NI",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "NIO",
                        "languages": [
                            {
                                "code": "es",
                                "name": "Spanish",
                                "native": "Español",
                                "rtl": false
                            }
                        ],
                        "name": "Nicaragua",
                        "native": "Nicaragua",
                        "phone": "505",
                        "states": []
                    },
                    {
                        "capital": "Amsterdam",
                        "code": "NL",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "EUR",
                        "languages": [
                            {
                                "code": "nl",
                                "name": "Dutch",
                                "native": "Nederlands",
                                "rtl": false
                            }
                        ],
                        "name": "Netherlands",
                        "native": "Nederland",
                        "phone": "31",
                        "states": [
                            {
                                "code": "DR",
                                "name": "Drenthe"
                            },
                            {
                                "code": "FL",
                                "name": "Flevoland"
                            },
                            {
                                "code": "FR",
                                "name": "Friesland"
                            },
                            {
                                "code": "GD",
                                "name": "Gelderland"
                            },
                            {
                                "code": "GR",
                                "name": "Groningen"
                            },
                            {
                                "code": "LB",
                                "name": "Limburg"
                            },
                            {
                                "code": "NB",
                                "name": "Noord-Brabant"
                            },
                            {
                                "code": "NH",
                                "name": "Noord-Holland"
                            },
                            {
                                "code": "OV",
                                "name": "Overijssel"
                            },
                            {
                                "code": "UT",
                                "name": "Utrecht"
                            },
                            {
                                "code": "ZH",
                                "name": "Zuid-Holland"
                            },
                            {
                                "code": "ZL",
                                "name": "Zeeland"
                            }
                        ]
                    },
                    {
                        "capital": "Oslo",
                        "code": "NO",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "NOK",
                        "languages": [
                            {
                                "code": "no",
                                "name": "Norwegian",
                                "native": "Norsk",
                                "rtl": false
                            },
                            {
                                "code": "nb",
                                "name": "Norwegian Bokmål",
                                "native": "Norsk bokmål",
                                "rtl": false
                            },
                            {
                                "code": "nn",
                                "name": "Norwegian Nynorsk",
                                "native": "Norsk nynorsk",
                                "rtl": false
                            }
                        ],
                        "name": "Norway",
                        "native": "Norge",
                        "phone": "47",
                        "states": []
                    },
                    {
                        "capital": "Kathmandu",
                        "code": "NP",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "NPR",
                        "languages": [
                            {
                                "code": "ne",
                                "name": "Nepali",
                                "native": "नेपाली",
                                "rtl": false
                            }
                        ],
                        "name": "Nepal",
                        "native": "नपल",
                        "phone": "977",
                        "states": []
                    },
                    {
                        "capital": "Yaren",
                        "code": "NR",
                        "continent": {
                            "code": "OC",
                            "name": "Oceania"
                        },
                        "currency": "AUD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            },
                            {
                                "code": "na",
                                "name": "Nauruan",
                                "native": "Dorerin Naoero",
                                "rtl": false
                            }
                        ],
                        "name": "Nauru",
                        "native": "Nauru",
                        "phone": "674",
                        "states": []
                    },
                    {
                        "capital": "Alofi",
                        "code": "NU",
                        "continent": {
                            "code": "OC",
                            "name": "Oceania"
                        },
                        "currency": "NZD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Niue",
                        "native": "Niuē",
                        "phone": "683",
                        "states": []
                    },
                    {
                        "capital": "Wellington",
                        "code": "NZ",
                        "continent": {
                            "code": "OC",
                            "name": "Oceania"
                        },
                        "currency": "NZD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            },
                            {
                                "code": "mi",
                                "name": "Maori",
                                "native": "Māori",
                                "rtl": false
                            }
                        ],
                        "name": "New Zealand",
                        "native": "New Zealand",
                        "phone": "64",
                        "states": [
                            {
                                "code": null,
                                "name": "Auckland"
                            },
                            {
                                "code": null,
                                "name": "New Plymouth"
                            },
                            {
                                "code": null,
                                "name": "Hawke's Bay"
                            },
                            {
                                "code": null,
                                "name": "Wellington"
                            },
                            {
                                "code": null,
                                "name": "Nelson"
                            },
                            {
                                "code": null,
                                "name": "Marlborough"
                            },
                            {
                                "code": null,
                                "name": "Westland"
                            },
                            {
                                "code": null,
                                "name": "Canterbury"
                            },
                            {
                                "code": null,
                                "name": "Otago"
                            },
                            {
                                "code": null,
                                "name": "Southland"
                            }
                        ]
                    },
                    {
                        "capital": "Muscat",
                        "code": "OM",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "OMR",
                        "languages": [
                            {
                                "code": "ar",
                                "name": "Arabic",
                                "native": "العربية",
                                "rtl": true
                            }
                        ],
                        "name": "Oman",
                        "native": "عمان",
                        "phone": "968",
                        "states": []
                    },
                    {
                        "capital": "Panama City",
                        "code": "PA",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "PAB,USD",
                        "languages": [
                            {
                                "code": "es",
                                "name": "Spanish",
                                "native": "Español",
                                "rtl": false
                            }
                        ],
                        "name": "Panama",
                        "native": "Panamá",
                        "phone": "507",
                        "states": []
                    },
                    {
                        "capital": "Lima",
                        "code": "PE",
                        "continent": {
                            "code": "SA",
                            "name": "South America"
                        },
                        "currency": "PEN",
                        "languages": [
                            {
                                "code": "es",
                                "name": "Spanish",
                                "native": "Español",
                                "rtl": false
                            }
                        ],
                        "name": "Peru",
                        "native": "Perú",
                        "phone": "51",
                        "states": [
                            {
                                "code": null,
                                "name": "Chachapoyas"
                            },
                            {
                                "code": null,
                                "name": "Bagua"
                            },
                            {
                                "code": null,
                                "name": "Bongará"
                            },
                            {
                                "code": null,
                                "name": "Condorcanqui"
                            },
                            {
                                "code": null,
                                "name": "Luya"
                            },
                            {
                                "code": null,
                                "name": "Rodríguez de Mendoza"
                            },
                            {
                                "code": null,
                                "name": "Utcubamba"
                            },
                            {
                                "code": null,
                                "name": "Huaraz"
                            },
                            {
                                "code": null,
                                "name": "Aija"
                            },
                            {
                                "code": null,
                                "name": "Antonio Raymondi"
                            },
                            {
                                "code": null,
                                "name": "Asunción"
                            },
                            {
                                "code": null,
                                "name": "Bolognesi"
                            },
                            {
                                "code": null,
                                "name": "Carhuaz"
                            },
                            {
                                "code": null,
                                "name": "Carlos Fermín Fitzcarrald"
                            },
                            {
                                "code": null,
                                "name": "Casma"
                            },
                            {
                                "code": null,
                                "name": "Corongo"
                            },
                            {
                                "code": null,
                                "name": "Huari"
                            },
                            {
                                "code": null,
                                "name": "Huarmey"
                            },
                            {
                                "code": null,
                                "name": "Huaylas"
                            },
                            {
                                "code": null,
                                "name": "Mariscal Luzuriaga"
                            },
                            {
                                "code": null,
                                "name": "Ocros"
                            },
                            {
                                "code": null,
                                "name": "Pallasca"
                            },
                            {
                                "code": null,
                                "name": "Pomabamba"
                            },
                            {
                                "code": null,
                                "name": "Recuay"
                            },
                            {
                                "code": null,
                                "name": "Santa"
                            },
                            {
                                "code": null,
                                "name": "Sihuas"
                            },
                            {
                                "code": null,
                                "name": "Yungay"
                            },
                            {
                                "code": null,
                                "name": "Abancay"
                            },
                            {
                                "code": null,
                                "name": "Andahuaylas"
                            },
                            {
                                "code": null,
                                "name": "Antabamba"
                            },
                            {
                                "code": null,
                                "name": "Aymaraes"
                            },
                            {
                                "code": null,
                                "name": "Cotabambas"
                            },
                            {
                                "code": null,
                                "name": "Chincheros"
                            },
                            {
                                "code": null,
                                "name": "Grau"
                            },
                            {
                                "code": null,
                                "name": "Arequipa"
                            },
                            {
                                "code": null,
                                "name": "Camaná"
                            },
                            {
                                "code": null,
                                "name": "Caravelí"
                            },
                            {
                                "code": null,
                                "name": "Castilla"
                            },
                            {
                                "code": null,
                                "name": "Caylloma"
                            },
                            {
                                "code": null,
                                "name": "Condesuyos"
                            },
                            {
                                "code": null,
                                "name": "Islay"
                            },
                            {
                                "code": null,
                                "name": "La Unión"
                            },
                            {
                                "code": null,
                                "name": "Huamanga"
                            },
                            {
                                "code": null,
                                "name": "Cangallo"
                            },
                            {
                                "code": null,
                                "name": "Huanca Sancos"
                            },
                            {
                                "code": null,
                                "name": "Huanta"
                            },
                            {
                                "code": null,
                                "name": "La Mar"
                            },
                            {
                                "code": null,
                                "name": "Lucanas"
                            },
                            {
                                "code": null,
                                "name": "Parinacochas"
                            },
                            {
                                "code": null,
                                "name": "Páucar del Sara Sara"
                            },
                            {
                                "code": null,
                                "name": "Sucre"
                            },
                            {
                                "code": null,
                                "name": "Víctor Fajardo"
                            },
                            {
                                "code": null,
                                "name": "Vilcas Huamán"
                            },
                            {
                                "code": null,
                                "name": "Cajamarca"
                            },
                            {
                                "code": null,
                                "name": "Cajabamba"
                            },
                            {
                                "code": null,
                                "name": "Celendín"
                            },
                            {
                                "code": null,
                                "name": "Chota"
                            },
                            {
                                "code": null,
                                "name": "Contumazá"
                            },
                            {
                                "code": null,
                                "name": "Cutervo"
                            },
                            {
                                "code": null,
                                "name": "Hualgayoc"
                            },
                            {
                                "code": null,
                                "name": "Jaén"
                            },
                            {
                                "code": null,
                                "name": "San Ignacio"
                            },
                            {
                                "code": null,
                                "name": "San Marcos"
                            },
                            {
                                "code": null,
                                "name": "San Miguel"
                            },
                            {
                                "code": null,
                                "name": "San Pablo"
                            },
                            {
                                "code": null,
                                "name": "Santa Cruz"
                            },
                            {
                                "code": null,
                                "name": "Callao"
                            },
                            {
                                "code": null,
                                "name": "Cusco"
                            },
                            {
                                "code": null,
                                "name": "Acomayo"
                            },
                            {
                                "code": null,
                                "name": "Anta"
                            },
                            {
                                "code": null,
                                "name": "Calca"
                            },
                            {
                                "code": null,
                                "name": "Canas"
                            },
                            {
                                "code": null,
                                "name": "Canchis"
                            },
                            {
                                "code": null,
                                "name": "Chumbivilcas"
                            },
                            {
                                "code": null,
                                "name": "Espinar"
                            },
                            {
                                "code": null,
                                "name": "La Convención"
                            },
                            {
                                "code": null,
                                "name": "Paruro"
                            },
                            {
                                "code": null,
                                "name": "Paucartambo"
                            },
                            {
                                "code": null,
                                "name": "Quispicanchi"
                            },
                            {
                                "code": null,
                                "name": "Urubamba"
                            },
                            {
                                "code": null,
                                "name": "Huancavelica"
                            },
                            {
                                "code": null,
                                "name": "Acobamba"
                            },
                            {
                                "code": null,
                                "name": "Angaraes"
                            },
                            {
                                "code": null,
                                "name": "Castrovirreyna"
                            },
                            {
                                "code": null,
                                "name": "Churcampa"
                            },
                            {
                                "code": null,
                                "name": "Huaytará"
                            },
                            {
                                "code": null,
                                "name": "Tayacaja"
                            },
                            {
                                "code": null,
                                "name": "Huánuco"
                            },
                            {
                                "code": null,
                                "name": "Ambo"
                            },
                            {
                                "code": null,
                                "name": "Dos de Mayo"
                            },
                            {
                                "code": null,
                                "name": "Huacaybamba"
                            },
                            {
                                "code": null,
                                "name": "Huamalíes"
                            },
                            {
                                "code": null,
                                "name": "Leoncio Prado"
                            },
                            {
                                "code": null,
                                "name": "Marañón"
                            },
                            {
                                "code": null,
                                "name": "Pachitea"
                            },
                            {
                                "code": null,
                                "name": "Puerto Inca"
                            },
                            {
                                "code": null,
                                "name": "Lauricocha"
                            },
                            {
                                "code": null,
                                "name": "Yarowilca"
                            },
                            {
                                "code": null,
                                "name": "Ica"
                            },
                            {
                                "code": null,
                                "name": "Chincha"
                            },
                            {
                                "code": null,
                                "name": "Nazca"
                            },
                            {
                                "code": null,
                                "name": "Palpa"
                            },
                            {
                                "code": null,
                                "name": "Pisco"
                            },
                            {
                                "code": null,
                                "name": "Huancayo"
                            },
                            {
                                "code": null,
                                "name": "Concepción"
                            },
                            {
                                "code": null,
                                "name": "Chanchamayo"
                            },
                            {
                                "code": null,
                                "name": "Jauja"
                            },
                            {
                                "code": null,
                                "name": "Junín"
                            },
                            {
                                "code": null,
                                "name": "Satipo"
                            },
                            {
                                "code": null,
                                "name": "Tarma"
                            },
                            {
                                "code": null,
                                "name": "Yauli"
                            },
                            {
                                "code": null,
                                "name": "Chupaca"
                            },
                            {
                                "code": null,
                                "name": "Trujillo"
                            },
                            {
                                "code": null,
                                "name": "Ascope"
                            },
                            {
                                "code": null,
                                "name": "Bolívar"
                            },
                            {
                                "code": null,
                                "name": "Chepén"
                            },
                            {
                                "code": null,
                                "name": "Julcán"
                            },
                            {
                                "code": null,
                                "name": "Otuzco"
                            },
                            {
                                "code": null,
                                "name": "Pacasmayo"
                            },
                            {
                                "code": null,
                                "name": "Pataz"
                            },
                            {
                                "code": null,
                                "name": "Sánchez Carrión"
                            },
                            {
                                "code": null,
                                "name": "Santiago de Chuco"
                            },
                            {
                                "code": null,
                                "name": "Gran Chimú"
                            },
                            {
                                "code": null,
                                "name": "Virú"
                            },
                            {
                                "code": null,
                                "name": "Chiclayo"
                            },
                            {
                                "code": null,
                                "name": "Ferreñafe"
                            },
                            {
                                "code": null,
                                "name": "Lambayeque"
                            },
                            {
                                "code": null,
                                "name": "Lima"
                            },
                            {
                                "code": null,
                                "name": "Huaura"
                            },
                            {
                                "code": null,
                                "name": "Barranca"
                            },
                            {
                                "code": null,
                                "name": "Cajatambo"
                            },
                            {
                                "code": null,
                                "name": "Canta"
                            },
                            {
                                "code": null,
                                "name": "Cañete"
                            },
                            {
                                "code": null,
                                "name": "Huaral"
                            },
                            {
                                "code": null,
                                "name": "Huarochirí"
                            },
                            {
                                "code": null,
                                "name": "Oyón"
                            },
                            {
                                "code": null,
                                "name": "Yauyos"
                            },
                            {
                                "code": null,
                                "name": "Maynas"
                            },
                            {
                                "code": null,
                                "name": "Alto Amazonas"
                            },
                            {
                                "code": null,
                                "name": "Loreto"
                            },
                            {
                                "code": null,
                                "name": "Mariscal Ramón Castilla"
                            },
                            {
                                "code": null,
                                "name": "Putumayo"
                            },
                            {
                                "code": null,
                                "name": "Requena"
                            },
                            {
                                "code": null,
                                "name": "Ucayali"
                            },
                            {
                                "code": null,
                                "name": "Datem del Marañón"
                            },
                            {
                                "code": null,
                                "name": "Tambopata"
                            },
                            {
                                "code": null,
                                "name": "Manú"
                            },
                            {
                                "code": null,
                                "name": "Tahuamanu"
                            },
                            {
                                "code": null,
                                "name": "Mariscal Nieto"
                            },
                            {
                                "code": null,
                                "name": "General Sánchez Cerro"
                            },
                            {
                                "code": null,
                                "name": "Ilo"
                            },
                            {
                                "code": null,
                                "name": "Pasco"
                            },
                            {
                                "code": null,
                                "name": "Daniel Alcídes Carrión"
                            },
                            {
                                "code": null,
                                "name": "Oxapampa"
                            },
                            {
                                "code": null,
                                "name": "Piura"
                            },
                            {
                                "code": null,
                                "name": "Ayabaca"
                            },
                            {
                                "code": null,
                                "name": "Huancabamba"
                            },
                            {
                                "code": null,
                                "name": "Morropón"
                            },
                            {
                                "code": null,
                                "name": "Paita"
                            },
                            {
                                "code": null,
                                "name": "Sullana"
                            },
                            {
                                "code": null,
                                "name": "Talara"
                            },
                            {
                                "code": null,
                                "name": "Sechura"
                            },
                            {
                                "code": null,
                                "name": "Puno"
                            },
                            {
                                "code": null,
                                "name": "Azángaro"
                            },
                            {
                                "code": null,
                                "name": "Carabaya"
                            },
                            {
                                "code": null,
                                "name": "Chucuito"
                            },
                            {
                                "code": null,
                                "name": "El Collao"
                            },
                            {
                                "code": null,
                                "name": "Huancané"
                            },
                            {
                                "code": null,
                                "name": "Lampa"
                            },
                            {
                                "code": null,
                                "name": "Melgar"
                            },
                            {
                                "code": null,
                                "name": "Moho"
                            },
                            {
                                "code": null,
                                "name": "San Antonio de Putina"
                            },
                            {
                                "code": null,
                                "name": "San Román"
                            },
                            {
                                "code": null,
                                "name": "Sandia"
                            },
                            {
                                "code": null,
                                "name": "Yunguyo"
                            },
                            {
                                "code": null,
                                "name": "Moyobamba"
                            },
                            {
                                "code": null,
                                "name": "Bellavista"
                            },
                            {
                                "code": null,
                                "name": "El Dorado"
                            },
                            {
                                "code": null,
                                "name": "Huallaga"
                            },
                            {
                                "code": null,
                                "name": "Lamas"
                            },
                            {
                                "code": null,
                                "name": "Mariscal Cáceres"
                            },
                            {
                                "code": null,
                                "name": "Picota"
                            },
                            {
                                "code": null,
                                "name": "Rioja"
                            },
                            {
                                "code": null,
                                "name": "San Martín"
                            },
                            {
                                "code": null,
                                "name": "Tocache"
                            },
                            {
                                "code": null,
                                "name": "Tacna"
                            },
                            {
                                "code": null,
                                "name": "Candarave"
                            },
                            {
                                "code": null,
                                "name": "Jorge Basadre"
                            },
                            {
                                "code": null,
                                "name": "Tarata"
                            },
                            {
                                "code": null,
                                "name": "Tumbes"
                            },
                            {
                                "code": null,
                                "name": "Contralmirante Villar"
                            },
                            {
                                "code": null,
                                "name": "Zarumilla"
                            },
                            {
                                "code": null,
                                "name": "Coronel Portillo"
                            },
                            {
                                "code": null,
                                "name": "Atalaya"
                            },
                            {
                                "code": null,
                                "name": "Padre Abad"
                            },
                            {
                                "code": null,
                                "name": "Purús"
                            }
                        ]
                    },
                    {
                        "capital": "Papeetē",
                        "code": "PF",
                        "continent": {
                            "code": "OC",
                            "name": "Oceania"
                        },
                        "currency": "XPF",
                        "languages": [
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            }
                        ],
                        "name": "French Polynesia",
                        "native": "Polynésie française",
                        "phone": "689",
                        "states": []
                    },
                    {
                        "capital": "Port Moresby",
                        "code": "PG",
                        "continent": {
                            "code": "OC",
                            "name": "Oceania"
                        },
                        "currency": "PGK",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Papua New Guinea",
                        "native": "Papua Niugini",
                        "phone": "675",
                        "states": []
                    },
                    {
                        "capital": "Manila",
                        "code": "PH",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "PHP",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Philippines",
                        "native": "Pilipinas",
                        "phone": "63",
                        "states": [
                            {
                                "code": null,
                                "name": "Abra"
                            },
                            {
                                "code": null,
                                "name": "Agusan del Norte"
                            },
                            {
                                "code": null,
                                "name": "Agusan del Sur"
                            },
                            {
                                "code": null,
                                "name": "Aklan"
                            },
                            {
                                "code": null,
                                "name": "Albay"
                            },
                            {
                                "code": null,
                                "name": "Antique"
                            },
                            {
                                "code": null,
                                "name": "Apayao"
                            },
                            {
                                "code": null,
                                "name": "Aurora"
                            },
                            {
                                "code": null,
                                "name": "Basilan"
                            },
                            {
                                "code": null,
                                "name": "Bataan"
                            },
                            {
                                "code": null,
                                "name": "Batanes"
                            },
                            {
                                "code": null,
                                "name": "Batangas"
                            },
                            {
                                "code": null,
                                "name": "Benguet"
                            },
                            {
                                "code": null,
                                "name": "Biliran"
                            },
                            {
                                "code": null,
                                "name": "Bohol"
                            },
                            {
                                "code": null,
                                "name": "Bukidnon"
                            },
                            {
                                "code": null,
                                "name": "Bulacan"
                            },
                            {
                                "code": null,
                                "name": "Cagayan"
                            },
                            {
                                "code": null,
                                "name": "Camarines Norte"
                            },
                            {
                                "code": null,
                                "name": "Camarines Sur"
                            },
                            {
                                "code": null,
                                "name": "Camiguin"
                            },
                            {
                                "code": null,
                                "name": "Capiz"
                            },
                            {
                                "code": null,
                                "name": "Catanduanes"
                            },
                            {
                                "code": null,
                                "name": "Cavite"
                            },
                            {
                                "code": null,
                                "name": "Cebu"
                            },
                            {
                                "code": null,
                                "name": "Compostela Valley"
                            },
                            {
                                "code": null,
                                "name": "Cotabato"
                            },
                            {
                                "code": null,
                                "name": "Davao del Norte"
                            },
                            {
                                "code": null,
                                "name": "Davao del Sur"
                            },
                            {
                                "code": null,
                                "name": "Davao Occidental"
                            },
                            {
                                "code": null,
                                "name": "Davao Oriental"
                            },
                            {
                                "code": null,
                                "name": "Dinagat Islands"
                            },
                            {
                                "code": null,
                                "name": "Eastern Samar"
                            },
                            {
                                "code": null,
                                "name": "Guimaras"
                            },
                            {
                                "code": null,
                                "name": "Ifugao"
                            },
                            {
                                "code": null,
                                "name": "Ilocos Norte"
                            },
                            {
                                "code": null,
                                "name": "Ilocos Sur"
                            },
                            {
                                "code": null,
                                "name": "Iloilo"
                            },
                            {
                                "code": null,
                                "name": "Isabela"
                            },
                            {
                                "code": null,
                                "name": "Kalinga"
                            },
                            {
                                "code": null,
                                "name": "La Union"
                            },
                            {
                                "code": null,
                                "name": "Laguna"
                            },
                            {
                                "code": null,
                                "name": "Lanao del Norte"
                            },
                            {
                                "code": null,
                                "name": "Lanao del Sur"
                            },
                            {
                                "code": null,
                                "name": "Leyte"
                            },
                            {
                                "code": null,
                                "name": "Maguindanao"
                            },
                            {
                                "code": null,
                                "name": "Marinduque"
                            },
                            {
                                "code": null,
                                "name": "Masbate"
                            },
                            {
                                "code": null,
                                "name": "Misamis Occidental"
                            },
                            {
                                "code": null,
                                "name": "Misamis Oriental"
                            },
                            {
                                "code": null,
                                "name": "Mountain Province"
                            },
                            {
                                "code": null,
                                "name": "Negros Occidental"
                            },
                            {
                                "code": null,
                                "name": "Negros Oriental"
                            },
                            {
                                "code": null,
                                "name": "Northern Samar"
                            },
                            {
                                "code": null,
                                "name": "Nueva Ecija"
                            },
                            {
                                "code": null,
                                "name": "Nueva Vizcaya"
                            },
                            {
                                "code": null,
                                "name": "Occidental Mindoro"
                            },
                            {
                                "code": null,
                                "name": "Oriental Mindoro"
                            },
                            {
                                "code": null,
                                "name": "Palawan"
                            },
                            {
                                "code": null,
                                "name": "Pampanga"
                            },
                            {
                                "code": null,
                                "name": "Pangasinan"
                            },
                            {
                                "code": null,
                                "name": "Quezon"
                            },
                            {
                                "code": null,
                                "name": "Quirino"
                            },
                            {
                                "code": null,
                                "name": "Rizal"
                            },
                            {
                                "code": null,
                                "name": "Romblon"
                            },
                            {
                                "code": null,
                                "name": "Samar"
                            },
                            {
                                "code": null,
                                "name": "Sarangani"
                            },
                            {
                                "code": null,
                                "name": "Siquijor"
                            },
                            {
                                "code": null,
                                "name": "Sorsogon"
                            },
                            {
                                "code": null,
                                "name": "South Cotabato"
                            },
                            {
                                "code": null,
                                "name": "Southern Leyte"
                            },
                            {
                                "code": null,
                                "name": "Sultan Kudarat"
                            },
                            {
                                "code": null,
                                "name": "Sulu"
                            },
                            {
                                "code": null,
                                "name": "Surigao del Norte"
                            },
                            {
                                "code": null,
                                "name": "Surigao del Sur"
                            },
                            {
                                "code": null,
                                "name": "Tarlac"
                            },
                            {
                                "code": null,
                                "name": "Tawi-Tawi"
                            },
                            {
                                "code": null,
                                "name": "Zambales"
                            },
                            {
                                "code": null,
                                "name": "Zamboanga del Norte"
                            },
                            {
                                "code": null,
                                "name": "Zamboanga del Sur"
                            },
                            {
                                "code": null,
                                "name": "Zamboanga Sibugay"
                            },
                            {
                                "code": null,
                                "name": "Metro Manila"
                            }
                        ]
                    },
                    {
                        "capital": "Islamabad",
                        "code": "PK",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "PKR",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            },
                            {
                                "code": "ur",
                                "name": "Urdu",
                                "native": "اردو",
                                "rtl": true
                            }
                        ],
                        "name": "Pakistan",
                        "native": "Pakistan",
                        "phone": "92",
                        "states": [
                            {
                                "code": null,
                                "name": "Azad Kashmir"
                            },
                            {
                                "code": null,
                                "name": "Bahawalpur"
                            },
                            {
                                "code": null,
                                "name": "Bannu"
                            },
                            {
                                "code": null,
                                "name": "Dera Ghazi Khan"
                            },
                            {
                                "code": null,
                                "name": "Dera Ismail Khan"
                            },
                            {
                                "code": null,
                                "name": "Faisalabad"
                            },
                            {
                                "code": null,
                                "name": "F.A.T.A."
                            },
                            {
                                "code": null,
                                "name": "Gujranwala"
                            },
                            {
                                "code": null,
                                "name": "Hazara"
                            },
                            {
                                "code": null,
                                "name": "Hyderabad"
                            },
                            {
                                "code": null,
                                "name": "Islamabad"
                            },
                            {
                                "code": null,
                                "name": "Kalat"
                            },
                            {
                                "code": null,
                                "name": "Karachi"
                            },
                            {
                                "code": null,
                                "name": "Kohat"
                            },
                            {
                                "code": null,
                                "name": "Lahore"
                            },
                            {
                                "code": null,
                                "name": "Larkana"
                            },
                            {
                                "code": null,
                                "name": "Makran"
                            },
                            {
                                "code": null,
                                "name": "Malakand"
                            },
                            {
                                "code": null,
                                "name": "Mardan"
                            },
                            {
                                "code": null,
                                "name": "Mirpur Khas"
                            },
                            {
                                "code": null,
                                "name": "Multan"
                            },
                            {
                                "code": null,
                                "name": "Nasirabad"
                            },
                            {
                                "code": null,
                                "name": "Northern Areas"
                            },
                            {
                                "code": null,
                                "name": "Peshawar"
                            },
                            {
                                "code": null,
                                "name": "Quetta"
                            },
                            {
                                "code": null,
                                "name": "Rawalpindi"
                            },
                            {
                                "code": null,
                                "name": "Sargodha"
                            },
                            {
                                "code": null,
                                "name": "Sahiwal"
                            },
                            {
                                "code": null,
                                "name": "Sibi"
                            },
                            {
                                "code": null,
                                "name": "Sukkur"
                            },
                            {
                                "code": null,
                                "name": "Zhob"
                            }
                        ]
                    },
                    {
                        "capital": "Warsaw",
                        "code": "PL",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "PLN",
                        "languages": [
                            {
                                "code": "pl",
                                "name": "Polish",
                                "native": "Polski",
                                "rtl": false
                            }
                        ],
                        "name": "Poland",
                        "native": "Polska",
                        "phone": "48",
                        "states": []
                    },
                    {
                        "capital": "Saint-Pierre",
                        "code": "PM",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "EUR",
                        "languages": [
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            }
                        ],
                        "name": "Saint Pierre and Miquelon",
                        "native": "Saint-Pierre-et-Miquelon",
                        "phone": "508",
                        "states": []
                    },
                    {
                        "capital": "Adamstown",
                        "code": "PN",
                        "continent": {
                            "code": "OC",
                            "name": "Oceania"
                        },
                        "currency": "NZD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Pitcairn Islands",
                        "native": "Pitcairn Islands",
                        "phone": "64",
                        "states": []
                    },
                    {
                        "capital": "San Juan",
                        "code": "PR",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "USD",
                        "languages": [
                            {
                                "code": "es",
                                "name": "Spanish",
                                "native": "Español",
                                "rtl": false
                            },
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Puerto Rico",
                        "native": "Puerto Rico",
                        "phone": "1787,1939",
                        "states": []
                    },
                    {
                        "capital": "Ramallah",
                        "code": "PS",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "ILS",
                        "languages": [
                            {
                                "code": "ar",
                                "name": "Arabic",
                                "native": "العربية",
                                "rtl": true
                            }
                        ],
                        "name": "Palestine",
                        "native": "فلسطين",
                        "phone": "970",
                        "states": []
                    },
                    {
                        "capital": "Lisbon",
                        "code": "PT",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "EUR",
                        "languages": [
                            {
                                "code": "pt",
                                "name": "Portuguese",
                                "native": "Português",
                                "rtl": false
                            }
                        ],
                        "name": "Portugal",
                        "native": "Portugal",
                        "phone": "351",
                        "states": []
                    },
                    {
                        "capital": "Ngerulmud",
                        "code": "PW",
                        "continent": {
                            "code": "OC",
                            "name": "Oceania"
                        },
                        "currency": "USD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Palau",
                        "native": "Palau",
                        "phone": "680",
                        "states": []
                    },
                    {
                        "capital": "Asunción",
                        "code": "PY",
                        "continent": {
                            "code": "SA",
                            "name": "South America"
                        },
                        "currency": "PYG",
                        "languages": [
                            {
                                "code": "es",
                                "name": "Spanish",
                                "native": "Español",
                                "rtl": false
                            },
                            {
                                "code": "gn",
                                "name": "Guarani",
                                "native": "Avañe'ẽ",
                                "rtl": false
                            }
                        ],
                        "name": "Paraguay",
                        "native": "Paraguay",
                        "phone": "595",
                        "states": []
                    },
                    {
                        "capital": "Doha",
                        "code": "QA",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "QAR",
                        "languages": [
                            {
                                "code": "ar",
                                "name": "Arabic",
                                "native": "العربية",
                                "rtl": true
                            }
                        ],
                        "name": "Qatar",
                        "native": "قطر",
                        "phone": "974",
                        "states": []
                    },
                    {
                        "capital": "Saint-Denis",
                        "code": "RE",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "EUR",
                        "languages": [
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            }
                        ],
                        "name": "Réunion",
                        "native": "La Réunion",
                        "phone": "262",
                        "states": []
                    },
                    {
                        "capital": "Bucharest",
                        "code": "RO",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "RON",
                        "languages": [
                            {
                                "code": "ro",
                                "name": "Romanian",
                                "native": "Română",
                                "rtl": false
                            }
                        ],
                        "name": "Romania",
                        "native": "România",
                        "phone": "40",
                        "states": []
                    },
                    {
                        "capital": "Belgrade",
                        "code": "RS",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "RSD",
                        "languages": [
                            {
                                "code": "sr",
                                "name": "Serbian",
                                "native": "Српски",
                                "rtl": false
                            }
                        ],
                        "name": "Serbia",
                        "native": "Србија",
                        "phone": "381",
                        "states": []
                    },
                    {
                        "capital": "Moscow",
                        "code": "RU",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "RUB",
                        "languages": [
                            {
                                "code": "ru",
                                "name": "Russian",
                                "native": "Русский",
                                "rtl": false
                            }
                        ],
                        "name": "Russia",
                        "native": "Россия",
                        "phone": "7",
                        "states": []
                    },
                    {
                        "capital": "Kigali",
                        "code": "RW",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "RWF",
                        "languages": [
                            {
                                "code": "rw",
                                "name": "Rwandi",
                                "native": "Kinyarwandi",
                                "rtl": false
                            },
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            },
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            }
                        ],
                        "name": "Rwanda",
                        "native": "Rwanda",
                        "phone": "250",
                        "states": []
                    },
                    {
                        "capital": "Riyadh",
                        "code": "SA",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "SAR",
                        "languages": [
                            {
                                "code": "ar",
                                "name": "Arabic",
                                "native": "العربية",
                                "rtl": true
                            }
                        ],
                        "name": "Saudi Arabia",
                        "native": "العربية السعودية",
                        "phone": "966",
                        "states": []
                    },
                    {
                        "capital": "Honiara",
                        "code": "SB",
                        "continent": {
                            "code": "OC",
                            "name": "Oceania"
                        },
                        "currency": "SBD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Solomon Islands",
                        "native": "Solomon Islands",
                        "phone": "677",
                        "states": []
                    },
                    {
                        "capital": "Victoria",
                        "code": "SC",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "SCR",
                        "languages": [
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            },
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Seychelles",
                        "native": "Seychelles",
                        "phone": "248",
                        "states": []
                    },
                    {
                        "capital": "Khartoum",
                        "code": "SD",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "SDG",
                        "languages": [
                            {
                                "code": "ar",
                                "name": "Arabic",
                                "native": "العربية",
                                "rtl": true
                            },
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Sudan",
                        "native": "السودان",
                        "phone": "249",
                        "states": []
                    },
                    {
                        "capital": "Stockholm",
                        "code": "SE",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "SEK",
                        "languages": [
                            {
                                "code": "sv",
                                "name": "Swedish",
                                "native": "Svenska",
                                "rtl": false
                            }
                        ],
                        "name": "Sweden",
                        "native": "Sverige",
                        "phone": "46",
                        "states": []
                    },
                    {
                        "capital": "Singapore",
                        "code": "SG",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "SGD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            },
                            {
                                "code": "ms",
                                "name": "Malay",
                                "native": "Bahasa Melayu",
                                "rtl": false
                            },
                            {
                                "code": "ta",
                                "name": "Tamil",
                                "native": "தமிழ்",
                                "rtl": false
                            },
                            {
                                "code": "zh",
                                "name": "Chinese",
                                "native": "中文",
                                "rtl": false
                            }
                        ],
                        "name": "Singapore",
                        "native": "Singapore",
                        "phone": "65",
                        "states": []
                    },
                    {
                        "capital": "Jamestown",
                        "code": "SH",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "SHP",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Saint Helena",
                        "native": "Saint Helena",
                        "phone": "290",
                        "states": []
                    },
                    {
                        "capital": "Ljubljana",
                        "code": "SI",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "EUR",
                        "languages": [
                            {
                                "code": "sl",
                                "name": "Slovenian",
                                "native": "Slovenščina",
                                "rtl": false
                            }
                        ],
                        "name": "Slovenia",
                        "native": "Slovenija",
                        "phone": "386",
                        "states": []
                    },
                    {
                        "capital": "Longyearbyen",
                        "code": "SJ",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "NOK",
                        "languages": [
                            {
                                "code": "no",
                                "name": "Norwegian",
                                "native": "Norsk",
                                "rtl": false
                            }
                        ],
                        "name": "Svalbard and Jan Mayen",
                        "native": "Svalbard og Jan Mayen",
                        "phone": "4779",
                        "states": []
                    },
                    {
                        "capital": "Bratislava",
                        "code": "SK",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "EUR",
                        "languages": [
                            {
                                "code": "sk",
                                "name": "Slovak",
                                "native": "Slovenčina",
                                "rtl": false
                            }
                        ],
                        "name": "Slovakia",
                        "native": "Slovensko",
                        "phone": "421",
                        "states": []
                    },
                    {
                        "capital": "Freetown",
                        "code": "SL",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "SLL",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Sierra Leone",
                        "native": "Sierra Leone",
                        "phone": "232",
                        "states": []
                    },
                    {
                        "capital": "City of San Marino",
                        "code": "SM",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "EUR",
                        "languages": [
                            {
                                "code": "it",
                                "name": "Italian",
                                "native": "Italiano",
                                "rtl": false
                            }
                        ],
                        "name": "San Marino",
                        "native": "San Marino",
                        "phone": "378",
                        "states": []
                    },
                    {
                        "capital": "Dakar",
                        "code": "SN",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "XOF",
                        "languages": [
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            }
                        ],
                        "name": "Senegal",
                        "native": "Sénégal",
                        "phone": "221",
                        "states": []
                    },
                    {
                        "capital": "Mogadishu",
                        "code": "SO",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "SOS",
                        "languages": [
                            {
                                "code": "so",
                                "name": "Somalia",
                                "native": "Soomaaliga",
                                "rtl": false
                            },
                            {
                                "code": "ar",
                                "name": "Arabic",
                                "native": "العربية",
                                "rtl": true
                            }
                        ],
                        "name": "Somalia",
                        "native": "Soomaaliya",
                        "phone": "252",
                        "states": []
                    },
                    {
                        "capital": "Paramaribo",
                        "code": "SR",
                        "continent": {
                            "code": "SA",
                            "name": "South America"
                        },
                        "currency": "SRD",
                        "languages": [
                            {
                                "code": "nl",
                                "name": "Dutch",
                                "native": "Nederlands",
                                "rtl": false
                            }
                        ],
                        "name": "Suriname",
                        "native": "Suriname",
                        "phone": "597",
                        "states": []
                    },
                    {
                        "capital": "Juba",
                        "code": "SS",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "SSP",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "South Sudan",
                        "native": "South Sudan",
                        "phone": "211",
                        "states": []
                    },
                    {
                        "capital": "São Tomé",
                        "code": "ST",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "STN",
                        "languages": [
                            {
                                "code": "pt",
                                "name": "Portuguese",
                                "native": "Português",
                                "rtl": false
                            }
                        ],
                        "name": "São Tomé and Príncipe",
                        "native": "São Tomé e Príncipe",
                        "phone": "239",
                        "states": []
                    },
                    {
                        "capital": "San Salvador",
                        "code": "SV",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "SVC,USD",
                        "languages": [
                            {
                                "code": "es",
                                "name": "Spanish",
                                "native": "Español",
                                "rtl": false
                            }
                        ],
                        "name": "El Salvador",
                        "native": "El Salvador",
                        "phone": "503",
                        "states": []
                    },
                    {
                        "capital": "Philipsburg",
                        "code": "SX",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "ANG",
                        "languages": [
                            {
                                "code": "nl",
                                "name": "Dutch",
                                "native": "Nederlands",
                                "rtl": false
                            },
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Sint Maarten",
                        "native": "Sint Maarten",
                        "phone": "1721",
                        "states": []
                    },
                    {
                        "capital": "Damascus",
                        "code": "SY",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "SYP",
                        "languages": [
                            {
                                "code": "ar",
                                "name": "Arabic",
                                "native": "العربية",
                                "rtl": true
                            }
                        ],
                        "name": "Syria",
                        "native": "سوريا",
                        "phone": "963",
                        "states": []
                    },
                    {
                        "capital": "Lobamba",
                        "code": "SZ",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "SZL",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            },
                            {
                                "code": "ss",
                                "name": "Swati",
                                "native": "SiSwati",
                                "rtl": false
                            }
                        ],
                        "name": "Swaziland",
                        "native": "Swaziland",
                        "phone": "268",
                        "states": []
                    },
                    {
                        "capital": "Cockburn Town",
                        "code": "TC",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "USD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Turks and Caicos Islands",
                        "native": "Turks and Caicos Islands",
                        "phone": "1649",
                        "states": []
                    },
                    {
                        "capital": "N'Djamena",
                        "code": "TD",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "XAF",
                        "languages": [
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            },
                            {
                                "code": "ar",
                                "name": "Arabic",
                                "native": "العربية",
                                "rtl": true
                            }
                        ],
                        "name": "Chad",
                        "native": "Tchad",
                        "phone": "235",
                        "states": []
                    },
                    {
                        "capital": "Port-aux-Français",
                        "code": "TF",
                        "continent": {
                            "code": "AN",
                            "name": "Antarctica"
                        },
                        "currency": "EUR",
                        "languages": [
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            }
                        ],
                        "name": "French Southern Territories",
                        "native": "Territoire des Terres australes et antarctiques fr",
                        "phone": "262",
                        "states": []
                    },
                    {
                        "capital": "Lomé",
                        "code": "TG",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "XOF",
                        "languages": [
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            }
                        ],
                        "name": "Togo",
                        "native": "Togo",
                        "phone": "228",
                        "states": []
                    },
                    {
                        "capital": "Bangkok",
                        "code": "TH",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "THB",
                        "languages": [
                            {
                                "code": "th",
                                "name": "Thai",
                                "native": "ไทย / Phasa Thai",
                                "rtl": false
                            }
                        ],
                        "name": "Thailand",
                        "native": "ประเทศไทย",
                        "phone": "66",
                        "states": []
                    },
                    {
                        "capital": "Dushanbe",
                        "code": "TJ",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "TJS",
                        "languages": [
                            {
                                "code": "tg",
                                "name": "Tajik",
                                "native": "Тоҷикӣ",
                                "rtl": false
                            },
                            {
                                "code": "ru",
                                "name": "Russian",
                                "native": "Русский",
                                "rtl": false
                            }
                        ],
                        "name": "Tajikistan",
                        "native": "Тоҷикистон",
                        "phone": "992",
                        "states": []
                    },
                    {
                        "capital": "Fakaofo",
                        "code": "TK",
                        "continent": {
                            "code": "OC",
                            "name": "Oceania"
                        },
                        "currency": "NZD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Tokelau",
                        "native": "Tokelau",
                        "phone": "690",
                        "states": []
                    },
                    {
                        "capital": "Dili",
                        "code": "TL",
                        "continent": {
                            "code": "OC",
                            "name": "Oceania"
                        },
                        "currency": "USD",
                        "languages": [
                            {
                                "code": "pt",
                                "name": "Portuguese",
                                "native": "Português",
                                "rtl": false
                            }
                        ],
                        "name": "East Timor",
                        "native": "Timor-Leste",
                        "phone": "670",
                        "states": []
                    },
                    {
                        "capital": "Ashgabat",
                        "code": "TM",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "TMT",
                        "languages": [
                            {
                                "code": "tk",
                                "name": "Turkmen",
                                "native": "Туркмен / تركمن",
                                "rtl": false
                            },
                            {
                                "code": "ru",
                                "name": "Russian",
                                "native": "Русский",
                                "rtl": false
                            }
                        ],
                        "name": "Turkmenistan",
                        "native": "Türkmenistan",
                        "phone": "993",
                        "states": []
                    },
                    {
                        "capital": "Tunis",
                        "code": "TN",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "TND",
                        "languages": [
                            {
                                "code": "ar",
                                "name": "Arabic",
                                "native": "العربية",
                                "rtl": true
                            }
                        ],
                        "name": "Tunisia",
                        "native": "تونس",
                        "phone": "216",
                        "states": []
                    },
                    {
                        "capital": "Nuku'alofa",
                        "code": "TO",
                        "continent": {
                            "code": "OC",
                            "name": "Oceania"
                        },
                        "currency": "TOP",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            },
                            {
                                "code": "to",
                                "name": "Tonga",
                                "native": "Lea Faka-Tonga",
                                "rtl": false
                            }
                        ],
                        "name": "Tonga",
                        "native": "Tonga",
                        "phone": "676",
                        "states": []
                    },
                    {
                        "capital": "Ankara",
                        "code": "TR",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "TRY",
                        "languages": [
                            {
                                "code": "tr",
                                "name": "Turkish",
                                "native": "Türkçe",
                                "rtl": false
                            }
                        ],
                        "name": "Turkey",
                        "native": "Türkiye",
                        "phone": "90",
                        "states": [
                            {
                                "code": null,
                                "name": "Adana"
                            },
                            {
                                "code": null,
                                "name": "Adıyaman"
                            },
                            {
                                "code": null,
                                "name": "Afyonkarahisar"
                            },
                            {
                                "code": null,
                                "name": "Ağrı"
                            },
                            {
                                "code": null,
                                "name": "Amasya"
                            },
                            {
                                "code": null,
                                "name": "Ankara"
                            },
                            {
                                "code": null,
                                "name": "Antalya"
                            },
                            {
                                "code": null,
                                "name": "Artvin"
                            },
                            {
                                "code": null,
                                "name": "Aydın"
                            },
                            {
                                "code": null,
                                "name": "Balıkesir"
                            },
                            {
                                "code": null,
                                "name": "Bilecik"
                            },
                            {
                                "code": null,
                                "name": "Bingöl"
                            },
                            {
                                "code": null,
                                "name": "Bitlis"
                            },
                            {
                                "code": null,
                                "name": "Bolu"
                            },
                            {
                                "code": null,
                                "name": "Burdur"
                            },
                            {
                                "code": null,
                                "name": "Bursa"
                            },
                            {
                                "code": null,
                                "name": "Çanakkale"
                            },
                            {
                                "code": null,
                                "name": "Çankırı"
                            },
                            {
                                "code": null,
                                "name": "Çorum"
                            },
                            {
                                "code": null,
                                "name": "Denizli"
                            },
                            {
                                "code": null,
                                "name": "Diyarbakır"
                            },
                            {
                                "code": null,
                                "name": "Edirne"
                            },
                            {
                                "code": null,
                                "name": "Elazığ"
                            },
                            {
                                "code": null,
                                "name": "Erzincan"
                            },
                            {
                                "code": null,
                                "name": "Erzurum"
                            },
                            {
                                "code": null,
                                "name": "Eskişehir"
                            },
                            {
                                "code": null,
                                "name": "Gaziantep"
                            },
                            {
                                "code": null,
                                "name": "Giresun"
                            },
                            {
                                "code": null,
                                "name": "Gümüşhane"
                            },
                            {
                                "code": null,
                                "name": "Hakkâri"
                            },
                            {
                                "code": null,
                                "name": "Hatay"
                            },
                            {
                                "code": null,
                                "name": "Isparta"
                            },
                            {
                                "code": null,
                                "name": "Mersin"
                            },
                            {
                                "code": null,
                                "name": "Istanbul"
                            },
                            {
                                "code": null,
                                "name": "İzmir"
                            },
                            {
                                "code": null,
                                "name": "Kars"
                            },
                            {
                                "code": null,
                                "name": "Kastamonu"
                            },
                            {
                                "code": null,
                                "name": "Kayseri"
                            },
                            {
                                "code": null,
                                "name": "Kırklareli"
                            },
                            {
                                "code": null,
                                "name": "Kırşehir"
                            },
                            {
                                "code": null,
                                "name": "Kocaeli"
                            },
                            {
                                "code": null,
                                "name": "Konya"
                            },
                            {
                                "code": null,
                                "name": "Kütahya"
                            },
                            {
                                "code": null,
                                "name": "Malatya"
                            },
                            {
                                "code": null,
                                "name": "Manisa"
                            },
                            {
                                "code": null,
                                "name": "Kahramanmaraş"
                            },
                            {
                                "code": null,
                                "name": "Mardin"
                            },
                            {
                                "code": null,
                                "name": "Muğla"
                            },
                            {
                                "code": null,
                                "name": "Muş"
                            },
                            {
                                "code": null,
                                "name": "Nevşehir"
                            },
                            {
                                "code": null,
                                "name": "Niğde"
                            },
                            {
                                "code": null,
                                "name": "Ordu"
                            },
                            {
                                "code": null,
                                "name": "Rize"
                            },
                            {
                                "code": null,
                                "name": "Sakarya"
                            },
                            {
                                "code": null,
                                "name": "Samsun"
                            },
                            {
                                "code": null,
                                "name": "Siirt"
                            },
                            {
                                "code": null,
                                "name": "Sinop"
                            },
                            {
                                "code": null,
                                "name": "Sivas"
                            },
                            {
                                "code": null,
                                "name": "Tekirdağ"
                            },
                            {
                                "code": null,
                                "name": "Tokat"
                            },
                            {
                                "code": null,
                                "name": "Trabzon"
                            },
                            {
                                "code": null,
                                "name": "Tunceli"
                            },
                            {
                                "code": null,
                                "name": "Şanlıurfa"
                            },
                            {
                                "code": null,
                                "name": "Uşak"
                            },
                            {
                                "code": null,
                                "name": "Van"
                            },
                            {
                                "code": null,
                                "name": "Yozgat"
                            },
                            {
                                "code": null,
                                "name": "Zonguldak"
                            },
                            {
                                "code": null,
                                "name": "Aksaray"
                            },
                            {
                                "code": null,
                                "name": "Bayburt"
                            },
                            {
                                "code": null,
                                "name": "Karaman"
                            },
                            {
                                "code": null,
                                "name": "Kırıkkale"
                            },
                            {
                                "code": null,
                                "name": "Batman"
                            },
                            {
                                "code": null,
                                "name": "Şırnak"
                            },
                            {
                                "code": null,
                                "name": "Bartın"
                            },
                            {
                                "code": null,
                                "name": "Ardahan"
                            },
                            {
                                "code": null,
                                "name": "Iğdır"
                            },
                            {
                                "code": null,
                                "name": "Yalova"
                            },
                            {
                                "code": null,
                                "name": "Karabük"
                            },
                            {
                                "code": null,
                                "name": "Kilis"
                            },
                            {
                                "code": null,
                                "name": "Osmaniye"
                            },
                            {
                                "code": null,
                                "name": "Düzce"
                            }
                        ]
                    },
                    {
                        "capital": "Port of Spain",
                        "code": "TT",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "TTD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Trinidad and Tobago",
                        "native": "Trinidad and Tobago",
                        "phone": "1868",
                        "states": []
                    },
                    {
                        "capital": "Funafuti",
                        "code": "TV",
                        "continent": {
                            "code": "OC",
                            "name": "Oceania"
                        },
                        "currency": "AUD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Tuvalu",
                        "native": "Tuvalu",
                        "phone": "688",
                        "states": []
                    },
                    {
                        "capital": "Taipei",
                        "code": "TW",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "TWD",
                        "languages": [
                            {
                                "code": "zh",
                                "name": "Chinese",
                                "native": "中文",
                                "rtl": false
                            }
                        ],
                        "name": "Taiwan",
                        "native": "臺灣",
                        "phone": "886",
                        "states": []
                    },
                    {
                        "capital": "Dodoma",
                        "code": "TZ",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "TZS",
                        "languages": [
                            {
                                "code": "sw",
                                "name": "Swahili",
                                "native": "Kiswahili",
                                "rtl": false
                            },
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Tanzania",
                        "native": "Tanzania",
                        "phone": "255",
                        "states": []
                    },
                    {
                        "capital": "Kyiv",
                        "code": "UA",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "UAH",
                        "languages": [
                            {
                                "code": "uk",
                                "name": "Ukrainian",
                                "native": "Українська",
                                "rtl": false
                            }
                        ],
                        "name": "Ukraine",
                        "native": "Україна",
                        "phone": "380",
                        "states": []
                    },
                    {
                        "capital": "Kampala",
                        "code": "UG",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "UGX",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            },
                            {
                                "code": "sw",
                                "name": "Swahili",
                                "native": "Kiswahili",
                                "rtl": false
                            }
                        ],
                        "name": "Uganda",
                        "native": "Uganda",
                        "phone": "256",
                        "states": []
                    },
                    {
                        "capital": null,
                        "code": "UM",
                        "continent": {
                            "code": "OC",
                            "name": "Oceania"
                        },
                        "currency": "USD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "U.S. Minor Outlying Islands",
                        "native": "United States Minor Outlying Islands",
                        "phone": "1",
                        "states": []
                    },
                    {
                        "capital": "Washington D.C.",
                        "code": "US",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "USD,USN,USS",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "United States",
                        "native": "United States",
                        "phone": "1",
                        "states": [
                            {
                                "code": "AL",
                                "name": "Alabama"
                            },
                            {
                                "code": "AK",
                                "name": "Alaska"
                            },
                            {
                                "code": "AZ",
                                "name": "Arizona"
                            },
                            {
                                "code": "AR",
                                "name": "Arkansas"
                            },
                            {
                                "code": "CA",
                                "name": "California"
                            },
                            {
                                "code": "CO",
                                "name": "Colorado"
                            },
                            {
                                "code": "CT",
                                "name": "Connecticut"
                            },
                            {
                                "code": "DC",
                                "name": "District of Columbia"
                            },
                            {
                                "code": "DE",
                                "name": "Delaware"
                            },
                            {
                                "code": "FL",
                                "name": "Florida"
                            },
                            {
                                "code": "GA",
                                "name": "Georgia"
                            },
                            {
                                "code": "HI",
                                "name": "Hawaii"
                            },
                            {
                                "code": "ID",
                                "name": "Idaho"
                            },
                            {
                                "code": "IL",
                                "name": "Illinois"
                            },
                            {
                                "code": "IN",
                                "name": "Indiana"
                            },
                            {
                                "code": "IA",
                                "name": "Iowa"
                            },
                            {
                                "code": "KS",
                                "name": "Kansas"
                            },
                            {
                                "code": "KY",
                                "name": "Kentucky"
                            },
                            {
                                "code": "LA",
                                "name": "Louisiana"
                            },
                            {
                                "code": "ME",
                                "name": "Maine"
                            },
                            {
                                "code": "MD",
                                "name": "Maryland"
                            },
                            {
                                "code": "MA",
                                "name": "Massachusetts"
                            },
                            {
                                "code": "MI",
                                "name": "Michigan"
                            },
                            {
                                "code": "MN",
                                "name": "Minnesota"
                            },
                            {
                                "code": "MS",
                                "name": "Mississippi"
                            },
                            {
                                "code": "MO",
                                "name": "Missouri"
                            },
                            {
                                "code": "MT",
                                "name": "Montana"
                            },
                            {
                                "code": "NE",
                                "name": "Nebraska"
                            },
                            {
                                "code": "NV",
                                "name": "Nevada"
                            },
                            {
                                "code": "NH",
                                "name": "New Hampshire"
                            },
                            {
                                "code": "NJ",
                                "name": "New Jersey"
                            },
                            {
                                "code": "NM",
                                "name": "New Mexico"
                            },
                            {
                                "code": "NY",
                                "name": "New York"
                            },
                            {
                                "code": "NC",
                                "name": "North Carolina"
                            },
                            {
                                "code": "ND",
                                "name": "North Dakota"
                            },
                            {
                                "code": "OH",
                                "name": "Ohio"
                            },
                            {
                                "code": "OK",
                                "name": "Oklahoma"
                            },
                            {
                                "code": "OR",
                                "name": "Oregon"
                            },
                            {
                                "code": "PA",
                                "name": "Pennsylvania"
                            },
                            {
                                "code": "RI",
                                "name": "Rhode Island"
                            },
                            {
                                "code": "SC",
                                "name": "South Carolina"
                            },
                            {
                                "code": "SD",
                                "name": "South Dakota"
                            },
                            {
                                "code": "TN",
                                "name": "Tennessee"
                            },
                            {
                                "code": "TX",
                                "name": "Texas"
                            },
                            {
                                "code": "UT",
                                "name": "Utah"
                            },
                            {
                                "code": "VT",
                                "name": "Vermont"
                            },
                            {
                                "code": "VA",
                                "name": "Virginia"
                            },
                            {
                                "code": "WA",
                                "name": "Washington"
                            },
                            {
                                "code": "WV",
                                "name": "West Virginia"
                            },
                            {
                                "code": "WI",
                                "name": "Wisconsin"
                            },
                            {
                                "code": "WY",
                                "name": "Wyoming"
                            },
                            {
                                "code": "AS",
                                "name": "American Samoa"
                            },
                            {
                                "code": "GU",
                                "name": "Guam"
                            },
                            {
                                "code": "MP",
                                "name": "Northern Mariana Islands"
                            },
                            {
                                "code": "PR",
                                "name": "Puerto Rico"
                            },
                            {
                                "code": "UM",
                                "name": "United States Minor Outlying Islands"
                            },
                            {
                                "code": "VI",
                                "name": "Virgin Islands"
                            }
                        ]
                    },
                    {
                        "capital": "Montevideo",
                        "code": "UY",
                        "continent": {
                            "code": "SA",
                            "name": "South America"
                        },
                        "currency": "UYI,UYU",
                        "languages": [
                            {
                                "code": "es",
                                "name": "Spanish",
                                "native": "Español",
                                "rtl": false
                            }
                        ],
                        "name": "Uruguay",
                        "native": "Uruguay",
                        "phone": "598",
                        "states": []
                    },
                    {
                        "capital": "Tashkent",
                        "code": "UZ",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "UZS",
                        "languages": [
                            {
                                "code": "uz",
                                "name": "Uzbek",
                                "native": "Ўзбек",
                                "rtl": false
                            },
                            {
                                "code": "ru",
                                "name": "Russian",
                                "native": "Русский",
                                "rtl": false
                            }
                        ],
                        "name": "Uzbekistan",
                        "native": "O‘zbekiston",
                        "phone": "998",
                        "states": []
                    },
                    {
                        "capital": "Vatican City",
                        "code": "VA",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "EUR",
                        "languages": [
                            {
                                "code": "it",
                                "name": "Italian",
                                "native": "Italiano",
                                "rtl": false
                            },
                            {
                                "code": "la",
                                "name": "Latin",
                                "native": "Latina",
                                "rtl": false
                            }
                        ],
                        "name": "Vatican City",
                        "native": "Vaticano",
                        "phone": "379",
                        "states": []
                    },
                    {
                        "capital": "Kingstown",
                        "code": "VC",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "XCD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Saint Vincent and the Grenadines",
                        "native": "Saint Vincent and the Grenadines",
                        "phone": "1784",
                        "states": []
                    },
                    {
                        "capital": "Caracas",
                        "code": "VE",
                        "continent": {
                            "code": "SA",
                            "name": "South America"
                        },
                        "currency": "VES",
                        "languages": [
                            {
                                "code": "es",
                                "name": "Spanish",
                                "native": "Español",
                                "rtl": false
                            }
                        ],
                        "name": "Venezuela",
                        "native": "Venezuela",
                        "phone": "58",
                        "states": []
                    },
                    {
                        "capital": "Road Town",
                        "code": "VG",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "USD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "British Virgin Islands",
                        "native": "British Virgin Islands",
                        "phone": "1284",
                        "states": []
                    },
                    {
                        "capital": "Charlotte Amalie",
                        "code": "VI",
                        "continent": {
                            "code": "NA",
                            "name": "North America"
                        },
                        "currency": "USD",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "U.S. Virgin Islands",
                        "native": "United States Virgin Islands",
                        "phone": "1340",
                        "states": []
                    },
                    {
                        "capital": "Hanoi",
                        "code": "VN",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "VND",
                        "languages": [
                            {
                                "code": "vi",
                                "name": "Vietnamese",
                                "native": "Tiếng Việt",
                                "rtl": false
                            }
                        ],
                        "name": "Vietnam",
                        "native": "Việt Nam",
                        "phone": "84",
                        "states": [
                            {
                                "code": null,
                                "name": "Hà Nội"
                            },
                            {
                                "code": null,
                                "name": "Hà Giang"
                            },
                            {
                                "code": null,
                                "name": "Cao Bằng"
                            },
                            {
                                "code": null,
                                "name": "Bắc Kạn"
                            },
                            {
                                "code": null,
                                "name": "Tuyên Quang"
                            },
                            {
                                "code": null,
                                "name": "Lào Cai"
                            },
                            {
                                "code": null,
                                "name": "Điện Biên"
                            },
                            {
                                "code": null,
                                "name": "Lai Châu"
                            },
                            {
                                "code": null,
                                "name": "Sơn La"
                            },
                            {
                                "code": null,
                                "name": "Yên Bái"
                            },
                            {
                                "code": null,
                                "name": "Hòa Bình"
                            },
                            {
                                "code": null,
                                "name": "Thái Nguyên"
                            },
                            {
                                "code": null,
                                "name": "Lạng Sơn"
                            },
                            {
                                "code": null,
                                "name": "Quảng Ninh"
                            },
                            {
                                "code": null,
                                "name": "Bắc Giang"
                            },
                            {
                                "code": null,
                                "name": "Phú Thọ"
                            },
                            {
                                "code": null,
                                "name": "Vĩnh Phúc"
                            },
                            {
                                "code": null,
                                "name": "Bắc Ninh"
                            },
                            {
                                "code": null,
                                "name": "Hải Dương"
                            },
                            {
                                "code": null,
                                "name": "Hải Phòng"
                            },
                            {
                                "code": null,
                                "name": "Hưng Yên"
                            },
                            {
                                "code": null,
                                "name": "Thái Bình"
                            },
                            {
                                "code": null,
                                "name": "Hà Nam"
                            },
                            {
                                "code": null,
                                "name": "Nam Định"
                            },
                            {
                                "code": null,
                                "name": "Ninh Bình"
                            },
                            {
                                "code": null,
                                "name": "Thanh Hóa"
                            },
                            {
                                "code": null,
                                "name": "Nghệ An"
                            },
                            {
                                "code": null,
                                "name": "Hà Tĩnh"
                            },
                            {
                                "code": null,
                                "name": "Quảng Bình"
                            },
                            {
                                "code": null,
                                "name": "Quảng Trị"
                            },
                            {
                                "code": null,
                                "name": "Thừa Thiên–Huế"
                            },
                            {
                                "code": null,
                                "name": "Đà Nẵng"
                            },
                            {
                                "code": null,
                                "name": "Quảng Nam"
                            },
                            {
                                "code": null,
                                "name": "Quảng Ngãi"
                            },
                            {
                                "code": null,
                                "name": "Bình Định"
                            },
                            {
                                "code": null,
                                "name": "Phú Yên"
                            },
                            {
                                "code": null,
                                "name": "Khánh Hòa"
                            },
                            {
                                "code": null,
                                "name": "Ninh Thuận"
                            },
                            {
                                "code": null,
                                "name": "Bình Thuận"
                            },
                            {
                                "code": null,
                                "name": "Kon Tum"
                            },
                            {
                                "code": null,
                                "name": "Gia Lai"
                            },
                            {
                                "code": null,
                                "name": "Đắk Lắk"
                            },
                            {
                                "code": null,
                                "name": "Đắk Nông"
                            },
                            {
                                "code": null,
                                "name": "Lâm Đồng"
                            },
                            {
                                "code": null,
                                "name": "Bình Phước"
                            },
                            {
                                "code": null,
                                "name": "Tây Ninh"
                            },
                            {
                                "code": null,
                                "name": "Bình Dương"
                            },
                            {
                                "code": null,
                                "name": "Đồng Nai"
                            },
                            {
                                "code": null,
                                "name": "Bà Rịa–Vũng Tàu"
                            },
                            {
                                "code": null,
                                "name": "Thành phố Hồ Chí Minh"
                            },
                            {
                                "code": null,
                                "name": "Long An"
                            },
                            {
                                "code": null,
                                "name": "Tiền Giang"
                            },
                            {
                                "code": null,
                                "name": "Bến Tre"
                            },
                            {
                                "code": null,
                                "name": "Trà Vinh"
                            },
                            {
                                "code": null,
                                "name": "Vĩnh Long"
                            },
                            {
                                "code": null,
                                "name": "Đồng Tháp"
                            },
                            {
                                "code": null,
                                "name": "An Giang"
                            },
                            {
                                "code": null,
                                "name": "Kiên Giang"
                            },
                            {
                                "code": null,
                                "name": "Cần Thơ"
                            },
                            {
                                "code": null,
                                "name": "Hậu Giang"
                            },
                            {
                                "code": null,
                                "name": "Sóc Trăng"
                            },
                            {
                                "code": null,
                                "name": "Bạc Liêu"
                            },
                            {
                                "code": null,
                                "name": "Cà Mau"
                            }
                        ]
                    },
                    {
                        "capital": "Port Vila",
                        "code": "VU",
                        "continent": {
                            "code": "OC",
                            "name": "Oceania"
                        },
                        "currency": "VUV",
                        "languages": [
                            {
                                "code": "bi",
                                "name": "Bislama",
                                "native": "Bislama",
                                "rtl": false
                            },
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            },
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            }
                        ],
                        "name": "Vanuatu",
                        "native": "Vanuatu",
                        "phone": "678",
                        "states": []
                    },
                    {
                        "capital": "Mata-Utu",
                        "code": "WF",
                        "continent": {
                            "code": "OC",
                            "name": "Oceania"
                        },
                        "currency": "XPF",
                        "languages": [
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            }
                        ],
                        "name": "Wallis and Futuna",
                        "native": "Wallis et Futuna",
                        "phone": "681",
                        "states": []
                    },
                    {
                        "capital": "Apia",
                        "code": "WS",
                        "continent": {
                            "code": "OC",
                            "name": "Oceania"
                        },
                        "currency": "WST",
                        "languages": [
                            {
                                "code": "sm",
                                "name": "Samoan",
                                "native": "Gagana Samoa",
                                "rtl": false
                            },
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Samoa",
                        "native": "Samoa",
                        "phone": "685",
                        "states": []
                    },
                    {
                        "capital": "Pristina",
                        "code": "XK",
                        "continent": {
                            "code": "EU",
                            "name": "Europe"
                        },
                        "currency": "EUR",
                        "languages": [
                            {
                                "code": "sq",
                                "name": "Albanian",
                                "native": "Shqip",
                                "rtl": false
                            },
                            {
                                "code": "sr",
                                "name": "Serbian",
                                "native": "Српски",
                                "rtl": false
                            }
                        ],
                        "name": "Kosovo",
                        "native": "Republika e Kosovës",
                        "phone": "377,381,383,386",
                        "states": []
                    },
                    {
                        "capital": "Sana'a",
                        "code": "YE",
                        "continent": {
                            "code": "AS",
                            "name": "Asia"
                        },
                        "currency": "YER",
                        "languages": [
                            {
                                "code": "ar",
                                "name": "Arabic",
                                "native": "العربية",
                                "rtl": true
                            }
                        ],
                        "name": "Yemen",
                        "native": "اليَمَن",
                        "phone": "967",
                        "states": []
                    },
                    {
                        "capital": "Mamoudzou",
                        "code": "YT",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "EUR",
                        "languages": [
                            {
                                "code": "fr",
                                "name": "French",
                                "native": "Français",
                                "rtl": false
                            }
                        ],
                        "name": "Mayotte",
                        "native": "Mayotte",
                        "phone": "262",
                        "states": []
                    },
                    {
                        "capital": "Pretoria",
                        "code": "ZA",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "ZAR",
                        "languages": [
                            {
                                "code": "af",
                                "name": "Afrikaans",
                                "native": "Afrikaans",
                                "rtl": false
                            },
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            },
                            {
                                "code": "nr",
                                "name": "South Ndebele",
                                "native": "isiNdebele",
                                "rtl": false
                            },
                            {
                                "code": "st",
                                "name": "Southern Sotho",
                                "native": "Sesotho",
                                "rtl": false
                            },
                            {
                                "code": "ss",
                                "name": "Swati",
                                "native": "SiSwati",
                                "rtl": false
                            },
                            {
                                "code": "tn",
                                "name": "Tswana",
                                "native": "Setswana",
                                "rtl": false
                            },
                            {
                                "code": "ts",
                                "name": "Tsonga",
                                "native": "Xitsonga",
                                "rtl": false
                            },
                            {
                                "code": "ve",
                                "name": "Venda",
                                "native": "Tshivenḓa",
                                "rtl": false
                            },
                            {
                                "code": "xh",
                                "name": "Xhosa",
                                "native": "isiXhosa",
                                "rtl": false
                            },
                            {
                                "code": "zu",
                                "name": "Zulu",
                                "native": "isiZulu",
                                "rtl": false
                            }
                        ],
                        "name": "South Africa",
                        "native": "South Africa",
                        "phone": "27",
                        "states": []
                    },
                    {
                        "capital": "Lusaka",
                        "code": "ZM",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "ZMW",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            }
                        ],
                        "name": "Zambia",
                        "native": "Zambia",
                        "phone": "260",
                        "states": []
                    },
                    {
                        "capital": "Harare",
                        "code": "ZW",
                        "continent": {
                            "code": "AF",
                            "name": "Africa"
                        },
                        "currency": "USD,ZAR,BWP,GBP,AUD,CNY,INR,JPY",
                        "languages": [
                            {
                                "code": "en",
                                "name": "English",
                                "native": "English",
                                "rtl": false
                            },
                            {
                                "code": "sn",
                                "name": "Shona",
                                "native": "chiShona",
                                "rtl": false
                            },
                            {
                                "code": "nd",
                                "name": "North Ndebele",
                                "native": "Sindebele",
                                "rtl": false
                            }
                        ],
                        "name": "Zimbabwe",
                        "native": "Zimbabwe",
                        "phone": "263",
                        "states": []
                    }
                ]
            }
        }
    }
];

// afterEach function runs after each test suite is executed
afterEach(() => {
    cleanup(); // Resets the DOM after each test suite
})


it("renders loading icon", async () => {
    render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <GetCountries />
        </MockedProvider>
    );

    const loadingIcon = screen.getByTestId("loadingIcon");

    // Test 1
    expect(await screen.getByAltText("loadingIcon")).toBeInTheDocument();
});

it("renders error", async () => {
    const mocks = [
        {
            request: {
                query: GET_COUNTRIES,
            },
            error: new Error()
        }
    ];
    render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <GetCountries />
        </MockedProvider>
    );

    expect(await screen.findByText("Error!")).toBeInTheDocument();
});

it("renders country data", async () => {
    render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <GetCountries />
        </MockedProvider>
    );

    expect(await screen.findByText("AD")).toBeInTheDocument();
});