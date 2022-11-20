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
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">
          Cookie Clicker {""}
          <span className="text-black">Revisited</span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {msg && <Alert alert={alert} />}
        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              name
            </label>
            <input
              type="text"
              placeholder="Player name"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Start / Resume Game"
            className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
          />
        </form>
      </div>
    </>
  );
};

export default Login;
