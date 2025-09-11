import { useEffect, useState,  } from "react";
import { useParams } from "react-router-dom";
import useGetRestaurantInfo from "../util/useGetRestaurantInfo";

const RestaurantPage = () => {
    // const [ResData, setResData] = useState(null); 
    const { resId } = useParams();
    const ResData = useGetRestaurantInfo(resId);

    if (!ResData) {
        return <div>Loading...</div>;
    }

    const {
        name,
        locationInfo,
        cuisines,
        serviceability
    } = ResData[0].card.card

    console.log(ResData[0].card.card);
    return (
        <div id='restaurant-page'>
            <h2>{name}</h2>
            <h3>{locationInfo.address}</h3>
            <h3>{cuisines?.join(', ')}</h3>
            <h5>{serviceability.statusMessage}</h5>
        </div>
    );
}

export default RestaurantPage;