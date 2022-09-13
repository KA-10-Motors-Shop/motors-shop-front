import { DivMain } from "./style";
import { SiFacepunch } from "react-icons/si";
import { Link } from "react-router-dom";

const NotFoundItems = () => {
  return (
    <DivMain>
      <div>
        <SiFacepunch />
        <h1>
          Nenhum anuncio encontrado.
          <br /> <Link to="/login">Crie um agora mesmo!</Link>
        </h1>
      </div>
    </DivMain>
  );
};

export default NotFoundItems;
