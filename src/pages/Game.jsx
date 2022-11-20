import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { storageHelper } from "../helpers/storageHelper";

import Footer from "../components/Footer";

const Game = () => {
  const loggedPlayerName = storageHelper.get("loggedPlayerName");
  const playerList = storageHelper.get("players");
  const player = playerList?.find(({ name }) => name === loggedPlayerName);
  const highScores = playerList?.sort((a, b) => b.points - a.points);

  const [counter, setCounter] = useState(player?.points || 0);
  const [purchasedAutoClickers, setPurchasedAutoClickers] = useState(
    player?.autoClickers || 0
  );
  const [showAutoClickersQuantity, setShowAutoClickersQuantity] = useState(
    purchasedAutoClickers > 0
  );
  const [notEnoughPoints, setNotEnoughPoints] = useState(true);
  const [resumeIntervalFunction, setResumeIntervalFunction] = useState(true);

  const autoClickerBaseCost = 10;

  const autoClickerCost =
    autoClickerBaseCost + autoClickerBaseCost * purchasedAutoClickers;

  const intervalTime = 100 / (purchasedAutoClickers || 1);
  let setIntervalFunction;

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

  const updatePlayerPoints = () => {
    setCounter((prevCounter) => {
      return prevCounter + 1;
    });
  };

  if (resumeIntervalFunction) {
    setIntervalFunction =
      purchasedAutoClickers > 0
        ? setInterval(updatePlayerPoints, intervalTime)
        : null;
    setResumeIntervalFunction(false);
  }

  const addAutoClicker = () => {
    setIntervalFunction = setInterval(updatePlayerPoints, intervalTime);
  };

  const purchaseAutoClickers = () => {
    setCounter((prevCounter) => {
      setPurchasedAutoClickers((prevPurchasedAutoClickers) => {
        const autoClickers = prevPurchasedAutoClickers + 1;
        setShowAutoClickersQuantity(true);
        if (prevCounter < autoClickerCost) {
          setNotEnoughPoints(true);
        }
        addAutoClicker();
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

  const stopSetInterval = () => {
    clearInterval(setIntervalFunction);
    setIntervalFunction = null;
  };

  useEffect(() => {
    checkMinScore();
  }, [checkMinScore]);

  return (
    <>
      <nav>
        <Link
          to="/"
          className="font-bold uppercase text-gray-500"
          onClick={stopSetInterval}
        >
          Exit
        </Link>
      </nav>
      <div className="game-main-container">
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
        <div className="">
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
              hidden={notEnoughPoints}
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
