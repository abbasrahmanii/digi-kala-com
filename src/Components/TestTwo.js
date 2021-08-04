import React from "react";
import Card from "./Card";

const TestTwo = (props) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        transition: "all 1s ease-out",
        transform: `translateX(${props.translate}%)`,
      }}
    >
      {props.sliderGreen.map((item, i) => (
        <Card item={item} key={i} />
      ))}
    </div>
  );
};

export default TestTwo;
