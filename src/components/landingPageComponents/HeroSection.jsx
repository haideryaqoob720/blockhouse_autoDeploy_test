// MUI IMPORTS
import {
  HeroBtn,
  HeroBtnBorder,
  HeroContainer,
  HeroContent,
  HeroHeading,
  HeroHeadingSpan,
  HeroText,
  TopContainer,
} from "./CustomComponents";

import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import Link from "@mui/material/Link";

// COmponents
import LandingPageNavbar from "../landingPageNavbar";

function HeroSection() {

  return (
    <TopContainer>
      {/*---------- navbar -----------*/}
      <LandingPageNavbar />


      {/*---------- hero section ------------*/}

      <HeroContainer>
        <HeroContent>
          <HeroHeading variant="h1">
            Tap Into the
            <HeroHeadingSpan variant="span">Next Generation</HeroHeadingSpan>
            of Credit Trading
          </HeroHeading>
          <HeroText>
            Trade bonds electronically with unparalleled pre-trade transparency, automatic execution, instant settlement, and minimal transaction costs.
          </HeroText>
          <HeroBtnBorder>
            <Link href="/ComingSoon" underline="none">
              <HeroBtn style={{ height: '64px' }}
                startIcon={
                  <FileDownloadOutlinedIcon
                    sx={{ marginRight: { xl: '16px', sm: '16px', xs: '1px' }, width: "24px", height: "24px" }}
                  />
                }
              >
                See Active Deals
              </HeroBtn>
            </Link>
          </HeroBtnBorder>
          {/* <img src={} alt="" /> */}
        </HeroContent>
      </HeroContainer>
    </TopContainer>
  );
}

export default HeroSection;
