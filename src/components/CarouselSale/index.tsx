import { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import api from "../../services/api";
import { SaleCard } from "../SaleCard/SaleCard";
import { DivContainer } from "./style";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import NotFoundItems from "../NotFoundItems";
import WaitingLoader from "../WaitingLoader";

interface ICarouselSale {
  type: string;
}

const CarouselSale = ({ type }: ICarouselSale) => {
  const [sales, setSales] = useState([]);
  const [reqRoute] = useState("/advert/sales?take=5&skip=0&type");
  const [componentName] = useState(type === "0" ? "Carros" : "Motos");
  const [status, setStatus] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [itemsPerView, setItensPerView] = useState(3);

  window.onresize = window.onload = () => {
    console.log(window.innerWidth);

    if (window.innerWidth >= 1300) {
      setItensPerView(4);
    } else if (window.innerWidth >= 1000 && window.innerWidth < 1300) {
      setItensPerView(3);
    } else if (window.innerWidth > 750 && window.innerWidth < 1000) {
      setItensPerView(2);
    }

    console.log(itemsPerView);
  };

  useEffect(() => {
    if (type) {
      const routeLink = `${reqRoute}=${type}`;

      api
        .get(routeLink)
        .then((response) => {
          console.log(response.data);
          setSales(response.data);
          setStatus(response.status);
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
          slidesPerView={itemsPerView}
          spaceBetween={3}
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
        <WaitingLoader length={sales.length} status={status} />
      )}
    </DivContainer>
  );
};

export default CarouselSale;
