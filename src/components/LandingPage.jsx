import { Box } from "@mui/material";
import HeroSection from "./landingPageComponents/HeroSection";
import AssetsLifeCycle from "./landingPageComponents/AssetsLifeCycle";
import BlackHouseProducts from "./landingPageComponents/BlackHouseProducts";
import Proof from "./landingPageComponents/Proof";
import AccessSection from "./landingPageComponents/AccessSection";
import Footer from "./landingPageComponents/Footer";

function LandingPage() {
  return (
    <Box sx={{ background: "#17181D" }}>
      <HeroSection />
      <AssetsLifeCycle />
      <BlackHouseProducts />
      <Proof />
      <AccessSection />
      <Footer />
    </Box>
  );
}

export default LandingPage;