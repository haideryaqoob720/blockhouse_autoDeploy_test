import { Box, Typography } from "@mui/material";
import Link from '@mui/material/Link';
import {
  AssetsHeading,
  CardBottomText,
  CardMiddleText,
  ProofCard,
  ProofCardsContainer,
} from "./CustomComponents";
import card1 from "../../Images/landingPage/Proof/card1.png";
import card2 from "../../Images/landingPage/Proof/card2.png";
import card3 from "../../Images/landingPage/Proof/card3.png";

function Proof() {
  const cardContent = [
    {
      linkTo: 'https://www.jpmorgan.com/onyx/documents/Institutional-DeFi-The-Next-Generation-of-Finance.pdf',
      src: card1,
      middle: "Institutional DeFi - The Next Generation of Finance",
      bottom:
        "Read how DeFi can be transformed with safeguards to rewire our financial system. This case study by Oliver Wyman Forum, DBS, Onyx by J.P. Morgan, and SBI Digital Asset Holdings explains how DeFi can be adopted for institutional usage",
    },
    {
      linkTo: 'https://www.cnbc.com/video/2023/02/10/goldmans-digital-assets-lead-explains-the-banks-blockchain-strategy-and-upcoming-projects.html',
      src: card2,
      middle: "Goldman Sachs Talks Blockchain Strategy",
      bottom:
        "Listen to Mathew McDermott, Goldman Sach’s global head of digital assets, discuss institutional strategy for blockchain technology. The video covers benefits including operational savings, settlement finality, and liquidity management",
    },
    {
      linkTo: 'https://cointelegraph.com/news/491b-asset-manager-kkr-s-health-care-fund-tokenized-on-avalanche',
      src: card3,
      middle: "KKR Tokenizes Healthcare Fund on AVAX",
      bottom:
        "See how KKR is venturing into public blockchains with the tokenization of their Health Care Strategic Growth Fund II (HCSG II) on Avalanche. The event marks a milestone for Wall Street assets on public blockchains",
    },
  ];
  return (
    <Box sx={{ width: "80%", m: "0 auto", p: "120px 0" }}>
      <AssetsHeading className="proofHeading">
        <Typography sx={{ display: "block" }} variant="span" color="#659BEB">
          The Proof
        </Typography>{" "}
        is in the Application
      </AssetsHeading>
      <ProofCardsContainer>
        {cardContent.map(({ linkTo, src, middle, bottom }) => (
          <ProofCard key={middle}>
            <Link href={linkTo} underline="none" target={"_blank"}>
              <img
                src={src}
                style={{ width: "100%", height: "220px" }}
                alt="proof-card-img"
              />
              <CardMiddleText sx={{ marginLeft: "24px" }}>
                {middle}
              </CardMiddleText>
              <CardBottomText sx={{ margin: "0px 24px" }}>
                {bottom}
              </CardBottomText>
            </Link>
          </ProofCard>
        ))}
      </ProofCardsContainer>
    </Box>
  );
}

export default Proof;
