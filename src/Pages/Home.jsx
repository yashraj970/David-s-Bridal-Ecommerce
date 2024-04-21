import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import HomePoster from "../Images/HomePoster.png";
import Screenshot1 from "../Images/Screenshot1.png";
import React from "react";

const Home = () => {
  return (
    <Box mt={"55px"}>
      <Box>
        <Image src={HomePoster} />
      </Box>

      {/* Category */}

      <Box width={"15%"} margin={"auto"} mt={"50px"}>
        {" "}
        <Image src={Screenshot1} />{" "}
      </Box>
      <Grid
        width={"75%"}
        margin="auto"
        mt={"50px"}
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
        gap={6}
        fontSize={"17px"}
        textAlign={"center"}
      >
        <GridItem>
          <Image src="https://prod.davidsbridal.com/content/dam/aem-integration/site-promos/2-21-hot-deals/2.21_BM_Up_To_30off.jpg" />
          <Text>Shop Bridesmaid Dresses</Text>
        </GridItem>
        <GridItem>
          <Image src="https://prod.davidsbridal.com/content/dam/aem-integration/site-promos/2-21-hot-deals/2.21_Prom_Up_to_20off.jpg" />
          <Text>Shop Prom Dresses</Text>
        </GridItem>
        <GridItem>
          <Image src="https://prod.davidsbridal.com/content/dam/aem-integration/site-promos/2-21-hot-deals/2.21_ACC_Mix_and_Match_BOGO.jpg" />
          <Text>Shop BOGO Accessories</Text>
        </GridItem>
        <GridItem>
          <Image src="https://prod.davidsbridal.com/content/dam/aem-integration/site-promos/2-21-hot-deals/2.21_FG_Up_to_20off.jpg" />
          <Text>Shop Flower Girl Dresses</Text>
        </GridItem>
      </Grid>

      {/* our exclusive brands */}

      <Box mt={"50px"}>
        <Heading fontSize={"34px"} textAlign="center">
          our exclusive brands
        </Heading>
        <Grid
          width={"75%"}
          margin="auto"
          mt={"50px"}
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={6}
        >
          <GridItem>
            <Image src="https://prod.davidsbridal.com/content/dam/aem-integration/brand/homepage/Galina_Sig_MTB_Module_v2.jpg" />
          </GridItem>
          <GridItem>
            <Image src="https://prod.davidsbridal.com/content/dam/aem-integration/brand/homepage/Oleg_MTB_Module_v2.jpg" />
          </GridItem>
          <GridItem>
            <Image src="https://prod.davidsbridal.com/content/dam/aem-integration/brand/homepage/Melissa_MTB_Module.jpg" />
          </GridItem>
          <GridItem>
            <Image src="https://prod.davidsbridal.com/content/dam/aem-integration/brand/homepage/DB_Studio_MTB_Module_v2.jpg" />
          </GridItem>
        </Grid>
      </Box>
      <Box backgroundColor={"rgb(250, 244, 239)"}></Box>

      {/* going fast */}

      <Box mt={"50px"}>
        <Heading fontSize={"34px"} textAlign="center">
          {" "}
          bestsellers <br /> going fast!
        </Heading>
        <Grid
          width={"70%"}
          margin="auto"
          mt={"50px"}
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(3, 1fr)",
            "repeat(5, 1fr)",
          ]}
          gap={6}
          fontSize={"18px"}
          textAlign={"center"}
        >
          <GridItem>
            <Image src="https://img.davidsbridal.com/is/image/DavidsBridalInc/Set-WG4093-11611876-Ivory?wid=980" />
            <Text>off-shoulder satin mermaid wedding dress</Text>
          </GridItem>
          <GridItem>
            <Image src="https://img.davidsbridal.com/is/image/DavidsBridalInc/Set-F20609-11586378-Eucalyptus?wid=980" />
            <Text>midi charmeuse bridesmaid slip dress</Text>
          </GridItem>
          <GridItem>
            <Image src="https://img.davidsbridal.com/is/image/DavidsBridalInc/Set-4XLCWG924-11579884-Ivory_Cashmere%20Cocoa?wid=980" />
            <Text>illusion plunge v-neck lace wedding gown</Text>
          </GridItem>
          <GridItem>
            <Image src="https://img.davidsbridal.com/is/image/DavidsBridalInc/Set-9SDWG1126-11611757-Ivory?wid=980" />
            <Text>long billow sleeve chiffon a-line wedding dress</Text>
          </GridItem>
          <GridItem>
            <Image src="https://img.davidsbridal.com/is/image/DavidsBridalInc/RK1368_SOFTWHITE_FG_PROD1_V2_122?wid=980" />
            <Text>ball gown flower girl dress with heart cutout</Text>
          </GridItem>
        </Grid>
      </Box>

      {/* Poster 2 */}

      <Box width={"98%"} margin="auto" mt={"50px"}>
        <Image
          width={"100%"}
          src="https://prod.davidsbridal.com/content/dam/aem-integration/brand/homepage/HOP_HP_Banner_Desktop_v2.jpg"
        />
      </Box>

      {/* beautifully designed, perfectly priced */}

      <Box mt={"50px"}>
        <Heading fontSize={"34px"} textAlign="center">
          beautifully designed, <br /> perfectly priced
        </Heading>
        <Grid
          width={"70%"}
          margin="auto"
          mt={"50px"}
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={6}
          fontSize={"19px"}
          textAlign={"center"}
        >
          <GridItem>
            <Image src="https://prod.davidsbridal.com/content/dam/aem-integration/brand/homepage/under-200@2x_RESIZED.jpg" />
            <Text>off-shoulder satin mermaid wedding dress</Text>
          </GridItem>
          <GridItem>
            <Image src="https://prod.davidsbridal.com/content/dam/aem-integration/brand/homepage/under%201000@2x.jpg" />
            <Text>midi charmeuse bridesmaid slip dress</Text>
          </GridItem>
          <GridItem>
            <Image src="https://prod.davidsbridal.com/content/dam/aem-integration/brand/homepage/over%201000@2x.jpg" />
            <Text>illusion plunge v-neck lace wedding gown</Text>
          </GridItem>
          <GridItem>
            <Image src="https://prod.davidsbridal.com/content/dam/aem-integration/brand/homepage/under%20500@2x.jpg" />
            <Text>long billow sleeve chiffon a-line wedding dress</Text>
          </GridItem>
        </Grid>
      </Box>

      {/* how we’re here to serve you */}

      <Box backgroundColor={"rgb(250, 244, 239)"} mt={"50px"}>
        <Heading pt={"60px"} fontSize={"34px"} textAlign="center">
          how we are here <br /> to serve you
        </Heading>
        <Grid
          width={"70%"}
          margin="auto"
          mt={"50px"}
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={6}
          pb={"60px"}
          fontSize={"19px"}
          textAlign={"center"}
        >
          <GridItem>
            <Image src="https://prod.davidsbridal.com/content/dam/aem-integration/partners/frontline_fierce_lp/Frontline_HP_Module_RESIZED.jpg" />
            <Text>serving those who serve others</Text>
          </GridItem>
          <GridItem>
            <Image src="https://prod.davidsbridal.com/content/dam/aem-integration/brand/homepage/GRP_PEARL_MULTI_SPRING_23_044.jpg" />
            <Text>pearl by davids</Text>
          </GridItem>
          <GridItem>
            <Image src="https://prod.davidsbridal.com/content/dam/aem-integration/brand/homepage/24_7@2x.jpg" />
            <Text>24/7 & 365, we are here!</Text>
          </GridItem>
          <GridItem>
            <Image src="https://prod.davidsbridal.com/content/dam/aem-integration/brand/homepage/Alterations_22_RESIZED.jpg" />
            <Text>altered by artisans</Text>
          </GridItem>
        </Grid>
      </Box>

      {/* more ways to save */}

      <Box backgroundColor={"rgb(250, 244, 239)"} mt={"50px"}>
        <Heading pt={"60px"} fontSize={"34px"} textAlign="center">
          more ways <br /> to save
        </Heading>
        <Grid
          width={"70%"}
          margin="auto"
          mt={"50px"}
          templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
          gap={6}
          pb={"60px"}
          fontSize={"19px"}
          textAlign={"center"}
        >
          <GridItem>
            <Image src="https://prod.davidsbridal.com/content/dam/aem-integration/brand/homepage/Diamond%20Module@2x.jpg" />
            <Text>diamond loyalty by davids</Text>
          </GridItem>
          <GridItem>
            <Image src="https://prod.davidsbridal.com/content/dam/aem-integration/brand/homepage/STOREOPENSTILLS_MULTI_ACC_JULY_20_009_AffirmMock_RESIZED.jpg" />
            <Text>affirm: buy now, pay later</Text>
          </GridItem>
          <GridItem>
            <Image src="https://prod.davidsbridal.com/content/dam/aem-integration/brand/homepage/Hot%20Deals%20Module@2x.jpg" />
            <Text>hot deals</Text>
          </GridItem>
        </Grid>
      </Box>

      {/* Poster 3 */}

      <Box width={"98%"} margin="auto" mt={"50px"}>
        <Image
          width={"100%"}
          src="https://prod.davidsbridal.com/content/dam/aem-integration/brand/homepage/HP_Module_SBB_Desktop.jpg"
        />
      </Box>

      {/* our partners */}

      <Box mt={"50px"}>
        <Heading pt={"60px"} fontSize={"34px"} textAlign="center">
          how we are here <br /> to serve you
        </Heading>
        <Grid
          width={"70%"}
          margin="auto"
          mt={"50px"}
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={6}
          pb={"60px"}
          fontSize={"19px"}
          textAlign={"center"}
        >
          <GridItem>
            <Image src="https://prod.davidsbridal.com/content/dam/aem-integration/brand/homepage/homepage-partner-feature-module_RESIZED.jpg" />
            <Text>the black tux</Text>
          </GridItem>
          <GridItem>
            <Image src="https://prod.davidsbridal.com/content/dam/aem-integration/brand/homepage/P303327_PTR_TWS_0401_v2.jpg" />
            <Text>the wedding shop by shutterfly</Text>
          </GridItem>
          <GridItem>
            <Image src="https://prod.davidsbridal.com/content/dam/aem-integration/brand/homepage/WS_content3CE_767x1147_honeymoon_1118c@2x_v2_RESIZED.jpg" />
            <Text>sandals</Text>
          </GridItem>
          <GridItem>
            <Image src="https://prod.davidsbridal.com/content/dam/aem-integration/brand/homepage/GRP1_BLACK_LILTUX_FALL_22_070_Module_v2_RESIZED.jpg" />
            <Text>little tuxedos</Text>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
