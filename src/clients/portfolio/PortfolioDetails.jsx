import React, { useEffect, useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import PortfolioOverview from "./PortfolioOverview";
import { genPortfolioAnalysis, getPortfolioList } from "../../api/apiServiece";
import { USTimezone } from "../../resusedComponents/constant/ResusableConst";
import { useLocation, useParams } from "react-router-dom";
import { BoldCell, CurrencyCell } from "./PortfolioStyled";
import BostonLoader from "../../resusedComponents/BostonLoader";
import { calculateDaysFromNow } from "./PortfolioConstant";

export const PortfolioDetails = () => {
  const [portfolioList, setPortfolioList] = useState([]);
  const [portfolioPrice, setPortfolioPrice] = useState([]);
  const [portfolioHtmlResp, setPortfolioHtlResp] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const selectedClient = JSON?.parse?.(localStorage?.getItem?.("clients"));
  const { uniqueId } = useParams();

  useEffect(() => {
    portfolioAllDetails();
  }, []);

  const portfolioAllDetails = async () => {
    console.log("uniqueId", uniqueId);
    setShowLoader(true);

    let payload = {
      client_id: uniqueId ? uniqueId : selectedClient?.uniqueId,
      curr_date: USTimezone(),
    };
    console.log("RESPPP", uniqueId);
    const resp = await getPortfolioList(payload);

    if (resp.status === 200) {
      setShowLoader(false);
      setPortfolioList(resp?.data?.portfolio_data);
      setPortfolioPrice(resp?.data);
    } else {
      setShowLoader(false);
    }
  };

  const generatePortfolioSuggestion = () => {
    let payload = {
      client_id: selectedClient?.uniqueId,
      client_name: selectedClient?.clientDetail?.clientName,
      funds: Number(selectedClient?.investmentAmount),
      portfolio_current_value: portfolioPrice?.portfolio_current_value,
      porfolio_daily_change: portfolioPrice?.porfolio_daily_change,
      portfolio_daily_change_perc: portfolioPrice?.portfolio_daily_change_perc,
      portfolio_investment_gain_loss:
        portfolioPrice?.portfolio_investment_gain_loss,
      portfolio_investment_gain_loss_perc:
        portfolioPrice?.portfolio_investment_gain_loss_perc,
    };
    const resp = genPortfolioAnalysis(payload);
    console.log("RESPPP", resp);
    if (resp.status === 200) {
      setPortfolioHtlResp(resp?.data?.suggestion);
    }
  };

  // Function to calculate totals
  const calculateTotals = (key) => {
    return portfolioList
      .reduce((total, row) => total + parseFloat(row[key] || 0), 0)
      .toFixed(2);
  };

  return (
    <>
      {showLoader && <BostonLoader />}
      <PortfolioOverview portfolioPrice={portfolioPrice} />

      <Typography variant="h4" sx={{ textAlign: "center", margin: "2rem 0" }}>
        Portfolio Details
      </Typography>
      {portfolioList?.length > 0 ? (
        <>
          <div className="d-flex justify-content-end mb-4">
            <Button
              variant="contained"
              onClick={() => generatePortfolioSuggestion()}
            >
              {" "}
              Portfolio Analysis
            </Button>
          </div>
          <div
            className="mt-5"
            style={{ textAlign: "start" }}
            dangerouslySetInnerHTML={{
              __html: portfolioHtmlResp,
            }}
          />
          <TableContainer>
            <Table aria-labelledby="tableTitle">
              <TableHead>
                <TableRow>
                  <BoldCell>Sr. No.</BoldCell>
                  <BoldCell>Asset Class</BoldCell>
                  <BoldCell>Name</BoldCell>
                  <BoldCell>Symbol</BoldCell>
                  <BoldCell>Quantity</BoldCell>
                  <BoldCell>Delayed Price</BoldCell>
                  <BoldCell>Current Value</BoldCell>
                  <BoldCell>Daily Price Change</BoldCell>
                  <BoldCell>Daily Value Change</BoldCell>
                  <BoldCell>Amount Invested / Unit</BoldCell>
                  <BoldCell>Amount Invested</BoldCell>
                  <BoldCell>Investment Gain or (Loss) %</BoldCell>
                  <BoldCell>Investment Gain or (Loss) $</BoldCell>
                  <BoldCell>Estimated Annual Income</BoldCell>
                  <BoldCell>Estimated Yield</BoldCell>
                  <BoldCell>Time Held</BoldCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {portfolioList.map((row, index) => (
                  <TableRow hover key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{row.assetClass}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.symbol}</TableCell>
                    <TableCell>{row.Quantity}</TableCell>
                    <TableCell>${row.Delayed_Price.toFixed(2)}</TableCell>
                    <TableCell>${row.current_value.toFixed(2)}</TableCell>
                    <CurrencyCell
                      isNegative={row.Daily_Price_Change?.toString()?.startsWith(
                        "-"
                      )}
                    >
                      {row.Daily_Price_Change?.toString()?.startsWith("-")
                        ? `-$${row.Daily_Price_Change?.toFixed(2)
                            ?.toString()
                            ?.replace("-", "")}`
                        : `$${row.Daily_Price_Change.toFixed(2)}`}
                    </CurrencyCell>

                    <CurrencyCell
                      isNegative={row.Daily_Value_Change?.toString()?.startsWith(
                        "-"
                      )}
                    >
                      {row.Daily_Value_Change?.toString()?.startsWith("-")
                        ? `-$${row.Daily_Value_Change?.toFixed(2)
                            ?.toString()
                            ?.replace("-", "")}`
                        : `$${row.Daily_Value_Change.toFixed(2)}`}
                    </CurrencyCell>

                    <TableCell>
                      ${row.Amount_Invested_per_Unit.toFixed(2)}
                    </TableCell>
                    <TableCell>${row.Amount_Invested.toFixed(2)}</TableCell>
                    <TableCell>
                      {row.Investment_Gain_or_Loss_percentage.toFixed(2)}%
                    </TableCell>
                    <TableCell>
                      ${row.Investment_Gain_or_Loss.toFixed(2)}
                    </TableCell>
                    <TableCell>${row.Estimated_Annual_Income}</TableCell>
                    <TableCell>{row.Estimated_Yield}%</TableCell>
                    <TableCell>
                      {calculateDaysFromNow(row.Time_Held)} days
                    </TableCell>
                  </TableRow>
                ))}

                {/* Totals Row */}
                <TableRow sx={{ backgroundColor: "#dddddd" }}>
                  <BoldCell colSpan={4}>Total</BoldCell>
                  <BoldCell>{calculateTotals("Quantity")}</BoldCell>
                  <BoldCell>${calculateTotals("Delayed_Price")}</BoldCell>
                  <BoldCell>${calculateTotals("current_value")}</BoldCell>
                  <BoldCell>${calculateTotals("Daily_Price_Change")}</BoldCell>
                  {/* <BoldCell>
                    ${calculateTotals("Daily_Price_Change")}
                  </BoldCell> */}
                  <BoldCell>${calculateTotals("Daily_Value_Change")}</BoldCell>
                  <BoldCell>
                    ${calculateTotals("Amount_Invested_per_Unit")}
                  </BoldCell>
                  <BoldCell>${calculateTotals("Amount_Invested")}</BoldCell>
                  <BoldCell>
                    {calculateTotals("Investment_Gain_or_Loss_percentage")}%
                  </BoldCell>
                  <BoldCell>
                    ${calculateTotals("Investment_Gain_or_Loss")}
                  </BoldCell>
                  <BoldCell>
                    ${calculateTotals("Estimated_Annual_Income")}
                  </BoldCell>
                  <BoldCell>{calculateTotals("Estimated_Yield")}%</BoldCell>
                  <BoldCell></BoldCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <div className="mt-5 row">
          <h4 style={{ fontWeight: 300 }}>No Data Found!!!</h4>
        </div>
      )}
    </>
  );
};

export default PortfolioDetails;
