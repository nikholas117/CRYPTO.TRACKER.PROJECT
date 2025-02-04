import "./App.css";
import React from "react";
import CryptoTracking from "./CryptoTracking";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/CRYPTO.TRACKER.PROJECT">
      {" "}
      <div className="App">
        <CryptoTracking />
      </div>
    </BrowserRouter>
  );
};

export default App;
