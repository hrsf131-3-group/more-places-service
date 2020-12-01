import React from 'react';
import ReactDOM from 'react-dom';
import Styles from '../../styledComp.js';
import List from './List.jsx';

class FavoritesModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Favorites: []
    }
  }

  addToFavs(listing) {
    let oldFavs = this.state.Favorites
    this.setState({Favorites: oldFavs.push(listing)})
  }

  render() {
    return (
      this.props.show ? ReactDOM.createPortal (
        <React.Fragment>
          <ModalWrap>
            <ModalSquare>
              <ModalExit>
                <Button onClick={this.props.showFavorites}>&times;</Button>
              </ModalExit>
              <ModalGrid>
                <Header>
                  <h1>Save to a list</h1>
                </Header>
                <List addToFavs={this.addToFavs} firstListing={this.state.Favorites[0]}/>
              </ModalGrid>
            </ModalSquare>
          </ModalWrap>
        </React.Fragment>, document.body
      ) : null
    );
  }
}

export default FavoritesModal;

const ModalOverlay = Styles.ModalOverlay;
const ModalWrap = Styles.ModalWrap;
const ModalSquare = Styles.ModalSquare;
const ModalExit = Styles.ModalExit;
const ModalGrid = Styles.ModalGrid;
const Header = Styles.Header;
const Lists = Styles.Lists;
const Button = Styles.Button;