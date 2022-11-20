import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import Game from "../../pages/Game";

describe("<Game />", () => {
  test("should render Game", () => {
    render(
      <BrowserRouter>
        <Game />
      </BrowserRouter>
    );
    expect(screen.getByTestId("game-main-container")).toBeInTheDocument();
    expect(screen.getByTestId("game-score-container")).toBeInTheDocument();
    expect(screen.getByTestId("game-score-text")).toBeInTheDocument();
    expect(screen.getByTestId("game-score-alternate-text")).toBeInTheDocument();
    expect(
      screen.getByTestId("game-high-scores-container")
    ).toBeInTheDocument();
  });
});
