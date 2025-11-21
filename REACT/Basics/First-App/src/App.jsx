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
      <NavBar
        docs="https://react.dev/learn" // Updated to React's official docs site using the props
        about="https://react.dev/"    
        community="https://react.dev/community"
      />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
