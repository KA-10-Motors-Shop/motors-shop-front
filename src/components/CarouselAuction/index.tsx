import { useEffect, useState } from "react";
import { UseTokenProvider } from "../../providers/token";
import api from "../../services/api";
import { AuctionCard } from "../AuctionCard/AuctionCard";
import { AuctionBox, DivContainer } from "./style";

import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const CarouselAuction = () => {
  const [auctions, setAuctions] = useState([]);
  const { token }: any = UseTokenProvider();

  useEffect(() => {
    api
      .get("/advert", { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        console.log(response.data);
        setAuctions(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
              <SwiperSlide>
                <AuctionCard
                  key={index}
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
