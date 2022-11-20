import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((registered) =>
      console.log("SW successfully installed  ", registered)
    )
    .catch((error) => console.log("SW installation failed  ", error));
} else {
  console.log("SW unsupported");
}
