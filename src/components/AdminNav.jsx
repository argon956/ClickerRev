import { Link } from "react-router-dom";
import stopSetInterval from "../pages/Game.jsx";

const AdminNav = () => {
  return (
    <nav className="flex gap-3">
      <Link
        to="/"
        className="font-bold uppercase text-gray-500"
        onClick={stopSetInterval}
      >
        Exit
      </Link>
    </nav>
  );
};

export default AdminNav;
