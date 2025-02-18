import { Card, Container } from "./style";
import wave from "../../assets/wave.png";
import img1 from "../../assets/slide1/1.png";
import img2 from "../../assets/slide1/2.png";
import img3 from "../../assets/slide1/3.png";
import img4 from "../../assets/slide1/4.png";
import img5 from "../../assets/slide1/Common.png";
import img6 from "../../assets/slide1/Edutopia.png";
import img7 from "../../assets/slide1/PenseGrande.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Molde = () => {
  const [orientacaoSlide, setOrientacaoSlide] = useState<
    "horizontal" | "vertical"
  >("vertical");

  useEffect(() => {
    const VerficarTela = () => {
      const screen = window.innerWidth;
      if (screen > 768) {
        setOrientacaoSlide("horizontal");
      } else {
        setOrientacaoSlide("vertical");
      }
    };
    
    window.addEventListener("resize", VerficarTela);

    // Chamando a função VerficarTela uma vez para definir a imagem de fundo inicial
    VerficarTela();

    // Removendo o event listener quando o componente é desmontado
    return () => window.removeEventListener("resize", VerficarTela);
  }, []);
  console.log(orientacaoSlide);
  return (
    <Container>
      <img className="left-Top" src={wave} />
      <img className="right-Top" src={wave} />
      <img className="left-bottom" src={wave} />
      <img className="right-bottom" src={wave} />

      <Card>
        <div>
          <div className="title">
            <h2>Humanidades</h2>
          </div>

          <div className="DivSlides">
            <Swiper
              slidesPerView={3}
              loop={true}
              direction={`${orientacaoSlide}`}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className="slides">
                <Link to={"https://www.artsy.net/"} target="_blank">
                  <img className="slidesImg" src={img1} alt="" />
                </Link>
              </SwiperSlide>

              <SwiperSlide className="slides">
                <Link to={"https://ell.brainpop.com/"} target="_blank">
                  <img className="slidesImg" src={img2} alt="" />
                </Link>
              </SwiperSlide>

              <SwiperSlide className="slides">
                <Link to={"https://ed.ted.com/"} target="_blank">
                  <img className="slidesImg" src={img3} alt="" />
                </Link>
              </SwiperSlide>

              <SwiperSlide className="slides">
                <Link to={"https://artsandculture.google.com/"} target="_blank">
                  <img className="slidesImg" src={img4} alt="" />
                </Link>
              </SwiperSlide>

              <SwiperSlide className="slides">
                <Link
                  to={"https://www.commonsense.org/education"}
                  target="_blank"
                >
                  <img className="slidesImg" src={img5} alt="" />
                </Link>
              </SwiperSlide>

              <SwiperSlide className="slides">
                <Link to={"https://www.edutopia.org/"} target="_blank">
                  <img className="slidesImg" src={img6} alt="imagem" />
                </Link>
              </SwiperSlide>

              <SwiperSlide className="slides">
                <Link
                  to={
                    "https://www.fundacaotelefonicavivo.org.br/pense-grande-educar/"
                  }
                  target="_blank"
                >
                  <img className="slidesImg" src={img7} alt="imagem" />
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Card>
    </Container>
  );
};

export default Molde;
