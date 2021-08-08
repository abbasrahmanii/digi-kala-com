import React from "react";
import Card from "./Card";

function TestRed(props) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        transition: "all 1s ease-out",
        transform: `translateX(${props.translateR}%)`,
      }}
    >
      {props.sliderRed.map((item, i) => (
        <Card item={item} key={i} getTime={props.getTime} />
      ))}
    </div>
  );
}

export default TestRed;
