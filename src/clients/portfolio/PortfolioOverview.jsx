import React from "react";
import { Box, Grid2, Typography, Divider } from "@mui/material";
// import { styled } from "@mui/system";
import PortfolioDetails from "./PortfolioDetails";
import {
  AmountText,
  OverviewTitle,
  ValueBox,
  ValueText,
  VerticalDivider,
} from "./PortfolioStyled";

export const PortfolioOverview = ({ portfolioPrice }) => {
  return (
    <>
      {/* <div style={{ display: "flex", alignItems: "center" }}> */}
      {/* <div
        style={{
          width: "2px", // Line width
          height: "50px", // Line height
          backgroundColor: "black", // Line color
        }}
      /> */}
      {/* </div> */}
      <Box
        sx={{
          p: 1,
          backgroundColor: "#fff",
          // color: "#000",
          borderRadius: 1,
          marginBottom: 8,
          border: "1px solid",
        }}
      >
        <Grid2 container spacing={2}>
          {/* Current Value */}
          <Grid2 item size={{ xs: 12, md: 4 }}>
            <ValueBox>
              <OverviewTitle variant="subtitle1">CURRENT VALUE</OverviewTitle>
              <Typography variant="h5">
                ${portfolioPrice?.portfolio_current_value}
              </Typography>
              <Typography variant="caption" sx={{ color: "#999292" }}>
                Priced as of 09/12/2018 10:39 AM ET
              </Typography>
            </ValueBox>
          </Grid2>
          <VerticalDivider />
          {/* Daily Change */}
          <Grid2 item size={{ xs: 12, md: 4 }}>
            <ValueBox>
              <OverviewTitle variant="subtitle1">DAILY CHANGE</OverviewTitle>
              <ValueText variant="h4">
                $({portfolioPrice?.porfolio_daily_change})
              </ValueText>
              <ValueText variant="h6">
                ({portfolioPrice?.portfolio_daily_change_perc})%
              </ValueText>
            </ValueBox>
          </Grid2>
          <VerticalDivider />
          {/* Investment Gain/Loss */}
          <Grid2 item size={{ xs: 12, md: 3 }}>
            <ValueBox>
              <OverviewTitle variant="subtitle1">
                INVESTMENT GAIN/LOSS
              </OverviewTitle>
              <AmountText isPositive={true} isHighlighted variant="h4">
                ${portfolioPrice?.portfolio_investment_gain_loss}
              </AmountText>
              <AmountText isPositive={true} isHighlighted variant="h6">
                {portfolioPrice?.portfolio_investment_gain_loss_perc} %
              </AmountText>
            </ValueBox>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};

export default PortfolioOverview;
