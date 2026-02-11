import React from "react";
import List from "../../listRules";

const Clickables = () => {
  const filters = [{ property: "criteria", value: "clickables" }];
  return <List filters={filters} embedded={true} />;
};

export default Clickables;
