import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PlacesList from './PlacesList.jsx';
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
      placesToShow: [],
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
    let fullList = this.state.listingsOfID;
    let lastPage = 12/range;
    let currentPage = Math.floor(startOfRange/range) + 1;
    let tempToShow = [];

    if (endOfRange > 12) {
      startOfRange = 12 - range;
      endOfRange = startOfRange + range;
      currentPage = Math.floor(startOfRange/range) + 1;
    }
    for (let i = startOfRange; i < endOfRange; i++) {
      tempToShow.push(fullList[i]);
    }

    this.setState({
      placesToShow: tempToShow,
      lastPage: lastPage,
      startOfRange: startOfRange,
      currentPage: currentPage
     });
  }

  showNext() {
    let range = this.state.range;
    let startOfRange = this.state.startOfRange + range;
    let endOfRange = startOfRange + range;
    let fullList = this.state.listingsOfID;
    let currentPage = this.state.currentPage + 1;
    let tempToShow = [];

    if (endOfRange > 12) {
      startOfRange = 0;
      endOfRange = range;
      currentPage = 1;
    }

    for (let i = startOfRange; i < endOfRange; i++) {
      tempToShow.push(fullList[i]);
    }

    this.setState({
      placesToShow: tempToShow,
      startOfRange: startOfRange,
      currentPage: currentPage
    });

  }

  showPrevious() {
    let range = this.state.range;
    let startOfRange = this.state.startOfRange - range;
    let endOfRange = startOfRange + range;
    let fullList = this.state.listingsOfID;
    let currentPage = this.state.currentPage - 1;
    let tempToShow = [];

    if (startOfRange < 0) {
      startOfRange = 12 - range;
      endOfRange = 12;
      currentPage = 12/range;
    }

    for (let i = startOfRange; i < endOfRange; i++) {
      tempToShow.push(fullList[i]);
    }

    this.setState({
      placesToShow: tempToShow,
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

  //FIX THIS!!! ONLY WORKS WHEN 4 RENDERS NOT 12--------------
  toggleFav(id) {
    this.setState({
      placesToShow: this.state.placesToShow.map( (place) => {
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
    const CarouselDIV = Styles.DetermineSize(this.state.range);
    return (
      <BackgroundDIV>
          <FavoritesModal show={this.state.show} toSave={this.state.toSave} showFavorites={this.showFavorites}/>
        <CarouselWrap>
          <CarouselDIV>
            <HeaderDIV>
              <H2>More places to stay</H2>
              <RightDIV>
                <PagesDIV>
                  {`${this.state.currentPage}/${this.state.lastPage}`}
                </PagesDIV>
                <PreviousDIV>
                  <Previous onClick={this.showPrevious}>
                    <PreviousSVG>
                      <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fill-rule="evenodd"></path>
                    </PreviousSVG>
                  </Previous>
                </PreviousDIV>
                <NextDIV>
                  <Next onClick={this.showNext}>
                    <NextSVG>
                      <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fill-rule="evenodd"></path>
                    </NextSVG>
                  </Next>
                </NextDIV>
              </RightDIV>
            </HeaderDIV>
            <PlacesList
              data={this.state.placesToShow}
              range={this.state.range}
              showFavorites={this.showFavorites}
              toSave={this.toSave}
              toggleFav={this.toggleFav}
            />
          </CarouselDIV>
          <FooterDIV>
            <FooterIMG src ='https://s3-us-west-1.amazonaws.com/bnb.housing/staticending.png'></FooterIMG>
          </FooterDIV>
        </CarouselWrap>

      </BackgroundDIV>
    )
  }
}

const CarouselWrap = Styles.CarouselWrap;
const BackgroundDIV = Styles.BackgroundDIV;
const HeaderDIV = Styles.HeaderDIV;
const H2 = Styles.H2;
const RightDIV = Styles.RightDIV;
const PagesDIV = Styles.PagesDIV;
const PreviousDIV = Styles.PreviousDIV;
const Previous = Styles.Previous;
const PreviousSVG = Styles.PreviousSVG;
const NextDIV = Styles.NextDIV;
const Next = Styles.Next;
const NextSVG = Styles.NextSVG;
const FooterDIV =  Styles.FooterDIV;
const FooterIMG = Styles.FooterIMG;

export default App;