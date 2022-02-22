import React, { useEffect } from "react";

import data from "../shipData.json";
import {
  Image,
  GameBoardWrapper,
  Board,
  Tile,
} from "../themes/styledComponents";
import { assets } from "../util/constants";

const DUMMY_DATA = data;
const SIZE = 10;

const Game = ({ board, setBoard, ships, setShips }) => {
  const initBoard = () => {
    let newBoard = new Array(SIZE);
    for (let i = 0; i < SIZE; i++) {
      newBoard[i] = new Array(SIZE);
      for (let j = 0; j < SIZE; ++j) {
        newBoard[i][j] = { ship: "", hit: false };
      }
    }
    let newShips = {};
    for (let [ship, info] of Object.entries(DUMMY_DATA.shipTypes)) {
      newShips[ship] = { size: info.size, remaining: info.size };
    }
    setShips(newShips);
    for (let ship of DUMMY_DATA.layout) {
      for (let position of ship.positions) {
        let i = position[0];
        let j = position[1];
        newBoard[i][j].ship = ship.ship;
      }
    }
    setBoard(newBoard);
  };

  const hit = (i, j) => {
    if (!board[i][j].hit) {
      board[i][j].hit = true;
      if (board[i][j].ship) {
        ships[board[i][j].ship].remaining--;
        setShips({ ...ships });
      }
      setBoard([...board]);
    }
  };

  useEffect(() => {
    initBoard();
  }, []);

  return (
    <GameBoardWrapper className="Game">
      <Board className="Board">
        {board.map((row, i) =>
          row.map((col, j) => (
            <Tile className="Tile" key={i * SIZE + j} onClick={() => hit(i, j)}>
              {col.hit ? (
                col.ship ? (
                  <Image src={assets.hit} width="100%" height="100%" />
                ) : (
                  <Image src={assets.miss} width="100%" height="100%" />
                )
              ) : (
                <div />
              )}
            </Tile>
          ))
        )}
      </Board>
    </GameBoardWrapper>
  );
};

Game.propTypes = {};

Game.defaultProps = {};

export default Game;
