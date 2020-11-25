import React from 'react';
import Place from './Place.jsx';
import Styles from '../styledComp.js';

const PlacesList = ({data, range}) => {
  return (
    <ListingsDIV>
      {data.map( (place, index) => <Place
        key={place.list_id}
        place={place}
      />)}
    </ListingsDIV>
  )
}

const ListingsDIV = Styles.ListingsDIV;

export default PlacesList;
