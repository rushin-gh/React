import ResCard from './ResCard';
import restaurants from "../Data/constants";
import { useState, useEffect } from 'react';
import { swiggy_mock_API } from '../Data/constants';
import ShimmerUI from './ShimmerUI';


const Body = () => {
    // let [listOrRestaurants, setListOfRestaurants] = useState([
    //     {
    //         "info": {
    //             "name": "Pizza Hut",
    //             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/e9c126a2-faff-42e6-88f7-7feaf452f46b_377797.JPG",
    //             "costForTwo": "₹350 for two",
    //             "cuisines": [
    //             "Pizzas"
    //             ],
    //             "avgRatingString": 4.1,
    //             "sla": {
    //                 "deliveryTime": 33,
    //             }
    //         }
    //     },
    //     {
    //         "info": {
    //             "name": "Dominos",
    //             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/e9c126a2-faff-42e6-88f7-7feaf452f46b_377797.JPG",
    //             "costForTwo": "₹350 for two",
    //             "cuisines": [
    //             "Pizzas"
    //             ],
    //             "avgRatingString": 3.9,
    //             "sla": {
    //                 "deliveryTime": 33,
    //             }
    //         }
    //     },
    //     {
    //         "info": {
    //             "name": "Mac Donald's",
    //             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/e9c126a2-faff-42e6-88f7-7feaf452f46b_377797.JPG",
    //             "costForTwo": "₹350 for two",
    //             "cuisines": [
    //             "Pizzas"
    //             ],
    //             "avgRatingString": 3.9,
    //             "sla": {
    //                 "deliveryTime": 33,
    //             }
    //         }
    //     }
    // ]);

    let [listOrRestaurants, setListOfRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const response = await fetch(swiggy_mock_API);
        const respJson = await response.json();

        const updResList = respJson.data.cards.find(item => item.card.card.id == 'restaurant_grid_listing_v2').card.card.gridElements.infoWithStyle.restaurants;

        setTimeout(() => {

            setListOfRestaurants(updResList);
        }, 3000)
    }


    if (listOrRestaurants.length === 0) {
        return <ShimmerUI/>
    }

    return (
        <div id='body'>
            <div id='buttonSection'>
                <button id='topRatedBtn' onClick={() => {
                    const filteredList = listOrRestaurants.filter((res) => res.info.avgRatingString >= 4.2)
                    setListOfRestaurants(filteredList);
                }}>Top Rated</button>
                <button id='showAll' onClick={() => {
                    console.log('Show all hit');
                    setListOfRestaurants(restaurants);
                }}>Show All</button>
            </div>
            <div id='res-container'>
                {
                    listOrRestaurants.map((item, index) => <ResCard resData={item} key={index}/>)
                }
            </div>
        </div>
    );
}

export default Body;