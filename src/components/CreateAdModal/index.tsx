import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  BrandButton,
  BrandOpacityButton,
  NegativeButton,
} from "../Button/Button";
import { Input } from "../Input/Input";
import {
  CreateButtonsDiv,
  DivForm,
  DivInfos,
  DivRadios,
  SectionMain,
} from "./style";
import { UseTokenProvider } from "../../providers/token";

interface IModal {
  setActiveModal: any;
}

const CreateAdModal = ({ setActiveModal }: IModal) => {
  const [inputsQnty, setInputsQnty] = useState(1);
  const { token }: any = UseTokenProvider();

  useEffect(() => {
    if (!token) {
      setActiveModal(false);
    }
  }, []);

  const schema = yup.object().shape({
    ad_type: yup.number().required("Campo obrigatório!"),
    title: yup.string().required("Campo obrigatório!"),
    vehicle_year: yup.string().required("Campo obrigatório!"),
    vehicle_mileage: yup.number().required("Campo obrigatório!"),
    vehicle_price: yup.number().required("Campo obrigatório!"),
    description: yup.string().required("Campo obrigatório!"),
    vehicle_type: yup.number().required("Campo obrigatório!"),
    cover_image: yup.string().required("Campo obrigatório!"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data: any) => {
    const imagesArray = [];
    for (let i = 0; i <= 4; i++) {
      let img = `img${i}`;
      if (data[img]) {
        imagesArray.push(data[img]);
        delete data[img];
      }
    }

    data.vehicle_type = parseInt(data.vehicle_type);

    data.images = imagesArray;

    console.log(data);

    api
      .post("/advert", data, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SectionMain>
      <DivForm>
        <h2>Criar anuncio</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>Tipo de anuncio</p>
          <DivRadios>
            <input
              type="radio"
              id="venda"
              value="Venda"
              {...register("ad_type", { required: "Campo obrigatório!" })}
            />
            <label htmlFor="venda">Venda</label>
            <input
              type="radio"
              id="leilao"
              value="Leilão"
              {...register("ad_type", { required: "Campo obrigatório!" })}
            />
            <label htmlFor="leilao">Leilão</label>
          </DivRadios>
          <Input
            placeholder="Digitar título"
            label="Título"
            error={errors?.title}
            register={{
              ...register("title", { required: "Campo obrigatório!" }),
            }}
          />
          <DivInfos>
            <Input
              placeholder="Digitar ano"
              label="Ano"
              error={errors?.vehicle_year}
              register={{
                ...register("vehicle_year", {
                  required: "Campo obrigatório!",
                }),
              }}
            />
            <Input
              placeholder="0"
              label="Quilometragem"
              error={errors?.vehicle_mileage}
              register={{
                ...register("vehicle_mileage", {
                  required: "Campo obrigatório!",
                  valueAsNumber: true,
                }),
              }}
            />
            <Input
              placeholder="Digitar preço"
              label="Preço"
              error={errors?.vehicle_price}
              register={{
                ...register("vehicle_price", {
                  required: "Campo obrigatório!",
                  valueAsNumber: true,
                }),
              }}
            />
          </DivInfos>
          <Input
            placeholder="Digitar descrição"
            label="Descrição"
            type="textarea"
            error={errors?.description}
            register={{
              ...register("description", {
                required: "Campo obrigatório!",
              }),
            }}
          />
          <p>Informações do veículo</p>

          <DivRadios>
            <input
              type="radio"
              id="carro"
              value="0"
              {...register("vehicle_type", {
                required: "Campo obrigatório!",
              })}
            />
            <label htmlFor="carro">Carro</label>
            <input
              type="radio"
              id="moto"
              value="1"
              {...register("vehicle_type", {
                required: "Campo obrigatório!",
              })}
            />
            <label htmlFor="moto">Moto</label>
          </DivRadios>
          <Input
            placeholder="Inserir URL da imagem"
            label="Imagem da capa"
            error={errors?.cover_image}
            register={{
              ...register("cover_image", {
                required: "Campo obrigatório!",
              }),
            }}
          />
          {[...Array(inputsQnty)].map((element, i) => {
            if (i <= 4) {
              let img = `img${i + 1}`;
              return (
                <Input
                  key={i}
                  placeholder="Inserir URL da imagem"
                  label={`${i + 1}° Imagem da galeria`}
                  error={errors?.[img]}
                  register={{
                    ...register(`img${i + 1}`, {
                      required: "Campo obrigatório!",
                    }),
                  }}
                />
              );
            }
            return "";
          })}
          <BrandOpacityButton
            className="moreImages__buttom"
            onClick={() => setInputsQnty(inputsQnty + 1)}
          >
            Adicionar campo para imagem da galeria
          </BrandOpacityButton>
          <CreateButtonsDiv>
            <NegativeButton onClick={() => setActiveModal(false)}>
              Cancelar
            </NegativeButton>
            <BrandButton width="193px" type="submit">
              Criar anúncio
            </BrandButton>
          </CreateButtonsDiv>
        </form>
      </DivForm>
    </SectionMain>
  );
};

export default CreateAdModal;
