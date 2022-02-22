import React, { useEffect } from "react";
import { useState } from "react";

import Theme from "../themes/Theme";
import { ScoreBox, Border, P, ScoreWrapper } from "../themes/styledComponents";

const ScoreTable = ({ ships }) => {
  const score = 0;
  const [UserScore, setUserScore] = useState(score);
  const [BotScore, setBotScore] = useState(0);
  const entries = Object.entries(ships);

  const player1 = "player 1";
  const player2 = "player 2";

  const Score = ({ bgColor, player, scoreNumber }) => {
    return (
      <ScoreBox bgColor={bgColor}>
        <P
          fontSize={Theme.fontSize.lg}
          tabletFontsize={Theme.fontSize.md}
          mobileFontsize={Theme.mobileFontSize.lg}
        >
          {scoreNumber < 10 ? "0" + scoreNumber : scoreNumber}
        </P>
        <Border />
        <P
          fontSize={Theme.fontSize.sm}
          tabletFontsize={Theme.mobileFontSize.md}
          mobileFontsize={Theme.mobileFontSize.sm}
        >
          {player}
        </P>
      </ScoreBox>
    );
  };

  useEffect(() => {
    if (
      entries.length > 0 &&
      entries.every((value) => value[1].remaining === 0)
    ) {
      setUserScore(score + 1);
    }
  }, [ships]);

  return (
    <ScoreWrapper>
      <Score
        bgColor={Theme.colors.orange}
        scoreNumber={UserScore}
        player={player1}
      />
      <Score
        bgColor={Theme.colors.jade}
        scoreNumber={BotScore}
        player={player2}
      />
    </ScoreWrapper>
  );
};

export default ScoreTable;
