import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { StateProvider } from "./Checkout/StateProvider.jsx";
import reducer, { initialState } from "./Checkout/Reducer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
