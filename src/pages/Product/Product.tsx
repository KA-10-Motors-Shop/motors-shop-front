import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Avatar from "../../components/Avatar";
import { BrandButton, DefaultButton } from "../../components/Button/Button";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { databaseCar } from "../../database";
import api from "../../services/api";
import { Container } from "./styles";

export const Product = () => {
  const [productInfos, setProductInfos] = useState({});
  const {
    cover_image,
    title,
    description,
    vehicle_mileage,
    vehicle_year,
    vehicle_price,
    user,
  }: any = productInfos;

  const { id }: any = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    api
      .get(`/advert/${id}`)
      .then((response) => {
        console.log(response.data);

        setProductInfos(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <section className="main-product">
          <section className="main-product-presentation">
            <section className="main-coverPage">
              <div className="main-coverPage__img">
                <img src={cover_image} alt="A imagem do produto anunciado" />
              </div>
            </section>
            <section className="main-data_product">
              <h6 className="main-data-product__title ">{title}</h6>
              <div>
                <div className="div-data_product">
                  <p>{vehicle_year}</p>
                  <p>{vehicle_mileage} KM</p>
                </div>
                <h6>R$ {vehicle_price}</h6>
              </div>
              <BrandButton>Comprar</BrandButton>
            </section>
            <section className="main-product__description">
              <h6>Descrição</h6>
              <p>{description}</p>
            </section>
          </section>
          <aside className="aside">
            <section className="aside-pictures-product">
              <h6>Fotos</h6>
              <ul>
                <li>
                  <img src={cover_image} />
                </li>
                <li>
                  <img src={cover_image} />
                </li>
                <li>
                  <img src={cover_image} />
                </li>
                <li>
                  <img src={cover_image} />
                </li>
                <li>
                  <img src={cover_image} />
                </li>
                <li>
                  <img src={cover_image} />
                </li>
              </ul>
            </section>
            <section className="aside-user">
              <div>
                {user && (
                  <>
                    <Avatar
                      color={user.profile_color}
                      name={user.name}
                      size="64px"
                      bigAvatar={true}
                    />
                    <p>{user.description}</p>
                  </>
                )}
                <DefaultButton>Ver todos anúncios</DefaultButton>
              </div>
            </section>
          </aside>
        </section>
        <section className="main-comments">
          <section className="section-comments">
            <h6>Comentários</h6>
            <ul>
              <li>
                <div>
                  <p className="section-comments__initials">JL</p>
                  <p>Júlia Lima</p>
                  <span></span>
                  <p>há 3 dias</p>
                </div>
                <p className="section-comments__comment">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </li>
              <li>
                <div>
                  <p className="section-comments__initials">MA</p>
                  <p>Marcos Antônio</p>
                  <span></span>
                  <p>há 7 dias</p>
                </div>
                <p className="section-comments__comment">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </li>
              <li>
                <div>
                  <p className="section-comments__initials">CS</p>
                  <p>Camila Silva</p>
                  <span></span>
                  <p>há 1 mês</p>
                </div>
                <p className="section-comments__comment">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </li>
            </ul>
          </section>
          <section className="main-newComment">
            <section className="section-newComment">
              <div>
                <p className="section-newComment__initials">SL</p>
                <p>Samuel Leão</p>
              </div>
              <form>
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={10}
                  placeholder="Placeholder"
                ></textarea>
                <BrandButton>Comentar</BrandButton>
              </form>
              <section className="section-newComment__recommendation">
                <ul>
                  <li>
                    <p>Gostei muito!</p>
                  </li>
                  <li>
                    <p>Incrível</p>
                  </li>
                  <li>
                    <p>Recomendarei para meus amigos!</p>
                  </li>
                </ul>
              </section>
            </section>
          </section>
        </section>
      </Container>
      <Footer />
    </>
  );
};
