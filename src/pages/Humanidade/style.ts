import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;

  .left-Top {
    position: absolute;
    z-index: -1;
    top: 0;
    transform: rotate(90deg);
    height: 10rem;
    width: 10rem;
  }

  .right-Top {
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    transform: rotate(180deg);
    height: 10rem;
    width: 10rem;
  }

  .left-bottom {
    position: absolute;
    z-index: -1;
    bottom: 0;
    right: 0;
    transform: rotate(270deg);
    height: 10rem;
    width: 10rem;
  }

  .right-bottom {
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
    transform: rotate(360deg);
    height: 10rem;
    width: 10rem;
  }
`;

export const Card = styled.div`
  display: flex;
  padding: 4rem 5rem;
  justify-content: center;

  .title {
    padding: 1rem;
    text-align: center;
    border-radius: 1rem;

    background: rgb(131, 58, 180);
    background: linear-gradient(
      90deg,
      rgba(131, 58, 180, 1) 0%,
      rgba(95, 62, 130, 1) 50%,
      rgba(150, 47, 148, 1) 100%
    );
  }

  .DivSlides {
    margin-top: -2px;
    padding: 2rem 1rem;
    border: 1px solid black;
    height: 47rem;
    text-align: center;
    border-radius: 1rem;

    background: rgb(41, 60, 87);
    background: linear-gradient(
      90deg,
      rgba(41, 60, 87, 1) 0%,
      rgba(37, 20, 42, 1) 50%,
      rgba(67, 45, 73, 1) 100%
    );

    .swiper {
      width: 100%;
      height: 100%;
      border-radius: 1rem;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 5px;
      border-radius: 1rem;
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      //height: 100%;
      //object-fit: cover;
    }
  }
`;
