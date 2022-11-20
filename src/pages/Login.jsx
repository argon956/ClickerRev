import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../components/Alert";
import { storageHelper } from "../helpers/storageHelper";
// import useAuth from "../hooks/useAuth";

const Login = () => {
  const [name, setName] = useState("");
  const [alert, setAlert] = useState({});

  // const { setAuth } = useAuth();

  const navigate = useNavigate();

  const { msg } = alert;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación
    if ([name].includes("")) {
      setAlert({ msg: "Player name can not be empty", error: true });
      return;
    }

    setAlert({});

    const player = {
      name,
      points: 0,
      autoClickers: 0,
    };

    const players = storageHelper.get("players");
    storageHelper.save("loggedPlayerName", player.name);

    if (players === null) {
      let emptyArray = [];
      storageHelper.save("players", [...emptyArray, player]);
    } else {
      const joiningPlayer = players.filter(
        (playerToQuery) => playerToQuery.name === name
      );
      if (!joiningPlayer.length) {
        storageHelper.save("players", [...players, player]);
      }
    }
    navigate("/game");
  };

  return (
    <>
      <div data-testid="login-app-name-title" data-cy="login-app-name-title">
        <h1 className="login-primary-title" data-testid="login-primary-title">
          Cookie Clicker {""}
          <span
            className="login-secondary-title"
            data-testid="login-secondary-title"
          >
            Revisited
          </span>
        </h1>
      </div>
      <div className="login-form-container">
        {msg && <Alert alert={alert} />}
        <form onSubmit={handleSubmit}>
          <div
            className="login-form-container"
            data-testid="login-player-name-input"
          >
            <label className="login-name-input-label">name</label>
            <input
              type="text"
              placeholder="Player name"
              className="login-name-input-field"
              data-testid="login-name-input-field"
              data-cy="login-name-input-field"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Start / Resume Game"
            data-testid="login-button"
            data-cy="login-button"
            className="login-start-game-button"
          />
        </form>
      </div>
    </>
  );
};

export default Login;
