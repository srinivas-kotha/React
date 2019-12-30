import React from "react";
import "./App.css";
import Movies from "./components/movies";

function App() {
  return (
    <main role="main" className="container">
      <div className="row">
        <div className="col-2"></div>
        <div className="col">
          <Movies />
        </div>
      </div>
    </main>
  );
}

export default App;
