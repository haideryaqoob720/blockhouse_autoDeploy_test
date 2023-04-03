import {
  AccessContainer,
  FooterButtonBox,
  HeroBtn,
  HeroBtnBorder,
  HeroHeading,
  HeroHeadingSpan,
} from "./CustomComponents";
import Link from "@mui/material/Link";

import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

function AccessSection() {
  return (
    <AccessContainer>
      <HeroHeading variant="h1" className="wantAccessHeading">
        Want{" "}
        <HeroHeadingSpan style={{ display: "initial" }} variant="inherit">
          Access
        </HeroHeadingSpan>
        ?
      </HeroHeading>
      <FooterButtonBox className="accessBtns">
        <HeroBtnBorder sx={{ width: "146px", height: "48px" }} className="wantAccessIstBtn">
          <Link href="/ComingSoon" underline="none">
            <HeroBtn
              sx={{
                width: "146px",
                height: "48px",
                background: "linear-gradient(95.25deg, #17192a, #1b1f29)",
              }}
              startIcon={
                <FileDownloadOutlinedIcon
                  sx={{ width: "24px", height: "24px" }}
                />
              }
            >
              See Deals
            </HeroBtn>
          </Link>
        </HeroBtnBorder>
        <Link
          href="https://aadityak.substack.com/"
          underline="none"
          target={"_blank"}
        >
          <HeroBtn
            sx={{
              width: "146px",
              height: "48px",
              marginTop: { xl: "-24px", md: "-24px", sm: "0px" },
            }} className="accessBtnsSnd"
            style={{
              background: "rgba(255, 255, 255, 0.06)",
            }}
            startIcon={
              <FileDownloadOutlinedIcon
                sx={{ width: "24px", height: "24px" }}
              />
            }
          >
            More Info
          </HeroBtn>
        </Link>
      </FooterButtonBox>
    </AccessContainer>
  );
}

export default AccessSection;
