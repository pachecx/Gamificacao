import styled from "styled-components";

export const Container = styled.div`
  .left-Top {
    position: absolute;
    z-index: -1;
    top: 0;
    transform: rotate(90deg);
    height: 15rem;
    width: 15rem;
  }

  .right-Top {
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    transform: rotate(180deg);
    height: 15rem;
    width: 15rem;
  }

  .left-bottom {
    position: absolute;
    z-index: -1;
    bottom: 0;
    right: 0;
    transform: rotate(270deg);
    height: 15rem;
    width: 15rem;
  }

  .right-bottom {
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
    transform: rotate(360deg);
    height: 15rem;
    width: 15rem;
  }
`;

export const Card = styled.div``;