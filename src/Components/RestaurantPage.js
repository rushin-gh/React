import { useEffect, useState,  } from "react";
import { useParams } from "react-router-dom";

const RestaurantPage = () => {

    const [ResData, setResData] = useState(null); 
    const { resId } = useParams();

    useEffect(() => {
        GetRestaurantDetails()
    }, []);

    if (!ResData) {
        return <div>Loading...</div>;
    }

    async function GetRestaurantDetails() {
        const resData = await fetch('https://corsproxy.io/https://www.swiggy.com/restaurants/800290/dineout');
        const html = await resData.text();

        const match = html.match(
            /<script id="__NEXT_DATA__" type="application\/json">(.*?)<\/script>/
        );

        if (match && match[1]) {
            const data = JSON.parse(match[1]);
            const cards = data.props.pageProps.widgetResponse.success.cards.filter(item => item.card?.card?.title);
            console.log(cards);
            setResData(cards);
        } 
        else {
            console.error("Could not find __NEXT_DATA__ script");
        }
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