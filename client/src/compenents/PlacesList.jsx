import React from 'react';
import ReactDOM from 'react-dom';
import Place from './Place.jsx'

const PlacesList = ({data}) => (
  <div id="placesList">
    <ul>
    {data.listings.map( (place, index) => <Place
      key={place.list_id}
      place={place}
    />)}
    </ul>
  </div>
)

export default PlacesList;