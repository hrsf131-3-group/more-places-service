import styled from 'styled-components';

const StyledComp = {
  DetermineSize: range => DetermineSize(range),

  //App.jsx styles
  HeaderDIV: styled.div `
    display: flex;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  `,
  H1: styled.h1 `
    margin-left: 10px;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  `,
  PagesDIV: styled.div `
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  `,
  ButtonDIV: styled.div `
    display: flex;
    justify-content: center;
    right: 0px;
    padding: 20px 0;
  `,

  //Place.jsx styles
  SlideDIV: styled.div `
    list-style: none;
    margin-left: 10px;
    margin-right: 10px;
    padding: 0;
    display: inline-flex;
    flex-shrink: 0;
    scroll-snap-align: start;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  `,
  StyledIMG: styled.img `
    border-radius: 15px;
    width:  300px;
    height: 200px;
  `,
  Details: styled.div `
    margin-left: 5px;
    margin-right: 5px;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  `,
  RatingDIV: styled.div `
    display: inline-flex;
  `,
  StarDIV: styled.div `
    color: pink;
  `,
  PriceDIV: styled.div `
    display: inline-flex;
  `,
  Price: styled.div `
    font-weight: bold;
  `,

}

const DetermineSize = (range) => {
  if (range === 3) {
    return (styled.div `
      width: 965px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 48px;
      padding-right: 48px;
      position: relative;
      overflow-x: auto;
    `)
  } else if (range === 4) {
    return (styled.div `
      width: 1280px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 48px;
      padding-right: 48px;
      position: relative;
      overflow-x: auto;
    `)
  }
}

export default StyledComp;


// updateList(action) {
//   let range = this.state.range;
//   let lastPage = 12/range;
//   let currentPage = Math.floor(this.startOfRange/range) + 1;
//   let startOfRange = currentPage + range;
//   let endOfRange = startOfRange + range;
//   let fullList = this.state.listingsOfID;
//   let tempToShow = [];

//   if (action === 'next') {
//     startOfRange = this.state.startOfRange + range;
//     endOfRange = startOfRange + range;
//   }

//   if (endOfRange > 12) {
//     startOfRange = 12 - range;
//     endOfRange = startOfRange + range;
//     currentPage = Math.floor(startOfRange/range) + 1;
//   } else if (endOfRange) {

//   }

//   for (let i = startOfRange; i < endOfRange; i++) {
//     tempToShow.push(fullList[i]);
//   }

//   this.setState({
//     placesToShow: tempToShow,
//     lastPage: lastPage,
//     startOfRange: startOfRange,
//     currentPage: currentPage
//    });
// }