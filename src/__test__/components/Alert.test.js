import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Alert from "../../components/Alert";

describe("Alert", () => {
  test("should render Alert", () => {
    const alert = { msg: "Player name can not be empty", error: true };
    render(<Alert alert={alert} />);
    expect(screen.getByText(alert.msg)).toBeInTheDocument();
  });
});
