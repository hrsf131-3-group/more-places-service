import React from 'react';
import Styles from '../styledComp.js';

const Place = ({place}) => (
  <PlaceDIV>
    <StyledIMG className="image"
      src={place.image}
      alt={`House #${place.list_id}`}>
    </StyledIMG>
    <Details>
      <RatingDIV className="rating"><StarDIV>{StarIcon}</StarDIV>{`${place.rating} (${place.numOfReviews})`}</RatingDIV>
      <div className="description">{`${place.type} - ${place.description}`}</div>
      <PriceDIV><Price>{place.price}</Price><div>{' / night'}</div></PriceDIV>
    </Details>
    <HeartButton>
      <HeartSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"/>
      </HeartSVG>
    </HeartButton>
  </PlaceDIV>
)

const HeartButton = Styles.HeartButton;
const HeartSVG = Styles.HeartSVG;
const HeartIcon = Styles.HeartIcon;
const PlaceDIV = Styles.PlaceDIV;
const PlaceInfo = Styles.PlaceInfo;
const StyledIMG = Styles.StyledIMG;
const Details = Styles.Details;
const RatingDIV = Styles.RatingDIV;
const StarDIV = Styles.StarDIV;
const StarIcon = Styles.StarIcon;
const PriceDIV = Styles.PriceDIV;
const Price = Styles.Price;

export default Place;