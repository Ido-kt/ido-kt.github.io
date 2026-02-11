import React from "react";
import List from "../../listRules";

const Tables = () => {
const filters = [{ property: "criteria", value: "tables" }];
  return <List filters={filters} embedded={true} />;
};

export default Tables;
