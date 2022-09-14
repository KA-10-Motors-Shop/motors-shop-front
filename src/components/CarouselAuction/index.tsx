import { useEffect, useState } from "react";
import api from "../../services/api";
import { AuctionCard } from "../AuctionCard/AuctionCard";
import { AuctionBox, DivContainer } from "./style";

import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import WaitingLoader from "../WaitingLoader";

interface ICarousel {
  id?: boolean | string;
}

const CarouselAuction = ({ id }: ICarousel) => {
  const [auctions, setAuctions] = useState([]);
  const [status, setStatus] = useState(0);
  const [reqRoute] = useState("/advert/auctions?take=5&skip=0&id");

  useEffect(() => {
    if (id) {
      const routeLink = id === "all" ? reqRoute : `${reqRoute}=${id}`;

      api
        .get(routeLink)
        .then((response) => {
          console.log(response);
          setAuctions(response.data);
          setStatus(response.status);
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
        {auctions.length > 0 ? (
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
                  user,
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
                    user={user}
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
        ) : (
          <WaitingLoader length={auctions.length} status={status} />
        )}
      </AuctionBox>
    </DivContainer>
  );
};

export default CarouselAuction;
