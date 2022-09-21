import React, { useEffect } from "react";
import { Header } from "./components/Header";
import { Profile } from "./components/Profile";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

const Home = (props) => {
  const pageTitle = "home";
  const { handleActivePage } = props;

  useEffect(() => {
    handleActivePage(pageTitle);
  }, [handleActivePage]);

  return (
    <>
      <Header />
      <Profile />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
