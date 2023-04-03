import {
  AccessContainer,
  HeroHeading,
  TopContainer,
} from "./landingPageComponents/CustomComponents";
import { Box } from "@mui/material";


// Components
import LandingPageNavbar from "./landingPageNavbar";
// import Footer from "./landingPageComponents/Footer";

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
              lineHeight: "40px !important",
              fontSize: "36px !important",
              letterSpacing: "-1px",
              mt: { xl: "280px", md: "180px", sm: "40ox" },
            }}
          >
            Thank you for signing up!
          </HeroHeading>
          {/* <Typography variant="h6" color={"white"} sx={{mt: '72px'}}> */}
        </AccessContainer>
      </TopContainer>
    </Box>
  );
}

export default AccessSection;
