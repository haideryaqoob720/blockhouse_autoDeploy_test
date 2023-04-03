import { Box, styled, Typography, Button } from "@mui/material";
import heroImg from "../../Images/landingPage/landing-page/landing-bg2.png";
// import heroImgSVG from "../../Images/landingPage/landing-page/landingHeroSecBG.svg";
import mobile_HeroBackgroundImg from "../../Images/landingPage/landing-page/mobile_HeroBackgroundImg.png";
// import mobile_HeroBackgroundImg from "../../Images/landingPage/landing-page/mobile_HeroBackgroundImg.svg";
import assetsBg from "../../Images/landingPage/asset-lifeCycle/asset-bg.png";
import footerBg from "../../Images/landingPage/footer/footerBg.png";

// hero section

export const Navbar = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "80%",
  margin: "0 auto",
  height: "96px",
  borderBottom: `1px solid hsla(0,0%,100%,.12)`,
});

export const NavItemContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "48px",
});

export const NavItem = styled(Typography)({
  fontSize: "16px",
  color: "white",
  "@media (max-width: 600px)": {
    color: "#659BEB",
  },
});

export const HeroContainer = styled(Box)({
  width: "80%",
  "@media (max-width: 600px)": {
    width: "70%",
  },
  margin: "0 auto",
});

export const HeroContent = styled(Box)({
  gap: "72px",
  marginTop: "180px",
  "@media (max-height: 900px)": {
    marginTop: "100px",
  },
  "@media (max-height: 800px)": {
    marginTop: "50px",
  },
  "@media (max-width: 600px)": {
    marginTop: "50px",
    width: "100%",
    gap: "39px",
  },
  width: "50%",
  display: "flex",
  flexDirection: "column",
});

export const TopContainer = styled(Box)({
  background: `url(${heroImg})`,
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100vh",
  height: "100vh",
  "@media (max-height: 724px)": {
    paddingBottom: "100px",
    height: "auto",
  },
  "@media (max-width: 600px)": {
    paddingBottom: "100px",
    background: `url(${mobile_HeroBackgroundImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize: "100% 125vh",
    height: "820px",
  },
  width: "100%",
});

export const HeroHeading = styled(Typography)({
  fontSize: "72px",
  "@media (max-width: 1302px)": {
    fontSize: "60px",
  },
  "@media (max-width: 600px)": {
    fontSize: "35.8px",
    lineHeight: "20px",
    textAlign: "center",
    letterSpacing: "-1px",
  },
  color: "white",
  lineHeight: "72px",
  fontFamily: "Open Sans",
  letterSpacing: "-4px",
});

export const HeroHeadingSpan = styled(Typography)({
  color: "#659beb",
  lineHeight: "72px",
  display: "block",
});

export const HeroText = styled(Typography)({
  fontSize: "18px",
  "@media (max-width: 1302px)": {
    fontSize: "15px",
  },
  "@media (max-width: 600px)": {
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "center",
    width: "100%",
  },
  lineHeight: "32px",
  color: "white",
  width: "66%",
  fontFamily: "Open Sans",
  fontWeight: "300",
});

export const HeroBtn = styled(Button)({
  color: "white",
  fontSize: "18px",
  padding: "20px",
  width: "100%",
  borderRadius: "6px",
  background: "#17181D",
  whiteSpace: "nowrap",
  textTransform: "none",
  ":hover": {
    background: "#17181D",
  },
  "@media (max-width: 600px)": {
    width: "192.2px",
    height: "48px !important",
    fontSize: "16px",
  },
});

export const HeroBtnBorder = styled(Box)({
  background: "linear-gradient(to right, #131bd3, #6195eb)",
  width: "236px",
  fontSize: "18px",
  padding: "1px",
  borderRadius: "6px",
  marginLeft: '5px',
  "@media (max-width: 600px)": {
    width: "193px",
    height: "48px",
    margin: "0 auto",
  },
  marginTop: "-24px",
  ":hover": {
    background: "linear-gradient(to left, #131bd3, #6195eb)",
  },
});

// Assets Lifecycle Page

export const AssetsLifeCycleContainer = styled(Box)({
  background: `url(${assetsBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  margin: "0 auto",
});

export const AssetsTopContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "-10px",
  "@media (max-width: 600px)": {
    display: "block",
    marginBottom: "480px",
    paddingTop: "120px",
    textAlign: "center",
  },
});

export const AssetsHeading = styled(Typography)({
  color: "white",
  fontWeight: "300",
  fontSize: "48px",
  lineHeight: "48px",
  fontFamily: "open sans",
  width: "60%",
  letterSpacing: "-2px",
  "@media (max-width: 1338px)": {
  width: "72%",
  marginTop: "50px",
  fontSize: "46px",
},
  "@media (max-width: 600px)": {
    width: "100%",
    fontSize: "40px",
    lineHeight: "45px",
    textAlign: "center",
  },
});

export const AssetsText = styled(Box)({
  fontSize: "18px",
  lineHeight: "32px",
  fontWeight: "300",
  color: "white",
  width: "63%",
  // width: "422px",
  marginTop: "48px",
  "@media (max-width: 600px)": {
    width: "100%",
  },
});

export const AssetsCardContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "24px",
  padding: "64px 0 120px 0",
  width: "100%",
  "@media (max-width: 600px)": {
    display: "block",
    marginTop: "-25px",
  },
});

export const AssetsCard = styled(Box)({
  background:
    "linear-gradient(281.38deg, rgba(23, 24, 29, 0.12) -16.31%, rgba(114, 120, 152, 0.12) 101.13%)",
  border: `1px solid rgba(255, 255, 255, 0.12)`,
  backdropFilter: "blur(32px)",
  borderRadius: "12px",
  width: "23.40%",
  minHeight: "307px",
  "@media (max-width: 1393px)": {
    minHeight: "330px",
  },
  "@media (max-width: 600px)": {
    width: "100%",
    marginBottom: "12px",
    minHeight: "226px",
  },
  boxSizing: "border-box",
  padding: "32px 22px",
  zIndex: "99",
});

export const CardTopText = styled(Typography)({
  fontSize: "58px",
  lineHeight: "58px",
  fontWeight: "bold",
  color: "#F6AF40",
  fontFamily: "Gilroy",
  paddingLeft: "10px",
  // transform: "rotate(-90deg)",
  width: "fit-content",
  "@media (max-width: 600px)": {
    transform: "rotate(0deg)",
    marginLeft: "10px",
    fontSize: "66px",
  },
});

export const CardMiddleText = styled(Typography)({
  fontSize: "24px",
  lineHeight: "32px",
  fontWeight: "300",
  color: "white",
  margin: "30px 0px 16px 10px",
  fontFamily: "open sans",
  "@media (max-width: 1445px)": {
    fontSize: "22px",
  },
  "@media (max-width: 1355px)": {
    fontSize: "20px",
  },
});

export const CardBottomText = styled(Typography)({
  fontSize: "16px",
  lineHeight: "24px",
  fontWeight: "300",
  color: "white",
  fontFamily: "open sans",
  "@media (max-width: 1463px)": {
    fontSize: "15px",
  },
});

// Products Page

export const ProductsContainer = styled(Box)({
  paddingBlock: "120px",
  width: "80%",
  margin: "0 auto",
  "@media (max-width: 600px)": {
    textAlign: "center",
  },
});

export const ProductTopText = styled(Typography)({
  fontSize: "14px",
  fontWeight: "600",
  fontFamily: "open sans",
  lineHeight: "20px",
  color: "#659BEB",
  marginBottom: "16px",
});

export const ProductsTopRightSec = styled(Box)({
  width: "50%",
  display: "flex",
  gap: "24px",
  "@media (max-width: 600px)": {
    width: "100%",
    display: "block",
    marginTop: "50px",
  },
});

export const ProductCauroselMob = styled(Box)({
  padding: "0 0px",
  margin: "0 auto",
  color: "#252629",
  width: "70%",
  "@media (max-width: 800px)": {
    width: "85%",
  },
  "@media (max-width: 600px)": {
    width: "70%",
  },
  "@media (max-width: 530px)": {
    width: "90%",
  },
  "@media (max-width: 470px)": {
    width: "110%",
    marginLeft: "-4%",
  },
  "@media (max-width: 380px)": {
    width: "115%",
    marginLeft: "-5%",
  },
});

export const ProductTopCard = styled(Box)({
  border: "1px solid rgba(255, 255, 255, 0.12)",
  borderRadius: "12px",
  width: "312px",
  padding: "32px",
  "@media (max-width: 600px)": {
    width: "84%",
    marginBottom: "12px",
  },
  "@media (max-width: 430px)": {
    width: "78%",
  },
});

export const ProductTopMiddleText = styled(Typography)({
  fontSize: "30px",
  lineHeight: "36px",
  fontWeight: "300",
  color: "white",
  margin: "32px 0 16px 0",
  fontFamily: "open sans",
});

export const ProductBottomCardHeading = styled(Typography)({
  fontSize: "20px",
  width: "125%",
  lineHeight: "24px",
  fontWeight: "300",
  color: "white",
  marginBottom: "16px",
  fontFamily: "open sans",
});

export const ProductBottomCard = styled(Box)({
  background:
    "linear-gradient(281.38deg, rgba(23, 24, 29, 0.12) -16.31%, rgba(114, 120, 152, 0.12) 101.13%)",
  border: "1px solid rgba(255, 255, 255, 0.12)",
  borderRadius: "12px",
  padding: "0px 32px",
  display: "flex",
  alignItems: "center",
  gap: "20px",
  width: "85.2%",
  // boxSizing: "border-box",
  minHeight: "170px",
  maxHeight: "auto",
  "@media (max-width: 1400px)": {
    paddingTop: '15px',
    paddingBottom: '15px',
  },
  "@media (max-width: 600px)": {
    width: "78%",
    display: "block",
    minHeight: "300px",
    paddingBottom: '24px',
  },
});

// Proof page

export const ProofCardsContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "32px",
  marginTop: "64px",
  "@media (max-width: 600px)": {
    display: "block",
    marginBottom: "-60px",
  },
});

export const ProofCard = styled(Box)({
  background:
    "linear-gradient(281.38deg, rgba(23, 24, 29, 0.12) -16.31%, rgba(114, 120, 152, 0.12) 101.13%)",
  border: "1px solid rgba(255, 255, 255, 0.12)",
  borderRadius: "12px",
  padding: "8px",
  width: "33%",
  minHeight: "540px",
  "@media (max-width: 1366px)": {
    minHeight: "570px",
  },
  "@media (max-width: 600px)": {
    width: "95%",
    marginBottom: "12px",
    minHeight: "610px",
  },
  "@media (max-width: 400px)": {
    width: "93%",
  },
  maxHeight: "auto",
});

// access

export const AccessContainer = styled(Box)({
  background: `url(${footerBg})`,
  backgroundPosition: "center",
  margin: "0 auto",
  height: "528px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  "@media (max-width: 600px)": {
    height: "425px",
  },
});

export const FooterButtonBox = styled(Box)({
  display: "flex",
  width: "100%",
  gap: "24px",
  justifyContent: "center",
  marginTop: "85px",
  "@media (max-width: 600px)": {
    display: "block",
    width: "50%",
    marginTop: "30px",
  },
});

// footer

export const FooterContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "80%",
  margin: "0 auto",
  paddingBlock: "28px",
  "@media (max-width: 600px)": {
    display: "block",
  },
});

export const IconBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  gap: "24px",
});

export const CopyRightText = styled(Typography)({
  fontSize: "16px",
  lineHeight: "24px",
  color: "white",
  "@media (max-width: 600px)": {
    textAlign: " center",
  },
});

export const HomeHR = styled(Typography)({
  borderTop: "none",
  borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
  position: "relative",
  top: "2px",
});
