var express = require('express');
const app = express();
const router = express.Router();
var fs = require('fs');

//middleware
const someMiddleware = function(req,res,next){
    console.log(`From ${req.url} ${new Date()}`)
    next();
}
//Middleware functions are functions that have access to the
//request object (req), the response object (res), 
//and the next middleware function in the
//application’s request-response cycle. 
//The next middleware function is commonly denoted by a variable named next.

//to know more about middleware
//https://selvaganesh93.medium.com/how-node-js-middleware-works-d8e02a936113

router.use(someMiddleware)
const restaurantData = [
        {
            "info": {
                "id": "32844",
                "name": "McDonald's",
                "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
                "locality": "LB Nagar",
                "areaName": "Dharmapuri",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Burgers",
                    "Beverages",
                    "Cafe",
                    "Desserts"
                ],
                "avgRating": 4.1,
                "feeDetails": {
                    "restaurantId": "32844",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 7300
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 7300
                },
                "parentId": "630",
                "avgRatingString": "4.1",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 5.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25 mins",
                    "lastMileTravelString": "5.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-11-01 02:00:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "aggregatedDiscountInfoV2": {},
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/mcdonalds-lb-nagar-dharmapuri-hyderabad-32844",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "24629",
                "name": "Domino's Pizza",
                "cloudinaryImageId": "snjzno124phpzc1ntqtx",
                "locality": "L B Nagar",
                "areaName": "Doctors Colony",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Pizzas",
                    "Italian",
                    "Pastas",
                    "Desserts"
                ],
                "avgRating": 4.1,
                "feeDetails": {
                    "restaurantId": "24629",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 7300
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 7300
                },
                "parentId": "2456",
                "avgRatingString": "4.1",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 27,
                    "lastMileTravel": 5.8,
                    "serviceability": "SERVICEABLE",
                    "slaString": "27 mins",
                    "lastMileTravelString": "5.8 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-11-01 02:59:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "₹150 OFF",
                    "subHeader": "ABOVE ₹1499",
                    "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/dominos-pizza-l-b-nagar-doctors-colony-hyderabad-24629",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "148964",
                "name": "Pizza Hut",
                "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                "locality": "L B Nagar",
                "areaName": "L B Nagar",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Pizzas"
                ],
                "avgRating": 3.7,
                "feeDetails": {
                    "restaurantId": "148964",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 7300
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 7300
                },
                "parentId": "721",
                "avgRatingString": "3.7",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 30,
                    "lastMileTravel": 5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30 mins",
                    "lastMileTravelString": "5.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-11-01 03:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "aggregatedDiscountInfoV2": {},
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/pizza-hut-l-b-nagar-hyderabad-148964",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "17121",
                "name": "KFC",
                "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
                "locality": "Kothapet",
                "areaName": "Kothapet",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Burgers",
                    "Biryani",
                    "American",
                    "Snacks",
                    "Fast Food"
                ],
                "avgRating": 3.8,
                "feeDetails": {
                    "restaurantId": "17121",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 7300
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 7300
                },
                "parentId": "547",
                "avgRatingString": "3.8",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 5.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25 mins",
                    "lastMileTravelString": "5.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-11-01 01:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "aggregatedDiscountInfoV2": {},
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/kfc-kothapet-hyderabad-17121",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "40998",
                "name": "Lucky Restaurant",
                "cloudinaryImageId": "pph2zo8kj5wm6147vrsb",
                "locality": "Nagole",
                "areaName": "Nagole",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "Biryani",
                    "North Indian",
                    "Tandoor"
                ],
                "avgRating": 3.8,
                "feeDetails": {
                    "restaurantId": "40998",
                    "fees": [
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 4200
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 4200
                },
                "parentId": "293683",
                "avgRatingString": "3.8",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 17,
                    "lastMileTravel": 3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "17 mins",
                    "lastMileTravelString": "3.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-11-01 01:30:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "30% OFF",
                    "subHeader": "UPTO ₹75"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/lucky-restaurant-nagole-hyderabad-40998",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "140117",
                "name": "Imperial Multi-Cusine Restaurant",
                "cloudinaryImageId": "ib97mlmkhuwwv51syyca",
                "locality": "Saroor Nagar West",
                "areaName": "Saroor Nagar West",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Biryani",
                    "Chinese",
                    "Indian",
                    "Kebabs",
                    "Tandoor"
                ],
                "avgRating": 4.2,
                "feeDetails": {
                    "restaurantId": "140117",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 11300
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 11300
                },
                "parentId": "19254",
                "avgRatingString": "4.2",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 31,
                    "lastMileTravel": 9.9,
                    "serviceability": "SERVICEABLE",
                    "slaString": "31 mins",
                    "lastMileTravelString": "9.9 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-11-01 05:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "aggregatedDiscountInfoV2": {},
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/imperial-multi-cusine-restaurant-saroor-nagar-west-hyderabad-140117",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "104667",
                "name": "Faasos - Wraps & Rolls",
                "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
                "locality": "LB Nagar",
                "areaName": "Nagolu Enclave",
                "costForTwo": "₹200 for two",
                "cuisines": [
                    "Kebabs",
                    "Fast Food",
                    "Snacks",
                    "North Indian",
                    "American",
                    "Healthy Food",
                    "Desserts",
                    "Beverages"
                ],
                "avgRating": 3.8,
                "feeDetails": {
                    "restaurantId": "104667",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 5000
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 5000
                },
                "parentId": "21809",
                "avgRatingString": "3.8",
                "totalRatingsString": "5K+",
                "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 4.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25 mins",
                    "lastMileTravelString": "4.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-11-01 03:00:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "₹125 OFF",
                    "subHeader": "ABOVE ₹199",
                    "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-lb-nagar-nagolu-enclave-hyderabad-104667",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "377930",
                "name": "Baskin Robbins - Ice Cream Desserts",
                "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
                "locality": "Nacharam",
                "areaName": "Uppal",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Desserts",
                    "Ice Cream"
                ],
                "avgRating": 4.1,
                "veg": true,
                "feeDetails": {
                    "restaurantId": "377930",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 10300
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 10300
                },
                "parentId": "5588",
                "avgRatingString": "4.1",
                "totalRatingsString": "100+",
                "sla": {
                    "deliveryTime": 35,
                    "lastMileTravel": 8.8,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35 mins",
                    "lastMileTravelString": "8.8 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-11-01 02:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "10% OFF",
                    "subHeader": "ABOVE ₹1000",
                    "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-nacharam-uppal-hyderabad-377930",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "109168",
                "name": "Al Rabea Al Arabi Cafeteria",
                "cloudinaryImageId": "lu7b9y7xps4icwn6xzfj",
                "locality": "Opposite Lucky Hotel",
                "areaName": "Santosh Nagar",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Lebanese",
                    "Arabian"
                ],
                "avgRating": 4.4,
                "feeDetails": {
                    "restaurantId": "109168",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 14300
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 14300
                },
                "parentId": "7582",
                "avgRatingString": "4.4",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 35,
                    "lastMileTravel": 11.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35 mins",
                    "lastMileTravelString": "11.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-11-01 01:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "aggregatedDiscountInfoV2": {},
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/al-rabea-al-arabi-cafeteria-opposite-lucky-hotel-santosh-nagar-hyderabad-109168",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "104673",
                "name": "Sweet Truth - Cake and Desserts",
                "cloudinaryImageId": "4a3b48488e3aa9bda13efd8cfcd95284",
                "locality": "LB Nagar",
                "areaName": "Nagolu Enclave",
                "costForTwo": "₹450 for two",
                "cuisines": [
                    "Snacks",
                    "Bakery",
                    "Desserts",
                    "Beverages"
                ],
                "avgRating": 4.2,
                "feeDetails": {
                    "restaurantId": "104673",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 5000
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 5000
                },
                "parentId": "4444",
                "avgRatingString": "4.2",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 27,
                    "lastMileTravel": 4.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "27 mins",
                    "lastMileTravelString": "4.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-11-01 03:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "₹125 OFF",
                    "subHeader": "ABOVE ₹199",
                    "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-lb-nagar-nagolu-enclave-hyderabad-104673",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "156171",
                "name": "The Good Bowl",
                "cloudinaryImageId": "0b3356a88b6fc5966c452c4c9b1b5e4a",
                "locality": "LB Nagar FC",
                "areaName": "Nagolu Enclave",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Biryani",
                    "North Indian",
                    "Pastas",
                    "Punjabi",
                    "Desserts",
                    "Beverages"
                ],
                "avgRating": 3.7,
                "feeDetails": {
                    "restaurantId": "156171",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 5000
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 5000
                },
                "parentId": "7918",
                "avgRatingString": "3.7",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 4.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25 mins",
                    "lastMileTravelString": "4.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-11-01 03:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "₹125 OFF",
                    "subHeader": "ABOVE ₹199",
                    "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/the-good-bowl-lb-nagar-fc-nagolu-enclave-hyderabad-156171",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "57903",
                "name": "Capital Multi Cuisine Restaurant",
                "cloudinaryImageId": "ijy2jxi7lfwsebdtazpi",
                "locality": "Malakpet",
                "areaName": "Malakpet",
                "costForTwo": "₹500 for two",
                "cuisines": [
                    "Biryani",
                    "Arabian",
                    "Lebanese"
                ],
                "avgRating": 3.8,
                "feeDetails": {
                    "restaurantId": "57903",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 10300
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 10300
                },
                "parentId": "19262",
                "avgRatingString": "3.8",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 30,
                    "lastMileTravel": 8.9,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30 mins",
                    "lastMileTravelString": "8.9 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-11-01 02:00:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "ABOVE ₹800",
                    "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/capital-multi-cuisine-restaurant-malakpet-hyderabad-57903",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "104672",
                "name": "Firangi Bake",
                "cloudinaryImageId": "so1byxv95m2xhe4qpga8",
                "locality": "LB Nagar",
                "areaName": "Nagolu Enclave",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Pizzas",
                    "Pastas",
                    "Italian",
                    "Mexican",
                    "Healthy Food",
                    "Desserts",
                    "Beverages"
                ],
                "avgRating": 3.8,
                "feeDetails": {
                    "restaurantId": "104672",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 5000
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 5000
                },
                "parentId": "3952",
                "avgRatingString": "3.8",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 29,
                    "lastMileTravel": 4.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "29 mins",
                    "lastMileTravelString": "4.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-11-01 03:00:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "₹125 OFF",
                    "subHeader": "ABOVE ₹199",
                    "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/firangi-bake-lb-nagar-nagolu-enclave-hyderabad-104672",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "48778",
                "name": "The Thick Shake Factory",
                "cloudinaryImageId": "se2snqittbnngjfdihx9",
                "locality": "Dilsukh Nagar",
                "areaName": "Dilsukh Nagar",
                "costForTwo": "₹200 for two",
                "cuisines": [
                    "Beverages"
                ],
                "avgRating": 4.2,
                "feeDetails": {
                    "restaurantId": "48778",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 9300
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 9300
                },
                "parentId": "1033",
                "avgRatingString": "4.2",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 29,
                    "lastMileTravel": 7.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "29 mins",
                    "lastMileTravelString": "7.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-11-01 01:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "ABOVE ₹600",
                    "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/the-thick-shake-factory-dilsukh-nagar-hyderabad-48778",
                "type": "WEBLINK"
            }
        }
]

router
.route("/restaurants")
.get((req,res)=>{
    res.send(restaurantData)
        })
.post((req,res)=>{
    res.send("this is post")
})

module.exports = router;