import "./App.css";
import "./OverrideStyled.css";
import { Routes, Route, useLocation, useParams } from "react-router-dom";
import Dashboard from "./dashboard";
import TopBar from "./MenuBar/TopBar";
import { FinancialForm } from "./financialForm/FinancialForm";
import InvestmentPersonality from "./investorAssessment/InvestmentPersonality";
import { navigatorPath } from "./MenuBar/constant/TopBarConst";
import { AssetsLiabilityChart } from "./assetsLiabilityChart/AssetsLiabilityCharts";
import { AdvisorAnalysis } from "./analysis/advisorAnalysis/AdvisorAnalysis";
import { StockAnalysis } from "./analysis/stockAnalysis/StockAnalysis";
import { TaxAnalysis } from "./analysis/taxAnalysis/TaxAnalysis";
import TransactionForm from "./clients/order/TransactionForm";
import { AppBar } from "@mui/material";
import SubTopBar from "./MenuBar/SubTopBar";
import { useEffect, useState } from "react";
import ClientSummary from "./dashboard/Summary/ClientSummary";
import AssetsSummary from "./clients/assetsSummary/AssetsSummary";
import ClientOrder from "./clients/order/ClientOrder";
import PortfolioDetails from "./clients/portfolio/PortfolioDetails";

function App() {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const location = useLocation();
  console.log(
    "isSubMenuOpen",
    isSubMenuOpen,
    location.pathname.startsWith("/client")
  );

  useEffect(() => {
    // Hide submenu when route changes and it's not the portfolio route
    if (location.pathname.startsWith("/client")) {
      setIsSubMenuOpen(true);
    } else {
      setIsSubMenuOpen(false);
    }
  }, [location]);

  return (
    <div className="App">
      <AppBar
        style={{
          background: "#ffff",
          boxShadow: "0px 2px 4px -1px,  #002a4a, 0px 4px 5px 0px",
        }}
      >
        <TopBar />
        {isSubMenuOpen && <SubTopBar />}
      </AppBar>

      <div style={{ padding: isSubMenuOpen ? "10rem 5rem" : "8rem 5rem" }}>
        <Routes>
          <Route path={navigatorPath.dashboard} element={<ClientSummary />} />
          <Route
            path={navigatorPath.financialForm}
            element={<FinancialForm />}
          />
          <Route path="/financialForm/:id" element={<FinancialForm />} />
          <Route
            path={navigatorPath.assetsLiabilityDetails}
            element={<AssetsLiabilityChart />}
          />
          <Route
            path={navigatorPath.InvestmentPersonality}
            element={<InvestmentPersonality />}
          />
          <Route
            path={navigatorPath.advisorAnalysis}
            element={<AdvisorAnalysis />}
          />
          <Route
            path={navigatorPath.stockAnalysis}
            element={<StockAnalysis />}
          />
          <Route path={navigatorPath.taxAnalysis} element={<TaxAnalysis />} />
          <Route
            path={navigatorPath.transaction}
            element={<TransactionForm />}
          />
          <Route path="client/summary/:id" element={<AssetsSummary />} />
          <Route path="client/orders/:id" element={<ClientOrder />} />
          <Route path="client/portfolio/:id" element={<PortfolioDetails />} />
          {/* <Route path={navigatorPath.summary} element={<AssetsSummary />} />
          <Route path={navigatorPath.orders} element={<ClientOrder />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
