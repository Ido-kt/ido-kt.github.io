import React from "react";
import List from "../../listRules";

const Keyboard = () => {
  const filters = [{ property: "criteria", value: "keyboard" }];
  return <List filters={filters} embedded={true} />;
};

export default Keyboard;
