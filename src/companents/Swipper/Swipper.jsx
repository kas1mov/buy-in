import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import { dataSwiper } from "../../utils/data";

export default function Swipper() {
  return (
    <>
      <div>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          speed={100}
          autoplay={{
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className="mySwiper"
        >
          {dataSwiper.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="Swiper__text">
                <div className="Swiper__product">
                  <h1 className="Swiper__product__title">{item.title}</h1>
                  <h1 className="Swiper__product__text">{item.text}</h1>
                  <button className="Swiper__product__btn">Подробнее</button>
                </div>
                <div className="Swiper__product__installment">
                  <p className="Swiper__product__installment_text">
                    {item.rasrochka}
                  </p>
                  <p className="Swiper__product__installment_text">
                    {item.kredit}
                  </p>
                </div>
              </div>
              <div className="Swiper__img">
              <div className="Swiper__div"></div>
                <img
                  src={item.img}
                  alt="televizorImg"
                  className="Swiper__img-img"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
