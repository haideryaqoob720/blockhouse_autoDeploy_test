import { Box, Button, Typography } from "@mui/material";

// Images
import placeOrderEth from "../Images/placeOrder/placeOrderEth.png";
import placeOrderTether from "../Images/placeOrder/placeOrderTether.png";

const DealsBox = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: "12px",
        border: `1px solid rgba(255, 255, 255, 0.12)`,
        background:
          "linear-gradient(281.38deg, rgba(23, 24, 29, 0.12) -16.31%, rgba(114, 120, 152, 0.12) 101.13%)",
        padding: "16px",
      }}
    >
      <Typography component="h1" variant="h6" color="white" noWrap>
        <b>Place Order</b>
      </Typography>
      <br />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pb: "6px",
          px: "16px",
        }}
      >
        <Typography color="white" fontWeight="600" fontSize="14px">
          You pay
        </Typography>
        <Typography fontSize="14px" color="rgba(255, 255, 255, 0.6)">
          Balance:{" "}
          <Typography display={"inline"} fontSize="14px" color="white">
            22.60 ETH
            <Typography
              fontSize="14px"
              display={"inline"}
              color="#659BEB"
              ml="10px"
            >
              MAX
            </Typography>
          </Typography>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderRadius: "12px",
          background: "rgba(255, 255, 255, 0.04)",
          padding: "8px 16px",
          mt: "5px",
        }}
      >
        <Box>
          <Typography fontSize="10px" color="rgba(255, 255, 255, 0.6)">
            Amount:
          </Typography>
          {/* <Typography fontSize="14px" color="white" fontWeight={"bold"}>
            21.20349
          </Typography> */}
          <input type="number" placeholder="21.20349" style={{background: 'transparent', border: 'none', color: 'white', fontSize: '14px', outline: 'none', fontWeight: 'bold'}}  />
        </Box>
        <Box>
          <Typography fontSize="14px" color="white" mt="12px">
            <img
              src={placeOrderEth}
              alt="placeOrderEth"
              style={{ position: "relative", top: "5px", left: "-3px" }}
            />
            SOL
          </Typography>
        </Box>
      </Box>
      <Box sx={{ pb: "6px", px: "16px", mt: "24px" }}>
        <Typography color="white" fontWeight="600" fontSize="14px">
          Max Bid Price
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderRadius: "12px",
          background: "rgba(255, 255, 255, 0.04)",
          padding: "8px 16px",
          mt: "5px",
        }}
      >
        <Box>
          <Typography fontSize="10px" color="rgba(255, 255, 255, 0.6)">
            Amount:
          </Typography>
          {/* <Typography fontSize="14px" color="white" fontWeight={"bold"}>
            46.766
          </Typography> */}
          <input type="number" placeholder="46.766" style={{background: 'transparent', border: 'none', color: 'white', fontSize: '14px', outline: 'none', fontWeight: 'bold'}}  />
        </Box>
        <Box>
          <Typography fontSize="14px" color="white" mt="12px">
            <img
              src={placeOrderTether}
              alt="placeOrderEth"
              style={{ position: "relative", top: "5px", left: "-3px" }}
            />
            ETH
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: "16px",
          mt: "24px",
          mb: "24px",
        }}
      >
        <Typography color="rgba(255, 255, 255, 0.6)" fontSize="14px">
          Fees
        </Typography>
        <Typography fontSize="14px" color="white">
          0.0004552
        </Typography>
      </Box>

      <center>
        <Button
          sx={{
            "&.MuiButton-root": {
              textTransform: "none",
              color: "white",
              lineHeight: "28px",
              fontSize: "16px",
              borderRadius: `6px`,
              width: "100%",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              borderWidth: "1px",
              borderStyle: "solid",
              borderTopColor: "transparent",
              backgroundImage:
                "linear-gradient(blue, blue), linear-gradient(101deg, #131bd3, #6195eb)",
              backgroundOrigin: "border-box",
              backgroundClip: "content-box, border-box",
              WebkitBoxShadow: "2px 1000px 1px #1E2132 inset",
            },
          }}
        >
          Bid
        </Button>
      </center>
    </Box>
  );
};
export default DealsBox;
