import React from 'react';
import ReactDOM from 'react-dom';

const Place = ({place}) => (
    <div>
      <li class="place">
        <img src={place.image} alt={`House #${place.list_id}`}></img>
        <div class="rating">{`${place.rating} (${place.numOfReviews})`}</div>
        <div class="description">{`${place.type} - ${place.description}`}</div>
        <div class="price">{place.price}</div>
      </li>
    </div>

)

export default Place;