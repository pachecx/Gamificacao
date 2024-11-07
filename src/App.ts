import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  padding-top: 2rem;
  max-width: 46rem;
  margin: 0 auto;

  .imgFundo {
    position: absolute;
    z-index: -1;
    left: -3px;
    bottom: -4rem;

    background-image: url("./assets/fvgg.png");
    background-repeat: no-repeat;
    height: 50%;
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgb(131, 58, 180);
  background: linear-gradient(
    90deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(95, 62, 130, 1) 50%,
    rgba(150, 47, 148, 1) 100%
  );

  .svgLupa {
    height: 5.5rem;
    width: 5.5rem;
  }

  h1 {
    line-height: 3rem;
  }
`;

export const Main = styled.div`
  padding: 1rem;
  padding-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 1rem;

  .sites-wrapper {
    background: linear-gradient(
      90deg,
      rgba(41, 60, 87, 1) 0%,
      rgba(209, 119, 235, 1) 50%,
      rgba(67, 45, 73, 1) 100%
    );
    padding: 5px; /* Define a espessura da "borda" */
    border-radius: 12px; /* Define o arredondamento */
    display: inline-block; /* Para que o wrapper ajuste ao conteúdo */
  }

  .sites,
  .creator {
    //margin-bottom: 1rem;
    text-align: center;
    border-radius: 1rem;
    padding: 1rem;
    background: rgb(24, 30, 128);
    background: linear-gradient(
      180deg,
      rgba(24, 30, 128, 1) 0%,
      rgba(201, 182, 235, 1) 100%
    );

    button {
      background: transparent;
      border: none;

      p {
        font-size: 1.6rem;
        font-weight: bold;
      }
    }
  }

  .creator {
    grid-column: 1 / -1; /* Expande o item para ambas as colunas */
    text-align: center;
    justify-content: center;
    margin: 0 auto;
  }
`;
