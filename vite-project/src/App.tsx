import { useState } from "react";
import logo from "/react.svg";
import "@/App.css";
import { Counter } from "./features/counter/Counter";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
