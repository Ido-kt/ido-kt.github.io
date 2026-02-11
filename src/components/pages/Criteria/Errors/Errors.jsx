import React from "react";
import List from "../../listRules";

const Errors = () => {
  const filters = [{ property: "criteria", value: "errors" }];
  return <List filters={filters} embedded={true} />;
};

export default Errors;
