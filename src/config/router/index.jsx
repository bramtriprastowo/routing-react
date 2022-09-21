import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import FormValidation from "../../pages/FormValidation";
import Hooks from "../../pages/Hooks";
import Lifecycle from "../../pages/Lifecycle";
import Page404 from "../../pages/Page404";
import Sidebar from "../../components/Sidebar";
import Home from "../../pages/Home";

const Router = (props) => {

  return (
    <>
      <Sidebar activePage={props.activePage}/>

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace="true" />} />
        <Route path="/home" element={<Home handleActivePage={props.handleActivePage}/>} />
        <Route path="/formvalidation" element={<FormValidation handleActivePage={props.handleActivePage}/>} />
        <Route path="/hooks" element={<Hooks handleActivePage={props.handleActivePage}/>} />
        <Route path="/lifecycle" element={<Lifecycle handleActivePage={props.handleActivePage}/>} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default Router;
