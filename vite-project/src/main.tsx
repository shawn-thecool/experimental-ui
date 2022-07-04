import React, { ReactNode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "@/store";
import App from "@/App";
import "@/index.css";

const doc = document.getElementById("root") as HTMLElement;

const RendingComponent: ReactNode = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

ReactDOM.createRoot(doc).render(RendingComponent);
