import { useNavigate } from "react-router-dom";

// Images
// MainContainer
// import liquidityToken from "../../Images/liquidity/liquidityToken.png";
// import liquidityTokenBitcoin from "../../Images/liquidity/liquidityTokenBitcoin.png";
// import singapore from "../../Images/liquidity/singapore.png";
import ethIcon from "../../Images/liquidity/ethereumToken.png";
import { Box, Button, Grid, LinearProgress, Typography } from "@mui/material";
import singaporIcon from "../../Images/structured/singapore.png";

function StructuredBoxChild() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "12px",
        border: `1px solid rgba(255, 255, 255, 0.12)`,
        background: "#23252F",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: "12px 16px",
          borderBottom: `1px solid rgba(255, 255, 255, 0.12)`,
          height: "56px",
        }}
      >
        <Box sx={{ marginBlock: "auto" }}>
          <Typography
            color="white"
            sx={{
              fontSize: "20px",
              fontWeight: "700",
              fontFamily: "open sans",
            }}
          >
            SGB-ETF
          </Typography>
        </Box>
        <Box>
          <Button
            sx={{
              "&.MuiButton-root": {
                textTransform: "none",
                borderColor: "gray",
                color: "white",
                background: "rgba(255, 255, 255, 0.04)",
                p: "4px 8px",
                fontWeight: 600,
                fontSize: "13px",
                borderRadius: `8px 0 0 8px`,
                marginRight: "4px",
              },
            }}
          >
            ETF Vault
          </Button>
          <Button
            sx={{
              "&.MuiButton-root": {
                textTransform: "none",
                borderColor: "gray",
                color: "white",
                background: "#659BEB",
                p: "4px 8px",
                fontWeight: 600,
                fontSize: "13px",
                borderRadius: `0 8px 8px 0`,
                minWidth: "32px",
              },
            }}
          >
            AA
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: "12px 16px",
          borderBottom: `1px solid rgba(255, 255, 255, 0.12)`,
          height: "72px",
        }}
      >
        <Box>
          <Typography
            color="rgba(255, 255, 255, 0.6);"
            fontSize="14px"
            lineHeight="22px"
          >
            Total Projected Yield (APY)
          </Typography>
          <Typography color="white" fontWeight="bold">
            20.79%
          </Typography>
        </Box>
        <Box>
          <img src={ethIcon} alt="jsd" width="44px" height="44px" />
          <img
            src={singaporIcon}
            alt="hjk"
            style={{ marginLeft: "-15px" }}
            width="46px"
            height="46px"
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          gap: "15px",
          padding: "12px 16px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography color="rgba(255, 255, 255, 0.6);" fontSize="14px">
            Current Deposits
          </Typography>
          <Typography color="white" fontWeight="600" fontSize="14px">
            5,941.2 ETH
          </Typography>
        </Box>
        <Box
          sx={{
            "& .MuiLinearProgress-root": {
              borderRadius: "2px !important",
              background: "rgba(9, 13, 20, 0.48)",
              height: "6px",
            },
            "& .MuiLinearProgress-bar1Determinate": {
              borderRadius: "2px !important",
              background: "white",
            },
          }}
        >
          <LinearProgress variant="determinate" value={50} />
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "space-between", pb: "6px" }}
        >
          <Typography fontSize="14px" color="rgba(255, 255, 255, 0.6)">
            Max Capacity
          </Typography>
          <Typography color="white" fontWeight="600" fontSize="14px">
            20k ETH
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

const StructuredBox = () => {
  const navigate = useNavigate();
  const arr = [1, 2, 3, 4, 5];
  return (
    <Box sx={{ my: "32px", width: "100%" }}>
      <Grid container spacing="24px">
        {arr.map((i, ind) => (
          <Grid key={ind} item xs={4} onClick={() => navigate("/Structured")}>
            <StructuredBoxChild />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StructuredBox;
