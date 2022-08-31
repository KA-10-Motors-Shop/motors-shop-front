import {
  Box,
  Flex,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  TagLabel,
  Text,
  useDisclosure,
  useMediaQuery,
  useRadioGroup,
} from "@chakra-ui/react";
import { UseTokenProvider } from "../providers/token";
import { UserMiniCard } from "./UserMiniCard";
import jwt_decode from "jwt-decode";
import {
  BrandButton,
  BrandButtonDisable,
  LightButton,
  LinkButton,
  OutlineBrandButton,
  OutlineLightButton,
} from "./Button";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { Input } from "./Input";
import { useForm } from "react-hook-form";

const UserProfileCard = () => {
  const history = useHistory();
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const { token }: any = UseTokenProvider();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    if (!token) {
      history.push("/login");
    }
  }, []);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const { name, description, accountType }: any = jwt_decode(token);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const options = ["Venda", "Leilão"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "type",
    defaultValue: "Venda",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Criar anuncio</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormLabel>Tipo de anuncio</FormLabel>
              <Flex
                justifyContent="space-between"
                marginBottom="15px"
                {...group}
              >
                {options.map((value) => {
                  const radio = getRadioProps({ value });
                  return (
                    <BrandButtonDisable
                      width="98%"
                      key={value}
                      ref={register}
                      {...radio}
                    >
                      {value}
                    </BrandButtonDisable>
                  );
                })}
              </Flex>
              <Input
                label="Título"
                type="input"
                placeholder="Digitar título"
                errorMsg={errors.title}
                register={{
                  ...register("title", { required: "Campo obrigatório!" }),
                }}
              />
              <Flex>
                <Input
                  label="Ano"
                  type="input"
                  placeholder="Digitar ano"
                  errorMsg={errors.year}
                  width="90%"
                  register={{
                    ...register("year", { required: "Campo obrigatório!" }),
                  }}
                />
                <Input
                  label="Quilometragem"
                  type="input"
                  placeholder="0"
                  errorMsg={errors.km}
                  width="90%"
                  register={{
                    ...register("km", { required: "Campo obrigatório!" }),
                  }}
                />
                <Input
                  label="Preço"
                  type="input"
                  placeholder="Digitar preço"
                  errorMsg={errors.price}
                  register={{
                    ...register("price", { required: "Campo obrigatório!" }),
                  }}
                />
              </Flex>
              <Input
                label="Descrição"
                type="textarea"
                placeholder="Digitar descrição"
                errorMsg={errors.description}
                register={{
                  ...register("description", {
                    required: "Campo obrigatório!",
                  }),
                }}
              />
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        backgroundColor="white"
        // paddingBottom="50px"
        w={isLargerThan700 ? "75%" : "90%"}
        zIndex="2"
        marginTop="155px"
      >
        <Box m="44px 41px">
          <UserMiniCard
            username={name}
            size="100px"
            fontSize="36px"
            text={false}
          />
          <Flex alignItems="center">
            <Text m="21px 0" fontSize="20px" fontWeight="bold">
              {name}
            </Text>
            {accountType && (
              <Box
                marginLeft="9px"
                bgColor="brand.brand4"
                p="4px 8px"
                borderRadius="4px"
              >
                <Text fontSize="14px" color="brand.brand1">
                  Anunciante
                </Text>
              </Box>
            )}
          </Flex>
          <Text color="#495057" marginBottom="50px">
            {description}
          </Text>
          <OutlineBrandButton onClick={onOpen}>
            Criar anuncio
          </OutlineBrandButton>
        </Box>
      </Box>
    </>
  );
};

export default UserProfileCard;
