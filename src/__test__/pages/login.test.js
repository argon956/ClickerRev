import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import Login from "../../pages/Login";

describe("<Login />", () => {
  test("should render Login", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    expect(screen.getByTestId("login-app-name-title")).toBeInTheDocument();
    expect(screen.getByTestId("login-primary-title")).toBeInTheDocument();
    expect(screen.getByTestId("login-secondary-title")).toBeInTheDocument();
    expect(screen.getByTestId("login-player-name-input")).toBeInTheDocument();
    expect(screen.getByTestId("login-name-input-field")).toBeInTheDocument();
    expect(screen.getByTestId("login-button")).toBeInTheDocument();
  });
  test("should find text values in Login", async () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    expect(screen.getByText(/Cookie Clicker/i)).toBeTruthy();
    expect(screen.getByText(/Revisited/i)).toBeTruthy();
    expect(screen.getByText(/name/i)).toBeTruthy();
    expect(screen.getByText(/Start \/ Resume Game/i)).toBeTruthy();
  });
});
