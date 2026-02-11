import React from "react";
import Button from "@mui/material/Button";
import { Link, NavLink } from "react-router-dom";
import Stack from "@mui/material/Stack";

export default function CustomizedDialogs({ item }) {
  return (
    <Stack sx={{ p: 1 }} direction="row" spacing={2}>
      <NavLink
        reloadDocument
        component="a"
        to={`/${item.criteria}/${item.route}`}
        itemData={item}
      >
        <Button variant="outlined">{item.name}</Button>
      </NavLink>
    </Stack>
  );
}
