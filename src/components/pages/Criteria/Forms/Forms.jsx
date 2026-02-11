import React from "react";
import List from "../../listRules";

const Forms = () => {
  const filters = [{ property: "criteria", value: "forms" }];
  return <List filters={filters} embedded={true} />;
};

export default Forms;
