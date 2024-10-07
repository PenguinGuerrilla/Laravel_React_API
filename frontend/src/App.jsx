import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import Nav from "./componentes/Nav";
import Footer from "./componentes/Footer";
import Tabela from "./componentes/Tabela";
import BarraInsert from "./componentes/BarraInsert";
import BarraNav from "./componentes/BarraNav";

function App() {
  return (
    <>
      <BarraNav />
      <BarraInsert />
      <Tabela />
      <Footer />
    </>
  );
}

export default App;
