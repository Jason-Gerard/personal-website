import React from "react";

import "./App.css";

import Navbar from "./Components/Navbar";
import Jumbotron from "./Components/Jumbotron";
import ProjectRow from "./Components/ProjectRow";

function App() {
  return (
    <div>
      <Navbar />
      <main className="container">
        <Jumbotron />
        <ProjectRow />
      </main>
    </div>
  );
}

export default App;
