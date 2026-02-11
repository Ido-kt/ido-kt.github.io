import React from "react";
import List from "../../listRules";

const Document = () => {
  const filters = [{ property: "criteria", value: "document" }];
  return <List filters={filters} embedded={true} />;
};

export default Document;
