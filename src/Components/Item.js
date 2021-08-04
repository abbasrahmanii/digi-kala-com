import React from "react";
import { Paper } from "@material-ui/core";

function Item(props) {
  return (
    <Paper style={{ width: "840px" }}>
      <img
        style={{ backgroundSize: "cover", width: "840px" }}
        src={props.item.cover}
        alt={props.item.cover}
      />
    </Paper>
  );
}

export default Item;
