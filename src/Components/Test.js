import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
import pic1 from "../images/asset 21.jpeg";
import pic2 from "../images/asset 22.jpeg";
import pic3 from "../images/asset 23.jpeg";
import pic4 from "../images/asset 24.jpeg";
import express from "../images/asset 26.svg";
import Card from "./Card";

function Test(props) {
  var items = [
    {
      cover: pic1,
      title: "دمپایی زنانه مدل سایه کد 02604",
      gift: "2,000",
      beforePrice: "237,000",
      off: "25",
      price: "146,250",
      express: express,
    },
    {
      cover: pic2,
      title: "کتاب دنیای سوفی اثر یوستین گوردر",
      gift: "2,000",
      beforePrice: "142,000",
      off: "68",
      price: "45,000",
      express: express,
    },
    {
      cover: pic3,
      title: "ساعت هوشمند مدل HW22",
      beforePrice: "440,000",
      off: "10",
      price: "396,000",
    },
    {
      cover: pic4,
      title: "پولوشرت آستین کوتاه مردانه باینت",
      beforePrice: "179,000",
      off: "11",
      price: "159,000",
    },
  ];

  return (
    <div id="tt" style={{ width: "100%" }}>
      {items.map((item, i) => (
        <Card item={item} key={i} />
      ))}
    </div>
  );
}

export default Test;
