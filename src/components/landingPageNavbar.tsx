import {
  Navbar,
  NavItem,
  NavItemContainer,
} from "./landingPageComponents/CustomComponents";
import { Box, useMediaQuery, useTheme, Toolbar } from "@mui/material";
import Link from "@mui/material/Link";

// icons
// import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

// Components
import NavDrawerForMob from "./landingPageComponents/navDrawerForMob";

// Images
import logo from "../Images/landingPage/landing-page/BLOCKHOUSE.png";
// import logo from "../Images/landingPage/landing-page/BLOCKHOUSE.svg";
import mobileLogo from "../Images/landingPage/landing-page/mobileLogo.png";

function AccessSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {/*---------- navbar -----------*/}
      {isMobile ? (
        <>
          <Toolbar>
            <Navbar
              height={"80px !important"}
              width={"90% !important"}
              borderBottom="none !important"
            >
              <NavItemContainer flexGrow={"1"}>
                <Link href="/BorrowPage" underline="none">
                  <NavItem sx={{ whiteSpace: "nowrap" }} fontSize="16px">
                    Get Started
                  </NavItem>
                </Link>

                <Link href="/" underline="none">
                  <Box
                    sx={{
                      ml: "-20px",
                    }}
                  >
                    <center>
                      <img
                        style={{ width: "40px", height: "40px" }}
                        src={mobileLogo}
                        alt="mobileLogo"
                      />
                    </center>
                  </Box>
                </Link>
                <Box>
                  <NavDrawerForMob />
                </Box>
              </NavItemContainer>
            </Navbar>
          </Toolbar>
        </>
      ) : (
        <Navbar>
          <NavItemContainer>
            <Link href="/BorrowPage" underline="none">
              <NavItem>For Dealers</NavItem>
            </Link>
            <Link
              href="https://aadityak.substack.com/"
              underline="none"
              target={"_blank"}
            >
              <NavItem>Resources</NavItem>
            </Link>
          </NavItemContainer>
          <Link href="/" underline="none">
            <Box sx={{ width: "240px", height: "40px" }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={logo}
                alt="logo"
              />
            </Box>
          </Link>
          <NavItemContainer>
            {/* <Box sx={{ height: "24px", width: "24px" }}>
              <DarkModeOutlinedIcon
                sx={{ color: "white", height: "100%", width: "100%" }}
              />
            </Box> */}
            <Link href="/ComingSoon" underline="none">
              <NavItem
                style={{
                  color: "#659BEB",
                  border: "1px solid rgba(101, 155, 235, 0.6)",
                  padding: "10px 12px",
                  borderRadius: "7px",
                  marginLeft: "-12px",
                }}
              >
                Launch Exchange
              </NavItem>
            </Link>
          </NavItemContainer>
        </Navbar>
      )}
    </>
  );
}

export default AccessSection;
