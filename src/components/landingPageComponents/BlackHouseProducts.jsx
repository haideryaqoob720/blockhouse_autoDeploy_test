import Link from "@mui/material/Link";
import { useState } from 'react';

import {
  AssetsHeading,
  AssetsText,
  CardBottomText,
  ProductBottomCard,
  ProductBottomCardHeading,
  ProductsContainer,
  ProductsTopRightSec,
  ProductTopCard,
  ProductCauroselMob,
  ProductTopMiddleText,
  ProductTopText,
} from "./CustomComponents";
import {
  Box,
  useMediaQuery,
  Grid,
  useTheme,
  Typography,
} from "@mui/material";

import tick from "../../Images/landingPage/products/Tick.png";
import tick2 from "../../Images/landingPage/products/Tick-2.png";
import card1 from "../../Images/landingPage/products/card1.png";
import card2 from "../../Images/landingPage/products/card2.png";
import card3 from "../../Images/landingPage/products/card3.png";
import card4 from "../../Images/landingPage/products/card4.png";
import card5 from "../../Images/landingPage/products/card5.png";
import card6 from "../../Images/landingPage/products/card6.png";
import trdSectionBackground from "../../Images/landingPage/products/3rdSectionBackground.png";



// swiper
// import Swiper core and required modules
// https://github.com/kareemaly/react-items-carousel
// https://kareemaly.github.io/react-items-carousel/
import ItemsCarousel from 'react-items-carousel';

function BlackHouseProducts() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const theme = useTheme();
  const isMobileOrTab = useMediaQuery(theme.breakpoints.down("md"));


  const cardContentTop = [

    {
      linkTo: '/ComingSoon',
      src: tick2,
      middle: "Trade+",
      bottom:
        "Trade debt on a traditional exchange via RFQs and direct execution. Settle trades instantly with minimal transaction costs",
      bg: "linear-gradient(273.34deg, rgba(23, 24, 29, 0.12) -17.8%, rgba(26, 26, 28, 0.006) -17.8%, rgba(246, 175, 64, 0.12) 98.96%), linear-gradient(281.38deg, rgba(23, 24, 29, 0.12) -16.31%, rgba(114, 120, 152, 0.12) 101.13%)",
    },
    {
      linkTo: '/BorrowPage',
      src: tick,
      middle: "Liquidity+",
      bottom:
        "Earn fees providing continuous liquidity to Blockhouse’s exchange with automated market making infrastructure for fixed income products",
      bg: "linear-gradient(281.38deg, rgba(23, 24, 29, 0.12) -16.31%, rgba(101, 155, 235, 0.12) 101.13%)",
    },
  ];

  const cardContentBottom = [
    {
      heading: "Atomic Settlement",
      subheading:
        "T-0 settlement with payment vs delivery systems",
      src: card1,
    },
    {
      heading: "Rapid Execution",
      subheading:
        "Blockhouse conducts FBA in one minute intervals, nearly 5 times faster than current venues",
      src: card2,
    },
    {
      heading: "Flexible Deployment",
      subheading: "Cross-chain access on private or permission-less systems",
      src: card3,
    },
    {
      heading: "Post trade reporting",
      subheading:
        "Automated post-trade workflows including regulatory reporting and reconciliation",
      src: card4,
    },
    {
      heading: "Frictionless Liquidity",
      subheading:
        "Get access to instant funding markets via composable fixed income securities",
      src: card5,
    },
    {
      heading: "Market Transparency",
      subheading:
        "Real-time pricing with intra-day collateral valuation data",
      src: card6,
    },
  ];

  return (
    <Box sx={{ position: "relative", background: `url(${trdSectionBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <ProductsContainer>
        <Box display={{ xl: 'flex', md: 'flex', sm: 'block' }}>
          <Box sx={{ width: { xl: '50%', md: '50%', sm: '100%' } }}>
            <ProductTopText>Products</ProductTopText>
            <AssetsHeading>
              A Better Bond{" "}
              <Typography variant="span" color="#659BEB">
                Trading
              </Typography>{" "}
              System
            </AssetsHeading>
            <AssetsText sx={{ width: '350px', color: 'white', fontFamily: 'Open Sans' }}>
              Providing a fixed income exchange through DeFi technology driven solutions
            </AssetsText>
          </Box>

          <ProductsTopRightSec>
            {cardContentTop.map(({ linkTo, src, middle, bottom, bg }) => (
              <ProductTopCard style={{ background: `${bg}` }}>
                <Link href={linkTo} underline="none">
                  <img
                    style={{ width: "100px", height: "100px" }}
                    src={src}
                    alt="tick"
                  />
                  <ProductTopMiddleText>
                    Blockhouse
                    <Typography
                      variant="span"
                      sx={{ fontWeight: "600", display: "block" }}
                    >
                      {middle}
                    </Typography>
                  </ProductTopMiddleText>
                  <CardBottomText>{bottom}</CardBottomText>
                </Link>
              </ProductTopCard>
            ))}
          </ProductsTopRightSec>
        </Box>

        <Box sx={{ mt: "120px" }}>
          <AssetsHeading sx={{ width: "100%", mb: "64px" }} className="productsHeading">
            Why Use{" "}
            <Typography variant="span" color="#659BEB">
              BlockHouse
            </Typography>
            ?
          </AssetsHeading>
          {isMobileOrTab ? (

            // https://github.com/kareemaly/react-items-carousel
            // https://kareemaly.github.io/react-items-carousel/
            <ProductCauroselMob>
              <ItemsCarousel
                infiniteLoop={true}
                gutter={12}
                activePosition={'center'}
                chevronWidth={0}
                disableSwipe={false}
                alwaysShowChevrons={false}
                numberOfCards={1}
                slidesToScroll={1}
                outsideChevron={false}
                showSlither={true}
                firstAndLastGutter={true}
                activeItemIndex={activeItemIndex}
                requestToChangeActive={value => setActiveItemIndex(value)}
                rightChevron={'>'}
                leftChevron={'<'}
              >
                {cardContentBottom.map(({ heading, subheading, src }) =>
                  <ProductBottomCard marginBottom={{ xl: '0px', lg: '-10px' }} className="productsForMob">
                    <Box>
                      <ProductBottomCardHeading>
                        {heading}
                      </ProductBottomCardHeading>
                      <CardBottomText>{subheading}</CardBottomText>
                    </Box>
                    <img
                      style={{ width: "96px", height: "96px" }}
                      src={src}
                      alt="card-icon"
                    />
                  </ProductBottomCard>
                )}
              </ItemsCarousel>
            </ProductCauroselMob>) : (
            // {/* <Grid container spacing="24px"> */ }

            // {/* NOT MOBILE VERSION READY */}
            <Grid container spacing={{ xl: '24px', lg: '40px' }}>
              {cardContentBottom.map(({ heading, subheading, src }) => (
                <Grid item xs={4}>
                  <ProductBottomCard marginBottom={{ xl: '0px', lg: '-10px' }}>
                    <Box>
                      <ProductBottomCardHeading>
                        {heading}
                      </ProductBottomCardHeading>
                      <CardBottomText>{subheading}</CardBottomText>
                    </Box>

                    <img
                      style={{ width: "96px", height: "96px" }}
                      src={src}
                      alt="card-icon"
                    />
                  </ProductBottomCard>
                </Grid>
              ))}
            </Grid>
          )}




        </Box>
      </ProductsContainer>
    </Box>
  );
}

export default BlackHouseProducts;
