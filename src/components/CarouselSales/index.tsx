import { HStack } from "@chakra-ui/react";
import { CarouselItem, CarouselItemProps } from "./CarouselItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

interface CarouselProps {
  carouselList: CarouselItemProps[];
}

interface CarouselBreakpoints {
  [key: string]: {
    slidesPerView: number;
  };
}

export const CarouselSale: React.FC<CarouselProps> = ({ carouselList }) => {
  // This is a hacky solution to avoid overlapping/big spaces inside the swiper
  // The library itself offers limited ways to deal with responsiveness when
  // presenting with multiple slides
  // carouselBreakpoints is an object of custom breakpoints passed to the Swiper
  // The keys are the breakpoints themselves and the values increment slowly
  // based on arbitraty numbers found through trial and error
  // The carousel container uses custom carousel breakpoints passed to Chakra
  // via theme extension

  const carouselBreakpoints: CarouselBreakpoints = {
    "220": { slidesPerView: 2 },
  };

  for (let i = 0; i < 9; i++) {
    const breakpointMobile = String(480 + i * 60);
    const value = Number((1.2 + 0.2 * i).toFixed(1));

    carouselBreakpoints[breakpointMobile] = {
      slidesPerView: value,
    };
  }

  for (let i = 0; i < 20; i++) {
    let multiplier = 1;
    if (i >= 10) multiplier = 1.2;
    const breakpointDesktop = String(992 + i * multiplier * 40);
    const value = Number((1.23 + 0.06 * i).toFixed(2));

    carouselBreakpoints[breakpointDesktop] = {
      slidesPerView: value,
    };
  }

  return (
    <>
      <HStack
        className="carousel"
        overflowX="hidden"
        m="auto"
        h="fit-content"
        w={{
          carouselBASE: "100%",
          carouselMobileControl: "928px",
          carouselDesktop1: "100%",
          carouselDesktop2: "1860px",
        }}
      >
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 5000 }}
          slidesPerView={2.4}
          spaceBetween={0}
          breakpoints={{ ...carouselBreakpoints }}
          loop
          navigation
          rewind
        >
          {carouselList.map((item, idx) => (
            <SwiperSlide key={idx}>
              <CarouselItem {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </HStack>
    </>
  );
};
