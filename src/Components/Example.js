import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import pic1 from "../images/asset 76.jpeg";
import pic2 from "../images/asset 77.jpeg";
import pic3 from "../images/asset 78.jpeg";
import pic4 from "../images/asset 79.jpeg";
import pic5 from "../images/asset 80.jpeg";
import pic6 from "../images/asset 81.jpeg";
import pic7 from "../images/asset 83.jpeg";

function Example(props) {
  var items = [
    {
      cover: pic1,
    },
    {
      cover: pic2,
    },
    {
      cover: pic3,
    },
    {
      cover: pic4,
    },
    {
      cover: pic5,
    },
    {
      cover: pic6,
    },
    {
      cover: pic7,
    },
  ];

  return (
    <Carousel style={{ width: "100%" }}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}
export default Example;
