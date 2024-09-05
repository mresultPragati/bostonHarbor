import { Button, FormControl, Input, InputLabel, MenuItem, Select, styled, TextField } from "@mui/material"
import { useState } from "react";
import { BostonFileName } from "./AdvisorStyled";
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import { CloudIcon } from '@mui/icons-material';


export const AdvisorAnalysis = () => {
    const [assessmentFile, setAssessmentFile] = useState(null);
    const [financialFile, setFinancialFile] = useState(null);
    const [investMentValue, setInvestMentValue] = useState('SuggestInvestments');
    const [investorPersonalityVal, setInvestorPersonalityVal] = useState('');

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

    const handleUploadClick = () => {
        if (financialFile && assessmentFile) {
            // Handle the file upload logic here
            console.log("Uploading:", financialFile.name, assessmentFile.name);
        } else {
            alert("Please select a file before uploading.");
        }
    };
    return (
        <>

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
        </>
    )
}