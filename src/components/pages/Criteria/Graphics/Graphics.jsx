import React from "react";
import List from "../../listRules";

const Graphics = () => {
  const filters = [{ property: "criteria", value: "graphics" }];
  return <List filters={filters} embedded={true} />;
};

export default Graphics;
