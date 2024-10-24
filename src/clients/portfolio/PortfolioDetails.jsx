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
import PortfolioTable from "./PortfolioTable";

export const PortfolioDetails = () => {
  const [portfolioList, setPortfolioList] = useState([]);
  const [portfolioPrice, setPortfolioPrice] = useState([]);
  // const [portfolioHtmlResp, setPortfolioHtmlResp] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const [alertMsg, setAlertMsg] = useState({
    msg: "",
    severity: "",
  });
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
      } else {
        console.error(`Unexpected response status: ${resp}`);
      }
    } catch (error) {
      if (error.response) {
        // Request was made but server responded with a status code outside 200
        console.error(`API Error: ${error}`);
        if (error.response.status === 404) {
          setAlertMsg({
            msg: `Please place the order to view portfolio`,
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

      localStorage.setItem("portfolioHtml", resp?.data?.suggestion);

      var newWindow = window.open(
        `/client/portfolioAnalysis/${selectedClient?.uniqueId}`,
        "_blank"
      );

      if (!newWindow) {
        setAlertMsg({
          msg: "Pop-up blocked! Please enable pop-upsto view Portfolio Analysis.",
          severity: "error",
        });
      }

      if (newWindow) {
        const checkIfClosed = setInterval(() => {
          if (newWindow?.closed) {
            clearInterval(checkIfClosed); // Stop polling when window is closed

            localStorage.removeItem("portfolioHtml");
          }
        }, 3000);
      }

      // setPortfolioHtmlResp(resp?.data?.suggestion);
    }
  };

  return (
    <>
      <BostonAlertMessage alertMsg={alertMsg} setAlertMsg={setAlertMsg} />
      {showLoader && <BostonLoader />}
      {portfolioList?.length > 0 ? (
        <>
          <PortfolioOverview
            portfolioPrice={portfolioPrice}
            portfolioList={portfolioList}
            amount_invested={`${calculateTotals(
              "Amount_Invested",
              portfolioList
            )}`}
          />

          <PortfolioTable
            portfolioList={portfolioList}
            generatePortfolioSuggestion={generatePortfolioSuggestion}
          />
        </>
      ) : (
        <div className="mt-5 row">
          <h2 style={{ fontWeight: 300 }}>No Orders Placed!!!</h2>
        </div>
      )}
    </>
  );
};

export default PortfolioDetails;
