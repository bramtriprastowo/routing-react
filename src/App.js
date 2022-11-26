import "./App.css";
import { useCallback, useState } from "react";
import Router from "./config/router";

function App() {
  const [activePage, setActivePage] = useState("");

  const handleActivePage = useCallback((value) => {
    setActivePage(value);
  }, []);

  return (
    <>
      <Router activePage={activePage} handleActivePage={handleActivePage} />
    </>
  );
}

export default App;
