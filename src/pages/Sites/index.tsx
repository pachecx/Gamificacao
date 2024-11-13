import { Card, Container } from "./style";
import wave from "../../assets/wave.png";
import img1 from "../../assets/slide1/1.png";
import img2 from "../../assets/slide1/2.png";
import img3 from "../../assets/slide1/3.png";
import img4 from "../../assets/slide1/4.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Molde = () => {
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
              direction={"vertical"}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className="slides">
                <img className="slidesImg" src={img1} alt="" />
              </SwiperSlide>

              <SwiperSlide className="slides">
                <img className="slidesImg" src={img2} alt="" />
              </SwiperSlide>

              <SwiperSlide className="slides">
                <img className="slidesImg" src={img3} alt="" />
              </SwiperSlide>

              <SwiperSlide className="slides">
                <img className="slidesImg" src={img4} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Card>
    </Container>
  );
};

export default Molde;
