import Avatar from "../../components/Avatar";
import { Header } from "../../components/Header/Header";
import { UseTokenProvider } from "../../providers/token";
import { DivContainer, MainSection, ProfileBox, PurpleBox } from "./styles";
import jwt_decode from "jwt-decode";
import { OutlineBrand1Button } from "../../components/Button/Button";
import { useEffect, useState } from "react";
import CreateAdModal from "../../components/CreateAdModal";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import CarouselAuction from "../../components/CarouselAuction";
import { Footer } from "../../components/Footer/Footer";
import CarouselSale from "../../components/CarouselSale";

const ProductViewAdmin = () => {
  const [activeModal, setActiveModal] = useState(false);
  const { token }: any = UseTokenProvider();

  const [description, setDescription] = useState("");
  const [accountType, setAccountType] = useState(false);
  const [id, setId] = useState(false);
  const [userName, setUserName] = useState(".");
  const [profileColor, setProfileColor] = useState("");

  const history = useHistory();

  useEffect(() => {
    if (!token) {
      history.push("/login");
      toast.error("Necessário estar logado!");
    } else {
      const { color, name, description, accountType, id }: any =
        jwt_decode(token);
      setDescription(description);
      setAccountType(accountType);
      setId(id);
      setUserName(name);
      setProfileColor(color);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainSection>
      <Header />
      <main>
        {activeModal && <CreateAdModal setActiveModal={setActiveModal} />}

        <PurpleBox />
        <DivContainer>
          <ProfileBox>
            {token && (
              <Avatar
                color={profileColor}
                name={userName}
                size="104px"
                bigAvatar={true}
                accountType={accountType}
              />
            )}
            <p>{description}</p>

            <OutlineBrand1Button onClick={() => setActiveModal(true)}>
              Criar Anuncio
            </OutlineBrand1Button>
          </ProfileBox>

          <CarouselAuction id={id} />
          <CarouselSale type="0" />
        </DivContainer>
      </main>
      <Footer />
    </MainSection>
  );
};

export default ProductViewAdmin;
