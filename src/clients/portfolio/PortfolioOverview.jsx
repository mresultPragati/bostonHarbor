import React from "react";
import { Box, Grid2, Typography, Divider } from "@mui/material";
import { styled } from "@mui/system";
import PortfolioDetails from "./PortfolioDetails";

// Custom styles for the main boxes
const ValueBox = styled(Box)(({ theme }) => ({
  //   padding: theme.spacing(1),
  //   backgroundColor: theme.palette.background.paper,
  //   borderRadius: theme.shape.borderRadius,
  textAlign: "center",
  border: `1px solid ${theme.palette.divider}`,
}));

const AmountText = styled(Typography)(({ theme }) => ({
  //   color: theme.palette.success.main,
  //   fontWeight: "bold",
  fontSize: "large",
}));

const ValueText = styled(Typography)(({ theme }) => ({
  //   color: theme.palette.error.main,
  //   fontWeight: "bold",
  fontSize: "large",
}));

export const PortfolioOverview = () => {
  return (
    <Box
      sx={{
        p: 1,
        backgroundColor: "#002D57",
        color: "#fff",
        borderRadius: 1,
        marginBottom: 8,
      }}
    >
      <Grid2 container spacing={2}>
        {/* Current Value */}
        <Grid2 item size={{ xs: 4 }}>
          <ValueBox>
            <Typography variant="subtitle1">CURRENT VALUE</Typography>
            <Typography variant="h5">$53,074.01</Typography>
            <Typography variant="caption" sx={{ color: "#ddd" }}>
              Priced as of 09/12/2018 10:39 AM ET
            </Typography>
          </ValueBox>
        </Grid2>

        {/* Daily Change */}
        <Grid2 item size={{ xs: 4 }}>
          <ValueBox>
            <Typography variant="subtitle1">DAILY CHANGE</Typography>
            <ValueText variant="h4">$(386.47)</ValueText>
            <ValueText variant="h6">(0.73 %)</ValueText>
          </ValueBox>
        </Grid2>

        {/* Investment Gain/Loss */}
        <Grid2 item size={{ xs: 4 }}>
          <ValueBox>
            <Typography variant="subtitle1">INVESTMENT GAIN/LOSS</Typography>
            <AmountText variant="h4">$9,695.23</AmountText>
            <AmountText variant="h6">55.82 %</AmountText>
          </ValueBox>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default PortfolioOverview;
