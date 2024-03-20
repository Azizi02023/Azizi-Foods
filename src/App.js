import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Headlinescards } from "./components/Headlinescards";
import { Foods } from "./components/Foods";
import { Category } from "./components/Category";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Hero></Hero>
     <Headlinescards></Headlinescards>
     <Foods></Foods>
     <Category></Category>
     <Footer></Footer>
    </div>
  );
}

export default App;
