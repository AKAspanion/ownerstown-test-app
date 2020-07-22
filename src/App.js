import React from "react";
import "./App.css";

import { MainPage } from "./pages";

function App() {
  return (
    <div className="App">
      <MainPage />
      <div className="info-wrapper">
        <div className="info-icon">i</div>
        <div className="info-text">
          Type <strong>{`0<space><code>`}</strong> and call a superhero.
          <br />
          E.g. 4855 calls HULK
          <br />
        </div>
      </div>
    </div>
  );
}

export default App;
