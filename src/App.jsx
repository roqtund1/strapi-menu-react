import { useState } from "react";
import { useGlobalContext } from "./context";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";

function App() {
  return (
    <>
      <Navbar />
      <Submenu />
      <Hero />
      <Sidebar />
    </>
  );
}

export default App;
