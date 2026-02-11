import React from "react";
import List from "../../listRules";

const Headings = () => {
  const filters = [{ property: "criteria", value: "headings" }];
  return <List filters={filters} embedded={true} />;
};

export default Headings;
