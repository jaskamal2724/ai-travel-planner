import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="preloader">
        <div className="spinner">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className="text">
          <p>On your way...</p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .preloader {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 200px;
  }

  .spinner {
    width: 100px;
    height: 100px;
    position: relative;
    animation: spinner 1.6s infinite ease;
    transform-style: preserve-3d;
  }

  .spinner > div {
    background-color: rgba(229, 197, 159, 0.1);
    height: 100%;
    position: absolute;
    width: 100%;
    border: 4px solid rgb(229, 197, 159);
    border-radius: 50%;
  }

  .spinner div:nth-of-type(1) {
    transform: translateZ(-35px) rotateY(180deg);
  }

  .spinner div:nth-of-type(2) {
    transform: rotateY(-270deg) translateX(50%);
    transform-origin: top right;
  }

  .spinner div:nth-of-type(3) {
    transform: rotateY(270deg) translateX(-50%);
    transform-origin: center left;
  }

  .spinner div:nth-of-type(4) {
    transform: rotateX(90deg) translateY(-50%);
    transform-origin: top center;
  }

  .spinner div:nth-of-type(5) {
    transform: rotateX(-90deg) translateY(50%);
    transform-origin: bottom center;
  }

  .spinner div:nth-of-type(6) {
    transform: translateZ(35px);
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg) rotateX(0deg) rotateY(0deg);
    }
    50% {
      transform: rotate(180deg) rotateX(180deg) rotateY(180deg);
    }
    100% {
      transform: rotate(360deg) rotateX(360deg) rotateY(360deg);
    }
  }

  .text {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: 24px;
    background: linear-gradient(to right, #925555, #e0a47c, #d33fd3, #eed600);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    padding-top: 20px;
    text-align: center;
  }`;

export default Loader;
