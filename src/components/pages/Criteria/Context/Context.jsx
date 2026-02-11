import React from "react";
import List from "../../listRules";

const Context = () => {
  const filters = [{ property: "criteria", value: "context" }];
  return <List filters={filters} embedded={true} />;
};

export default Context;
