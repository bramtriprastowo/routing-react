import React from "react";
import { Header } from "./components/Header";
import { Profile } from "./components/Profile";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

const Home = () => {
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
