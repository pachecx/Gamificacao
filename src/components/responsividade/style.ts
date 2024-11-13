import styled from "styled-components";

export const Container = styled.div`
  .imgFundo {
    position: absolute;
    z-index: -1;
    left: 0;
    right: 0;
    //bottom: 0;
    //min-height: 59.9rem;
    width: 100%;
    //min-height: 600px;
   // height: 850px;
  }

  @media (min-width: 768px) {
    //height: 100vh;
    background-size: cover;

    .imgFundo {
      height: 100vh;
      //  background-size: cover;
    }
  }

  @media (min-width: 1024px) {
    .imgFundo {
      height: 100vh;
    }
  }
`;