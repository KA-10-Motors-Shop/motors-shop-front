import { useHistory } from "react-router";
import Avatar from "../Avatar";
import { Container } from "./styles";

interface SaleCardInterface {
  id: number;
  cover_image: string;
  title: string;
  description: string;
  vehicle_mileage: string;
  vehicle_year: string;
  vehicle_price: string;
  user: any;
}

export const SaleCard = ({
  id,
  cover_image,
  title,
  description,
  vehicle_mileage,
  vehicle_year,
  vehicle_price,
  user,
}: SaleCardInterface) => {
  const history = useHistory();
  console.log(user);

  return (
    <Container onClick={() => history.push(`/productViewUser/${id}`)}>
      <div className="box">
        <div className="box-img">
          <img src={cover_image} alt="imagem da venda" />
        </div>
        <h6>{title}</h6>
        <p>{description}</p>
        <section className="card-data__user">
          <Avatar
            color={user.profile_color}
            name={user.name}
            size="32px"
            bigAvatar={false}
          />
        </section>
        <section className="card-data__vehicle">
          <p>{vehicle_mileage} KM</p>
          <p>{vehicle_year}</p>
          <h6>R$ {vehicle_price}</h6>
        </section>
      </div>
    </Container>
  );
};
