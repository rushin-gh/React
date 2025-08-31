import ResCard from './ResCard';
import restaurants from "../Data/constants";
import { useState, useEffect } from 'react';
import { swiggy_mock_API } from '../Data/constants';
import ShimmerUI from './ShimmerUI'; 


const Body = () => {
    let [listOrRestaurants, setListOfRestaurants] = useState([]);
    let [filteredList, setFilteredList] = useState([]);
    let [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const response = await fetch(swiggy_mock_API);
        const respJson = await response.json();
        const updResList = respJson.data.cards.find(item => item.card.card.id == 'restaurant_grid_listing_v2').card.card.gridElements.infoWithStyle.restaurants;
        setListOfRestaurants(updResList);
        setFilteredList(updResList);
    }

    const ApplySearch = (searchText) => {
        // const text = document.getElementById('searchBox').value;
        let searchList = listOrRestaurants.filter(item => item.info.name.toUpperCase().includes(searchText.toUpperCase()));
        setFilteredList(searchList);
    }
    
    return listOrRestaurants.length === 0
        ? (<ShimmerUI/>) 
        : (
            <div id='body'>
                <div id='buttonSection'>
                    <input type='text' id='searchBox' onChange={(event) => {
                        setSearchText(event.target.value);
                    }} value={searchText}/>
                    <button onClick={() => ApplySearch(searchText)}>Search</button>
                    <button id='topRatedBtn' onClick={() => {
                        const tempList = listOrRestaurants.filter((res) => res.info.avgRatingString >= 4.2)
                        setFilteredList(tempList);
                    }}>Top Rated</button>
                    <button id='showAll' onClick={() => {
                        console.log('Show all hit');
                        setFilteredList(listOrRestaurants);
                    }}>Show All</button>
                </div>
                <div id='res-container'>
                    {
                        filteredList.map((item, index) => <ResCard resData={item} key={index}/>)
                    }
                </div>
            </div>
        );
}

export default Body;