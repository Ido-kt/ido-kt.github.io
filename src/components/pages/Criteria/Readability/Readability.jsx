import React from "react";
import List from "../../listRules";

const Readability = () => {
  const filters = [{ property: "criteria", value: "readability" }];
  return <List filters={filters} embedded={true} />;
};

export default Readability;
