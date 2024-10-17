import React from "react";
import { Typography } from "@mui/material";
import BostonTabs from "../../resusedComponents/BostonTabs";
import { FinancialInstrument } from "./orderListTabs/FinancialInstrument";
import { RealEstate } from "./orderListTabs/RealEstate";

const ClientOrderList = ({ investmentList, realEstateList }) => {
  return (
    <div className="mb-5">
      <Typography variant="h4" sx={{ textAlign: "center", margin: "2rem 0" }}>
        Order History
      </Typography>
      <BostonTabs tabList={["Financial Instruments", "Real Estate"]}>
        <FinancialInstrument investmentList={investmentList} />
        {/* ---------------------Change below array or code (RealEstate)-------------------- */}
        <RealEstate realEstateList={realEstateList} />
      </BostonTabs>
    </div>
  );
};

export default ClientOrderList;
