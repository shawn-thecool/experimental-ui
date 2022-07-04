import React, { ReactNode } from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import "@/index.css";

const doc = document.getElementById("root") as HTMLElement;
const RendingComponent: ReactNode = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.createRoot(doc).render(RendingComponent);
