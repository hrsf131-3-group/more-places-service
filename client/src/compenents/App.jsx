import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PlacesList from './PlacesList.jsx';
import dummyData from './dummyData.js';
import StyledComp from './styledComp.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    const CarouselDIV = StyledComp.DetermineSize(this.state.range);
    return (
      <CarouselDIV>
        <HeaderDIV>
          <H1>More places to stay</H1>
          <PagesDIV>{`${this.state.currentPage}/${this.state.lastPage}`}</PagesDIV>
          <ButtonDIV>
            <button onClick={this.showPrevious}>Previous</button>
            <button onClick={this.showNext}>Next</button>
          </ButtonDIV>
        </HeaderDIV>
        <PlacesList data={this.state.placesToShow} range={this.state.range}/>
      </CarouselDIV>
    )
  }
}

const PagesDIV = StyledComp.PagesDIV;

const H1 = StyledComp.H1;

const HeaderDIV = StyledComp.HeaderDIV;

const ButtonDIV = StyledComp.ButtonDIV;

export default App