import React from 'react';
import {keyframes} from 'styled-components';
import styled from 'styled-components';

const TransitionOpen = keyframes`
  0% {top: 100%; opacity: 0;}
  100% {top: 0; opacity 1}
`;

const StyledComp = {
  //App.jsx styles
  BackgroundDIV: styled.div `
    padding-top: 48px;
    padding-bottom: 48px;
    background-color: rgb(247, 247, 247);
  `,
  CarouselWrap: styled.div `
    padding-left: 40px;
    padding-right: 40px;
  `,
  CarouselDIV: styled.div `
    background-color: rgb(247, 247, 247);
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    width: 60%;
    position: relative;
    overflow-x: hidden;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  `,
  HeaderDIV: styled.div `
    display: flex;
    position: sticky;
    left: 0;
    justify-content: space-between;
    margin: auto;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  `,
  H2: styled.h2 `
    margin-left: 0.5%;
    margin-top: auto;
    margin-bottom: 15px;
  `,
  RightDIV: styled.div `
    display: inline-flex;
    margin-right: 0.5%;
  `,
  PagesDIV: styled.div `
    margin: auto;
    margin-bottom: 15%;
    color: rgb(34, 34, 34);
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin-right: 16px;
  `,
  PreviousDIV: styled.div `
    margin-right: 6px;
  `,
  Previous: styled.div `
    -webkit-box-pack: center;
    -webkit-box-align: center;
    appearance: none;
    display: inline-flex;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.08);
    outline: none;
    margin: 0px;
    padding: 0px;
    color: rgb(34, 34, 34);
    background-color: rgba(255, 255, 255, 0.9);
    cursor: pointer;
    touch-action: manipulation;
    align-items: center;
    justify-content: center;
    background-clip: padding-box;
    box-shadow: transparent 0px 0px 0px 1px, transparent 0px 0px 0px 4px, rgba(0, 0, 0, 0.18) 0px 2px 4px;
    transition: box-shadow 0.2s ease 0s, -ms-transform 0.25s ease 0s, -webkit-transform 0.25s ease 0s, transform 0.25s ease 0s;
    width: 32px;
    height: 32px;
  `,
  NextDIV: styled.div `
    margin-left: 6px;
  `,
  Next: styled.div `
    -webkit-box-pack: center;
    -webkit-box-align: center;
    appearance: none;
    display: inline-flex;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.08);
    outline: none;
    margin: 0px;
    padding: 0px;
    color: rgb(34, 34, 34);
    background-color: rgba(255, 255, 255, 0.9);
    cursor: pointer;
    touch-action: manipulation;
    align-items: center;
    justify-content: center;
    background-clip: padding-box;
    box-shadow: transparent 0px 0px 0px 1px, transparent 0px 0px 0px 4px, rgba(0, 0, 0, 0.18) 0px 2px 4px;
    transition: box-shadow 0.2s ease 0s, -ms-transform 0.25s ease 0s, -webkit-transform 0.25s ease 0s, transform 0.25s ease 0s;
    width: 32px;
    height: 32px;
  `,
  FooterDIV: styled.div `
    margin-left: auto;
    margin-right: auto;
    width: 60%;
  `,
  FooterIMG: styled.img `
    width: 100%;
  `,
  PreviousSVG: styled.svg.attrs({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 18 18",
    role: "presentation",
    'aria-hidden': "true",
    focusable: "false"
  })`
    height: 10px;
    width: 10px;
    display: block;
    fill: currentcolor;
    --darkreader-inline-fill:currentcolor;
  `,
  NextSVG: styled.svg.attrs({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 18 18",
    role: "presentation",
    'aria-hidden': "true",
    focusable: "false"
  })`
    height: 10px;
    width: 10px;
    display: block;
    fill: currentcolor;
    --darkreader-inline-fill: currentcolor;
  `,

  //PlacesList.jsx styles
  ListingsDIV: styled.div `
    margin: auto;
    display: flex;
    scroll-snap-type: y mandatory;
  `,

  //Place.jsx styles
  HeartButton: styled.button`
    position: absolute;
    right: 2px;
    top: 5px;
    background-color: Transparent;
    border: none;
    outline: none;
    cursor: pointer;
`,
  GreyHeartSVG: styled.svg `
    display: block;
    fill-opacity: 0.7;
    height: 24px;
    width: 24px;
    stroke: white;
    stroke-width: 2;
    overflow: visible;
  `,
  PinkHeartSVG: styled.svg `
    display: block;
    fill: rgb(255, 56, 92);
    height: 24px;
    width: 24px;
    stroke: white;
    stroke-width: 2;
    overflow: visible;
  `,
  StyledIMG: styled.img `
    border-radius: 8px;
    width:  100%;
  `,
  Details: styled.div `
    margin-left: 5px;
    margin-right: 5px;
  `,
  RatingDIV: styled.div `
    display: inline-flex;
  `,
  StarDIV: styled.div `
    height: 14px;
    width: 14px;
    fill: currentcolor;
    color: #ff385c;
  `,
  Type: styled.div `
    color: var(--card-typography-color-primary, #222222) !important;
    font-weight: 400 !important;
    font-size: 16px !important;
    line-height: 20px !important;
    max-height: 20px !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    display: -webkit-box !important;
    -webkit-line-clamp: 1 !important;
    -webkit-box-orient: vertical !important;
  `,
  Description: styled.div `
    color: var(--card-typography-color-primary, #222222) !important;
    font-weight: 400 !important;
    font-size: 16px !important;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
    line-height: 20px !important;
    max-height: 20px !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    display: -webkit-box !important;
    -webkit-line-clamp: 1 !important;
    -webkit-box-orient: vertical !important;
  `,
  PriceDIV: styled.div `
    display: inline-flex;
  `,
  Price: styled.div `
    font-weight: bold;
  `,
  HeartIcon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"/></svg>,
  StarIcon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false"><path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z"/></svg>,

  //FavoritesModal

  // ModalOverlay: styled.div`
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   z-index: 1040;
  //   width: 100vw;
  //   height: 100vh;
  //   background-color: #000;
  //   opacity: .5;
  // `,
  // ModalWrap: styled.div`
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   z-index: 1050;
  //   width: 100%;
  //   height: 100%;
  //   outline: 0;
  // `,
  // ModalSquare: styled.div`
  //   z-index: 100;
  //   background: white;
  //   height: 75%;
  //   width: 75%;
  //   position: relative;
  //   margin-top: 5%;
  //   margin-bottom: 5%;
  //   margin-right: 10%;
  //   margin-left: 10%;
  //   border-radius: 10px;
  //   padding: 2rem;
  //   overflow: hidden;
  //   animation: ${TransitionOpen} .4s;
  //   animation-direction: ${show => show ? 'normal' : 'reverse'};
  //   @media (max-width: 750px) {
  //     height: 100%;
  //     width: 100%;
  //     margin: 0 auto;
  //     overflow: auto;
  //     border-radius: 0px;
  //     // animation-direction: reverse;
  //     // animation-fill-mode: backwards;
  //   }
  // `,
  // ModalExit: styled.div`
  //   font-size: 1.4rem;
  //   font-weight: 700;
  //   line-height: 1;
  //   color: #000;
  //   opacity: 1;
  //   border: none;
  //   padding-bottom: 5px;
  // `,
  // ModalGrid: styled.div`
  //   display: grid;
  //   max-height: 100%;
  //   overflow: auto;
  //   @media (min-width: 750px) {
  //     grid-template-columns: 100%;
  //     // overflow: auto;
  //   }
  //   @media (min-width: 1000px) {
  //     grid-template-columns: 40% 60%;
  //     // overflow: auto;
  //   }
  // `,
  // Header: styled.div`
  //   // overflow: auto;
  //   @media (min-width: 1000px) {
  //     // position: fixed;
  //   }
  // `,
  // Lists: styled.div`
  //   @media (min-width: 1000px) {
  //     grid-column: 2;
  //   }
  // `,
  // Button: styled.button`
  //   border-radius: 50%;
  //   border: none;
  //   background-color: white;
  //   font-size: 25px;
  //   outline: none;
  //   text-decoration: bold;
  //   &:hover {
  //     cursor: pointer;
  //     background-color: #F5F5F5;
  //   }
  // `
}

export default StyledComp;