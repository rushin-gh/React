import { CDN_URL } from '../Data/constants'

const ResCard = (props) => {
    const { 
        name, 
        cuisines, 
        avgRatingString,
        cloudinaryImageId,
        costForTwo
    } = props.resData.info;
    
    const {
        deliveryTime
    } = props.resData.info.sla;
    
    return (
        <div id='res-card'  >
            <img id='res-logo' src={CDN_URL + cloudinaryImageId}></img>
            <h2 id='res-name'>{name}</h2>
            <h3>{cuisines.join(', ')}</h3>
            <h3>{costForTwo}    </h3>
            <div id='res-rate-eta'>
                <h4>{avgRatingString + '\u2605'}</h4>
                <h4>{deliveryTime + ' Minutes'}</h4>
            </div>
        </div>
    );
}

export default ResCard;