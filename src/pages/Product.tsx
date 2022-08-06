import { Box } from "@chakra-ui/react";
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

export const Product: React.FC<ProductPageProps> = ({ carInfo, comments }) => {
  return (
    <>
      <Navbar username="Context State" />
      <Box
        className="main-wrapper"
        mt="80px"
        h="fit-content"
        bg={{
          base: "linear-gradient(180deg, #4529E6 18.25%, #F1F3F5 18.26%, #F1F3F5 100%)",
          lg: "linear-gradient(180deg, #4529E6 31.25%, #F1F3F5 31.26%, #F1F3F5 100%)",
        }}
        p={{ base: "45px 12px" }}
      >
        <ProductInfoCard {...carInfo} />
        <CommentSection {...comments} />
      </Box>
      <Footer />
    </>
  );
};
