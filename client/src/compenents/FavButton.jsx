import React from 'react';
import Styles from '../styledComp.js';

const FavButton = ({place, showFavorites, toSave, toggleFav}) => (
  <HeartButton onClick={() => {
    // showFavorites(true);
    toSave({id: place.list_id, image: place.image});
    toggleFav(place.list_id);
  }}>
    {togglePink(place.isFavorite)}
  </HeartButton>
)

const togglePink = (isFav) => {
  if (isFav) {
    return (
      <PinkHeartSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"/>
      </PinkHeartSVG>
    )
  }
  return (
    <GreyHeartSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"/>
    </GreyHeartSVG>
  )
}

const HeartButton = Styles.HeartButton;
const GreyHeartSVG = Styles.GreyHeartSVG;
const PinkHeartSVG = Styles.PinkHeartSVG;

export default FavButton;
