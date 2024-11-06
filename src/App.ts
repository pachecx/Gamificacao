import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .svgLupa {
    height: 5rem;
    width: 5rem;
  }
`;

export const Main = styled.div`
padding-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
  .sites {
    margin-bottom: 1rem;
    button {
      background: transparent;
      border: none;
    }

    border-radius: 2rem;
    padding: 1.5rem;
    background: rgb(24, 30, 128);
    background: linear-gradient(
      180deg,
      rgba(24, 30, 128, 1) 0%,
      rgba(201, 182, 235, 1) 100%
    );
  }
`;
