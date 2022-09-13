import { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import api from "../../services/api";
import { SaleCard } from "../SaleCard/SaleCard";
import { DivContainer } from "./style";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import NotFoundItems from "../NotFoundItems";

interface ICarouselSale {
  type: string;
}

const CarouselSale = ({ type }: ICarouselSale) => {
  const [sales, setSales] = useState([]);
  const [reqRoute] = useState("/advert/sales?take=5&skip=0&type");
  const [componentName] = useState(type === "0" ? "Carros" : "Motos");

  useEffect(() => {
    if (type) {
      const routeLink = `${reqRoute}=${type}`;

      api
        .get(routeLink)
        .then((response) => {
          console.log(response.data);
          setSales(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  return (
    <DivContainer>
      <h5>{componentName}</h5>
      {sales.length > 0 ? (
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {sales.length > 0 &&
            sales.map(
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
                  <SaleCard
                    key={index}
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
        <NotFoundItems />
      )}
    </DivContainer>
  );
};

export default CarouselSale;
