import React from 'react';
import Styles from '../../styledComp.js';
import Lists from './Lists.jsx'

class FavoritesModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Favorites: {}
    }
  }

  saveToFavorites(place) {
    this.setState({Favorites: place})
  }

  render() {
    if (this.props.show === true) {
      return (
        <ModalDIV>
          <button>x</button>
          <div>
            <div>
            <h1>Save to a list</h1>
            </div>
            <div>

            </div>
          </div>
        </ModalDIV>
      )
    } else return null;
  }
}

export default FavoritesModal;

const ModalDIV = Styles.ModalDIV