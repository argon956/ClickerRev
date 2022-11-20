import { useState, useEffect, useCallback } from "react";
import { storageHelper } from "../helpers/storageHelper";

import AdminNav from "../components/AdminNav";
import Footer from "../components/Footer";

const Game = () => {
  const loggedPlayerName = storageHelper.get("loggedPlayerName");
  const playerList = storageHelper.get("players");
  const player = playerList?.find(({ name }) => name === loggedPlayerName);
  const highScores = playerList?.sort((a, b) => b.points - a.points);

  let setIntervalFunction;

  const [counter, setCounter] = useState(player?.points);
  const [purchasedAutoClickers, setPurchasedAutoClickers] = useState(
    player?.autoClickers
  );
  const [showAutoClickersQuantity, setShowAutoClickersQuantity] =
    useState(false);
  const [notEnoughPoints, setNotEnoughPoints] = useState(false);

  const autoClickerBaseCost = 10;

  const autoClickerCost =
    autoClickerBaseCost + autoClickerBaseCost * purchasedAutoClickers;

  const intervalTime = 100 / (purchasedAutoClickers || 1);

  const playersUpdated = playerList?.map((playerToUpdate) => {
    if (playerToUpdate.name === loggedPlayerName) {
      return {
        ...playerToUpdate,
        autoClickers: purchasedAutoClickers,
        points: counter,
      };
    }
    return playerToUpdate;
  });

  storageHelper.save("players", playersUpdated);

  const handleScoreIncrease = () => {
    setCounter((prevCounter) => {
      if (prevCounter < autoClickerCost) {
        setNotEnoughPoints(true);
      } else {
        setNotEnoughPoints(false);
      }
      return prevCounter + 1;
    });
  };

  const updatePlayersPoints = () => {
    setCounter((prevCounter) => {
      return prevCounter + 1;
    });
  };

  const addAutoClicker = () => {
    console.log("Aquí ando");
    setIntervalFunction = setInterval(updatePlayersPoints, intervalTime);
  };

  const purchaseAutoClickers = () => {
    setCounter((prevCounter) => {
      setPurchasedAutoClickers((prevpurchasedAutoClickers) => {
        const autoClickers = prevpurchasedAutoClickers + 1;
        setShowAutoClickersQuantity(true);
        if (prevCounter < autoClickerCost) {
          setNotEnoughPoints(true);
        }
        addAutoClicker();
        console.log(autoClickers);
        return autoClickers;
      });
      return prevCounter - autoClickerCost;
    });
    setNotEnoughPoints(true);
  };

  const checkMinScore = useCallback(() => {
    if (autoClickerCost <= counter) {
      setNotEnoughPoints(false);
    }
  }, [autoClickerCost, counter]);

  useEffect(() => {
    checkMinScore();
  }, [checkMinScore]);

  const stopSetInterval = () => {
    clearInterval(setIntervalFunction);
    setIntervalFunction = null;
  };

  // TODO: add an event listener each time an autoclicker is added

  return (
    <>
      <AdminNav />
      <div class="game-main-container">
        <div className="game-score-container">
          Score:{" "}
          <span className="game-score-text" data-testid="score-text">
            {counter}
          </span>
          {showAutoClickersQuantity ? (
            <div
              className="game-autoclickers-purchased-container"
              data-testid="autoclickers-purchased-container"
            >
              <div className="game-autoclickers-purchased-items-text">
                AutoClickers:
                <span className="game-autoclickers-purchased-value-text">
                  {" "}
                  {purchasedAutoClickers}
                </span>
              </div>
            </div>
          ) : null}
        </div>
        <div className="game-scoring-buttons">
          <div>
            <button
              className="game-score-point-button"
              data-cy="game-score-point-button"
              onClick={handleScoreIncrease}
            >
              Score 1 point
            </button>
          </div>
          <div>
            <button
              className="game-autoclicker-buy-button"
              data-cy="autoclicker-buy-button"
              onClick={purchaseAutoClickers}
              disabled={notEnoughPoints}
            >
              Buy an AutoClicker for {autoClickerCost} points
            </button>
          </div>
          <div className="game-high-scores-container" data-testid="high-scores">
            <span className="game-high-scores-title">Hall of Fame</span>
            <div className="game-high-scores-scoreboard">
              {highScores?.map(({ name, points }, index) => {
                return (
                  <div key={index}>
                    {name} - {points} points
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Game;
