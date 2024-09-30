import { SummaryContainer } from "./ClientSummaryStyled";
import { BostonPaginationElement } from "../../resusedComponents/BostonPaginationElement";
import { TextField } from "@mui/material";
import { ClientSummaryTable } from "./ClientSummaryTable";
import { useEffect, useState } from "react";

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
  const [summaryDataList, setSummaryDataList] = useState([]);
  const [originalList, setOriginalList] = useState([]);

  useEffect(() => {
    const savedSummaryList =
      JSON?.parse?.(localStorage?.getItem?.("financialForm")) || [];
    setOriginalList(savedSummaryList); // Store original list
    setSummaryDataList(savedSummaryList); // Store list to display
  }, []);

  const handleSearch = (event) => {
    const { value } = event.target;

    if (value) {
      const filtered = originalList?.filter(
        (client) =>
          client?.clientDetail?.clientName
            ?.toLowerCase()
            ?.includes(value.toLowerCase()) ||
          client?.uniqueId?.toLowerCase()?.includes(value.toLowerCase())
      );
      setSummaryDataList(filtered);
    } else {
      setSummaryDataList(originalList); // Restore original list if input is empty
    }
  };

  return (
    <SummaryContainer>
      <div className="d-flex justify-content-end" component="main">
        <TextField size="small" placeholder="Search" onChange={handleSearch} />
      </div>
      <ClientSummaryTable summaryData={summaryDataList} />
      {/* <BostonPaginationElement /> */}
    </SummaryContainer>
  );
};

export default ClientSummary;
