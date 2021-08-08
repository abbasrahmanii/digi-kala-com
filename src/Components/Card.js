import React from "react";
import styled from "styled-components";
import gift from "../images/asset 75.svg";
import { Link } from "react-router-dom";
import QueryBuilderRoundedIcon from "@material-ui/icons/QueryBuilderRounded";

function Card(props) {
  return (
    <CardStyle>
      <Link className="link" to="/page" img={props.item.cover}>
        <div className="image">
          <img id="one" src={props.item.cover} alt={props.item.cover} />
          <img id="two" src={props.item.express} alt={props.item.express} />
        </div>
        <div className="caption">
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
          <div className="total">
            {props.item.progress && (
              <div className="progress">
                <div
                  className="slider"
                  style={{ transform: `translateX(${props.item.progress}%)` }}
                ></div>
              </div>
            )}
          </div>
          <div className="bottom">
            <div className="percent">
              {props.item.progress && (
                <div>
                  <span>{props.item.progress}%</span> فروش رفته
                </div>
              )}
            </div>
            <QueryBuilderRoundedIcon />
            <span>{props.getTime}</span>
          </div>
        </div>
      </Link>
    </CardStyle>
  );
}

const CardStyle = styled.div`
  .link {
    font-family: "Yekan", sans-serif;
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    border-radius: 15px;
    background: #ffffff;
    font-size: 1rem;
    padding: 1rem 0rem;
    text-decoration: none;
    color: #111;
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
    .caption {
      width: 85%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      /* align-items: center; */
      h4 {
        text-align: right;
        display: flex;
        justify-content: flex-start;
        /* width: 80%; */
        min-height: 5vh;
        margin-bottom: 1rem;
      }
      .gift {
        text-align: right;
        display: block;
        width: 80%;
        min-height: max-content;
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
    }
    .total {
      margin: 0 auto;
      width: 85%;
      min-height: 3vh;
      .progress {
        margin: 0 auto;
        margin-top: 0.5rem;
        width: 100%;
        min-height: 0.25rem;
        background-color: #ef394e;
        position: relative;
        overflow: hidden;
        border-radius: 25px;
        .slider {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #eee;
        }
      }
    }
    .bottom {
      width: 85%;
      /* background-color: red; */
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .percent {
        width: 100%;
        div {
          span {
            color: #ef394e;
          }
        }
      }
    }
  }
`;

export default Card;
