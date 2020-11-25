import React from 'react';

const favoritesModal = ({show}) => {
  if (show) {
    return (<div>Hello Modal</div>)
  } else {
    return null;
  }
}

export default favoritesModal;