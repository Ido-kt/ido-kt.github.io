import React from "react";
import List from "../../listRules";

const Carousels = () => {
  const filters = [{ property: "criteria", value: "carousels" }];
  return <List filters={filters} embedded={true} />;
};

export default Carousels;
