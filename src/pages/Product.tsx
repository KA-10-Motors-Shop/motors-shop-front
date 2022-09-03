import { Box, Img } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import {
  ProductInfoCard,
  ProductInfoCardProps,
} from "../components/ProductInfoCard";
import {
  CommentSection,
  CommentSectionProps,
} from "../components/CommentSection";

interface ProductPageProps {
  carInfo: ProductInfoCardProps;
  comments: CommentSectionProps;
}

//export const Product: React.FC<ProductPageProps> = (
//  //{ carInfo, comments }
//) => {
  
export const Product = () => {
  return (
    <>
      <Navbar username="Context State" />
      <Box
        //position="fixed"
        //top="0px"
        className="main-wrapper"
        mt="80px"
        h="fit-content"
        bg={{
          base: "linear-gradient(180deg, #4529E6 32.25em, #F1F3F5 5em, #F1F3F5 100%)",
          lg: "linear-gradient(180deg, #4529E6 36.5em, #F1F3F5 5em, #F1F3F5 100%)",
        }}
        p={{
          base: "32.25em 100%",
          lg: "100%"
        }}
      >
        <Box
          w={{
            base: "21.938em",
            lg: "47em"
          }}
          p={{
            base: "21.938em 22.188em"
          }}
          h="22.188em"
          bg="greyScale.grey10"
          //mt="2.5em"
        >
          <Img src="" />
        </Box>
        {/*{<ProductInfoCard {...carInfo} />
        <CommentSection {...comments} />}*/}
      </Box>
      <Footer />
    </>
  );
};
