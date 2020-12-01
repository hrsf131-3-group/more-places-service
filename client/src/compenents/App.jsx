import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PlacesList from './PlacesList.jsx';
import Header from './Header.jsx';
import Carousel from './Carousel.jsx';
import FavoritesModal from './modal/Modal.jsx'
import dummyData from './dummyData.js';
import Styles from '../styledComp.js';
import styled from 'styled-components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      favorites: [],
      toSave: null,
      id: 0,
      data: [],
      listingsOfID: [],
      range: 4,
      startOfRange: 0,
      currentPage: 1,
      lastPage: 3
    }

    this.updateData = this.updateData.bind(this);
    this.updateList = this.updateList.bind(this);
    this.showNext = this.showNext.bind(this);
    this.showPrevious = this.showPrevious.bind(this);
    this.adjustToWindow = this.adjustToWindow.bind(this);
    this.showFavorites = this.showFavorites.bind(this);
    this.toSave = this.toSave.bind(this);
    this.toggleFav = this.toggleFav.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.adjustToWindow);
    axios.get('/api/homes/:id/nearby')
      .then(this.updateData)
      .catch( (err) => console.error(err) );
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.adjustToWindow);
  }

  adjustToWindow() {
    if (window.innerWidth < 1280) {
      this.setState({range: 3});
      this.updateList();
    } else if (window.innerWidth >= 1280) {
      this.setState({range: 4});
      this.updateList();
    }
  }

  updateData(response) {
    let listingsOfID = response.data[this.state.id].listings;

    this.setState({
      data: response.data,
      listingsOfID: listingsOfID
    });
    this.adjustToWindow();
  }

  updateList(action) {
    let range = this.state.range;
    let startOfRange = this.state.startOfRange;
    let endOfRange = startOfRange + range;
    let lastPage = 12/range;
    let currentPage = Math.floor(startOfRange/range) + 1;

    if (endOfRange > 12) {
      startOfRange = 12 - range;
      endOfRange = startOfRange + range;
      currentPage = Math.floor(startOfRange/range) + 1;
    }

    this.setState({
      lastPage: lastPage,
      startOfRange: startOfRange,
      currentPage: currentPage
     });
  }

  showNext() {
    let range = this.state.range;
    let startOfRange = this.state.startOfRange + range;
    let endOfRange = startOfRange + range;
    let currentPage = this.state.currentPage + 1;

    if (endOfRange > 12) {
      startOfRange = 0;
      endOfRange = range;
      currentPage = 1;
    }

    this.setState({
      startOfRange: startOfRange,
      currentPage: currentPage
    });
  }

  showPrevious() {
    let range = this.state.range;
    let startOfRange = this.state.startOfRange - range;
    let endOfRange = startOfRange + range;
    let currentPage = this.state.currentPage - 1;

    if (startOfRange < 0) {
      startOfRange = 12 - range;
      endOfRange = 12;
      currentPage = 12/range;
    }

    this.setState({
      startOfRange: startOfRange,
      currentPage: currentPage
    });
  }

  //FIX THIS AFTER TESTING--------------------------------------
  showFavorites(event) {
    event = !this.state.show;
    this.setState({show: event});
  }

  toSave(place) {
    this.setState({toSave: place});
  }

  toggleFav(id) {
    this.setState({
      listingsOfID: this.state.listingsOfID.map( (place) => {
          if (place.list_id !== id) {
            return place;
          }
          place.isFavorite = !place.isFavorite;
          return place;
        }
      )
    })
  }

  render() {
    return (
      <BackgroundDIV>
          <FavoritesModal
            show={this.state.show}
            toSave={this.state.toSave}
            showFavorites={this.showFavorites}
          />
        <CarouselWrap>
          <Carousel
            currentPage={this.state.currentPage}
            lastPage={this.state.lastPage}
            showPrevious={this.showPrevious}
            showNext={this.showNext}
            data={this.state.listingsOfID}
            range={this.state.range}
            showFavorites={this.showFavorites}
            toSave={this.toSave}
            toggleFav={this.toggleFav}
          />
          <FooterDIV>
            <FooterIMG src ='https://s3-us-west-1.amazonaws.com/bnb.housing/staticending.png'>
            </FooterIMG>
          </FooterDIV>
        </CarouselWrap>
      </BackgroundDIV>
    )
  }
}

const CarouselWrap = Styles.CarouselWrap;
const BackgroundDIV = Styles.BackgroundDIV;
const FooterDIV =  Styles.FooterDIV;
const FooterIMG = Styles.FooterIMG;

export default App;