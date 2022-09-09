import Avatar from "../../components/Avatar";
import { Header } from "../../components/Header/Header";
import { UseTokenProvider } from "../../providers/token";
import { MainSection, ProfileBox, PurpleBox } from "./styles";
import jwt_decode from "jwt-decode";
import { OutlineBrand1Button } from "../../components/Button/Button";
import { useEffect, useState } from "react";
import CreateAdModal from "../../components/CreateAdModal";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

const ProductViewAdmin = () => {
  const [activeModal, setActiveModal] = useState(false);
  const { token }: any = UseTokenProvider();
  const [description, setDescription] = useState("");
  const [accountType, setAccountType] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (!token) {
      history.push("/login");
      toast.error("Necessário estar logado!");
    } else {
      const { description, accountType }: any = jwt_decode(token);
      setDescription(description);
      setAccountType(accountType);
    }
  }, []);

  return (
    <MainSection>
      <Header />
      <main>
        {activeModal && <CreateAdModal setActiveModal={setActiveModal} />}

        <PurpleBox />
        <ProfileBox>
          {token && (
            <Avatar
              token={token}
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
      </main>
    </MainSection>
  );
};

export default ProductViewAdmin;
