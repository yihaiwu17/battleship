import React, { useState } from "react";

import {
  HomeWrapper,
  DesktopWrapper,
  Score,
  MobileWrapper,
} from "../themes/styledComponents";
import BattleBoard from "./battleBoard";
import Game from "./gameBoard";
import ScoreTable from "./scoreTable";

const Home = () => {
  const [board, setBoard] = useState([]);
  const [ships, setShips] = useState({});

  return (
    <HomeWrapper>
      <DesktopWrapper>
        <Score>
          <ScoreTable ships={ships} />
          <BattleBoard ships={ships} />
        </Score>
        <Game
          board={board}
          setBoard={setBoard}
          ships={ships}
          setShips={setShips}
        />
      </DesktopWrapper>
      <MobileWrapper>
        <Game
          board={board}
          setBoard={setBoard}
          ships={ships}
          setShips={setShips}
        />
        <Score>
          <ScoreTable ships={ships} />
          <BattleBoard ships={ships} />
        </Score>
      </MobileWrapper>
    </HomeWrapper>
  );
};

export default Home;
