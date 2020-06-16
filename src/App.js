import React from "react";

import { CardList } from "./components";

import db from "./assets/products.json";

import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <CardList data={db} />
    </div>
  );
}

export default App;
