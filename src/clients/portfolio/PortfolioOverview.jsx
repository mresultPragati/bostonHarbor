import React, { useEffect } from "react";
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
import {
  calculateTotals,
  USTimezone,
} from "../../resusedComponents/constant/ResusableConst";

export const PortfolioOverview = ({ portfolioPrice, portfolioList }) => {
  const selectedClient = JSON?.parse?.(localStorage?.getItem?.("clients"));

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
        {Object.keys(portfolioPrice).length > 0 ? (
          <Grid2 container spacing={2}>
            {/* Current Value */}
            <Grid2 item size={{ xs: 12, md: 3 }}>
              <ValueBox>
                <OverviewTitle variant="subtitle1">
                  Available Funds
                </OverviewTitle>
                <Typography variant="h5">
                  $
                  {(
                    Number(selectedClient?.investmentAmount) -
                    Number(calculateTotals("Amount_Invested", portfolioList))
                  )?.toFixed(2)}
                </Typography>
              </ValueBox>
            </Grid2>
            <VerticalDivider />

            <Grid2 item size={{ xs: 12, md: 3 }}>
              <ValueBox>
                <OverviewTitle variant="subtitle1">CURRENT VALUE</OverviewTitle>
                <Typography variant="h5">
                  ${portfolioPrice?.portfolio_current_value?.toFixed(2)}
                </Typography>
                <Typography variant="caption" sx={{ color: "#999292" }}>
                  Priced as of {USTimezone()} ET
                </Typography>
              </ValueBox>
            </Grid2>
            <VerticalDivider />
            {/* Daily Change */}
            <Grid2 item size={{ xs: 12, md: 3 }}>
              <ValueBox>
                <OverviewTitle variant="subtitle1">DAILY CHANGE</OverviewTitle>
                <ValueText variant="h4">
                  ${portfolioPrice?.porfolio_daily_change?.toFixed(2)}
                </ValueText>
                <ValueText variant="h6">
                  {portfolioPrice?.portfolio_daily_change_perc?.toFixed(2)}%
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
                  ${portfolioPrice?.portfolio_investment_gain_loss.toFixed(2)}
                </AmountText>
                <AmountText isPositive={true} isHighlighted variant="h6">
                  {portfolioPrice?.portfolio_investment_gain_loss_perc.toFixed(
                    2
                  )}{" "}
                  %
                </AmountText>
              </ValueBox>
            </Grid2>
          </Grid2>
        ) : (
          <div className="mt-5 row">
            <h4 style={{ fontWeight: 300 }}>No Data Found!!!</h4>
          </div>
        )}
      </Box>
    </>
  );
};

export default PortfolioOverview;
