import { Container } from "./styles";
import { BrandButton } from "../Button/Button";
import { FiClock } from "react-icons/fi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Avatar from "../Avatar";

interface AuctionCardInterface {
  id: number;
  cover_image: string;
  title: string;
  description: string;
  vehicle_mileage: string;
  vehicle_year: string;
  vehicle_price: string;
  user: any;
}

export const AuctionCard = ({
  id,
  cover_image,
  title,
  description,
  vehicle_mileage,
  vehicle_year,
  vehicle_price,
  user,
}: AuctionCardInterface) => {
  return (
    <Container img={cover_image}>
      <div className="card-data__main">
        <span className="background-fade">
          <section className="card-data__timer">
            <FiClock size={24} />
            <h6>01:58:00</h6>
          </section>
          <h6>{title}</h6>
          <p>{description}</p>
          <section className="card-data__user">
            <Avatar name={user.name} size="32px" bigAvatar={false} />
          </section>
          <section className="card-data__vehicle">
            <div>
              <p>{vehicle_year}</p>
              <p>{vehicle_mileage} KM</p>
            </div>
            <h6>R$ {vehicle_price}</h6>
          </section>
        </span>
      </div>
      <BrandButton>
        Acessar página do leilão <HiOutlineArrowNarrowRight size={32} />
      </BrandButton>
    </Container>
  );
};
