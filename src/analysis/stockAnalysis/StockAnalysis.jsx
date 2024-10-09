import { Button, FormControl } from "@mui/material";
import SearchableDropdown from "../../resusedComponents/SearchableDropdown";
import { Textarea } from "../../resusedComponents/constant/ResusableConst";
import { useEffect, useState } from "react";
import { generateStockAnalysis } from "../../api/apiServiece";
import BostonLoader from "../../resusedComponents/BostonLoader";
import { BostonAlertMessage } from "../../resusedComponents/BostonAlertMessage";
import { BostonSearch } from "../../resusedComponents/BostonSearch";
import { companies, CompanyDetails, markets } from "./constants";
import { AnalysisResponse } from "./AnalysisResponse";
import { StockSelection } from "./StockSelection";

export const StockAnalysis = () => {
  const [stockMarket, setStockMarket] = useState(markets);
  const [stockCompany, setStockCompany] = useState(companies);
  const [htmlResponse, setHtmlResponse] = useState("");
  const [selectedCompany, setSelectedCompany] = useState({});
  const [selectedMarket, setSelectedMarket] = useState({});
  const [query, setQuery] = useState("");
  const [companyInfo, setCompanyInfo] = useState({});
  const [topNews, setTopNews] = useState([]);
  const [graphUrl, setGraphUrl] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [stockOption, setStockOption] = useState("");
  const [alertMsg, setAlertMsg] = useState({
    msg: "",
    severity: "",
  });

  //   const newsString = `"1. Jamie Dimon cosigns Elon Musk's plans to slash federal spending: 'We really need to do it' -
  // https://qz.com/jamie-dimon-elon-musk-doge-federal-spending-trump-tesla-1851656899\n\n2.
  // Trump says Elon Musk is way too busy for a White House cabinet gig — but could consult on AI -
  // https://qz.com/elon-musk-donald-trump-cabinet-tesla-ai-spacex-1851631204\n\n3.
  // Trump says Elon Musk is too busy for the White House, and the highest-paid CEOs: Leadership news roundup -
  // https://qz.com/donald-trump-elon-musk-white-house-1851637054"`;

  const handleQuery = (e) => {
    setQuery(e?.target?.value);
  };

  const handleStockAnalysis = async () => {
    setShowLoader(true);
    let payload = {
      ticker: selectedCompany?.ticker,
      query: query,
      company: selectedCompany.label,
    };
    const resp = await generateStockAnalysis(
      payload, //  payload
      "application/json"
    );

    // const topNewsArray = resp?.data?.news.split("\n\n")?.map((newsItem)=>{
    // const [title, link] = newsItem.split(" - ");
    //   return(
    //     {
    //       title: title?.trim(),
    // link: link?.trim(),
    //   }
    //   )
    // })

    if (resp?.status === 200) {
      setShowLoader(false);
      setAlertMsg({
        msg: "Stock Analysis Generated Successfully",
        severity: "success",
      });

      // const newsArray = newsString
      //   .split("\n\n")
      //   .map((newsItem) => newsItem.trim());

      // console.log(newsArray, "newsArray");

      const news = resp?.data?.news;
      const entries = news?.split?.(/\n\n/);

      let arrList = [];
      entries?.map?.((item) => {
        // Remove leading number and special characters
        const cleanedItem = item
          ?.replace(/^\d+\.\s*/g, "") // Remove leading number and space
          ?.replace(/\\\"/g, "") // Remove backslash and quotation
          ?.trim(); // Trim whitespace

        // Split by " -" which separates the title from the link
        const parts = cleanedItem?.split?.(/\s-\s*/); // Split by ' - ' (space, hyphen, space)
        let arr = {
          title: parts[0]?.trim(), // Trim any extra whitespace from the title
          link: parts[1]?.trim(), // Trim any extra whitespace from the link
        };
        arrList?.push(arr);
      });

      setTopNews(arrList);

      // setNewsEntries(arrList);
      console.log("arrList", arrList);

      // setTopNews(resp?.data?.news);
      setHtmlResponse(resp?.data?.analysis);
      setCompanyInfo(resp?.data?.data);
      setGraphUrl(resp?.data?.graph_url);
    } else {
      setShowLoader(false);
      setAlertMsg({ msg: resp.data?.message, severity: "error" });
    }
  };

  return (
    <div style={{ margin: "1rem 8rem" }}>
      <BostonAlertMessage alertMsg={alertMsg} setAlertMsg={setAlertMsg} />
      {showLoader && <BostonLoader />}

      <StockSelection
        stockOption={stockOption}
        setSelectedMarket={setSelectedMarket}
        setSelectedCompany={setSelectedCompany}
        setQuery={setQuery}
        setStockOption={setStockOption}
      />

      {stockOption === "stockAnalysis" && (
        <div className="row mt-5 mb-5">
          <div className="col-5 xs-12 md-5">
            {/* <SearchableDropdown
            width={400}
            label={"Select Stock Market"}
            options={markets}
          /> */}
            <BostonSearch
              label="Stock Market"
              listArray={stockMarket}
              filterFields={["label"]}
              setSelectedObj={setSelectedMarket}
              primaryValue="label"
              secondaryName="Ticker"
              width={100}
            />
          </div>
          <div className="col-2 md-2"></div>
          <div className="col-5 xs-12 md-5">
            {/* <SearchableDropdown
            width={400}
            label={"Select Company"}
            options={companies}
            handleChange={handleChange}
          /> */}
            <BostonSearch
              label="Company"
              listArray={stockCompany}
              filterFields={["label", "ticker"]}
              setSelectedObj={setSelectedCompany}
              primaryValue="label"
              secondary={"ticker"}
              secondaryName="Ticker"
              width={100}
            />
          </div>
        </div>
      )}

      {stockOption === "stockQuery" && (
        <FormControl className="d-flex mt-4">
          <Textarea
            minRows={3}
            maxRows={6}
            aria-label="maximum height"
            placeholder="Add Query"
            onChange={(e) => handleQuery(e)}
          />
        </FormControl>
      )}

      <Button
        className="mt-5 mb-5"
        variant="contained"
        onClick={() => handleStockAnalysis()}
        disabled={(!selectedCompany?.label || !selectedMarket?.label) && !query}
      >
        Generate Stock Analysis
      </Button>

      <AnalysisResponse
        companyInfo={companyInfo}
        selectedCompany={selectedCompany}
        htmlResponse={htmlResponse}
        topNews={topNews}
        graphUrl={graphUrl}
      />
    </div>
  );
};
