import React from "react";
import "./App.css";
import NavBar from "./Components/Navbar";
import Home from "./Components/Home";
import Timeline from "./Components/Timeline";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Footer />
      <Timeline />
    </div>
  );
}

export default App;
