import React from "react";
import "./App.css";
import { action, documentary, orginals, music } from "./urls";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <RowPost url={orginals} title="Netflix Originals" />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={documentary} title="Documentary" isSmall />
      <RowPost url={music} title="Music" isSmall />
    </>
  );
}

export default App;
