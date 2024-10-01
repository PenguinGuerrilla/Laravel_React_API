import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import Nav from "./componentes/Nav";
import Footer from "./componentes/Footer";
import Tabela from "./componentes/Tabela";

function App() {
  return (
    <>
      <Nav />
      <Tabela />
      <Footer />
    </>
  );
}

export default App;
