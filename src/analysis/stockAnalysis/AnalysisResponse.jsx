import { CompanyDetails } from "./constants";

export const AnalysisResponse = ({
  companyInfo,
  selectedCompany,
  htmlResponse,
  topNews,
  graphUrl,
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
      {topNews?.length > 0 && (
        <>
          <h3 style={{ textAlign: "start" }} className="mt-5 mb-3">
            Top News
          </h3>
          {topNews?.map((item, index) => {
            return (
              <div style={{ textAlign: "start", margin: 0 }}>
                <p>
                  {index + 1}. {item?.title}:
                </p>
                <a href={item?.link} rel="noreferrer" target="_blank">
                  {item?.link}
                </a>
                <br />
                <br />
              </div>
            );
          })}
        </>
      )}

      {/* <iframe
        title="chart"
        src={graphUrl}
        width="80%"
        height="400"
        frameborder="0"
      ></iframe> */}
    </>
  );
};
