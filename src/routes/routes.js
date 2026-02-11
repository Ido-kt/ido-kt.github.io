import React from "react";
import { Routes, Route } from "react-router-dom";
import List from "../components/pages/listRules";
import CustomizedDialogs from "../components/layout/ruleModal";
import ItemPage from "../components/layout/rulePage";

const ListRoutes = () => {
  return (
    <Routes>
      <Route index element={<List />} />
      <Route path=":currentRule" element={<CustomizedDialogs />} />
    </Routes>
  );
};

export default ListRoutes;
