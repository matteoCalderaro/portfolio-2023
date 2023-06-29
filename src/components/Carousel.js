/* eslint-disable import/no-anonymous-default-export */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { useWindowSize } from './useWindowSize';
import { UilSearchPlus } from '@iconscout/react-unicons';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const Carousel = ({
  certificates,
  setModalContent,
  setIsVisible,
  setStyle,
}) => {
  useWindowSize();

  return (
    <>
      <section className="section-swiper">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          breakpoints={{
            600: {
              width: 600,
              slidesPerView: 2,
              spaceBetween: 50,
            },
            900: {
              width: 900,
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          navigation
          loop={true}
          //autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
        >
          {certificates.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className={item.new ? 'carousel-img-new' : 'carousel-img'}
                onClick={() => {
                  setModalContent(item);
                  setIsVisible(true);
                  setStyle('modal-container show--left');
                }}
                style={{ backgroundImage: `url(${item.file})` }}
              >
                <div className="carousel-caption">
                  <UilSearchPlus size="60" className="caption__icon" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Carousel;
