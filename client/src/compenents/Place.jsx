import React from 'react';
import Styles from '../styledComp.js';
import FavButton from './FavButton.jsx';
import styled from 'styled-components';


const Place = ({place, range, showFavorites, toSave, toggleFav}) => {
  const PlaceDIV = styled.div `
    position: relative;
    margin-left: 0.5%;
    margin-right: 0.5%;
    max-width: ${100/range-1}%;
    flex: 0 0 ${100/range-1}%;
  `;

  return (
    <PlaceDIV>
      <div>
        <StyledIMG className="image"
          src={place.image}
          alt={`House #${place.list_id}`}>
        </StyledIMG>
        <Details>
          <RatingDIV className="rating">
              <StarDIV>{StarIcon}</StarDIV>
              {`${place.rating} (${place.numOfReviews})`}
          </RatingDIV>
          <Type>
            {`${place.type}`}
          </Type>
          <Description>
            {`${place.description}`}
          </Description>
          <PriceDIV><Price>{place.price}</Price><div>{' / night'}</div></PriceDIV>
        </Details>
        <FavButton
          place={place}
          showFavorites={showFavorites}
          toSave={toSave}
          toggleFav={toggleFav}
        />
      </div>
    </PlaceDIV>
  )
}

const HeartIcon = Styles.HeartIcon;
const PlaceInfo = Styles.PlaceInfo;
const StyledIMG = Styles.StyledIMG;
const Details = Styles.Details;
const RatingDIV = Styles.RatingDIV;
const StarDIV = Styles.StarDIV;
const Type = Styles.Type;
const Description = Styles.Description;
const StarIcon = Styles.StarIcon;
const PriceDIV = Styles.PriceDIV;
const Price = Styles.Price;

export default Place;