import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { BostonTableHead } from "./OrderStyled";
import TransactionForm from "./TransactionForm";
import { investmentForm } from "./OrderConst";
import { useLocation, useParams } from "react-router-dom";
import { navigatorPath } from "../../MenuBar/constant/TopBarConst";
import ClientOrderList from "./ClientOrderList";
import {
  getClientOrderList,
  getPriceOfUnit,
  placeOrder,
} from "../../api/apiServiece";
import {
  assets,
  companies,
  markets,
} from "../../analysis/stockAnalysis/constants";
import BostonLoader from "../../resusedComponents/BostonLoader";
import { updateKeyOfArray } from "../assetsSummary/Constants";

const ClientOrder = () => {
  const [investmentList, setInvestmentList] = useState([]);
  const [realEstateList, setRealEstateList] = useState([]);
  const [formData, setFormData] = useState(investmentForm);
  const [alertMsg, setAlertMsg] = useState({
    msg: "",
    severity: "",
  });
  // const [selectedClient, setSelectedClient] = useState({});
  const [stockMarket, setStockMarket] = useState(markets);
  const [stockCompany, setStockCompany] = useState(companies);
  const [assetClasses, setAssetClasses] = useState(assets);
  const [selectedMarket, setSelectedMarket] = useState(null);
  const [selectedAssetClass, setSelectedAssetClass] = useState(null);
  const [selectedOwnership, setSelectedOwnership] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [showLoader, setShowLoader] = useState(false);
  const selectedClient = JSON?.parse?.(localStorage?.getItem?.("clients"));
  const { id } = useParams();

  useEffect(() => {
    getInvestmentList();
  }, []);

  const getInvestmentList = async () => {
    let payload = {
      client_id: id,
    };
    setShowLoader(true);
    const resp = await getClientOrderList(payload, "application/json");
    console.log("respp", resp);
    if (resp.status === 200) {
      setShowLoader(false);

      let updatedArr = updateKeyOfArray(resp?.data?.transaction_data);

      let filteredInvestmentList = updatedArr?.filter(
        (item) =>
          item?.assetClass?.toLowerCase() !== "Real Estate"?.toLowerCase()
      );

      let filteredRealEstateList = updatedArr?.filter(
        (item) =>
          item?.assetClass?.toLowerCase() === "Real Estate"?.toLowerCase()
      );
      setInvestmentList(filteredInvestmentList);
      setRealEstateList(filteredRealEstateList);
    }
  };

  return (
    <div className="mb-5 mt-5">
      {showLoader && <BostonLoader />}
      <TransactionForm
        formData={formData}
        setFormData={setFormData}
        selectedAssetClass={selectedAssetClass}
        selectedCompany={selectedCompany}
        showLoader={showLoader}
        alertMsg={alertMsg}
        setAlertMsg={setAlertMsg}
        stockMarket={stockMarket}
        setSelectedMarket={setSelectedMarket}
        assetClasses={assetClasses}
        setSelectedAssetClass={setSelectedAssetClass}
        stockCompany={stockCompany}
        setSelectedCompany={setSelectedCompany}
        selectedClient={selectedClient}
        selectedMarket={selectedMarket}
        setShowLoader={setShowLoader}
        getInvestmentList={getInvestmentList}
        setSelectedOwnership={setSelectedOwnership}
        selectedOwnership={selectedOwnership}
      />
      <ClientOrderList
        investmentList={investmentList}
        realEstateList={realEstateList}
      />
    </div>
  );
};

export default ClientOrder;
