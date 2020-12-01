import React from 'react';
import Place from './Place.jsx';
import Styles from '../styledComp.js';

const PlacesList = ({data, range, showFavorites, toSave, toggleFav}) => {
  return (
    <ListingsDIV>
      {data.map( (place, index) => <Place
        key={place.list_id}
        place={place}
        range={range}
        showFavorites={showFavorites}
        toSave={toSave}
        toggleFav={toggleFav}
      />)}
    </ListingsDIV>
  )
}

const ListingsDIV = Styles.ListingsDIV;

export default PlacesList;
