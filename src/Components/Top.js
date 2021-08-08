import React from "react";
import styled from "styled-components";

const Top = () => {
  return (
    <TopAddress>
      <a href="#" className="top">
        Top
      </a>
    </TopAddress>
  );
};

const TopAddress = styled.a`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background-color: #4c4352;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(50%, -50%);
  transition: 0.3s ease-out;
  &:hover {
    transform: translate(50%, -50%) scale(1.1);
    background-color: #605468;
  }
  a {
    text-decoration: none;
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Top;
