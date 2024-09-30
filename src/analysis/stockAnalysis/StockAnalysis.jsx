import {
  Button,
  FormControl,
  FormLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextareaAutosize,
} from "@mui/material";
import SearchableDropdown from "../../resusedComponents/SearchableDropdown";
import { Textarea } from "../../resusedComponents/constant/ResusableConst";
import { useEffect, useState } from "react";
import { generateStockAnalysis } from "../../api/apiServiece";
import BostonLoader from "../../resusedComponents/BostonLoader";
import { BostonAlertMessage } from "../../resusedComponents/BostonAlertMessage";

const country = [
  { label: "India" },
  { label: "US" },
  { label: "UK" },
  { label: "Japan" },
];

const market = [
  { label: "Dow Jones" },
  { label: "NASDAQ" },
  { label: "S&P 500" },
];

const companies = [
  { label: "Tesla", ticker: "TSLA" },
  { label: "NVIDIA Corporation", ticker: "NVDA" },
  { label: "Apple", ticker: "AAPL" },
];

export const StockAnalysis = () => {
  //   const [stockMarket,setStockMarket] = useState([])
  //   const [stockCompany,setStockCompany] = useState([])
  const [htmlResponse, setHtmlResponse] = useState("");
  const [selectedTicker, setSelectedTicker] = useState({});
  const [query, setQuery] = useState("");
  const [companyData, setCompanyData] = useState({});
  const [topNews, setTopNews] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [alertMsg, setAlertMsg] = useState({
    msg: "",
    severity: "",
  });

  const handleChange = (event, newValue) => {
    // console.log("newValue",newValue?.ticker,event);
    setSelectedTicker(newValue);
    // add logic
  };

  const handleQuery = (e) => {
    setQuery(e?.target?.value);
  };

  const handleStockAnalysis = async () => {
    setShowLoader(true);
    let payload = {
      ticker: selectedTicker?.ticker,
      query: query,
    };
    const resp = await generateStockAnalysis(
      payload, //  payload
      "application/json"
    );
    console.log("RESPONSEE", resp?.data?.analysis, payload);

    // const topNewsArray = resp?.data?.news.split("\n\n")?.map((newsItem)=>{
    // const [title, link] = newsItem.split(" - ");
    //   return(
    //     {
    //       title: title.trim(),
    // link: link.trim(),
    //   }
    //   )
    // })

    if (resp?.status === 200) {
      setShowLoader(false);
      setAlertMsg({
        msg: "Stock Analysis Generated Successfully",
        severity: "success",
      });
      setTopNews(resp?.data?.news);
      setHtmlResponse(resp?.data?.analysis);
      setCompanyData(resp?.data?.data);
    } else {
      setShowLoader(false);
      setAlertMsg({ msg: resp.data?.message, severity: "error" });
    }
  };

  // useEffect(()=>{

  // },[])

  return (
    <div style={{ margin: "1rem 8rem" }}>
      <BostonAlertMessage alertMsg={alertMsg} setAlertMsg={setAlertMsg} />
      {showLoader && <BostonLoader />}
      {/* <div className="d-flex">
        <SearchableDropdown label="Select Country" options={country} />
        <p style={{ transform: "translateY(10px)", marginLeft: "10px" }}>
          Time
        </p>
      </div> */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="mt-5">
          <SearchableDropdown
            width={400}
            label={"Select Stock Market"}
            options={market}
          />
        </div>
        <div className="mt-5 mb-3">
          <SearchableDropdown
            width={400}
            label={"Select Company"}
            options={companies}
            handleChange={handleChange}
          />
        </div>
      </div>
      <FormControl className="d-flex mt-4">
        {/* <FormLabel htmlFor="max-height-textarea" sx={{ mb: 1 }}>
          Query
        </FormLabel> */}
        <Textarea
          minRows={3}
          maxRows={6}
          aria-label="maximum height"
          placeholder="Add Query"
          onChange={(e) => handleQuery(e)}
        />
      </FormControl>

      <Button
        className="mt-5 mb-5"
        variant="contained"
        onClick={() => handleStockAnalysis()}
      >
        Generate Stock Analysis
      </Button>

      {Object.keys(companyData).length > 0 && (
        <>
          <h3 className="mb-4" style={{ textAlign: "start" }}>
            {selectedTicker?.label}'s Information:
          </h3>
          <TableContainer component={Paper}>
            <Table
            //        sx={{
            //    border: 1, borderCollapse: "collapse",
            //   width: "auto",
            // }}
            >
              <TableHead sx={{ width: "5rem" }}>
                <TableRow>
                  <TableCell style={{ width: "30%" }}>
                    <strong>Company Details</strong>
                  </TableCell>
                  <TableCell style={{ width: "50%", textAlign: "center" }}>
                    <strong>Values</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody
              //  sx={{
              //   border:1, borderCollapse: "collapse",
              //       // th: { border: 1,color: "gray" },
              //       width: "auto",
              //     }}
              >
                <TableRow>
                  <TableCell style={{ width: "30%" }}>
                    <strong>Company Description</strong>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    {companyData?.Company_Details}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ width: "30%" }}>
                    <strong>Market Cap</strong>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    ${companyData?.Market_Cap?.toLocaleString()}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ width: "30%" }}>
                    <strong>P/E Ratio</strong>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    {companyData?.PE_Ratio}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell style={{ width: "30%" }}>
                    <strong>Earnings Per Share (EPS)</strong>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    {companyData?.EPS}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ width: "30%" }}>
                    <strong> Book Value</strong>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    {companyData?.Book_Value}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ width: "30%" }}>
                    <strong>Return On Equity (ROE)</strong>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    {companyData?.ROE}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ width: "30%" }}>
                    <strong>Return On Capital Employed (ROCE)</strong>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    {companyData?.ROCE}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ width: "30%" }}>
                    <strong>Earnings Growth</strong>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    {companyData?.Earnings_Growth}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ width: "30%" }}>
                    <strong>Revenue Growth</strong>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    {companyData?.Revenue_Growth}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ width: "30%" }}>
                    <strong>Previous Closing Price</strong>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    ${companyData?.Previous_Closing_Price}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ width: "30%" }}>
                    <strong>Sector</strong>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    {companyData?.Sector}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ width: "30%" }}>
                    <strong>Today's Dividends</strong>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    ${companyData?.Today_Dividends}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ width: "30%" }}>
                    <strong>Today's High Price</strong>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    ${companyData?.Today_High_Price}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ width: "30%" }}>
                    <strong>Today's Low Price</strong>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    ${companyData?.Today_Low_Price}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ width: "30%" }}>
                    <strong>Today's Opening Price</strong>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    ${companyData?.Today_Opening_Price}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ width: "30%" }}>
                    <strong>Today's Stock Splits</strong>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    {companyData?.Today_Stock_Splits}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ width: "30%" }}>
                    <strong>Today's Volume</strong>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    {companyData?.Today_Volume?.toLocaleString()}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ width: "30%" }}>
                    <strong>Today's Closing Price</strong>
                  </TableCell>
                  <TableCell style={{ width: "50%" }}>
                    ${companyData?.Todays_Closing_Price}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}

      <div
        className="mt-5"
        style={{ textAlign: "start" }}
        dangerouslySetInnerHTML={{
          __html: htmlResponse,
        }}
      />
    </div>
  );
};
