export const investmentForm = {
  assetClass: "",
  name: "",
  units: 0,
  pricePerUnit: 0,
  transactionType: "buy",
  //   transactionAmount: "",
  date: "",
  market: "",
  dividendYield: 0,
};

export const isSubmitDisabled = (
  selectedOwnership,
  ownershipType,
  formData,
  selectedAssetClass,
  selectedCompany
) => {
  switch (selectedOwnership?.type) {
    case ownershipType?.reit:
      return (
        !formData.investmentAmount ||
        !selectedAssetClass?.label ||
        !selectedOwnership?.label ||
        !selectedCompany?.label
      );

    case ownershipType?.commercial:
      return (
        !formData.investmentAmount ||
        !selectedAssetClass?.label ||
        !selectedOwnership?.label ||
        !selectedCompany?.label
      );

    case ownershipType?.direct:
      return (
        !formData.vacancyRate ||
        !formData.capEx ||
        !formData.capRateValuation ||
        !formData.currentMarketValue ||
        !formData.propertyManageFees ||
        !formData.maintenanceRepairs ||
        !formData.propertyTaxes ||
        !formData.insurance ||
        !formData.utilities ||
        !selectedAssetClass?.label ||
        !selectedOwnership?.label ||
        !selectedCompany?.label
      );

    default:
      return (
        // !selectedMarket?.label ||
        !selectedAssetClass?.label ||
        !selectedCompany?.label ||
        !formData?.transactionType ||
        !formData?.units
        // || !formData?.pricePerUnit
      );
  }
};

export const resetOrderForm = (
  setFormData,
  setSelectedCompany,
  setSelectedMarket,
  setSelectedAssetClass,
  setSelectedOwnership,
  setNameSearch,
  setOwnershipSearch,
  setMarketSearch,
  setAssetSearch,
  isAssetReset = true
) => {
  if (isAssetReset) {
    setSelectedAssetClass({});
    setAssetSearch("");
  }
  setFormData(investmentForm);
  setSelectedCompany({});
  setSelectedMarket({});
  setSelectedOwnership({});
  setNameSearch("");
  setOwnershipSearch("");
  setMarketSearch("");
};
