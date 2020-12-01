import React from 'react';
import Styles from '../styledComp.js';
import FavButton from './FavButton.jsx';
import styled from 'styled-components';


const Place = ({place, range, showFavorites, toSave, toggleFav}) => {
  const PlaceDIV = styled.div `
    position: relative;
    width: ${100/range}%;
    margin-left: 10px;
    margin-right: 10px;
    scroll-snap-align: start;
  `;

  return (
    <PlaceDIV>
      <StyledIMG className="image"
        src={place.image}
        alt={`House #${place.list_id}`}>
      </StyledIMG>
      <Details>
        <RatingDIV className="rating">
            <StarDIV>{StarIcon}</StarDIV>
            {`${place.rating} (${place.numOfReviews})`}
        </RatingDIV>
        <div className="description">
            {`${place.type} - ${place.description}`}
        </div>
        <PriceDIV><Price>{place.price}</Price><div>{' / night'}</div></PriceDIV>
      </Details>
      <FavButton
        place={place}
        showFavorites={showFavorites}
        toSave={toSave}
        toggleFav={toggleFav}
      />
    </PlaceDIV>
  )
}

const HeartIcon = Styles.HeartIcon;
const PlaceInfo = Styles.PlaceInfo;
const StyledIMG = Styles.StyledIMG;
const Details = Styles.Details;
const RatingDIV = Styles.RatingDIV;
const StarDIV = Styles.StarDIV;
const StarIcon = Styles.StarIcon;
const PriceDIV = Styles.PriceDIV;
const Price = Styles.Price;

export default Place;