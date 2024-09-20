import {
  Alert,
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  styled,
  TextField,
} from "@mui/material";
import { useState } from "react";
import BostonLoader from "../../resusedComponents/BostonLoader";
import { BostonAlertMessage } from "../../resusedComponents/BostonAlertMessage";
import { AdvisoryUsingFile } from "./AdvisorUsingFile";
import { AdvisorUsingText } from "./AdvisorUsingText";
import { BostonBarChart } from "../../resusedComponents/BostonBarChart";
import { BostonPieChart } from "../../resusedComponents/BostonPieChart";
import { extractHtmlContent } from "../constants/AdvisorContant";
import { BostonLineChart } from "../../resusedComponents/BostonLineChart";
import {
  generateSuggestionByClientId,
  generateSuggestions,
} from "../../api/apiServiece";

export const AdvisorAnalysis = () => {
  const [assessmentFile, setAssessmentFile] = useState(null);
  const [financialFile, setFinancialFile] = useState(null);
  const [barChartData, setBarChartData] = useState(null);
  const [pieChartData, setPieChartData] = useState(null);
  const [lineChartData, setLineChartData] = useState(null);
  const [investMentValue, setInvestMentValue] = useState("Suggest Investments");
  const [investorPersonalityVal, setInvestorPersonalityVal] = useState("");
  const [htmlResponse, setHtmlResponse] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const [alertMsg, setAlertMsg] = useState({
    msg: "",
    severity: "",
  });
  const [selectedClient, setSelectedClient] = useState({});

  const handleUploadClick = async () => {
    console.log("DATATA", Object.keys(selectedClient).length <= 0);

    if (
      Object.keys(selectedClient).length <= 0 &&
      !investorPersonalityVal &&
      !financialFile &&
      !assessmentFile
    ) {
      setAlertMsg({
        msg: "Please Select Client Name / Investor Personality Or Please Upload Documents",
        severity: "error",
      });
      return;
    }
    //  else {
    if (Object.keys(selectedClient).length > 0 && investorPersonalityVal) {
      setShowLoader(true);
      const payload = {
        clientId: selectedClient?.uniqueId,
        clientName: selectedClient?.clientDetail?.clientName,
        investmentPersonality: investorPersonalityVal,
      };
      const resp = await generateSuggestionByClientId(
        payload,
        "application/json"
      );

      const result = resp?.data;
      console.log("resulttBY IOD", result, resp);
      if (result?.status === 200) {
        setShowLoader(false);
        setAlertMsg({
          msg: "Investment Suggestion Generated Successfully",
          severity: "success",
        });
        setHtmlResponse(result?.investmentSuggestions);
        setBarChartData(result?.barChartData);
        setPieChartData(result?.pieChartData);
        setLineChartData(result?.compoundedChartData);
      } else {
        setShowLoader(false);
        setAlertMsg({ msg: result?.message, severity: "error" });
      }
      return;
    } else {
      if (!investorPersonalityVal && Object.keys(selectedClient).length > 0) {
        setAlertMsg({
          msg: "Please Select Personality Investor...",
          severity: "error",
        });
        return;
      }

      if (Object.keys(selectedClient).length <= 0) {
        if (investorPersonalityVal) {
          setAlertMsg({
            msg: "Please Select Client Name...",
            severity: "error",
          });
          return;
        }
      }
    }

    if (financialFile && assessmentFile) {
      setShowLoader(true);
      const formData = new FormData();
      formData.append("financialFile", financialFile);
      formData.append("assessmentFile", assessmentFile);

      console.log(assessmentFile, financialFile);
      const resp = await generateSuggestions(formData, "multipart/form-data");

      const result = resp?.data;
      console.log("resultt", result, resp);

      if (result?.status === 200) {
        setShowLoader(false);
        setAlertMsg({
          msg: "Investment Suggestion Generated Successfully",
          severity: "success",
        });
        setHtmlResponse(result?.investmentSuggestions);
        setBarChartData(result?.barChartData);
        setPieChartData(result?.pieChartData);
        setLineChartData(result?.compoundedChartData);
      } else {
        setShowLoader(false);
        setAlertMsg({ msg: result?.message, severity: "error" });
      }
      return;
    } else {
      if (!financialFile)
        setAlertMsg({
          msg: "Please Upload Financial Document...",
          severity: "error",
        });
      if (!assessmentFile)
        setAlertMsg({
          msg: "Please Upload Assessment Document...",
          severity: "error",
        });
      if (!assessmentFile && !financialFile)
        setAlertMsg({
          msg: "Please Upload Documents...",
          severity: "error",
        });
      return;
    }
    // }
  };

  return (
    <>
      <BostonAlertMessage alertMsg={alertMsg} setAlertMsg={setAlertMsg} />
      {showLoader && <BostonLoader />}

      <AdvisorUsingText
        investorPersonalityVal={investorPersonalityVal}
        selectedClient={selectedClient}
        setSelectedClient={setSelectedClient}
        investMentValue={investMentValue}
        setInvestMentValue={setInvestMentValue}
        setInvestorPersonalityVal={setInvestorPersonalityVal}
      />
      <div className="d-flex  justify-content-center mt-5 mb-5">
        <hr style={{ width: "30%" }} />
        <h6 className="m-1 d-flex">OR</h6>
        <hr style={{ width: "30%" }} />
      </div>
      <AdvisoryUsingFile
        assessmentFile={assessmentFile}
        setAssessmentFile={setAssessmentFile}
        financialFile={financialFile}
        setFinancialFile={setFinancialFile}
      />
      <Button
        className="mt-5"
        variant="contained"
        // disabled={(!assessmentFile || !financialFile) &&
        //     (!selectedClient?.uniqueId ||
        //         !selectedClient?.clientDetail?.clientName || !investMentValue)}
        onClick={() => handleUploadClick()}
      >
        Generate Investment Suggestion
      </Button>

      {/* -----------------------------Investment Suggestion---------------------- */}

      <div className="mt-5 mb-5" style={{ textAlign: "start" }}>
        <div
          className="mt-5"
          style={{ textAlign: "start" }}
          dangerouslySetInnerHTML={{
            __html: extractHtmlContent(
              htmlResponse,
              "Investment Allocation:",
              "Percentage Allocation for Conservative Investments:"
            ).initial,
          }}
        />

        <div className="row">
          <div className="col-7">
            {/* <div style={{ display: "block", flex: 2, }}> */}
            <div
              className="mt-5"
              style={{ textAlign: "start" }}
              dangerouslySetInnerHTML={{
                __html: extractHtmlContent(
                  htmlResponse,
                  "Investment Allocation:",
                  "Percentage Allocation for Conservative Investments:"
                ).extracted,
              }}
            />
            {/* {parse(extracted)} */}
          </div>
          <div className="col-5" style={{ flex: 1, padding: "6rem 0 0 2rem" }}>
            <BostonPieChart data={pieChartData} />
          </div>
        </div>

        {/* ---------------------------------------------*/}

        <BostonBarChart data={barChartData} />
        <div
          className="mt-5"
          style={{ textAlign: "start" }}
          dangerouslySetInnerHTML={{
            __html: extractHtmlContent(
              htmlResponse,
              "Investment Allocation:",
              "Percentage Allocation for Conservative Investments:"
            ).remainingHtml,
          }}
        />
        <BostonLineChart data={lineChartData} />
        {/*  {parse(remainingHtml)} */}
      </div>
    </>
  );
};
