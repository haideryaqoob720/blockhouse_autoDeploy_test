import { Box, Typography } from "@mui/material";

import {
  AssetsCard,
  AssetsCardContainer,
  AssetsHeading,
  AssetsLifeCycleContainer,
  AssetsText,
  AssetsTopContainer,
  CardBottomText,
  CardMiddleText,
  CardTopText,
} from "./CustomComponents";
import houseImgSVG from "../../Images/landingPage/asset-lifeCycle/asset-lifecycleImg.svg";

function AssetsLifeCycle() {
  const cardContent = [
    {
      top: "01",
      middle: "Pre-trade Research",
      bottom: "Receive pre-trade transparency around liquidity information with constant price discovery on assets.",
    },
    {
      top: "02",
      middle: "Trade Execution",
      bottom:
        "Algorithmically place RFQs or direct limit orders and get instant execution on trades",
    },
    {
      top: "03",
      middle: "Settlement",
      bottom: "Receive T-0 settlement with delivery vs payment method",
    },
    {
      top: "04",
      middle: "Post Trade Process",
      bottom: "Access automatic and compliant post-trade processing at a fraction of the time and costs",
    },
  ];
  return (
    <AssetsLifeCycleContainer>
      <Box width={"80%"} margin={"0 auto"}>
        <AssetsTopContainer>
          <Box sx={{ width: { xl: '50%', md: '50%', sm: '100%' } }} className="AssetsTopIstContainer">
            <img
              // style={{ width: { xl: '78%', md: '78%', sm: '100%' }, height: { xl: '55%', md: '55%', sm: '100%' }, marginTop: "44px" }}
              style={{ width: '78%', height: '55%', marginTop: "44px" }}
              src={houseImgSVG}
              alt="houseImgSVG"
            />
          </Box>

          <Box sx={{ width: { xl: '50%', md: '50%', sm: '100%' }, mt: '-55px' }}>
            <AssetsHeading>
              <Typography color="#659BEB" variant="span">
                Unlock
              </Typography>{" "}
              Fixed Income Liquidity
            </AssetsHeading>
            <AssetsText>
            Blockhouse leverages Automated Market Making (AMM) technology to automatically execute trades and allow dealers to maximize trading fees by four times over the life of their existing bond inventory.
            </AssetsText>
          </Box>
        </AssetsTopContainer>
        <Box sx={{ mt: "39px" }} className="assetsHeadingLifecycle">
          <AssetsHeading style={{fontSize: '35px', letterSpacing: '-1px'}}>
            The Asset {""}
            <Typography color="#659BEB" variant="span" style={{ width: "100%" }}>
              Lifecycle
            </Typography>
          </AssetsHeading>

          <AssetsCardContainer>
            {cardContent.map(({ top, middle, bottom }) => (
              <AssetsCard key={middle}>
                <CardTopText>{top}</CardTopText>
                <CardMiddleText>{middle}</CardMiddleText>
                <CardBottomText style={{ marginLeft: "10px" }}>
                  {bottom}
                </CardBottomText>
              </AssetsCard>
            ))}
          </AssetsCardContainer>
        </Box>
      </Box>
    </AssetsLifeCycleContainer>
  );
}

export default AssetsLifeCycle;
