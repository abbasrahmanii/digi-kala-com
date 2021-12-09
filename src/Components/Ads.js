import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import pic1 from "../images/asset 84.svg";
import pic2 from "../images/asset 84.svg";
import pic3 from "../images/asset 84.svg";
import pic4 from "../images/asset 84.svg";
import pic5 from "../images/asset 84.svg";
import pic6 from "../images/asset 84.svg";
import pic7 from "../images/asset 84.svg";
import pic8 from "../images/asset 84.svg";
import pic9 from "../images/asset 84.svg";
import pic10 from "../images/asset 84.svg";
import pic11 from "../images/digi1.jpg";
import pic12 from "../images/digi2.jpg";

const Ads = () => {
  const category = [
    {
      id: 1,
      pic: pic1,
      link: "/p/one",
      title: "کالای دیجیتال",
      num: 992000,
    },
    {
      id: 2,
      pic: pic2,
      link: "/p/one",
      title: "خودرو، ابزار و تجهیزات",
      num: 159000,
    },
    { id: 3, pic: pic3, link: "/p/one", title: "مد و پوشاک", num: 74000 },
    {
      id: 4,
      pic: pic4,
      link: "/p/one",
      title: "اسباب بازی، کودک و نوزاد",
      num: 65000,
    },
    {
      id: 5,
      pic: pic5,
      link: "/p/one",
      title: "کالا های سوپرمارکتی",
      num: 108000,
    },
    { id: 6, pic: pic6, link: "/p/one", title: "زیبایی و سلامت", num: 521000 },
    { id: 7, pic: pic7, link: "/p/one", title: "خانه و آشپزخانه", num: 264000 },
    {
      id: 8,
      pic: pic8,
      link: "/p/one",
      title: "کتاب، لوازم تحریر و هنر",
      num: 41000,
    },
    { id: 9, pic: pic9, link: "/p/one", title: "ورزش و سفر", num: 3000 },
    {
      id: 10,
      pic: pic10,
      link: "/p/one",
      title: "محصولات بومی و محلی",
      num: 74000,
    },
  ];

  return (
    <Ad>
      <Sponsored>
        <Link to="/" className="a">
          <img src={pic11} alt="pic1" />
        </Link>
        <Link to="/" className="a">
          <img src={pic12} alt="pic2" />
        </Link>
      </Sponsored>
      <Category>
        <h1>بیش از ۴،۰۰۰،۰۰۰ کالا در دسته بندی های مختلف</h1>
        <div>
          {category.map((data) => (
            <Link to={data.link} key={data.id}>
              <img src={data.pic} alt={data.pic} />
              <p>{data.title}</p>
              <p>+ {data.num} کالا</p>
            </Link>
          ))}
        </div>
      </Category>
    </Ad>
  );
};

const Ad = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
`;

const Sponsored = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 86%;
  margin: 1rem auto;
  min-height: 20vh;
  justify-content: space-around;
  align-items: center;
  .a {
    flex: 1 25rem;
    display: flex;
    margin: 1rem 0.5%;
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 20px;
    }
  }
`;

const Category = styled.div`
  width: 85%;
  margin: 0 auto;
  min-height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6rem;
  border: 2px solid #eee;
  box-shadow: 0 5px 14px -5px #11111160;
  border-radius: 20px;
  h1 {
    font-size: 1.4rem;
    font-weight: 300;
    color: #888;
    margin: 0.5rem;
  }
  div {
    width: 100%;
    min-height: 8rem;
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: center;
    img {
      margin: 0.5rem;
    }
    a {
      width: 10%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      min-height: 8vh;
      padding: 0.5rem;
      color: #423d3d;
      p {
        text-align: center;
        padding: 0.5rem;
        vertical-align: 0;
        min-height: 3rem;
        :last-of-type {
          color: #00bfd6;
          font-size: 85%;
        }
      }
    }
  }
`;

export default Ads;
