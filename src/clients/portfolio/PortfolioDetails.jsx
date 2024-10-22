import React, { useEffect, useRef, useState } from "react";
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
import {
  calculateTotals,
  getUSTime,
} from "../../resusedComponents/constant/ResusableConst";
import { useLocation, useParams } from "react-router-dom";
import { BoldCell, CurrencyCell } from "./PortfolioStyled";
import BostonLoader from "../../resusedComponents/BostonLoader";
import { calculateDaysFromNow, openInNewTab } from "./PortfolioConstant";
import PortfolioHtml from "./PortfolioHtml";

export const PortfolioDetails = () => {
  const [portfolioList, setPortfolioList] = useState([]);
  const [portfolioPrice, setPortfolioPrice] = useState([]);
  const [portfolioHtmlResp, setPortfolioHtmlResp] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const newWindowRef = useRef(null);
  const selectedClient = JSON?.parse?.(localStorage?.getItem?.("clients"));
  const { uniqueId } = useParams();
  const pollingInterval = useRef(null); // To track the polling interval

  useEffect(() => {
    portfolioAllDetails();
  }, []);

  // ----------------------------------USE & TEST CODE------------------

  // useEffect(() => {
  //   // Start polling when the component mounts
  //   startPolling();

  //   // Cleanup polling when the component unmounts
  //   return () => {
  //     clearPolling();
  //   };
  // }, []);

  // const startPolling = () => {
  //   generatePortfolioSuggestion(); // Initial call when component mounts
  //   pollingInterval.current = setInterval(() => {
  //     generatePortfolioSuggestion();
  //   }, 30000); // Call every 30 seconds (adjust as needed)
  // };

  // // Function to clear polling
  // const clearPolling = () => {
  //   if (pollingInterval.current) {
  //     clearInterval(pollingInterval.current);
  //   }
  // };

  // const checkIfWindowClosed = () => {
  //   const checkIfClosed = setInterval(() => {
  //     if (newWindowRef.current?.closed) {
  //       clearInterval(checkIfClosed); // Stop polling the window closure
  //       localStorage.removeItem("portfolioHtml"); // Remove portfolio HTML from local storage
  //     }
  //   }, 1000); // Check every second if the window is closed
  // };

  // // Function to generate portfolio suggestion and open in new tab
  // const generatePortfolioSuggestion = async () => {
  //   setShowLoader(true);

  //   const payload = {
  //     client_id: selectedClient?.uniqueId,
  //     client_name: selectedClient?.clientDetail?.clientName,
  //     funds: Number(selectedClient?.investmentAmount),
  //     portfolio_current_value: portfolioPrice?.portfolio_current_value,
  //     porfolio_daily_change: portfolioPrice?.porfolio_daily_change,
  //     portfolio_daily_change_perc: portfolioPrice?.portfolio_daily_change_perc,
  //     portfolio_investment_gain_loss: portfolioPrice?.portfolio_investment_gain_loss,
  //     portfolio_investment_gain_loss_perc: portfolioPrice?.portfolio_investment_gain_loss_perc,
  //   };

  //   try {
  //     const resp = await genPortfolioAnalysis(payload);
  //     console.log("Portfolio API Response:", resp);

  //     if (resp.status === 200) {
  //       setPortfolioHtmlResp(resp.data.suggestion); // Set the portfolio HTML response
  //       localStorage.setItem("portfolioHtml", resp.data.suggestion); // Store HTML in local storage

  //       // Open the portfolio analysis in a new tab
  //       if (!newWindowRef.current || newWindowRef.current.closed) {
  //         newWindowRef.current = window.open(
  //           `/client/portfolioAnalysis/${selectedClient?.uniqueId}`,
  //           "_blank"
  //         );
  //       }

  //       // Start checking if the window is closed
  //       checkIfWindowClosed();
  //     }
  //   } catch (error) {
  //     console.error("Error fetching portfolio analysis:", error);
  //   } finally {
  //     setShowLoader(false); // Hide the loader
  //   }
  // };

  // ----------------------------------USE & TEST CODE------------------

  const portfolioAllDetails = async () => {
    console.log("uniqueId", uniqueId);
    setShowLoader(true);

    let payload = {
      client_id: uniqueId ? uniqueId : selectedClient?.uniqueId,
      curr_date: getUSTime(),
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

  const generatePortfolioSuggestion = async () => {
    setShowLoader(true);
    let payload = {
      client_id: selectedClient?.uniqueId,
      client_name: selectedClient?.clientDetail?.clientName,
      funds: Number(selectedClient?.investmentAmount),
      investor_personality: selectedClient?.investment_personality,
      portfolio_current_value: portfolioPrice?.portfolio_current_value,
      porfolio_daily_change: portfolioPrice?.porfolio_daily_change,
      portfolio_daily_change_perc: portfolioPrice?.portfolio_daily_change_perc,
      portfolio_investment_gain_loss:
        portfolioPrice?.portfolio_investment_gain_loss,
      portfolio_investment_gain_loss_perc:
        portfolioPrice?.portfolio_investment_gain_loss_perc,
    };
    const resp = await genPortfolioAnalysis(payload);
    console.log("RESPPP", resp);
    if (resp.status === 200) {
      setShowLoader(false);
      localStorage.setItem("portfolioHtml", resp?.data?.suggestion);
      newWindowRef.current = window.open(
        `/client/portfolioAnalysis/${selectedClient?.uniqueId}`,
        "_blank"
      );
      const checkIfClosed = setInterval(() => {
        if (newWindowRef?.current?.closed) {
          clearInterval(checkIfClosed); // Stop polling

          // Remove portfolioHtml from local storage
          localStorage.removeItem("portfolioHtml");
        }
      }, 3000);
      setPortfolioHtmlResp(resp?.data?.suggestion);
      // openInNewTab(resp?.data?.suggestion);
    }
  };

  // // Function to calculate totals
  // const calculateTotals = (key) => {
  //   return portfolioList
  //     .reduce((total, row) => total + parseFloat(row[key] || 0), 0)
  //     .toFixed(2);
  // };

  return (
    <>
      {showLoader && <BostonLoader />}
      <PortfolioOverview
        portfolioPrice={portfolioPrice}
        portfolioList={portfolioList}
      />

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
                    <TableCell>${row.Delayed_Price?.toFixed(2)}</TableCell>
                    <TableCell>${row.current_value?.toFixed(2)}</TableCell>
                    <CurrencyCell
                      // isNegative={row.Daily_Price_Change?.toString()?.startsWith(
                      //   "-"
                      // )}
                      isNegative={
                        row.Daily_Price_Change === 0 ||
                        row.Daily_Price_Change.toFixed(2) === 0.0
                          ? "zero"
                          : row.Daily_Price_Change?.toString()?.startsWith("-")
                      }
                    >
                      {row.Daily_Price_Change?.toString()?.startsWith("-")
                        ? `-$${row.Daily_Price_Change?.toFixed(2)
                            ?.toString()
                            ?.replace("-", "")}`
                        : `$${row.Daily_Price_Change?.toFixed(2)}`}
                    </CurrencyCell>

                    <CurrencyCell
                      isNegative={
                        row.Daily_Price_Change === 0 ||
                        row.Daily_Price_Change.toFixed(2) === 0.0
                          ? "zero"
                          : row.Daily_Value_Change?.toString()?.startsWith("-")
                      }
                    >
                      {row.Daily_Value_Change?.toString()?.startsWith("-")
                        ? `-$${row.Daily_Value_Change?.toFixed(2)
                            ?.toString()
                            ?.replace("-", "")}`
                        : `$${row.Daily_Value_Change.toFixed(2)}`}
                    </CurrencyCell>

                    <TableCell>
                      ${row.Amount_Invested_per_Unit?.toFixed(2)}
                    </TableCell>
                    <TableCell>${row.Amount_Invested?.toFixed(2)}</TableCell>
                    <CurrencyCell
                      isNegative={
                        row.Daily_Price_Change === 0 ||
                        row.Daily_Price_Change.toFixed(2) === 0.0
                          ? "zero"
                          : row.Investment_Gain_or_Loss_percentage?.toString()?.startsWith(
                              "-"
                            )
                      }
                    >
                      {row.Investment_Gain_or_Loss_percentage?.toFixed(2)}%
                    </CurrencyCell>
                    <CurrencyCell
                      isNegative={
                        row.Daily_Price_Change === 0 ||
                        row.Daily_Price_Change.toFixed(2) === 0.0
                          ? "zero"
                          : row.Investment_Gain_or_Loss?.toString()?.startsWith(
                              "-"
                            )
                      }
                    >
                      {row.Investment_Gain_or_Loss?.toString()?.startsWith("-")
                        ? `-$${row.Investment_Gain_or_Loss?.toFixed(2)
                            ?.toString()
                            ?.replace("-", "")}`
                        : `$${row.Investment_Gain_or_Loss?.toFixed(2)}`}
                      {/* ${row.Investment_Gain_or_Loss.toFixed(2)} */}
                    </CurrencyCell>
                    <TableCell>${row.Estimated_Annual_Income}</TableCell>
                    <TableCell>{row.Estimated_Yield}%</TableCell>
                    <TableCell sx={{ textWrap: "nowrap" }}>
                      {calculateDaysFromNow(row.Time_Held)}{" "}
                      {calculateDaysFromNow(row.Time_Held) > 1 ? "days" : "day"}
                    </TableCell>
                  </TableRow>
                ))}

                {/* Totals Row */}
                <TableRow sx={{ backgroundColor: "#dddddd" }}>
                  <BoldCell colSpan={4}>Total</BoldCell>
                  <BoldCell>
                    {calculateTotals("Quantity", portfolioList)}
                  </BoldCell>
                  <BoldCell>
                    ${calculateTotals("Delayed_Price", portfolioList)}
                  </BoldCell>
                  <BoldCell>
                    ${calculateTotals("current_value", portfolioList)}
                  </BoldCell>
                  <BoldCell>
                    ${calculateTotals("Daily_Price_Change", portfolioList)}
                  </BoldCell>
                  {/* <BoldCell>
                    ${calculateTotals("Daily_Price_Change"),portfolioList}
                  </BoldCell> */}
                  <BoldCell>
                    ${calculateTotals("Daily_Value_Change", portfolioList)}
                  </BoldCell>
                  <BoldCell>
                    $
                    {calculateTotals("Amount_Invested_per_Unit", portfolioList)}
                  </BoldCell>
                  <BoldCell>
                    ${calculateTotals("Amount_Invested", portfolioList)}
                  </BoldCell>
                  <BoldCell>
                    {calculateTotals(
                      "Investment_Gain_or_Loss_percentage",
                      portfolioList
                    )}
                    %
                  </BoldCell>
                  <BoldCell>
                    ${calculateTotals("Investment_Gain_or_Loss", portfolioList)}
                  </BoldCell>
                  <BoldCell>
                    ${calculateTotals("Estimated_Annual_Income", portfolioList)}
                  </BoldCell>
                  <BoldCell>
                    {calculateTotals("Estimated_Yield", portfolioList)}%
                  </BoldCell>
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
