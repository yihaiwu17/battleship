import styled from "styled-components";

import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../util/constants";

export const FlexBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: ${(props) => props.width ?? "100px"};
  height: ${(props) => props.height ?? "100px"};
  display: block;
  vertical-align: bottom;
  object-fit: contain;
`;

//-----------BattleBoard CSS--------------------//
export const BattleBoardWrapper = styled(FlexBlock)`
  height: 45%;
  min-width: 500px;
  width: 100%;
  margin-top: 20px;
  align-items: flex-start;
  background: white;
  flex-direction: column;
  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    width: 70%;
    height: 65%;
    min-width: 0px;
    margin-top: 0px;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 100%;
    height: 130px;
    margin-top: 15px;
  }
`;

export const ShipImages = styled.div`
  height: 62px;
  width: 50%;
  margin: 10px 0;
  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    width: 50%;
    height: 35px;
    margin: 3px 3px;
  }
`;

export const ImageBlock = styled.img`
  width: 100%;
  height: 100%;
`;

export const Ships = styled(ImageBlock)`
  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    height: 40px;
    width: 100%;
  }
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    height: 25px;
    width: 100%;
  }
`;

export const Dots = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    margin: 10px 0 10px 3px;
  }
`;

export const DotImages = styled.div`
  height: 50px;
  width: 50px;
  padding: 10px;
  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    height: 20px;
    width: 20px;
    padding: 0px;
    margin-left: 1px;
  }
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    height: 12px;
    width: 12px;
    padding: 0px;
    margin-left: 2px;
  }
`;

export const Bars = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    flex-wrap: wrap;
    width: 50%;
    margin: 5px 0;
  }
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    margin: 0;
  }
`;

//-----------GameBoard CSS--------------------//
export const GameBoardWrapper = styled.div`
  width: 666px;
  height: 666px;
  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    width: 100%;
    height: 0;
    padding-top: 100%;
    position: relative;
  }
`;

export const Board = styled.div`
  width: 100%;
  height: 100%;
  border: orange 8px solid;
  display: flex;
  flex-wrap: wrap;
  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const Tile = styled.div`
  width: 65px;
  height: 65px;
  display: inline-block;
  border: gray 1px solid;
  box-sizing: border-box;
  color: black;
  background-color: #e5e4e2;
  &:hover {
    color: white;
    background-color: black;
  }
  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    width: 10%;
    height: 10%;
  }
`;

export const HitMark = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 200%;
  font-weight: bold;
  color: red;
`;

//-----------ScoreTable CSS--------------------//
export const ScoreWrapper = styled(FlexBlock)`
  width: 100%;
  height: 220px;
  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    width: 35%;
    margin-right: 20px;
    height: 100%;
    align-items: flex-start;
  }
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 100%;
    height: 95px;
  }
`;

export const ScoreBox = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgColor};
  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    height: 60%;
  }
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    height: 100%;
  }
`;

export const P = styled.p`
  font-size: ${(props) => props.fontSize};
  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    font-size: ${(props) => props.tabletFontsize};
  }
  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    font-size: ${(props) => props.mobileFontsize};
  }
`;

export const Border = styled.div`
  width: 70%;
  border-top: 2px solid black;
  padding-bottom: 15px;
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    padding-bottom: 5px;
    width: 50%;
    border-top: 1px solid black;
  }
`;

//-----------Home CSS--------------------//
export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
  width: 100%;
  padding: 40px 0 0 0;
  background: white;
  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    padding: 15px 20px;
  }
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    padding: 0;
  }
`;

export const DesktopWrapper = styled.div`
  display: flex;
  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    display: none;
  }
`;

export const MobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media only screen and (min-width: ${TABLET_BREAKPOINT + 1}px) {
    display: none;
  }
`;

export const Score = styled.div`
  display: flex;
  margin: 0 50px 0 0;
  flex-direction: column;
  @media only screen and (max-width: ${TABLET_BREAKPOINT}px) {
    flex-direction: row;
    width: 100%;
    margin: 50px 0 0 0;
  }
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    flex-direction: column;
    width: 100%;
    margin: 0;
  }
`;
