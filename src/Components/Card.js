import React from "react";
import styled from "styled-components";
import gift from "../images/asset 75.svg";

function Card(props) {
  return (
    <CardStyle>
      <div className="image">
        <img id="one" src={props.item.cover} alt={props.item.cover} />
        <img id="two" src={props.item.express} alt={props.item.express} />
      </div>
      <h4>{props.item.title}</h4>
      <div className="gift">
        {props.item.gift && (
          <div>
            <img src={gift} alt={gift} />
            <h5>{props.item.gift} تومان هدیه نقدی</h5>
          </div>
        )}
      </div>
      <div className="price">
        <h3>{props.item.beforePrice}</h3>
        <span>{props.item.off}%</span>
      </div>
      <h3>{props.item.price} تومان</h3>
    </CardStyle>
  );
}

const CardStyle = styled.div`
  font-family: "Yekan", sans-serif;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  height: 100%;
  background: #ffffff;
  width: 25%;
  height: 100%;
  font-size: 1rem;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 0rem;
  .image {
    width: 100%;
    position: relative;
    margin-bottom: 0.5rem;
    height: initial;
    #one {
      width: 100%;
      border-radius: 15px;
      padding: 1rem;
    }
    #two {
      width: 15%;
      position: absolute;
      bottom: 0;
      left: 10%;
    }
  }
  h4 {
    text-align: right;
    display: flex;
    justify-content: flex-start;
    width: 80%;
    min-height: 4vh;
    margin-bottom: 1rem;
  }
  .gift {
    text-align: right;
    display: block;
    width: 80%;
    height: max-content;
    margin-bottom: 1.5rem;
    div {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: flex-start;
      img {
        margin-left: 0.2rem;
        /* width: 10%; */
      }
    }
  }
  .price {
    /* display: flex; */
    width: 80%;
    justify-content: flex-end;
    height: max-content;
    margin-bottom: 0.5rem;
    span {
      background-color: #ef394e;
      padding: 0.2rem 0.4rem;
      border-radius: 15px;
      font-size: 0.9rem;
      color: #fff;
      font-weight: bold;
      margin-right: 0.5rem;
    }
    h3 {
      color: gray;
      text-decoration: line-through;
    }
  }
  h3 {
    width: 80%;
    display: flex;
    justify-content: flex-end;
  }
  .gift,
  .price {
    display: flex;
    flex-direction: row;
    width: 80%;
  }
`;

export default Card;
