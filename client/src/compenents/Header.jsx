import React from 'react';
import PlacesList from './PlacesList.jsx';
import Styles from '../styledComp.js';

const Header = ({currentPage, lastPage, showPrevious, showNext, next}) => {

  return (
    <HeaderDIV>
      <H2>More places to stay</H2>
      <RightDIV>
        <PagesDIV>
          {`${currentPage} / ${lastPage}`}
        </PagesDIV>
        <PreviousDIV>
          <Previous onClick={showPrevious}>
            <PreviousSVG>
              <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd"></path>
            </PreviousSVG>
          </Previous>
        </PreviousDIV>
        <NextDIV>
          <Next onClick={() => {
            showNext();
            next();
          }}>
            <NextSVG>
              <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd"></path>
            </NextSVG>
          </Next>
        </NextDIV>
      </RightDIV>
    </HeaderDIV>
  );
}

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

export default Header;