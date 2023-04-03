import { FooterContainer, IconBox } from "./CustomComponents";
import logo from "../../Images/landingPage/landing-page/BLOCKHOUSE.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";

function Footer() {
  return (
    <FooterContainer className="footerCOntainer">
      <img style={{ width: "206px", height: "40px" }} src={logo} alt="logo" />
      <IconBox>
        <LinkedInIcon />
        <TwitterIcon />
        <LanguageIcon />
      </IconBox>
      {/* <CopyRightText>
        <span style={{ color: "rgba(255, 255, 255, 0.6)" }}>
          made by
        </span>{" "}
        roobinium.io
      </CopyRightText> */}
    </FooterContainer>
  );
}

export default Footer;
