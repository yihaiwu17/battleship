import React from "react";

import { assets } from "../util/constants";
import {
  BattleBoardWrapper,
  Bars,
  ShipImages,
  Ships,
  Dots,
  ImageBlock,
  DotImages,
} from "../themes/styledComponents";

const BattleBoard = ({ ships }) => {
  const entries = Object.entries(ships);

  return (
    <BattleBoardWrapper className="BattleBoardWrapper">
      {entries.map(([key, value], index) => (
        <Bars className="Bar" key={index}>
          <ShipImages
            key={Math.random().toString(36).substr(2, 9)}
            className="ShipImages"
          >
            <Ships
              src={require(`../assets/ships/${key}.png`)}
              alt="battleShips"
              className="Ships"
            />
          </ShipImages>
          <Dots key={key} className="Dots">
            {[...Array(value.size - value.remaining)].map((index) => (
              <DotImages key={index} className="HitDots">
                <ImageBlock src={assets.hitSmall} alt="hit" />
              </DotImages>
            ))}
            {[...Array(value.remaining)].map((index) => (
              <DotImages
                key={Math.random().toString(36).substr(2, 9)}
                className="MissDots"
              >
                <ImageBlock src={assets.missSmall} alt="miss" />
              </DotImages>
            ))}
          </Dots>
        </Bars>
      ))}
    </BattleBoardWrapper>
  );
};

export default BattleBoard;
