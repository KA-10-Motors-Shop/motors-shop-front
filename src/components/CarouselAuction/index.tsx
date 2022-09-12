import { useEffect, useState } from "react";
import api from "../../services/api";
import { AuctionCard } from "../AuctionCard/AuctionCard";
import { AuctionBox, DivContainer } from "./style";

import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

interface ICarousel {
  id?: boolean | string;
}

const CarouselAuction = ({ id = false }: ICarousel) => {
  const [auctions, setAuctions] = useState([]);
  const [reqRoute] = useState("/advert/auctions?take=5&skip=0&id");

  useEffect(() => {
    if (id) {
      const routeLink = id === "all" ? reqRoute : `${reqRoute}=${id}`;

      api
        .get(routeLink)
        .then((response) => {
          console.log(response.data);
          setAuctions(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <DivContainer>
      <AuctionBox>
        <h5>Leilão</h5>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {auctions.map(
            (
              {
                id,
                cover_image,
                title,
                description,
                vehicle_mileage,
                vehicle_year,
                vehicle_price,
                username,
              },
              index
            ) => (
              <SwiperSlide key={index}>
                <AuctionCard
                  id={id}
                  cover_image={cover_image}
                  title={title}
                  description={description}
                  vehicle_mileage={vehicle_mileage}
                  vehicle_year={vehicle_year}
                  vehicle_price={vehicle_price}
                  username={username}
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </AuctionBox>
    </DivContainer>
  );
};

export default CarouselAuction;
