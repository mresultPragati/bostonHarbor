import { CompanyDetails } from "./constants";

export const AnalysisResponse = ({
  companyInfo,
  selectedCompany,
  htmlResponse,
  topNews,
}) => {
  return (
    <>
      {CompanyDetails(companyInfo, selectedCompany)}

      <div
        className="mt-5"
        style={{ textAlign: "start" }}
        dangerouslySetInnerHTML={{
          __html: htmlResponse,
        }}
      />

      {/* {topNews?.map((item, index) => {
        return (
          <div style={{ textAlign: "start" }}>
            <p>
              {index + 1}. {item?.title}
            </p>
            <a href={item?.link}>{item?.link}</a>
            <br />
            <br />
          </div>
        );
      })} */}

      {/* <iframe
        title="chart"
        src="https://finance.yahoo.com/chart/TSLA"
        width="80%"
        height="400"
        frameborder="0"
      ></iframe> */}
    </>
  );
};
