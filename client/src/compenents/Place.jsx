import React from 'react';
import StyledComp from './styledComp.js';

const Place = ({place}) => (
    <SlideDIV>
      <div>
        <StyledIMG className="image"
          src={place.image}
          alt={`House #${place.list_id}`}
        ></StyledIMG>
        <Details>
          <RatingDIV className="rating"><StarDIV>★</StarDIV>{`${place.rating} (${place.numOfReviews})`}</RatingDIV>
          <div className="description">{`${place.type} - ${place.description}`}</div>
          <PriceDIV><Price>{place.price}</Price><div>{' / night'}</div></PriceDIV>
        </Details>
      </div>
    </SlideDIV>
)

const PriceDIV = StyledComp.PriceDIV;

const Price = StyledComp.Price;

const RatingDIV = StyledComp.RatingDIV;

const StarDIV = StyledComp.StarDIV;

const SlideDIV = StyledComp.SlideDIV;

const StyledIMG = StyledComp.StyledIMG;

const Details = StyledComp.Details;

export default Place;