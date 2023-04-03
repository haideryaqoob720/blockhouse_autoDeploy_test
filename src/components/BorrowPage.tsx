import {
  HeroBtn,
  HeroBtnBorder,
  AccessContainer,
  FooterButtonBox,
  HeroHeading,
  TopContainer,
} from "./landingPageComponents/CustomComponents";
import { Box, Typography } from "@mui/material";

// icons
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

// Components
import LandingPageNavbar from "./landingPageNavbar";

// Images
import borrowPageBackground from "../Images/borrowPage/borrowPageBackground.jpg";

function AccessSection() {
  return (
    <Box
      sx={{
        backgroundColor: "none",
        background: `url(${borrowPageBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* // <Box sx={{ backgroundColor: 'none'}}> */}
      <TopContainer sx={{ background: "none !important" }}>
        {/*---------- navbar -----------*/}
        <LandingPageNavbar />

        <AccessContainer sx={{ background: "none", width: "80%" }}>
          {/* <HeroHeading variant="h1" sx={{ mt: "250px", marginBottom: "72px" }}> */}
          <HeroHeading
            variant="h1"
            sx={{
              mt: { xl: "250px", md: "100px", sm: "10ox" },
              marginBottom: "72px",
            }}
          >
            Provide Liquidity
          </HeroHeading>
          {/* <Typography variant="h6" color={"white"} sx={{mt: '72px'}}> */}
          <Typography
            variant="h6"
            color={"white"}
            fontFamily="Open Sans"
            textAlign={"center"}
          >
            Earn fees providing liquidity to fixed income products on distributed capital networks
          </Typography>
          <FooterButtonBox sx={{ width: "100% !important" }}>
            <HeroBtnBorder
              sx={{ width: "160px", height: "48px", marginTop: "-24px" }}
            >
              <HeroBtn
                sx={{
                  width: "160px",
                  height: "48px",
                  background: "linear-gradient(95.25deg, #17192a, #1b1f29)",
                }}
                startIcon={
                  <FileDownloadOutlinedIcon
                    sx={{ width: "24px", height: "24px" }}
                  />
                }
              >
                Apply Now
              </HeroBtn>
            </HeroBtnBorder>
          </FooterButtonBox>
        </AccessContainer>
      </TopContainer>
    </Box>
  );
}

export default AccessSection;
