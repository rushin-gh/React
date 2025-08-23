import React from 'react';
import ReactDOM from 'react-dom/client';


const Header = () => {
    return (
        <div id='header'>
            <div id='logo-container'>
                <img id='logo' src='https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-delivery-by-simplepixelsl-brandcrowd.png'/>
            </div>
            <div id='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const cardStyle = {
    backgroundColor: 'yellow'
}

const ResCard = (props) => {
    const { resData } = props;

    const { 
        name, 
        cuisines, 
        avgRatingString, 
        sla 
    } = props.resData.info;

    return (
        <div id='res-card'  >
            <img id='res-logo' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jo9pdipf4elcuch8g55q'></img>
            <h2 id='res-name'>{name}</h2>
            <h3>{cuisines.join(', ')}</h3>
            <div id='res-rate-eta'>
                <h4>{avgRatingString + '\u2605'}</h4>
                <h4>{sla.deliveryTime + ' Minutes'}</h4>
            </div>
        </div>
    );
}



const Body = () => {
    return (
        <div id='body'>
            <div id='search-bar'>
                Search
            </div>
            <div id='res-container'>
                {
                    restaurants.map((item, index) => <ResCard resData={item} key={index}/>)
                }
            </div>
        </div>
    );
}

const AppLayout = () => {
    return (
        <div id='app'>
            <Header/>
            <Body/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);

const restaurants = [
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "377797",
            "name": "Pizza Hut",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/e9c126a2-faff-42e6-88f7-7feaf452f46b_377797.JPG",
            "locality": "Jijamata Nagar",
            "areaName": "Ghansoli",
            "costForTwo": "₹350 for two",
            "cuisines": [
            "Pizzas"
            ],
            "avgRating": 4.1,
            "parentId": "721",
            "avgRatingString": "4.1",
            "totalRatingsString": "3.3K+",
            "sla": {
            "deliveryTime": 33,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2025-08-24 05:00:00",
            "opened": true
            },
            "badges": {
            "imageBadges": [
                {
                "imageId": "Rxawards/_CATEGORY-Pizza.png",
                "description": "Delivery!"
                }
            ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
                "imageBased": {
                "badgeObject": [
                    {
                    "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Pizza.png"
                    }
                    }
                ]
                },
                "textBased": {

                },
                "textExtendedBadges": {

                }
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹99"
            },
            "orderabilityCommunication": {
            "title": {

            },
            "subTitle": {

            },
            "message": {

            },
            "customIcon": {

            }
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-12da53ef-eb29-400e-b4a4-18b9a839b0dc"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/mumbai/pizza-hut-jijamata-nagar-ghansoli-rest377797",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "389314",
            "name": "Chinese Wok",
            "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
            "locality": "Rupa Solitaire Millennium Business Park",
            "areaName": "Vashi",
            "costForTwo": "₹250 for two",
            "cuisines": [
            "Chinese",
            "Asian",
            "Tibetan",
            "Desserts"
            ],
            "avgRating": 4.2,
            "parentId": "61955",
            "avgRatingString": "4.2",
            "totalRatingsString": "4.4K+",
            "sla": {
            "deliveryTime": 45,
            "lastMileTravel": 4,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "4.0 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2025-08-24 02:00:00",
            "opened": true
            },
            "badges": {
            "imageBadges": [
                {
                "imageId": "Rxawards/_CATEGORY-Chinese.png",
                "description": "Delivery!"
                }
            ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
                "imageBased": {
                "badgeObject": [
                    {
                    "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Chinese.png"
                    }
                    }
                ]
                },
                "textBased": {

                },
                "textExtendedBadges": {

                }
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹129"
            },
            "orderabilityCommunication": {
            "title": {

            },
            "subTitle": {

            },
            "message": {

            },
            "customIcon": {

            }
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-12da53ef-eb29-400e-b4a4-18b9a839b0dc"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/mumbai/chinese-wok-rupa-solitaire-millennium-business-park-vashi-rest389314",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "390800",
            "name": "Big Bowl",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_390800.JPG",
            "locality": "Kopar Khairane",
            "areaName": "Vashi",
            "costForTwo": "₹250 for two",
            "cuisines": [
            "North Indian",
            "Chinese",
            "Tibetan",
            "Desserts"
            ],
            "avgRating": 4.2,
            "parentId": "434792",
            "avgRatingString": "4.2",
            "totalRatingsString": "2.0K+",
            "sla": {
            "deliveryTime": 47,
            "lastMileTravel": 4,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "4.0 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2025-08-24 02:00:00",
            "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
                "imageBased": {

                },
                "textBased": {

                },
                "textExtendedBadges": {

                }
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹129"
            },
            "orderabilityCommunication": {
            "title": {

            },
            "subTitle": {

            },
            "message": {

            },
            "customIcon": {

            }
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-12da53ef-eb29-400e-b4a4-18b9a839b0dc"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/mumbai/big-bowl-kopar-khairane-vashi-rest390800",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "935233",
            "name": "Olio - The Wood Fired Pizzeria",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/da9c4ce7-812c-47e1-9f01-cdad9d8066f6_935233.JPG",
            "locality": "Rama Gosavi Marg",
            "areaName": "Airoli",
            "costForTwo": "₹300 for two",
            "cuisines": [
            "Pizzas",
            "Pastas",
            "Italian",
            "Fast Food",
            "Snacks",
            "Beverages",
            "Desserts"
            ],
            "avgRating": 4.1,
            "parentId": "11633",
            "avgRatingString": "4.1",
            "totalRatingsString": "620",
            "sla": {
            "deliveryTime": 41,
            "lastMileTravel": 3.8,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "3.8 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2025-08-24 05:00:00",
            "opened": true
            },
            "badges": {
            "imageBadges": [
                {
                "imageId": "newg.png",
                "description": "Gourmet"
                }
            ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
                "imageBased": {
                "badgeObject": [
                    {
                    "attributes": {
                        "description": "Gourmet",
                        "imageId": "newg.png"
                    }
                    }
                ]
                },
                "textBased": {

                },
                "textExtendedBadges": {

                }
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹99"
            },
            "orderabilityCommunication": {
            "title": {

            },
            "subTitle": {

            },
            "message": {

            },
            "customIcon": {

            }
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-12da53ef-eb29-400e-b4a4-18b9a839b0dc"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/mumbai/olio-the-wood-fired-pizzeria-rama-gosavi-marg-airoli-rest935233",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "413980",
            "name": "KFC",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/e2a66d6a-99ac-401f-a01f-55e26d811428_413980.JPG",
            "locality": "Ulwe",
            "areaName": "Ulwe",
            "costForTwo": "₹400 for two",
            "cuisines": [
            "Burgers",
            "Fast Food",
            "Rolls & Wraps"
            ],
            "avgRating": 4.1,
            "parentId": "547",
            "avgRatingString": "4.1",
            "totalRatingsString": "6.1K+",
            "sla": {
            "deliveryTime": 26,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2025-08-24 04:00:00",
            "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
                "imageBased": {

                },
                "textBased": {

                },
                "textExtendedBadges": {

                }
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹80"
            },
            "orderabilityCommunication": {
            "title": {

            },
            "subTitle": {

            },
            "message": {

            },
            "customIcon": {

            }
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-12da53ef-eb29-400e-b4a4-18b9a839b0dc"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/mumbai/kfc-ulwe-rest413980",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "1113997",
            "name": "Burger King",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/2adc543f-a058-4484-b3ff-6fb5b132bc8f_1113997.jpg",
            "locality": "Thane-Belapur Rd, Ghansoli",
            "areaName": "Besides Cinepolis, Aurum Square",
            "costForTwo": "₹350 for two",
            "cuisines": [
            "Burgers",
            "American"
            ],
            "avgRating": 4.4,
            "parentId": "166",
            "avgRatingString": "4.4",
            "totalRatingsString": "118",
            "sla": {
            "deliveryTime": 35,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2025-08-24 00:00:00",
            "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
                "imageBased": {

                },
                "textBased": {

                },
                "textExtendedBadges": {

                }
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹59"
            },
            "orderabilityCommunication": {
            "title": {

            },
            "subTitle": {

            },
            "message": {

            },
            "customIcon": {

            }
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-12da53ef-eb29-400e-b4a4-18b9a839b0dc"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/mumbai/burger-king-thane-belapur-rd-ghansoli-besides-cinepolis-aurum-square-rest1113997",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "750365",
            "name": "Daily Kitchen - Everyday Homely Meals",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/10/a179c79d-c074-4cd8-84bb-44e73a4d7238_750365.jpg",
            "locality": "Gothivali Navi Mumbai",
            "areaName": "Airoli South",
            "costForTwo": "₹250 for two",
            "cuisines": [
            "Home Food",
            "Indian",
            "North Indian",
            "Thalis"
            ],
            "avgRating": 4.4,
            "parentId": "444382",
            "avgRatingString": "4.4",
            "totalRatingsString": "934",
            "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 3.5,
            "serviceability": "SERVICEABLE",
            "slaString": "20-30 mins",
            "lastMileTravelString": "3.5 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2025-08-24 02:00:00",
            "opened": true
            },
            "badges": {
            "imageBadges": [
                {
                "imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
                "description": "Delivery!"
                }
            ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
                "imageBased": {
                "badgeObject": [
                    {
                    "attributes": {
                        "description": "Delivery!",
                        "imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png"
                    }
                    }
                ]
                },
                "textBased": {

                },
                "textExtendedBadges": {

                }
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹99"
            },
            "orderabilityCommunication": {
            "title": {

            },
            "subTitle": {

            },
            "message": {

            },
            "customIcon": {

            }
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-12da53ef-eb29-400e-b4a4-18b9a839b0dc"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/mumbai/daily-kitchen-everyday-homely-meals-gothivali-navi-airoli-south-rest750365",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "394013",
            "name": "Kwality Walls Ice Cream and More",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/20/8a805aa7-6029-4b58-814b-b0be873af3dd_394013.JPG",
            "locality": "RAJJI HOUSE",
            "areaName": "Kopar Khairane",
            "costForTwo": "₹300 for two",
            "cuisines": [
            "Desserts",
            "Ice Cream",
            "Ice Cream Cakes"
            ],
            "avgRating": 4.6,
            "veg": true,
            "parentId": "582",
            "avgRatingString": "4.6",
            "totalRatingsString": "604",
            "sla": {
            "deliveryTime": 32,
            "lastMileTravel": 4.8,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "4.8 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2025-08-30 00:00:00",
            "opened": true
            },
            "badges": {
            "imageBadges": [
                {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
                }
            ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
                "imageBased": {
                "badgeObject": [
                    {
                    "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                    }
                ]
                },
                "textBased": {

                },
                "textExtendedBadges": {

                }
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "subHeader": "UPTO ₹75"
            },
            "orderabilityCommunication": {
            "title": {

            },
            "subTitle": {

            },
            "message": {

            },
            "customIcon": {

            }
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-12da53ef-eb29-400e-b4a4-18b9a839b0dc"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/mumbai/kwality-walls-ice-cream-and-more-rajji-house-kopar-khairane-rest394013",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "377797",
            "name": "Pizza Hut",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/e9c126a2-faff-42e6-88f7-7feaf452f46b_377797.JPG",
            "locality": "Jijamata Nagar",
            "areaName": "Ghansoli",
            "costForTwo": "₹350 for two",
            "cuisines": [
            "Pizzas"
            ],
            "avgRating": 4.1,
            "parentId": "721",
            "avgRatingString": "4.1",
            "totalRatingsString": "3.3K+",
            "sla": {
            "deliveryTime": 33,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2025-08-24 05:00:00",
            "opened": true
            },
            "badges": {
            "imageBadges": [
                {
                "imageId": "Rxawards/_CATEGORY-Pizza.png",
                "description": "Delivery!"
                }
            ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
                "imageBased": {
                "badgeObject": [
                    {
                    "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Pizza.png"
                    }
                    }
                ]
                },
                "textBased": {

                },
                "textExtendedBadges": {

                }
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹99"
            },
            "orderabilityCommunication": {
            "title": {

            },
            "subTitle": {

            },
            "message": {

            },
            "customIcon": {

            }
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-12da53ef-eb29-400e-b4a4-18b9a839b0dc"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/mumbai/pizza-hut-jijamata-nagar-ghansoli-rest377797",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "389314",
            "name": "Chinese Wok",
            "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
            "locality": "Rupa Solitaire Millennium Business Park",
            "areaName": "Vashi",
            "costForTwo": "₹250 for two",
            "cuisines": [
            "Chinese",
            "Asian",
            "Tibetan",
            "Desserts"
            ],
            "avgRating": 4.2,
            "parentId": "61955",
            "avgRatingString": "4.2",
            "totalRatingsString": "4.4K+",
            "sla": {
            "deliveryTime": 45,
            "lastMileTravel": 4,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "4.0 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2025-08-24 02:00:00",
            "opened": true
            },
            "badges": {
            "imageBadges": [
                {
                "imageId": "Rxawards/_CATEGORY-Chinese.png",
                "description": "Delivery!"
                }
            ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
                "imageBased": {
                "badgeObject": [
                    {
                    "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Chinese.png"
                    }
                    }
                ]
                },
                "textBased": {

                },
                "textExtendedBadges": {

                }
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹129"
            },
            "orderabilityCommunication": {
            "title": {

            },
            "subTitle": {

            },
            "message": {

            },
            "customIcon": {

            }
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-12da53ef-eb29-400e-b4a4-18b9a839b0dc"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/mumbai/chinese-wok-rupa-solitaire-millennium-business-park-vashi-rest389314",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "390800",
            "name": "Big Bowl",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_390800.JPG",
            "locality": "Kopar Khairane",
            "areaName": "Vashi",
            "costForTwo": "₹250 for two",
            "cuisines": [
            "North Indian",
            "Chinese",
            "Tibetan",
            "Desserts"
            ],
            "avgRating": 4.2,
            "parentId": "434792",
            "avgRatingString": "4.2",
            "totalRatingsString": "2.0K+",
            "sla": {
            "deliveryTime": 47,
            "lastMileTravel": 4,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "4.0 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2025-08-24 02:00:00",
            "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
                "imageBased": {

                },
                "textBased": {

                },
                "textExtendedBadges": {

                }
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹129"
            },
            "orderabilityCommunication": {
            "title": {

            },
            "subTitle": {

            },
            "message": {

            },
            "customIcon": {

            }
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-12da53ef-eb29-400e-b4a4-18b9a839b0dc"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/mumbai/big-bowl-kopar-khairane-vashi-rest390800",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "935233",
            "name": "Olio - The Wood Fired Pizzeria",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/da9c4ce7-812c-47e1-9f01-cdad9d8066f6_935233.JPG",
            "locality": "Rama Gosavi Marg",
            "areaName": "Airoli",
            "costForTwo": "₹300 for two",
            "cuisines": [
            "Pizzas",
            "Pastas",
            "Italian",
            "Fast Food",
            "Snacks",
            "Beverages",
            "Desserts"
            ],
            "avgRating": 4.1,
            "parentId": "11633",
            "avgRatingString": "4.1",
            "totalRatingsString": "620",
            "sla": {
            "deliveryTime": 41,
            "lastMileTravel": 3.8,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "3.8 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2025-08-24 05:00:00",
            "opened": true
            },
            "badges": {
            "imageBadges": [
                {
                "imageId": "newg.png",
                "description": "Gourmet"
                }
            ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
                "imageBased": {
                "badgeObject": [
                    {
                    "attributes": {
                        "description": "Gourmet",
                        "imageId": "newg.png"
                    }
                    }
                ]
                },
                "textBased": {

                },
                "textExtendedBadges": {

                }
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹99"
            },
            "orderabilityCommunication": {
            "title": {

            },
            "subTitle": {

            },
            "message": {

            },
            "customIcon": {

            }
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-12da53ef-eb29-400e-b4a4-18b9a839b0dc"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/mumbai/olio-the-wood-fired-pizzeria-rama-gosavi-marg-airoli-rest935233",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "413980",
            "name": "KFC",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/e2a66d6a-99ac-401f-a01f-55e26d811428_413980.JPG",
            "locality": "Ulwe",
            "areaName": "Ulwe",
            "costForTwo": "₹400 for two",
            "cuisines": [
            "Burgers",
            "Fast Food",
            "Rolls & Wraps"
            ],
            "avgRating": 4.1,
            "parentId": "547",
            "avgRatingString": "4.1",
            "totalRatingsString": "6.1K+",
            "sla": {
            "deliveryTime": 26,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2025-08-24 04:00:00",
            "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
                "imageBased": {

                },
                "textBased": {

                },
                "textExtendedBadges": {

                }
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹80"
            },
            "orderabilityCommunication": {
            "title": {

            },
            "subTitle": {

            },
            "message": {

            },
            "customIcon": {

            }
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-12da53ef-eb29-400e-b4a4-18b9a839b0dc"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/mumbai/kfc-ulwe-rest413980",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "1113997",
            "name": "Burger King",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/2adc543f-a058-4484-b3ff-6fb5b132bc8f_1113997.jpg",
            "locality": "Thane-Belapur Rd, Ghansoli",
            "areaName": "Besides Cinepolis, Aurum Square",
            "costForTwo": "₹350 for two",
            "cuisines": [
            "Burgers",
            "American"
            ],
            "avgRating": 4.4,
            "parentId": "166",
            "avgRatingString": "4.4",
            "totalRatingsString": "118",
            "sla": {
            "deliveryTime": 35,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2025-08-24 00:00:00",
            "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
                "imageBased": {

                },
                "textBased": {

                },
                "textExtendedBadges": {

                }
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹59"
            },
            "orderabilityCommunication": {
            "title": {

            },
            "subTitle": {

            },
            "message": {

            },
            "customIcon": {

            }
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-12da53ef-eb29-400e-b4a4-18b9a839b0dc"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/mumbai/burger-king-thane-belapur-rd-ghansoli-besides-cinepolis-aurum-square-rest1113997",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "750365",
            "name": "Daily Kitchen - Everyday Homely Meals",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/10/a179c79d-c074-4cd8-84bb-44e73a4d7238_750365.jpg",
            "locality": "Gothivali Navi Mumbai",
            "areaName": "Airoli South",
            "costForTwo": "₹250 for two",
            "cuisines": [
            "Home Food",
            "Indian",
            "North Indian",
            "Thalis"
            ],
            "avgRating": 4.4,
            "parentId": "444382",
            "avgRatingString": "4.4",
            "totalRatingsString": "934",
            "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 3.5,
            "serviceability": "SERVICEABLE",
            "slaString": "20-30 mins",
            "lastMileTravelString": "3.5 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2025-08-24 02:00:00",
            "opened": true
            },
            "badges": {
            "imageBadges": [
                {
                "imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
                "description": "Delivery!"
                }
            ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
                "imageBased": {
                "badgeObject": [
                    {
                    "attributes": {
                        "description": "Delivery!",
                        "imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png"
                    }
                    }
                ]
                },
                "textBased": {

                },
                "textExtendedBadges": {

                }
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹99"
            },
            "orderabilityCommunication": {
            "title": {

            },
            "subTitle": {

            },
            "message": {

            },
            "customIcon": {

            }
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-12da53ef-eb29-400e-b4a4-18b9a839b0dc"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/mumbai/daily-kitchen-everyday-homely-meals-gothivali-navi-airoli-south-rest750365",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "394013",
            "name": "Kwality Walls Ice Cream and More",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/20/8a805aa7-6029-4b58-814b-b0be873af3dd_394013.JPG",
            "locality": "RAJJI HOUSE",
            "areaName": "Kopar Khairane",
            "costForTwo": "₹300 for two",
            "cuisines": [
            "Desserts",
            "Ice Cream",
            "Ice Cream Cakes"
            ],
            "avgRating": 4.6,
            "veg": true,
            "parentId": "582",
            "avgRatingString": "4.6",
            "totalRatingsString": "604",
            "sla": {
            "deliveryTime": 32,
            "lastMileTravel": 4.8,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "4.8 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2025-08-30 00:00:00",
            "opened": true
            },
            "badges": {
            "imageBadges": [
                {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
                }
            ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
                "imageBased": {
                "badgeObject": [
                    {
                    "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                    }
                ]
                },
                "textBased": {

                },
                "textExtendedBadges": {

                }
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "subHeader": "UPTO ₹75"
            },
            "orderabilityCommunication": {
            "title": {

            },
            "subTitle": {

            },
            "message": {

            },
            "customIcon": {

            }
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-12da53ef-eb29-400e-b4a4-18b9a839b0dc"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/mumbai/kwality-walls-ice-cream-and-more-rajji-house-kopar-khairane-rest394013",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
]