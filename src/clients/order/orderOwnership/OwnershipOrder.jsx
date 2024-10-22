import { TextField } from "@mui/material";
import { ownershipType } from "../../../analysis/stockAnalysis/constants";
import { useState } from "react";
import DirectOwnership from "./orderOwnershipForm/DirectOwnership";
import { DividendForm } from "./orderOwnershipForm/DividendForm";

export const OwnershipOrder = ({
  selectedOwnership,
  formData,
  setFormData,
}) => {
  console.log("selectedAssetClass?.isChangeUI in child", selectedOwnership);

  return (
    <div>
      {(selectedOwnership?.type === ownershipType?.reit ||
        selectedOwnership?.type === ownershipType?.commercial) && (
        <DividendForm
          selectedOwnership={selectedOwnership}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {selectedOwnership?.type === ownershipType?.direct && (
        <DirectOwnership formData={formData} setFormData={setFormData} />
      )}
    </div>
  );
};
