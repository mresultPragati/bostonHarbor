import { Alert, Button, FormControl, Input, InputLabel, MenuItem, Select, styled, TextField } from "@mui/material"
import { useState } from "react";
import { BostonFileName } from "./AdvisorStyled";
import BostonLoader from "../resusedComponents/BostonLoader";
import axios from "axios";
import { BostonAlertMessage } from "../resusedComponents/BostonAlertMessage";
import { generateSuggestions } from "../api/apiServiece";
import { AdvisoryUsingFile } from "./AdvisorUsingFile";
import { AdvisorUsingText } from "./AdvisorUsingText";
import { BostonBarChart } from "../resusedComponents/BostonBarChart";
import { BostonPieChart } from "../resusedComponents/BostonPieChart";
import { extractHtmlContent } from "./constants/AdvisorContant";
import { BostonLineChart } from "../resusedComponents/BostonLineChart";



export const AdvisorAnalysis = () => {
    const [assessmentFile, setAssessmentFile] = useState(null);
    const [financialFile, setFinancialFile] = useState(null);
    const [barChartData, setBarChartData] = useState(null);
    const [pieChartData, setPieChartData] = useState(null);
    const [lineChartData, setLineChartData] = useState(null);
    const [investMentValue, setInvestMentValue] = useState('Suggest Investments');
    const [investorPersonalityVal, setInvestorPersonalityVal] = useState('');
    const [htmlResponse, setHtmlResponse] = useState('');
    const [showLoader, setShowLoader] = useState(false);
    const [alertMsg, setAlertMsg] = useState({
        msg: "",
        severity: ""
    });
    const [selectedClient, setSelectedClient] = useState({});

    const handleUploadClick = async () => {
        console.log("DATATA", investMentValue, selectedClient, investorPersonalityVal);

        setShowLoader(true)
        const formData = new FormData();
        formData.append('financialFile', financialFile);
        formData.append('assessmentFile', assessmentFile);

        console.log(assessmentFile, financialFile);
        const resp = await generateSuggestions(formData, "multipart/form-data");

        const result = resp?.data
        console.log("resultt", result, resp);

        if (result?.status === 200) {
            setShowLoader(false);
            setAlertMsg({ msg: "Investment Suggestion Generated Successfully", severity: "success" });
            setHtmlResponse(result?.investmentSuggestions);
            setBarChartData(result?.barChartData);
            setPieChartData(result?.pieChartData);
            setLineChartData(result?.compoundedChartData);
        } else {
            setShowLoader(false)
            setAlertMsg({ msg: result?.message, severity: "error" });
        }
    };


    return (
        <>
            <BostonAlertMessage alertMsg={alertMsg} setAlertMsg={setAlertMsg} />
            {showLoader && <BostonLoader />}

            <AdvisorUsingText investorPersonalityVal={investorPersonalityVal}
                setSelectedClient={setSelectedClient} investMentValue={investMentValue}
                setInvestMentValue={setInvestMentValue}
                setInvestorPersonalityVal={setInvestorPersonalityVal} />
            <div className="d-flex  justify-content-center mt-5 mb-5">

                <hr style={{ width: "30%" }} />
                <h6 className="m-1 d-flex">OR</h6>
                <hr style={{ width: "30%" }} />
            </div>
            <AdvisoryUsingFile assessmentFile={assessmentFile} setAssessmentFile={setAssessmentFile} financialFile={financialFile} setFinancialFile={setFinancialFile} />
            <Button className="mt-5" variant="contained"
                // disabled={(!assessmentFile || !financialFile) &&
                //     (!selectedClient?.uniqueId ||
                //         !selectedClient?.clientDetail?.clientName || !investMentValue)}
                onClick={() => handleUploadClick()}>Generate Investment Suggestion</Button>

            {/* -----------------------------Investment Suggestion---------------------- */}

            <div className="mt-5 mb-5" style={{ textAlign: "start" }}>
                <div className="mt-5"
                    style={{ textAlign: "start" }}
                    dangerouslySetInnerHTML={{ __html: extractHtmlContent(htmlResponse, "Investment Allocation:", "Percentage Allocation for Conservative Investments:").initial }}
                />

                <div className="row">
                    <div className="col-7">
                        {/* <div style={{ display: "block", flex: 2, }}> */}
                        <div className="mt-5"
                            style={{ textAlign: "start" }}
                            dangerouslySetInnerHTML={{ __html: extractHtmlContent(htmlResponse, "Investment Allocation:", "Percentage Allocation for Conservative Investments:").extracted }}
                        />
                        {/* {parse(extracted)} */}
                    </div>
                    <div className="col-5" style={{ flex: 1, padding: "6rem 0 0 2rem" }}>
                        <BostonPieChart data={pieChartData} />
                    </div>
                </div>

                {/* ---------------------------------------------*/}

                <BostonBarChart data={barChartData} />
                <div className="mt-5"
                    style={{ textAlign: "start" }}
                    dangerouslySetInnerHTML={{ __html: extractHtmlContent(htmlResponse, "Investment Allocation:", "Percentage Allocation for Conservative Investments:").remainingHtml }}
                />
                <BostonLineChart data={lineChartData} />
                {/*  {parse(remainingHtml)} */}

            </div>
        </>
    )
}