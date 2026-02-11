import React from "react";
import List from "../../listRules";

const Navigation = () => {
  const filters = [{ property: "criteria", value: "navigation" }];
  return <List filters={filters} embedded={true} />;
};

export default Navigation;
