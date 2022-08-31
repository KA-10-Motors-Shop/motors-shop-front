import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { BrandButton, Outline1Button, Outline2Button } from "../components/Button"
import { CarouselAuction } from "../components/CarouselAuction";
import { CarouselItem, CarouselItemProps } from "../components/CarouselAuction/CarouselItem";
import { CarouselSale } from "../components/CarouselSales";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { ProductCard } from "../components/ProductCard";
import { databaseCar, databaseMoto, databaseAuction } from "../database";
export const Home = () => {   
    return (        
        <>
            <Navbar username="Ana" />
            <Flex
                h={{ base: "623px", lg: "503px" }}
                flexDir={"column"}
                bg="brand.brand2"
                justifyContent="center"
                alignItems="center"                
            >
                <Heading
                    as="h1"
                    fontSize="lg"
                    mt={{ base: "53px", lg: "80px" }}
                    mb={{ base: "52px", lg: "20px" }}
                    color="greyScale.grey10"
                >
                    Velocidade e experiência em um lugar feito para você
                </Heading>     
                <Text
                    fontSize="xs"
                    mb={{ base: "52px", lg: "20px" }}
                    color="greyScale.grey10"
                    
                >
                    Um ambiente para você explorar o seu melhor
                </Text>
                <Flex>
                    <Outline2Button
                        mr="21px"
                        size={"sm"}
                        children={"Leilão"}
                        color="greyScale.grey10"
                        
                    />
                    <Outline2Button
                        mr="21px"
                        size={"sm"}
                        children={"Carros"}
                        color="greyScale.grey10"
                        
                    />
                    <Outline2Button
                        size={"sm"}
                        children={"Motos"}
                        color="greyScale.grey10"
                        
                    />
                </Flex>
            </Flex>
            <CarouselAuction carouselList={databaseAuction} />    
            <Heading
                    as="h6"
                    fontSize="lg"
                    mt={{ base: "67px", lg: "200px" }}
                    //mb="62px"
                    ml="60px"
                    color="greyScale.grey0"
                >
                   Carros
                </Heading>  
            <CarouselSale carouselList={databaseCar} />
            {/*<Box ml="60px">
                <Heading
                    as="h6"
                    fontSize="lg"
                    mt={{ base: "67px", lg: "200px" }}
                    mb="62px"
                    color="greyScale.grey0"
                >
                   Carros
                </Heading>     
                <Flex overflowX={"auto"} scrollSnapType={"x mandatory"} scrollBehavior={"smooth"}>
                    {databaseCar.map(({ id, img, title, description, km, year, price, sellerName }) => <ProductCard key={id} img={img} title={title} description={description} km={km} year={year} price={price} sellerName={sellerName} />)}
                </Flex>
            </Box>*/}
            {/*<Box>
                <Heading
                        as="h6"
                        fontSize="lg"
                        mt={{ base: "67px", lg: "200px" }}
                        mb="62px"
                        color="greyScale.grey0"
                >
                    Motos
                </Heading> 
                <Flex overflowX={"auto"} scrollSnapType={"x mandatory"} scrollBehavior={"smooth"}>    
                    {databaseMoto.map(({ id, img, title, description, km, year, price, username }) => <ProductCard key={id} img={img} title={title} description={description} km={km} year={year} price={price} username={username} />)}
                </Flex>
            </Box>*/}
           <Footer  /> 
        </>
    )
}