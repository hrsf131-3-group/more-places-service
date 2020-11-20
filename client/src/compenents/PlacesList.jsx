import React from 'react';
import Place from './Place.jsx';
import styled from 'styled-components';

const PlacesList = ({data, range}) => {
  return (
    <div>
      {data.map( (place, index) => <Place
        key={place.list_id}
        place={place}
      />)}
  </div>
  )
}

export default PlacesList;