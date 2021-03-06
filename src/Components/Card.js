import React from "react";
import styled from "styled-components";
import gift from "../images/asset 75.svg";
import { Link } from "react-router-dom";
import QueryBuilderRoundedIcon from "@material-ui/icons/QueryBuilderRounded";

function Card(props) {
  const { link } = props.item;
  return (
    <CardStyle>
      <Link className="link" to={link} img={props.item.image}>
        <div className="image">
          <img id="one" src={props.item.image} alt={props.item.name} />
          <img id="two" src={props.item.express} alt={props.item.express} />
        </div>
        <div className="caption">
          <h4>{props.item.name}</h4>
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
            <span>00:00:00</span>
            {/* <span>{time}</span> */}
            <QueryBuilderRoundedIcon />
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
    justify-content: stretch;
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
      h4 {
        text-align: right;
        display: flex;
        justify-content: flex-start;
        min-height: 5vh;
        margin-bottom: 0.75rem;
      }
      .gift {
        text-align: right;
        display: block;
        width: 80%;
        /* min-height: max-content; */
        min-height: 3vh;
        margin-bottom: 1.5rem;
        div {
          display: flex;
          flex-direction: row;
          width: 100%;
          justify-content: flex-start;
          img {
            margin-left: 0.2rem;
          }
        }
      }
      .price {
        width: 95%;
        justify-content: flex-end;
        margin-bottom: 0.2rem;
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
        width: 95%;
        display: flex;
        justify-content: flex-end;
      }
      .gift,
      .price {
        display: flex;
        flex-direction: row;
        /* width: 90%; */
      }
    }
    .total {
      margin: 0 auto;
      width: 90%;
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
        border: none;
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
      width: 90%;
      /* background-color: red; */
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .percent {
        width: 100%;
        div {
          font-size: 0.9rem;
          span {
            color: #ef394e;
          }
        }
      }
      span {
        font-size: 0.8rem;
      }
      svg {
        font-size: 1.2rem;
      }
    }
  }
`;

export default Card;
