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
import { BoldCell, CurrencyCell, Note } from "./PortfolioStyled";
import BostonLoader from "../../resusedComponents/BostonLoader";
import { calculateDaysFromNow, openInNewTab } from "./PortfolioConstant";
import { BostonAlertMessage } from "../../resusedComponents/BostonAlertMessage";

export const PortfolioDetails = () => {
  const [portfolioList, setPortfolioList] = useState([]);
  const [portfolioPrice, setPortfolioPrice] = useState([]);
  const [portfolioHtmlResp, setPortfolioHtmlResp] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const [alertMsg, setAlertMsg] = useState({
    msg: "",
    severity: "",
  });
  const [isUpdate, setIsUpdate] = useState(false);
  const selectedClient = JSON?.parse?.(localStorage?.getItem?.("clients"));
  const { uniqueId } = useParams();

  useEffect(() => {
    portfolioAllDetails();

    // // if (isUpdate) {
    // const intervalId = setInterval(() => {
    //   portfolioAllDetailsToUpdate();
    // }, 1000);
    // return () => clearInterval(intervalId);
    // // }

    // Cleanup interval on unmount
  }, [uniqueId]);

  const portfolioAllDetails = async () => {
    console.log("uniqueId", uniqueId);
    setShowLoader(true);

    let payload = {
      client_id: uniqueId ? uniqueId : selectedClient?.uniqueId,
      curr_date: getUSTime(),
    };

    try {
      console.log("RESPPP", uniqueId);
      const resp = await getPortfolioList(payload);

      if (resp.status === 200) {
        setPortfolioList(resp?.data?.portfolio_data);
        setPortfolioPrice(resp?.data);
        setIsUpdate(true);
        // portfolioAllDetailsToUpdate();
      } else {
        console.error(`Unexpected response status: ${resp}`);
      }
    } catch (error) {
      if (error.response) {
        // Request was made but server responded with a status code outside 200
        console.error(`API Error: ${error}`);
        if (error.response.status === 404) {
          setAlertMsg({
            msg: `${error.response.status}: No data found for client`,
            severity: "error",
          });
        }
      }
    } finally {
      setShowLoader(false);
    }
  };

  const portfolioAllDetailsToUpdate = async () => {
    let payload = {
      client_id: uniqueId ? uniqueId : selectedClient?.uniqueId,
      curr_date: getUSTime(),
    };

    console.log("RESPPP", uniqueId);
    const resp = await getPortfolioList(payload);

    if (resp.status === 200) {
      setPortfolioList(resp?.data?.portfolio_data);
      setPortfolioPrice(resp?.data);
    } else {
      console.error(`Unexpected response status: ${resp}`);
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

      // Save the HTML response to local storage
      localStorage.setItem("portfolioHtml", resp?.data?.suggestion);

      // Open a new tab or window
      var newWindow = window.open(
        `/client/portfolioAnalysis/${selectedClient?.uniqueId}`,
        "_blank"
      );

      if (!newWindow) {
        setAlertMsg({
          msg: "Pop-up blocked! Please enable pop-upsto view Portfolio Analysis.",
          severity: "error",
        });
        // alert("Pop-up blocked! Please enable pop-ups for this site.");
      } else {
        newWindow = window.open(
          `/client/portfolioAnalysis/${selectedClient?.uniqueId}`,
          "_blank"
        );
      }

      if (newWindow) {
        const checkIfClosed = setInterval(() => {
          if (newWindow?.closed) {
            clearInterval(checkIfClosed); // Stop polling when window is closed

            // Remove portfolioHtml from local storage
            localStorage.removeItem("portfolioHtml");
          }
        }, 3000);
      }

      setPortfolioHtmlResp(resp?.data?.suggestion);
      // openInNewTab(resp?.data?.suggestion);
    }
  };

  return (
    <>
      <BostonAlertMessage alertMsg={alertMsg} setAlertMsg={setAlertMsg} />
      {showLoader && <BostonLoader />}
      <PortfolioOverview
        portfolioPrice={portfolioPrice}
        portfolioList={portfolioList}
        amount_invested={`${calculateTotals("Amount_Invested", portfolioList)}`}
      />

      <Typography variant="h4" sx={{ textAlign: "center", margin: "2rem 0" }}>
        Portfolio Details
      </Typography>
      {portfolioList?.length > 0 ? (
        <>
          <div className="d-flex justify-content-end">
            <Button
              variant="contained"
              onClick={() => generatePortfolioSuggestion()}
            >
              {" "}
              Portfolio Analysis
            </Button>
          </div>
          <Note>
            Note: Please enable allow pop-ups in browser to view Portfolio
            Analysis.
          </Note>
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
