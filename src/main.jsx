import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AppCounterContext from "./components/context/CreateContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppCounterContext>
      <App />
    </AppCounterContext>
  </React.StrictMode>
);
