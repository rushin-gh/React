import { useEffect, useState } from "react"

const useGetRestaurantInfo = (resId) => {
    const [ResData, setResData] = useState(null);

    useEffect(() => {
        GetRestaurantDetails()
    }, []);

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

    return ResData;
}

export default useGetRestaurantInfo;