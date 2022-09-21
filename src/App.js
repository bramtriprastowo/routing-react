import "./App.css";
import { useState } from "react";
import Router from "./config/router";

function App() {
  const [activePage, setActivePage] = useState('');

  const handleActivePage = (value) => {
    setActivePage(value);
  }

  return (
    <>
      <Router activePage={activePage} handleActivePage={handleActivePage}/>
    </>
  );
}

export default App;
