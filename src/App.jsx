import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./pages/Game";
import MainLayout from "./layouts/MainLayout";

import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Login />} />
          <Route path="/game" element={<Game />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
