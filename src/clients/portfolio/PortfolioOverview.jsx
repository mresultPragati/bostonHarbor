import React, { useEffect } from "react";
import { Box, Grid2, Typography, Divider } from "@mui/material";

import {
  AmountText,
  CurrencyCell,
  OverviewTitle,
  StickBox,
  ValueBox,
  ValueText,
  VerticalDivider,
} from "./PortfolioStyled";
import {
  calculateTotals,
  USTimezone,
} from "../../resusedComponents/constant/ResusableConst";

export const PortfolioOverview = ({
  portfolioPrice,
  portfolioList,
  amount_invested,
}) => {
  const selectedClient = JSON?.parse?.(localStorage?.getItem?.("clients"));

  return (
    <>
      {/* {Object.keys(portfolioPrice).length > 0 && ( */}
      <StickBox>
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
          <Grid2
            container
            spacing={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {/* Current Value */}
            <Grid2
              item
              // sx={{ width: "16rem !important" }}
              size={{ xs: 12, sm: 2, md: 2, lg: 2, xl: 2 }}
            >
              <ValueBox>
                <OverviewTitle variant="subtitle1">
                  AVAILABLE FUNDS
                </OverviewTitle>
                <Typography variant="h6">
                  $
                  {(
                    Number(selectedClient?.investmentAmount) -
                    Number(calculateTotals("Amount_Invested", portfolioList))
                  )?.toFixed(2)}
                </Typography>
              </ValueBox>
            </Grid2>
            <VerticalDivider />
            <Grid2
              item
              // sx={{ width: "18rem !important" }}
              size={{ xs: 12, sm: 2, md: 2, lg: 2, xl: 2 }}
            >
              <ValueBox>
                <OverviewTitle variant="subtitle1">
                  INVESTED AMOUNT
                </OverviewTitle>
                <Typography variant="h6">${amount_invested}</Typography>
              </ValueBox>
            </Grid2>
            <VerticalDivider isDisplay={false} />
            <Grid2
              item
              // sx={{ width: "18rem !important" }}
              size={{ xs: 12, sm: 2, md: 2, lg: 2, xl: 2 }}
            >
              <ValueBox>
                <OverviewTitle variant="subtitle1">CURRENT VALUE</OverviewTitle>
                <Typography variant="h6">
                  ${portfolioPrice?.portfolio_current_value?.toFixed(2)}
                </Typography>
                <Typography variant="caption" sx={{ color: "#999292" }}>
                  Priced as of {USTimezone()} ET
                </Typography>
              </ValueBox>
            </Grid2>
            <VerticalDivider isDisplay={false} />

            {/* Daily Change */}
            <Grid2
              item
              // sx={{ width: "16rem !important" }}
              size={{ xs: 12, sm: 2, md: 2, lg: 2, xl: 2 }}
            >
              <ValueBox>
                <OverviewTitle variant="subtitle1">DAILY CHANGE</OverviewTitle>
                <ValueText
                  isNegative={
                    portfolioPrice?.porfolio_daily_change === 0 ||
                    portfolioPrice?.porfolio_daily_change.toFixed(2) === 0.0
                      ? "zero"
                      : portfolioPrice?.porfolio_daily_change
                          ?.toString()
                          ?.startsWith("-")
                  }
                  variant="h4"
                >
                  {portfolioPrice?.porfolio_daily_change
                    ?.toString()
                    ?.startsWith("-")
                    ? `-$${portfolioPrice?.porfolio_daily_change
                        ?.toFixed(2)
                        ?.toString()
                        ?.replace("-", "")}`
                    : `$${portfolioPrice?.porfolio_daily_change?.toFixed(2)}`}
                </ValueText>
                <ValueText
                  isNegative={
                    portfolioPrice?.portfolio_daily_change_perc === 0 ||
                    portfolioPrice?.portfolio_daily_change_perc.toFixed(2) ===
                      0.0
                      ? "zero"
                      : portfolioPrice?.portfolio_daily_change_perc
                          ?.toString()
                          ?.startsWith("-")
                  }
                  variant="h6"
                >
                  {portfolioPrice?.portfolio_daily_change_perc?.toFixed(2)}%
                </ValueText>
              </ValueBox>
            </Grid2>
            <VerticalDivider />
            {/* Investment Gain/Loss */}
            <Grid2
              item
              // sx={{ width: "16rem !important" }}
              size={{ xs: 12, sm: 2, md: 2, lg: 2, xl: 2 }}
            >
              <ValueBox>
                <OverviewTitle variant="subtitle1">
                  INVESTMENT GAIN/LOSS
                </OverviewTitle>
                <AmountText
                  isNegative={
                    portfolioPrice?.portfolio_investment_gain_loss === 0 ||
                    portfolioPrice?.portfolio_investment_gain_loss.toFixed(
                      2
                    ) === 0.0
                      ? "zero"
                      : portfolioPrice?.portfolio_investment_gain_loss
                          ?.toString()
                          ?.startsWith("-")
                  }
                  isHighlighted
                  variant="h4"
                >
                  {portfolioPrice?.portfolio_investment_gain_loss
                    ?.toString()
                    ?.startsWith("-")
                    ? `-$${portfolioPrice?.portfolio_investment_gain_loss
                        ?.toFixed(2)
                        ?.toString()
                        ?.replace("-", "")}`
                    : `$${portfolioPrice?.portfolio_investment_gain_loss?.toFixed(
                        2
                      )}`}
                </AmountText>
                <AmountText
                  isNegative={
                    portfolioPrice?.portfolio_investment_gain_loss_perc === 0 ||
                    portfolioPrice?.portfolio_investment_gain_loss_perc.toFixed(
                      2
                    ) === 0.0
                      ? "zero"
                      : portfolioPrice?.portfolio_investment_gain_loss_perc
                          ?.toString()
                          ?.startsWith("-")
                  }
                  isHighlighted
                  variant="h6"
                >
                  {portfolioPrice?.portfolio_investment_gain_loss_perc.toFixed(
                    2
                  )}
                  %
                </AmountText>
              </ValueBox>
            </Grid2>
          </Grid2>
        </Box>
      </StickBox>
      {/* )} */}
    </>
  );
};

export default PortfolioOverview;
