import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import FormValidation from "../../pages/FormValidation";
import Hooks from "../../pages/Hooks";
import Lifecycle from "../../pages/Lifecycle";
import Styling from "../../pages/Styling";
import Page404 from "../../pages/Page404";
import Sidebar from "../../components/Sidebar";

const Router = () => {
  return (
    <>
        <Sidebar />
        
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace="true" />} />
          <Route path="/home" element={<Styling />} />
          <Route path="/formvalidation" element={<FormValidation />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/lifecycle" element={<Lifecycle />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
    </>
  );
};

export default Router;
