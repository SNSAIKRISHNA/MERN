import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./Components/NavBar.jsx";
import Body from "./Components/Body.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <div className="App">
    <NavBar />
    <Body />
    <Footer />
    </div>
  );
}

export default App;
