import React from "react";
import List from "./listRules";

const Rules = () => {
  const filters = [{ property: "criteria", value: "" }];
  return <List filters={filters} embedded={false} />;
};

export default Rules;
