import React, {useState} from 'react';
import PlacesList from './PlacesList.jsx';
import Header from './Header.jsx';
import Styles from '../styledComp.js';

const Carousel = (props) => {
  const [x, setX] = useState(0);

  const goLeft = () => {
    if(props.range === 4) {
      (x === 0) ? setX(x - 832) : setX(x + 416);
    }
    if(props.range === 3) {
      (x === 0) ? setX(x - 927) : setX(x + 309);
    }
  };

  const goRight = () => {
    if(props.range === 4) {
      (x <= -832) ? setX(x + 832) : setX(x - 416);
    }
    if(props.range === 3) {
      (x <= -927) ? setX(x + 927) : setX(x - 309);
    }
  };

  return (
    <CarouselDIV>
      <HeaderDIV>
        <H2>More places to stay</H2>
        <RightDIV>
          <PagesDIV>
            {`${props.currentPage} / ${props.lastPage}`}
          </PagesDIV>
          <PreviousDIV>
            <Previous onClick={() => {
              props.showPrevious();
              goLeft();
            }}>
              <PreviousSVG>
                <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd"></path>
              </PreviousSVG>
            </Previous>
          </PreviousDIV>
          <NextDIV>
            <Next onClick={() => {
              props.showNext();
              goRight();
            }}>
              <NextSVG>
                <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd"></path>
              </NextSVG>
            </Next>
          </NextDIV>
        </RightDIV>
      </HeaderDIV>
      <PlacesList
        data={props.data}
        range={props.range}
        showFavorites={props.showFavorites}
        toSave={props.toSave}
        toggleFav={props.toggleFav}
        x={x}
      />
    </CarouselDIV>
  );
}

const CarouselDIV = Styles.CarouselDIV;
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

export default Carousel;