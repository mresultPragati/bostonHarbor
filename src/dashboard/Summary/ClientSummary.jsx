import { SummaryContainer } from "./ClientSummaryStyled";
import { BostonPaginationElement } from "../../resusedComponents/BostonPaginationElement";
import { TextField } from "@mui/material";
import { ClientSummaryTable } from "./ClientSummaryTable";

const summaryData = [
  {
    cName: "Test XYZ",
    MobileNo: "8822114450",
    investorType: "-",
    RegDate: "2/8/2024",
  },
  {
    cName: "Test2 ABC",
    MobileNo: "8822114450",
    investorType: "-",
    RegDate: "9/7/2024",
  },
];
const ClientSummary = () => {
  return (
    <SummaryContainer>
      <div className="d-flex justify-content-end" component="main">
        <TextField size="small" placeholder="Search" />
      </div>
      <ClientSummaryTable summaryData={summaryData} />
      {/* <BostonPaginationElement /> */}
    </SummaryContainer>
  );
};

export default ClientSummary;
