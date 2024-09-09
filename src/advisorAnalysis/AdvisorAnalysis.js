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
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import { CloudIcon } from '@mui/icons-material';


export const AdvisorAnalysis = () => {
    const [assessmentFile, setAssessmentFile] = useState(null);
    const [financialFile, setFinancialFile] = useState(null);
    const [barChartData, setBarChartData] = useState(null);
    const [pieChartData, setPieChartData] = useState(null);
    const [investMentValue, setInvestMentValue] = useState('SuggestInvestments');
    const [investorPersonalityVal, setInvestorPersonalityVal] = useState('');
    const [htmlResponse, setHtmlResponse] = useState('');
    const [showLoader, setShowLoader] = useState(false);
    const [alertMsg, setAlertMsg] = useState({
        msg: "",
        severity: ""
    });

    // const handleInvestmentChange = (event) => {
    //     setInvestMentValue(event.target.value);
    // };

    // const handleInvestorChange = (event) => {
    //     setInvestorPersonalityVal(event.target.value);
    // };

    // const handleAssessmentFileChange = (event) => {
    //     const file = event?.target?.files?.[0];
    //     console.log("Selected file:", file, event);
    //     if (file) {
    //         setAssessmentFile(file);
    //     }
    // };

    // const handleFinancialFileChange = (event) => {
    //     const file = event?.target?.files?.[0];
    //     console.log("Selected file:", file);
    //     if (file) {
    //         setFinancialFile(file);
    //     }
    // };

    const handleUploadClick = async () => {
        setShowLoader(true)
        const formData = new FormData();
        formData.append('financialFile', financialFile);
        formData.append('assessmentFile', assessmentFile);

        console.log(assessmentFile, financialFile);
        const resp =await generateSuggestions(formData, "multipart/form-data");

        const result = resp?.data
        console.log("resultt",result,resp);
        
        if (result?.status === 200) {
            setShowLoader(false);
            setAlertMsg({ msg: result?.message, severity: "success" });
            setHtmlResponse(result?.investmentSuggestions);
            setBarChartData(result?.barChartData);
            setPieChartData(result?.pieChartData);
        } else {
            setShowLoader(false)
            setAlertMsg({ msg: result?.message, severity: "error" });
            console.log(result);
        }

        // try {
        //     const res = await axios.post('http://127.0.0.1:5000/generate-investment-suggestions', formData, {
        //         headers: {
        //             'Content-Type': 'multipart/form-data'  // Important to handle file uploads
        //         }
        //     });

        //     setShowLoader(true)
        //     const result = res?.data;
        //     console.log("result", result);
        //     if (result?.status === 200) {
        //         setShowLoader(false)
        //         setAlertMsg(result?.message)
        //         setHtmlResponse(result?.investmentSuggestions)
        //     } else {
        //         console.log(result);

        //     }

        // } catch (error) {
        //     console.error("Error:", error);
        //     // alert(Error: ${error.response ? error.response.data.message : 'Unknown error'});
        // }


    };
    
    
    return (
        <>
            <BostonAlertMessage alertMsg={alertMsg} setAlertMsg={setAlertMsg} />
            {showLoader && <BostonLoader />}

            <AdvisorUsingText investorPersonalityVal={investorPersonalityVal} investMentValue={investMentValue} setInvestMentValue={setInvestMentValue} setInvestorPersonalityVal={setInvestorPersonalityVal} />
            <div className="d-flex  justify-content-center mt-5 mb-5">

                <hr style={{ width: "30%" }} />
                <h6 className="m-1 d-flex">OR</h6>
                <hr style={{ width: "30%" }} />
            </div>
            <AdvisoryUsingFile assessmentFile={assessmentFile} setAssessmentFile={setAssessmentFile} financialFile={financialFile} setFinancialFile={setFinancialFile} />
            <Button className="mt-5" variant="contained" onClick={() => handleUploadClick()}>Generate Investment Suggestion</Button>

            {/* -----------------------------Investment Suggestion---------------------- */}
            <div className="mt-5" style={{ textAlign: "start" }} dangerouslySetInnerHTML={{ __html: htmlResponse }} />
       <BostonBarChart data={barChartData}/>
       <BostonPieChart data={pieChartData}/>
       
        </>
    )
}