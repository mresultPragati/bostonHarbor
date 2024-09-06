import { Alert, Button, FormControl, Input, InputLabel, MenuItem, Select, styled, TextField } from "@mui/material"
import { useState } from "react";
import { BostonFileName } from "./AdvisorStyled";
import BostonLoader from "../resusedComponents/BostonLoader";
import axios from "axios";
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import { CloudIcon } from '@mui/icons-material';





export const AdvisorAnalysis = () => {
    const [assessmentFile, setAssessmentFile] = useState(null);
    const [financialFile, setFinancialFile] = useState(null);
    const [investMentValue, setInvestMentValue] = useState('SuggestInvestments');
    const [investorPersonalityVal, setInvestorPersonalityVal] = useState('');
    const [htmlResponse, setHtmlResponse] = useState('');
    const [showLoader, setShowLoader] = useState(false);
    const [alertMsg, setAlertMsg] = useState("");

    const handleInvestmentChange = (event) => {
        setInvestMentValue(event.target.value);
    };

    const handleInvestorChange = (event) => {
        setInvestorPersonalityVal(event.target.value);
    };

    const handleAssessmentFileChange = (event) => {
        const file = event?.target?.files?.[0];
        console.log("Selected file:", file, event);
        if (file) {
            setAssessmentFile(file);
        }
    };

    const handleFinancialFileChange = (event) => {
        const file = event?.target?.files?.[0];
        console.log("Selected file:", file);
        if (file) {
            setFinancialFile(file);
        }
    };

    const handleUploadClick = async () => {
        setShowLoader(true)
        // if (financialFile && assessmentFile) {
        //     // Handle the file upload logic here
        //     console.log("Uploading:", financialFile.name, assessmentFile.name);
        // } else {
        //     alert("Please select a file before uploading.");
        // }

        // e.preventDefault();

        // if (!financialFile && !assessmentFile) {
        // alert("Please select a file before uploading.");
        // return;
        // }

        const formData = new FormData();
        formData.append('financialFile', financialFile);
        formData.append('assessmentFile', assessmentFile);
        console.log("formadata", formData, formData.get("assessmentFile"), financialFile);
        const url = "http://127.0.0.1:5000/generate-investment-suggestions"
        //     const data= JSON.stringify(assessmentFile)
        //    console.log("errr data",data,);


        // ------------------axios try catch-----------------

        try {
            const res = await axios.post('http://127.0.0.1:5000/generate-investment-suggestions', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'  // Important to handle file uploads
                }
            });

            const result = res?.data;
            console.log("result", result,result.status,result?.investmentSuggestions);
            if (result?.status === 200) {
                setShowLoader(false)
                setAlertMsg(result?.message)
                setHtmlResponse(result?.investmentSuggestions)
                // setFinancialFile(result?.investmentSuggestions)
            } else {
                console.log(result);

            }

        } catch (error) {
            console.error("Error:", error);
            // alert(Error: ${error.response ? error.response.data.message : 'Unknown error'});
        }

        // --------------------------axios---------------
        //     await axios.post(url,
        //         formData,
        //        { headers: {
        //         'Content-Type': 'application/json'}
        //     }
        // ).then((response) => {
        //         console.log(response,"errr succ");
        //         // setData(response.data);
        //         // Set the response data to the statesetLoading(false);  
        //                 // Set loading to false    
        //         }).catch((error) => {
        //             console.log(error,"errr");

        //             // setError(error);
        //         });
        // ----------------------------fretch------------------
        // try {
        // const res = await fetch('http://127.0.0.1:5000/investment-personality-assessment', {
        // // const res = await fetch('http://127.0.0.1:5000/generate-investment-suggestions', {
        //     // method: 'POST',
        //     // body: assessmentFile,
        //     method: 'POST',
        // headers: {
        //     'Content-Type': 'application/json',
        // },
        //     body: assessmentFile,
        //     // body: formData,
        // });

        // // const result = await res.json();
        // // console.log("result",result);

        // // // setResponse(File uploaded: ${result.filename});
        // } catch (error) {
        // console.log(error,"error");

        //     // setResponse(Error: ${error.message});
        // }
    };
    console.log(htmlResponse,"response");
    
    return (
        <>
            {/* <Alert variant="outlined" severity="success">
                {alertMsg}
            </Alert> */}
            {showLoader && <BostonLoader />}

            <div className="row">
                <td className="col-4 mr-5">

                    {/* <TextField variant="standard" fullWidth label="What do you like to do ?" /> */}
                    <FormControl variant="standard" fullWidth>
                        <InputLabel id="dropdown-label">What do you like to do ?</InputLabel>
                        <Select
                            labelId="dropdown-label"
                            value={investMentValue}
                            onChange={handleInvestmentChange}
                            placeholder="What do you like to do ?"
                            fullWidth
                        >

                            <MenuItem value={'SuggestInvestments'}>Suggest Investments</MenuItem>
                        </Select>
                    </FormControl>
                </td>
                <td className="col-4 mr-5">
                    <TextField variant="standard" fullWidth label="Client Name" />
                </td>
                <td className="col-4 mr-5">
                    {/* <TextField variant="standard" fullWidth label="Investor Personality" /> */}

                    <FormControl variant="standard" fullWidth>
                        <InputLabel id="demo-simple-select-standard-label">Investor Personality</InputLabel>
                        <Select
                            value={investorPersonalityVal}
                            onChange={handleInvestorChange}
                            placeholder="Investor Personality"
                            fullWidth
                        >

                            <MenuItem value={'conservativeInvestor'}>Conservative Investor</MenuItem>
                            <MenuItem value={'moderateInvestor'}>Moderate Investor</MenuItem>
                            <MenuItem value={'aggressiveInvestor'}>Aggressive Investor</MenuItem>
                        </Select>
                    </FormControl>
                </td>
            </div>

            <div className="d-flex  justify-content-center mt-5 mb-5">

                <hr style={{ width: "30%" }} />
                <h6 className="m-1 d-flex">OR</h6>
                <hr style={{ width: "30%" }} />
            </div>

            <div className="d-flex justify-content-start">
                <div style={{ marginRight: "1.5rem" }}>

                    <Button
                        component="label"
                        role={undefined}
                        variant="outlined"
                        style={{ color: "#002a4a" }}
                        tabIndex={-1}
                    // startIcon={<CloudIcon />}
                    >
                        Upload Assessment Document
                        <input
                            style={{ display: 'none' }}
                            accept=".doc,.docx,.pdf"
                            type="file"
                            onChange={(event) => {
                                handleAssessmentFileChange(event);
                                console.log("file", event, event?.target?.files)
                            }}
                        // multiple
                        />
                    </Button>
                    <BostonFileName>
                        {assessmentFile?.name}
                    </BostonFileName>
                </div>
                <div style={{ marginRight: " 1.5rem" }}>


                    <Button
                        component="label"
                        role={undefined}
                        variant="outlined"
                        style={{ color: "#002a4a" }}
                        tabIndex={-1}
                    // startIcon={<CloudIcon />}
                    >
                        Upload Financial Document
                        <input
                            style={{ display: 'none' }}
                            accept=".doc,.docx,.pdf"
                            type="file"
                            onChange={(event) => { handleFinancialFileChange(event); console.log("file", event?.target?.files) }}
                        // multiple
                        />
                    </Button>
                    <BostonFileName>
                        {financialFile?.name}
                    </BostonFileName>
                </div>
            </div>
            <Button className="mt-5" variant="contained" onClick={() => handleUploadClick()}>Generate Investment Suggestion</Button>
            {/* <p style={{textAlign:"start"}}>
                {htmlResponse}
            </p> */}
            <div className="mt-5" style={{textAlign:"start"}} dangerouslySetInnerHTML={{ __html: htmlResponse }} />
        </>
    )
}