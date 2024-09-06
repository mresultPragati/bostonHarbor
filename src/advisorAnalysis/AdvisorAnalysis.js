import { Button, FormControl, Input, InputLabel, MenuItem, Select, styled, TextField } from "@mui/material"
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
            console.log("result", result);

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

    return (
        <>
            <BostonLoader />

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
            <p className="mt-5" style={{ textAlign: "start" }}>
                Investment Suggestions for a Moderate Investor Based on your provided information, you appear to be a moderate investor with a healthy mix of assets and liabilities. Here's a breakdown of investment suggestions tailored to your profile: Investment Allocation: Growth-Oriented Investments (Minimum 40% - Maximum 60%): Target: Focus on investments with the potential for long-term growth while managing risk. How to Invest: Diversify across various asset classes like: Mutual Funds (5%-10%): Choose diversified index funds tracking the S&P 500 or broad market indices. These funds provide broad market exposure with low fees and are a great way to diversify your portfolio. ETFs (10%-20%): Offer similar benefits to mutual funds but with lower fees and more transparency. ETFs are traded on exchanges like stocks, providing more flexibility. Individual Stocks (20%-30%): Carefully select companies with solid financials and growth potential. Consider investing in blue-chip companies or growth sectors like technology. Research is crucial when investing in individual stocks. Real Estate (5%-10%):  Consider investing in REITs (Real Estate Investment Trusts) which provide exposure to the real estate market without the hassles of property ownership. Where to Invest: Brokerage Accounts: Choose a reputable online broker offering research tools and low fees. Consider brokers like Fidelity, Vanguard, or Charles Schwab. Roth IRA/Roth 401(k): Utilize these tax-advantaged accounts for long-term growth and tax-free withdrawals in retirement. Percentage Allocation: Allocate between 40% and 60% of your investable assets towards these growth-oriented investments. This range allows for flexibility based on your comfort level and market conditions. Conservative Investments (Minimum 40% - Maximum 60%): Target: Prioritize safety and capital preservation with lower risk. How to Invest: Bonds (20%-30%): Invest in government or corporate bonds with varying maturities to match your time horizon. Bonds provide income and stability, especially in times of market volatility. Cash (10%-20%): Maintain a cash reserve in high-yield savings accounts or short-term CDs for emergencies and upcoming expenses.  Cash provides liquidity and peace of mind. Where to Invest: Brokerage Accounts: Invest in bond mutual funds, ETFs, or individual bonds. Cash Accounts (10%-20%): Utilize high-yield savings accounts or short-term CDs offered by banks or credit unions. Percentage Allocation: Allocate between 40% and 60% of your investable assets towards these conservative investments. This range ensures a balance between growth and security. Time Horizon and Expected Returns: Time Horizon: As a moderate investor, your time horizon is likely long-term, aiming for returns over 5-10 years or more. Minimum Expected Annual Return: 4% - 6% Maximum Expected Annual Return: 8% - 10% Compounded Returns: The power of compounding works in your favor over the long term. With a 6% average annual return, a $10,000 investment could grow to approximately $17,908 in 10 years. Minimum Expected Growth in Dollars: $4,000 - $6,000 (over 10 years) Maximum Expected Growth in Dollars: $8,000 - $10,000 (over 10 years) Rationale for Investment Suggestions: This investment strategy balances growth potential with risk management. The allocation towards growth-oriented investments allows for potential capital appreciation over time, while the allocation towards conservative investments provides stability and safeguards your principal. Important Considerations: Regular Review: Periodically review your portfolio and adjust your allocation as needed based on market conditions, your risk tolerance, and your financial goals. Professional Advice: Consider seeking advice from a qualified financial advisor who can provide personalized guidance and help you develop a comprehensive financial plan. Inflation Adjusted Returns: (assuming a US inflation rate of 3% annually) $10,000 Investment After 3 Years:      Before Inflation: $11,910      After Inflation: $11,537 $10,000 Investment After 5 Years:      Before Inflation: $13,382      After Inflation: $12,763 $10,000 Investment After 10 Years:      Before Inflation: $17,908      After Inflation: $14,974 Disclaimer: This information is for educational purposes only and should not be considered financial advice. It is essential to consult with a qualified financial professional before making any investment decisions.
            </p>

        </>
    )
}