import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { BrandButton, Outline1Button, Outline2Button } from "../components/Button"
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { ProductCard } from "../components/ProductCard";
import { databaseCar, databaseMoto } from "../database";
export const Home = () => {   
     
    return (
        //<div style={{boxSizing: "border-box"}}>
        //    <div style={{ height: "5rem", width: "23.4rem", backgroundColor: "#000", color: "#fff" }}>Header (desktop: height: "5rem", width: "100rem")
        //    </div>
            
        //    <div style={{ height: "38.94rem", width: "23.4rem", backgroundColor: "#fff", color: "#000" }}>
        //        Nav-Menu (desktop: height: "31.43rem", width: "100rem")
        //    </div>
            
        //    <div style={{ height: "33.75rem",  width: "23.4rem", backgroundColor: "#000", color: "#fff"}}>
        //        <p style={{ height: "1.875rem", width: "23.4rem",  backgroundColor: "#260b92", color: "#fff"}}>Leilão</p>
                
        //        <div style={{ display: "flex" }}>
                    
        //            <div style={{ display: "flex", flexDirection: "column" }}>
                        
        //                <div style={{ height: "27.18rem", width: "20.5rem", backgroundColor: "#a50e0e", color: "#fff", marginRight: "0.5rem", marginLeft: "0.75rem" }}>carro1</div>
        //                {/*<BrandButton size="lg">bora ver</BrandButton>*/}
        //                <div style={{ height: "3.8rem", width: "20.5rem", backgroundColor: "#e61abd", color: "#fff", marginRight: "0.5rem", marginLeft: "0.75rem" }}>button1</div>
                        
        //            </div>
                    
        //            <div style={{ display: "flex", flexDirection: "column" }}>
                        
        //                <div style={{ height: "27.18rem", width: "1.68rem", backgroundColor: "#049d41", color: "#000" }}>
        //                    carro2 (IGNORAR)
        //                </div>
        //                <div style={{ height: "3.8rem", width: "1.68rem", backgroundColor: "#e61abd", color: "#fff"}}>button2</div>
                        
        //            </div>                    
                        
        //        </div>
                
        //    </div>
            
        //    <div>
        //            <p>carros</p>
        //            <div>
                        
        //            </div>
        //        </div>
        //        <div>
        //            <p>motos</p>
        //            <div></div>
        //        </div>
        //</div>
        
        <>
            <Navbar username="Ana" />
            <Flex
                h={{ base: "623px", lg: "503px" }}
                //w={"100%"}
                flexDir={"column"}
                //mt={{base: "45px", lg: "73px"}}
                bg="brand.brand2"
                justifyContent="center"
                alignItems="center"                
            >
                <Heading
                    as="h1"
                    fontSize="lg"
                    //alignSelf="center"
                    //alignContent={"center"}
                    mt={{ base: "53px", lg: "80px" }}
                    mb={{ base: "52px", lg: "20px" }}
                    //ml={{ base: "1.5px", lg: "425px" }}
                    color="greyScale.grey10"
                >
                    Velocidade e experiência em um lugar feito para você
                </Heading>     
                <Text
                    fontSize="xs"
                    //mt={{ base: "53px", lg: "80px" }}
                    mb={{ base: "52px", lg: "20px" }}
                    //mx={{ base: "1.5px", lg: "425px" }}
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
            <Box
                ml="60px"
                p={{base: "540px", lg: "496px"}}
                bg="profile.random9"
                
            >
                Leilão
            </Box>
            <Box ml="60px">
                <Heading
                    as="h6"
                    fontSize="lg"
                    //alignSelf="center"
                    //alignContent={"center"}
                    mt={{ base: "67px", lg: "200px" }}
                    mb="62px"
                    //ml={{ base: "1.5px", lg: "425px" }}
                    color="greyScale.grey0"
                >
                   Carros
                </Heading>     
                <Flex overflowX={"auto"} scrollSnapType={"x mandatory"} scrollBehavior={"smooth"}>
                    {databaseCar.map(({ id, img, title, description, km, year, price, sellerName }) => <ProductCard key={id} img={img} title={title} description={description} km={km} year={year} price={price} sellerName={sellerName} />)}
                </Flex>
            </Box>
            <Box>
                <Heading
                        as="h6"
                        fontSize="lg"
                        //alignSelf="center"
                        //alignContent={"center"}
                        mt={{ base: "67px", lg: "200px" }}
                        mb="62px"
                        //ml={{ base: "1.5px", lg: "425px" }}
                        color="greyScale.grey0"
                >
                    Motos
                </Heading> 
                <Flex overflowX={"auto"} scrollSnapType={"x mandatory"} scrollBehavior={"smooth"}>    
                    {databaseMoto.map(({ id, img, title, description, km, year, price, sellerName }) => <ProductCard key={id} img={img} title={title} description={description} km={km} year={year} price={price} sellerName={sellerName} />)}
                </Flex>
            </Box>
           <Footer  /> 
        </>
    )
}