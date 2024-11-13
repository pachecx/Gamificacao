import { useState, useEffect } from "react";
import { Container } from "./style";
import React from "react";

interface ResponsividadePops {
  bgImgM: string;
  bgImgDesk: string;
  bgImgTablet: string;
}

export const Responsividade: React.FC<ResponsividadePops> = ({ bgImgM, bgImgDesk }) => {
  const [bgImge, setbgImge] = useState<string>();

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 768) {
        setbgImge(bgImgM);
      } else {
        setbgImge(bgImgDesk);
      } 
    };

    // Chamando a função handleResize quando a tela for redimensionada
    window.addEventListener("resize", handleResize);

    // Chamando a função handleResize uma vez para definir a imagem de fundo inicial
    handleResize();

    // Removendo o event listener quando o componente é desmontado
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <img className="imgFundo" src={bgImge} alt="Imagem de fundo" />
    </Container>
  );
};